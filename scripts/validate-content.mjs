import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import matter from "gray-matter";
import { validateDesigns } from "./design-registry.mjs";
import { articleOverviewSeconds } from "../src/lib/reading-budget.mjs";
import { readingBudgets } from "../src/lib/article-format.mjs";
import {
  taxonomy,
  candidates,
  conceptSections,
  comparisonKeys,
  validateCatalog,
} from "./catalog-data.mjs";
export const categoryIds = taxonomy.map((c) => c.id);
export const examples = [
  "spec",
  "objects",
  "layers",
  "decision",
  "collections",
  "tools",
  "generators",
  "shipping",
  "layout",
  "theme",
  "revenue",
  "payments",
];
const sectionNames = conceptSections;
export function readArticles(root = "src/content/articles") {
  return readdirSync(root, { recursive: true })
    .filter((p) => p.endsWith(".md"))
    .map((file) => ({
      file,
      ...matter(readFileSync(`${root}/${file}`, "utf8")),
    }));
}
export function validateArticles(articles) {
  const errors = [
    ...validateCatalog(taxonomy, candidates, articles),
    ...validateDesigns(articles, undefined, undefined, {
      thumbnails: process.env.DESIGN_CAPTURE !== "1",
    }),
  ];
  const keys = new Set();
  const byKey = new Map();
  for (const a of articles) {
    const d = a.data;
    const key = `${d.lang}/${d.articleId}`;
    if (keys.has(key)) errors.push(`${a.file}: duplicate ID/language ${key}`);
    keys.add(key);
    byKey.set(key, a);
    if (!/^[a-z0-9-]+$/.test(d.articleId ?? ""))
      errors.push(`${a.file}: invalid article ID`);
    if (!sectionNames[d.lang]) errors.push(`${a.file}: invalid language`);
    if (!["draft", "published"].includes(d.status))
      errors.push(`${a.file}: invalid status`);
    if (!categoryIds.includes(d.category))
      errors.push(`${a.file}: unknown category`);
    if (
      (d.kind === "guide" || d.example !== undefined) &&
      !examples.includes(d.example)
    )
      errors.push(`${a.file}: unknown example`);
    if (a.file !== `${key}.md`)
      errors.push(`${a.file}: path must equal ${key}.md`);
    if (!["guide", "concept"].includes(d.kind))
      errors.push(`${key}: invalid kind`);
    if (d.kind === "concept" && taxonomy.some((c) => c.parent === d.category))
      errors.push(`${key}: concept requires leaf category`);
    for (const name of [
      "title",
      "summary",
      ...(d.kind === "guide" ? ["aiPrompt"] : []),
    ]) {
      if (typeof d[name] !== "string" || !d[name].trim())
        errors.push(`${key}: missing ${name}`);
    }
    for (const name of ["aliases", "related"]) {
      if (
        !Array.isArray(d[name]) ||
        !d[name].length ||
        d[name].some((v) => typeof v !== "string" || !v.trim())
      )
        errors.push(`${key}: missing/invalid ${name}`);
    }
    for (const name of ["revision", "sourceRevision"]) {
      if (!Number.isInteger(d[name]) || d[name] < 1)
        errors.push(`${key}: invalid ${name}`);
    }
    for (const name of ["updated", ...(d.checked ? ["checked"] : [])]) {
      if (
        typeof d[name] !== "string" ||
        !/^\d{4}-\d{2}-\d{2}$/.test(d[name]) ||
        Number.isNaN(Date.parse(d[name])) ||
        new Date(d[name]).toISOString().slice(0, 10) !== d[name]
      )
        errors.push(`${key}: invalid ${name} date`);
    }
    if (d.status !== "published") continue;
    const budget = readingBudgets[d.kind];
    const seconds = articleOverviewSeconds(a);
    if (budget && (seconds < budget.min || seconds > budget.max))
      errors.push(
        `${key}: ${d.kind} reading budget is ${budget.min}-${budget.max}s; got ${seconds}s`,
      );
    if (d.kind === "concept") {
      for (const field of comparisonKeys)
        if (
          typeof d.comparison?.[field] !== "string" ||
          !d.comparison[field].trim() ||
          /TODO/.test(d.comparison[field])
        )
          errors.push(`${key}: missing comparison ${field}`);
      if (/\bTODO\b/.test(a.content) || d.summary === "TODO")
        errors.push(`${key}: unfinished concept`);
    }
    const headings = [...a.content.matchAll(/^## (.+)$/gm)].map((m) => m[1]);
    if (
      JSON.stringify(headings) !==
      JSON.stringify(
        d.kind === "concept" ? conceptSections[d.lang] : sectionNames[d.lang],
      )
    )
      errors.push(`${key}: sections missing or out of order`);
    for (const heading of sectionNames[d.lang] ?? []) {
      if (!a.content.split(`## ${heading}\n`)[1]?.split(/^## /m)[0].trim())
        errors.push(`${key}: missing section content: ${heading}`);
    }
    if (!/\]\(https:\/\//.test(a.content))
      errors.push(`${key}: missing official source`);

    if (
      ["static-sites", "shipping", "revenue", "payments"].includes(
        d.articleId,
      ) &&
      !d.checked
    )
      errors.push(`${key}: missing service verification date`);
  }
  for (const a of articles) {
    const d = a.data;
    const en = byKey.get(`en/${d.articleId}`);
    if (!en) errors.push(`${a.file}: missing English original`);
    else {
      if (d.status === "published" && en.data.status !== "published")
        errors.push(`${a.file}: original is not published`);
      if (d.sourceRevision > en.data.revision)
        errors.push(`${a.file}: translation references future revision`);
      if (d.lang === "en" && d.sourceRevision !== d.revision)
        errors.push(`${a.file}: original revision mismatch`);
      if (
        d.kind !== en.data.kind ||
        d.category !== en.data.category ||
        d.example !== en.data.example ||
        JSON.stringify(d.related) !== JSON.stringify(en.data.related)
      )
        errors.push(`${a.file}: shared metadata differs from original`);
    }
    for (const id of d.related ?? []) {
      if (id === d.articleId) errors.push(`${a.file}: self reference`);
      const target = byKey.get(`en/${id}`);
      if (
        !target ||
        (d.status === "published" && target.data.status !== "published")
      )
        errors.push(`${a.file}: invalid related article ${id}`);
    }
    if (d.status === "published")
      for (const match of a.content.matchAll(
        /\]\(\/(en|ko|ja)\/(?:catalog|guides)\/([a-z0-9-]+)\/\)/g,
      )) {
        const target = byKey.get(`${match[1]}/${match[2]}`);
        if (!target || target.data.status !== "published")
          errors.push(`${a.file}: broken published article link ${match[0]}`);
      }
  }
  return errors;
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  const articles = readArticles();
  const errors = validateArticles(articles);
  if (errors.length) {
    console.error(errors.join("\n"));
    process.exitCode = 1;
  } else
    console.log(
      `Validated ${articles.length} articles (${articles.filter((a) => a.data.status === "published").length} published).`,
    );
}
