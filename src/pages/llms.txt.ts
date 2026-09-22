import { activeTaxonomy as taxonomy } from "../lib/catalog";
import { listed, markdownUrl } from "../lib/content";
import { categoryNames } from "../lib/i18n";
export async function GET() {
  const all = await listed();
  const text = `# Kickoff by jujin

> A development field guide: imagine outcomes, compare options, decide, then instruct AI.

Read project context first. Do not re-ask confirmed decisions. Ask about unresolved product and project-level choices unless their scope is delegated. Choose internal implementation and document formats within agreed requirements yourself. Ask when behavior, cost or operating constraints are missing or change. Cite evidence; report access failures.

## Start here
- [Latest development startup guidelines](https://kickoff.jujin.dev/ai/startup/latest.md)
- [Guideline versions and startup prompt](https://kickoff.jujin.dev/en/start/)
- [Behavior rules](https://kickoff.jujin.dev/ai/instructions.md)
- [Versioned multilingual catalog and aliases](https://kickoff.jujin.dev/ai/catalog.json)
- [Concept catalog](https://kickoff.jujin.dev/en/catalog/)
- [Guides](https://kickoff.jujin.dev/en/guides/)
- [Project integration guide](https://kickoff.jujin.dev/en/ai/)

English originals with Korean and Japanese translations. The catalog links current project choices and guides with their available translations and stale-revision markers. HTML pages remain localized. All Markdown links point to English originals; legacy localized Markdown URLs serve the same English content. Users can write requests in their preferred language; reply in the user's language.

${taxonomy
  .map((c) => c.id)
  .map(
    (c) =>
      `## ${categoryNames.en[c]}\n${all
        .filter((a) => a.data.lang === "en" && a.data.category === c)
        .map(
          (a) =>
            `- [${a.data.title}](https://kickoff.jujin.dev${markdownUrl(a)}): ${a.data.summary}`,
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
