import { startupText, startupVersion } from "./startup";

const sources = import.meta.glob<string>("../startup/v*/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function startupMarkdown(version = startupVersion): string {
  const source = sources[`../startup/${version}/en.md`];
  if (source === undefined) {
    throw new Error(`Missing startup guideline source: ${version}/en`);
  }
  return `# ${startupText.en.title} — ${version}\n\n${source}`;
}

export function startupMarkdownResponse(version = startupVersion) {
  return new Response(startupMarkdown(version), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
