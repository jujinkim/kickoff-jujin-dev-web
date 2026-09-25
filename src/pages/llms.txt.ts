import { activeTaxonomy as taxonomy } from "../lib/catalog";
import { listed, markdownUrl } from "../lib/content";
import { categoryNames, siteTitle } from "../lib/i18n";
export async function GET() {
  const all = await listed();
  const text = `# ${siteTitle}

> Optional reference index for kickoff.md by jujin, an information site for preparing custom prompts and learning project planning, design, and technology choices through examples. kickoff.md does not provide an AI service. Users prepare an external AI tool separately, then copy and paste their prompt into that tool for conversations and work.

Only the startup guidelines and behavior rules below are required site reading to begin planning. This index and the catalog are optional learning resources, not a required selection list. Derive decisions from requirements and constraints, including options outside this site. Follow individual links only when requested or useful; an inaccessible optional resource alone does not stop planning.

## Create a prompt and start planning
- [Latest development startup guidelines](https://kickoff.jujin.dev/ai/startup/latest.md)
- [Create a custom prompt](https://kickoff.jujin.dev/en/start/)
- [How to use](https://kickoff.jujin.dev/en/help/)
- [Guideline versions](https://kickoff.jujin.dev/en/start/v1/)
- [Behavior rules](https://kickoff.jujin.dev/ai/instructions.md)

## Optional learning and lookup
- [Versioned multilingual catalog and aliases](https://kickoff.jujin.dev/ai/catalog.json)
- [Concept catalog](https://kickoff.jujin.dev/en/catalog/)
- [Project planning](https://kickoff.jujin.dev/en/guides/)
- [Instructions for external AI](https://kickoff.jujin.dev/en/ai/)

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

Publishing these resources does not guarantee external AI compliance. Request application of the two guidelines, and read any specific reference before citing it.
`;
  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
