import { readFileSync } from "node:fs";
export const taxonomy = JSON.parse(
  readFileSync(new URL("../src/data/categories.json", import.meta.url)),
);
export const candidates = JSON.parse(
  readFileSync(new URL("../src/data/candidates.json", import.meta.url)),
);
export const conceptSections = {
  en: [
    "Definition",
    "Features and examples",
    "Advantages and limitations",
    "Comparison within the category",
    "Selection and combination conditions",
    "Related reading and sources",
  ],
  ko: [
    "정의",
    "특징과 예시",
    "장점과 제약",
    "같은 범주의 비교",
    "선택·조합 조건",
    "관련 글과 출처",
  ],
  ja: [
    "定義",
    "特徴と実例",
    "利点と制約",
    "同じ分類の比較",
    "選択・組み合わせ条件",
    "関連記事と出典",
  ],
};
export const comparisonKeys = [
  "features",
  "advantages",
  "limitations",
  "suitable",
  "combinations",
];
export function candidateStatus(candidate, articles, lang = "en") {
  const article = articles.find(
    (a) => a.data.articleId === candidate.id && a.data.lang === lang,
  );
  return article?.data.status ?? "planned";
}
export function validateCatalog(
  categories = taxonomy,
  queue = candidates,
  articles = [],
) {
  const errors = [];
  const ids = new Set();
  for (const c of categories) {
    if (ids.has(c.id)) errors.push(`duplicate category ID: ${c.id}`);
    ids.add(c.id);
    if (!/^[a-z0-9-]+$/.test(c.id) || !Number.isInteger(c.order))
      errors.push(`invalid category: ${c.id}`);
    for (const lang of ["en", "ko", "ja"])
      if (!c.names?.[lang]?.trim() || !c.descriptions?.[lang]?.trim())
        errors.push(`missing category translation: ${c.id}/${lang}`);
  }
  const byId = new Map(categories.map((c) => [c.id, c]));
  for (const c of categories) {
    const visited = new Set([c.id]);
    let parent = c.parent;
    while (parent !== null) {
      if (!byId.has(parent)) {
        errors.push(`missing parent: ${c.id}/${parent}`);
        break;
      }
      if (visited.has(parent)) {
        errors.push(`category cycle: ${c.id}`);
        break;
      }
      visited.add(parent);
      parent = byId.get(parent).parent;
    }
  }
  const candidateIds = new Set();
  for (const c of queue) {
    if (candidateIds.has(c.id)) errors.push(`duplicate candidate ID: ${c.id}`);
    candidateIds.add(c.id);
    if (
      !/^[a-z0-9-]+$/.test(c.id) ||
      !Number.isInteger(c.order) ||
      !c.scope?.trim()
    )
      errors.push(`invalid candidate: ${c.id}`);
    if (!ids.has(c.category) || categories.some((x) => x.parent === c.category))
      errors.push(`candidate requires leaf category: ${c.id}`);
    for (const lang of ["en", "ko", "ja"])
      if (!c.titles?.[lang]?.trim())
        errors.push(`missing candidate translation: ${c.id}/${lang}`);
    for (const id of c.compareWith ?? [])
      if (
        id === c.id ||
        !queue.some((x) => x.id === id && x.category === c.category)
      )
        errors.push(`invalid comparison peer: ${c.id}/${id}`);
    for (const id of c.relatedGuides ?? [])
      if (
        !articles.some(
          (a) =>
            a.data.articleId === id &&
            a.data.lang === "en" &&
            a.data.kind === "guide",
        )
      )
        errors.push(`invalid related guide: ${c.id}/${id}`);
    for (const a of articles.filter((a) => a.data.articleId === c.id))
      if (a.data.kind !== "concept" || a.data.category !== c.category)
        errors.push(`candidate ID collision: ${c.id}`);
  }
  return errors;
}
