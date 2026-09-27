import { getCollection } from "astro:content";
import type { Article } from "./content";
import { isListedArticle } from "./catalog-scope";

export const detailLabels = {
  en: {
    title: "Go further",
    note: "Optional reading · separate from the overview",
    sections: [
      "Selection & comparison",
      "Applications",
      "Implementation & cautions",
    ],
    evidence: "Evidence",
    checked: "Checked",
  },
  ko: {
    title: "더 깊이 살펴보기",
    note: "선택해서 읽는 자료 · 개요 읽기 시간과 별도",
    sections: ["선택·비교", "응용 사례", "구현 참고·주의점"],
    evidence: "근거",
    checked: "확인",
  },
  ja: {
    title: "さらに詳しく",
    note: "任意の参考資料 · 概要の読了時間には含みません",
    sections: ["選択・比較", "応用例", "実装の参考・注意点"],
    evidence: "根拠",
    checked: "確認",
  },
};

export async function detailsFor(article: Article) {
  const entries = await getCollection("articleDetails");
  const detail = entries.find(
    ({ data }) =>
      data.articleId === article.data.articleId &&
      data.lang === article.data.lang,
  );
  if (
    !detail &&
    article.data.status === "published" &&
    isListedArticle(article.data)
  )
    throw new Error(
      `Missing supplementary reading: ${article.data.lang}/${article.data.articleId}`,
    );
  if (detail && detail.data.sourceRevision !== article.data.revision)
    throw new Error(
      `Stale supplementary reading: ${article.data.lang}/${article.data.articleId}`,
    );
  return detail;
}

export async function detailsMarkdown(article: Article) {
  const detail = await detailsFor(article);
  if (!detail) return "";
  const t = detailLabels[article.data.lang];
  return `\n\n---\n\n# ${t.title}\n\n${t.note}\n\n${detail.body}\n\n## ${t.evidence}\n\n${detail.data.sources.map((s) => `- [${s.title}](${s.url}) — ${s.claim} (${t.checked}: ${s.checked})`).join("\n")}\n`;
}
