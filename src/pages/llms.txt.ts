import { published, markdownUrl } from "../lib/content";
import { categories, categoryNames } from "../lib/i18n";
export async function GET() {
  const all = await published();
  const text = `# ju jin.dev

> A development field guide: imagine outcomes, compare options, decide, then instruct AI.

Read project context first. Do not re-ask confirmed decisions. Before explicit scoped delegation, ask about every unresolved choice, even with a strong recommendation. Cite evidence; report access failures.

## Start here
- [Behavior rules](https://jujin.dev/ai/instructions.md)
- [Versioned multilingual catalog and aliases](https://jujin.dev/ai/catalog.json)
- [Project integration guide](https://jujin.dev/en/ai/)

English originals with Korean and Japanese translations. The catalog links every published translation and marks stale revisions. Drafts are excluded. A missing translation is not an English duplicate at a translated URL.

${categories
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
