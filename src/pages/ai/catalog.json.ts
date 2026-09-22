import { listed, articleUrl, markdownUrl, isStale } from "../../lib/content";
import { activeTaxonomy as categories } from "../../lib/catalog";
export async function GET() {
  const all = await listed();
  const ids = [...new Set(all.map((a) => a.data.articleId))].sort();
  const articles = ids.map((id) => {
    const translations = all.filter((a) => a.data.articleId === id);
    const original = translations.find((a) => a.data.lang === "en")!;
    return {
      id,
      kind: original.data.kind,
      category: original.data.category,
      related: original.data.related.filter((id) => ids.includes(id)),
      example: original.data.example,
      translations: Object.fromEntries(
        translations.map((a) => [
          a.data.lang,
          {
            title: a.data.title,
            summary: a.data.summary,
            comparison: a.data.comparison,
            aliases: a.data.aliases,
            revision: a.data.revision,
            sourceRevision: a.data.sourceRevision,
            stale: isStale(a, all),
            updated: a.data.updated,
            url: `https://kickoff.jujin.dev${articleUrl(a)}`,
            markdown: `https://kickoff.jujin.dev${markdownUrl(a)}`,
          },
        ]),
      ),
    };
  });
  return new Response(
    JSON.stringify(
      {
        schemaVersion: 1,
        site: "https://kickoff.jujin.dev",
        sourceLanguage: "en",
        instructions: "https://kickoff.jujin.dev/ai/instructions.md",
        categories,
        articles,
      },
      null,
      2,
    ),
    { headers: { "Content-Type": "application/json; charset=utf-8" } },
  );
}
