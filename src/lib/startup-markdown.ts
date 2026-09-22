import type { Lang } from "./i18n";
import { startupText, startupVersion } from "./startup";

const sources = import.meta.glob<string>("../startup/v*/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function startupMarkdown(lang: Lang, version = startupVersion): string {
  const source = sources[`../startup/${version}/${lang}.md`];
  if (source === undefined) {
    throw new Error(`Missing startup guideline source: ${version}/${lang}`);
  }
  return `# ${startupText[lang].title} — ${version}\n\n${source}`;
}

export function startupMarkdownResponse(lang: Lang, version = startupVersion) {
  return new Response(startupMarkdown(lang, version), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
