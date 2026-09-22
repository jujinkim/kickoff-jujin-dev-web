import { existsSync, mkdirSync, writeFileSync, unlinkSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import matter from "gray-matter";
import {
  activeCandidates as candidates,
  conceptSections,
  comparisonKeys,
  candidateStatus,
} from "./catalog-data.mjs";
import { readArticles } from "./validate-content.mjs";
export function createConcept(id, root = "src/content/articles") {
  const candidate = candidates.find((c) => c.id === id);
  if (!candidate) throw new Error(`Unknown candidate: ${id}`);
  const langs = ["en", "ko", "ja"];
  const paths = langs.map((lang) => resolve(root, lang, `${id}.md`));
  if (paths.some(existsSync))
    throw new Error(`Refusing to overwrite existing article: ${id}`);
  const created = [];
  try {
    for (const [index, lang] of langs.entries()) {
      mkdirSync(resolve(root, lang), { recursive: true });
      const data = {
        kind: "concept",
        articleId: id,
        lang,
        title: candidate.titles[lang],
        summary: "TODO",
        category: candidate.category,
        aliases: [candidate.titles[lang]],
        related: candidate.relatedGuides,
        status: "draft",
        revision: 1,
        sourceRevision: 1,
        updated: new Date().toISOString().slice(0, 10),
        comparison: Object.fromEntries(
          comparisonKeys.map((key) => [key, "TODO"]),
        ),
      };
      const content =
        `\n<!-- One-minute concept overview: 70–100 English words, one visual example, one tradeoff. No tutorial.\n${candidate.scope}\nCompare: ${candidate.compareWith.join(", ")}\n${lang === "en" ? "Write and review English original first." : "Translate reviewed English original; preserve its claims and sources."} -->\n\n` +
        conceptSections[lang]
          .map((section) => `## ${section}\n\nTODO\n`)
          .join("\n");
      writeFileSync(paths[index], matter.stringify(content, data), {
        flag: "wx",
      });
      created.push(paths[index]);
    }
  } catch (error) {
    for (const path of created) unlinkSync(path);
    throw error;
  }
  return paths;
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  try {
    if (process.argv.includes("--list")) {
      const articles = readArticles();
      console.log(
        candidates
          .toSorted((a, b) => a.order - b.order)
          .map(
            (c) =>
              `${c.order}\t${c.id}\t${candidateStatus(c, articles)}\t${c.category}\t${c.titles.en}`,
          )
          .join("\n"),
      );
    } else {
      const index = process.argv.indexOf("--id");
      if (index < 0 || !process.argv[index + 1])
        throw new Error(
          "Usage: npm run content:new -- --id <candidateID> | --list",
        );
      console.log(createConcept(process.argv[index + 1]).join("\n"));
      console.log(
        "Design demos: docs/design-demos.md · Brief: docs/templates/design-demo-brief.md",
      );
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
