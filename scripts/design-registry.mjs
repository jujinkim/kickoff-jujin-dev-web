import { readFileSync, existsSync } from "node:fs";
import { taxonomy } from "./catalog-data.mjs";
export const designRegistry = JSON.parse(
  readFileSync(new URL("../src/data/design-demos.json", import.meta.url)),
);
export function isDesignCategory(id) {
  const category = taxonomy.find((c) => c.id === id);
  return (
    category &&
    (category.id === "design" ||
      (category.parent && isDesignCategory(category.parent)))
  );
}
export function validateDesigns(
  articles,
  registry = designRegistry,
  exists = existsSync,
  { thumbnails = true } = {},
) {
  const errors = [];
  const ids = new Set(
    articles
      .filter(
        (a) =>
          a.data.kind === "concept" &&
          a.data.status === "published" &&
          isDesignCategory(a.data.category),
      )
      .map((a) => a.data.articleId),
  );
  for (const id of ids) {
    const entry = registry[id];
    if (!entry) {
      errors.push(`${id}: missing design demo registration`);
      continue;
    }
    if (
      !entry.component ||
      !exists(`src/components/demos/${entry.component}.astro`)
    )
      errors.push(`${id}: missing demo component`);
    else {
      const source = readFileSync(
        `src/components/demos/${entry.component}.astro`,
        "utf8",
      );
      if (
        !source.includes(`data-demo="${id}"`) ||
        !source.includes("data-reset") ||
        !/<script[\s>]/.test(source) ||
        /\bTODO\b/.test(source)
      )
        errors.push(`${id}: unfinished demo component contract`);
    }
    if (!entry.capture) errors.push(`${id}: missing capture selector`);
    for (const lang of ["en", "ko", "ja"]) {
      const article = articles.find(
        (a) => a.data.articleId === id && a.data.lang === lang,
      );
      const en = articles.find(
        (a) => a.data.articleId === id && a.data.lang === "en",
      );
      if (
        article?.data.status !== "published" ||
        article.data.sourceRevision !== en?.data.revision
      )
        errors.push(`${id}/${lang}: missing or stale published translation`);
      if (!entry.caption?.[lang]?.trim())
        errors.push(`${id}/${lang}: missing localized caption`);
      if (thumbnails && !exists(`public/thumbnails/${id}-${lang}.png`))
        errors.push(`${id}/${lang}: missing thumbnail`);
    }
  }
  return errors;
}
