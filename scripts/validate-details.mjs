import { existsSync, readdirSync, readFileSync } from "node:fs";
import matter from "gray-matter";
const retirements = JSON.parse(
  readFileSync(
    new URL("../src/data/catalog-retirements.json", import.meta.url),
  ),
);
export const needsDetails = ({ data }) =>
  data.status === "published" &&
  !retirements.articles[data.articleId] &&
  !retirements.categories[data.category];

export function readDetails(root = "src/content/article-details") {
  if (!existsSync(root)) return [];
  return readdirSync(root, { recursive: true })
    .filter((p) => p.endsWith(".md"))
    .map((file) => ({
      file,
      ...matter(readFileSync(`${root}/${file}`, "utf8")),
    }));
}

export function validateDetails(articles, details = readDetails()) {
  const errors = [];
  const headings = {
    en: ["Selection & comparison", "Applications", "Implementation & cautions"],
    ko: ["선택·비교", "응용 사례", "구현 참고·주의점"],
    ja: ["選択・比較", "応用例", "実装の参考・注意点"],
  };
  const keys = new Set();
  for (const detail of details) {
    const d = detail.data,
      key = `${d.lang}/${d.articleId}`;
    if (keys.has(key)) errors.push(`${key}: duplicate supplementary reading`);
    keys.add(key);
    if (detail.file !== `${key}.md`)
      errors.push(`${key}: supplementary path mismatch`);
    const article = articles.find(
      (a) => a.data.lang === d.lang && a.data.articleId === d.articleId,
    );
    if (!article) errors.push(`${key}: orphan supplementary reading`);
    else if (d.sourceRevision !== article.data.revision)
      errors.push(`${key}: stale supplementary reading`);
    const found = [...detail.content.matchAll(/^## (.+)$/gm)].map((m) => m[1]);
    if (
      !headings[d.lang] ||
      JSON.stringify(found) !== JSON.stringify(headings[d.lang])
    )
      errors.push(`${key}: supplementary section order`);
    if (
      detail.content
        .split(/^## .+$/m)
        .slice(1)
        .some((body) => !body.trim())
    )
      errors.push(`${key}: empty supplementary section`);
    if (
      !d.sources?.length ||
      d.sources.some(
        (s) =>
          !s.title?.trim() ||
          !s.claim?.trim() ||
          !/^https:\/\//.test(s.url ?? "") ||
          !/^\d{4}-\d{2}-\d{2}$/.test(s.checked ?? "") ||
          Number.isNaN(Date.parse(s.checked)) ||
          new Date(s.checked).toISOString().slice(0, 10) !== s.checked,
      )
    )
      errors.push(`${key}: missing claim or dated source`);
    if (new Set(d.sources?.map((s) => s.url)).size !== d.sources?.length)
      errors.push(`${key}: duplicate evidence URL`);
    for (const lang of ["en", "ko", "ja"]) {
      const peer = details.find(
        (e) => e.data.lang === lang && e.data.articleId === d.articleId,
      );
      if (!peer)
        errors.push(`${key}: missing supplementary translation ${lang}`);
      else if (
        JSON.stringify(peer.data.sources?.map((s) => [s.url, s.checked])) !==
        JSON.stringify(d.sources?.map((s) => [s.url, s.checked]))
      )
        errors.push(
          `${key}: supplementary evidence differs across translations`,
        );
    }
  }
  for (const article of articles.filter(needsDetails)) {
    const key = `${article.data.lang}/${article.data.articleId}`;
    if (!keys.has(key))
      errors.push(`${key}: missing active article supplementary reading`);
  }
  return errors;
}
