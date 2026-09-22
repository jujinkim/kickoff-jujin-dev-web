import taxonomy from "../data/categories.json";
import { published, markdownUrl } from "../lib/content";
import { categoryNames } from "../lib/i18n";
export async function GET() {
  const all = await published();
  const text = `# jujin.dev

> A development field guide: imagine outcomes, compare options, decide, then instruct AI.

Read project context first. Do not re-ask confirmed decisions. Before explicit scoped delegation, ask about every unresolved choice, even with a strong recommendation. Cite evidence; report access failures.

## Start here
- [Latest development startup guidelines](https://jujin.dev/ai/startup/latest.md)
- [Guideline versions and startup prompt](https://jujin.dev/en/start/)
- [Behavior rules](https://jujin.dev/ai/instructions.md)
- [Versioned multilingual catalog and aliases](https://jujin.dev/ai/catalog.json)
- [Concept catalog](https://jujin.dev/en/catalog/)
- [Guides](https://jujin.dev/en/guides/)
- [Project integration guide](https://jujin.dev/en/ai/)

English originals with Korean and Japanese translations. The catalog links every published translation and marks stale revisions. Drafts are excluded. A missing translation is not an English duplicate at a translated URL.

${taxonomy
  .map((c) => c.id)
  .map(
    (c) =>
      `## ${categoryNames.en[c]}\n${all
        .filter((a) => a.data.lang === "en" && a.data.category === c)
        .map(
          (a) =>
            `- [${a.data.title}](https://jujin.dev${markdownUrl(a)}): ${a.data.summary}`,
        )
        .join("\n")}`,
  )
  .join("\n\n")}

Publishing these resources does not guarantee external AI compliance. Explicitly request reading and application.
`;
  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
