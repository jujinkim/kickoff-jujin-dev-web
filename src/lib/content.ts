import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "./i18n";
export type Article = CollectionEntry<"articles">;
export const published = () =>
  getCollection("articles", ({ data }) => data.status === "published");
export const articleUrl = (article: Article) =>
  `/${article.data.lang}/${article.data.kind === "guide" ? "guides" : "catalog"}/${article.data.articleId}/`;
export const markdownUrl = (article: Article) =>
  `/en/${article.data.kind === "guide" ? "guides" : "catalog"}/${article.data.articleId}.md`;
export function translationFor(all: Article[], articleId: string, lang: Lang) {
  return all.find(
    (a) => a.data.articleId === articleId && a.data.lang === lang,
  );
}
export function isStale(article: Article, all: Article[]) {
  const original = translationFor(all, article.data.articleId, "en");
  return (
    article.data.lang !== "en" &&
    !!original &&
    article.data.sourceRevision < original.data.revision
  );
}
