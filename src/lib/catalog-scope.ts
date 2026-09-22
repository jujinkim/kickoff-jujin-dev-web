import retirements from "../data/catalog-retirements.json";

const retiredCategories: Record<string, string> = retirements.categories;
const retiredArticles: Record<string, string> = retirements.articles;

export const categoryReplacement = (id: string) => retiredCategories[id];
export const articleReplacement = (article: {
  articleId: string;
  category: string;
}) =>
  retiredArticles[article.articleId] ?? categoryReplacement(article.category);
export const isListedArticle = (article: {
  articleId: string;
  category: string;
}) => !articleReplacement(article);
