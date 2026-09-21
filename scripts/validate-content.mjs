import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import matter from "gray-matter";
export const categoryIds = [
  "planning",
  "data",
  "development",
  "deployment",
  "design",
  "business",
];
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
const sectionNames = {
  en: [
    "Concept",
    "When you need it",
    "Example",
    "Options and tradeoffs",
    "When to choose it",
    "AI instructions",
    "Related reading and sources",
  ],
  ko: [
    "개념",
    "필요한 상황",
    "예시",
    "선택지와 tradeoff",
    "추천 조건",
    "AI 지시 예시",
    "관련 글과 출처",
  ],
  ja: [
    "概念",
    "必要な場面",
    "実例",
    "選択肢とトレードオフ",
    "選ぶ条件",
    "AIへの指示例",
    "関連記事と出典",
  ],
};
export function readArticles(root = "src/content/articles") {
  return readdirSync(root, { recursive: true })
    .filter((p) => p.endsWith(".md"))
    .map((file) => ({
      file,
      ...matter(readFileSync(`${root}/${file}`, "utf8")),
    }));
}
export function validateArticles(articles) {
  const errors = [];
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
    if (!examples.includes(d.example))
      errors.push(`${a.file}: unknown example`);
    if (a.file !== `${key}.md`)
      errors.push(`${a.file}: path must equal ${key}.md`);
    for (const name of ["title", "summary", "aiPrompt"]) {
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
    const headings = [...a.content.matchAll(/^## (.+)$/gm)].map((m) => m[1]);
    if (JSON.stringify(headings) !== JSON.stringify(sectionNames[d.lang]))
      errors.push(`${key}: sections missing or out of order`);
    if (!a.content.includes("```"))
      errors.push(`${key}: missing textual/code example`);
    if (!/\]\(https:\/\//.test(a.content))
      errors.push(`${key}: missing official source`);
    if (!a.content.includes(d.aiPrompt))
      errors.push(`${key}: body and copy prompt differ`);
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
        /\]\(\/(en|ko|ja)\/catalog\/([a-z0-9-]+)\/\)/g,
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
