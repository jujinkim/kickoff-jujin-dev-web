import type { APIRoute } from "astro";
import { published, articleUrl, type Article } from "../../../lib/content";
export async function getStaticPaths() {
  return (await published()).map((article) => ({
    params: { lang: article.data.lang, id: article.data.articleId },
    props: { article },
  }));
}
export const GET: APIRoute = ({ props }) => {
  const article = props.article as Article;
  const d = article.data;
  return new Response(
    `# ${d.title}\n\n${d.summary}\n\nID: ${d.articleId}\nLanguage: ${d.lang}\nRevision: ${d.revision}\nTranslation source revision: ${d.sourceRevision}\nCanonical: https://jujin.dev${articleUrl(article)}\n\n${article.body}\n`,
    { headers: { "Content-Type": "text/markdown; charset=utf-8" } },
  );
};
