import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import {
  designRegistry,
  platformCategories,
  validateDesigns,
} from "../scripts/design-registry.mjs";
import { readArticles } from "../scripts/validate-content.mjs";
import { articleOverviewSeconds } from "../src/lib/reading-budget.mjs";
const articles = readArticles();
const platforms = articles.filter((a) =>
  platformCategories.includes(a.data.category),
);
test("platform release contains 15 complete trilingual concepts within reading budget", () => {
  assert.equal(platforms.length, 45);
  for (const a of platforms) {
    assert.equal(a.data.status, "published");
    assert.equal(a.data.checked, "2026-09-22");
    assert.equal(a.data.sourceRevision, a.data.revision);
    assert.ok(articleOverviewSeconds(a) <= 60, a.file);
    assert.equal(Object.keys(a.data.comparison).length, 5);
    assert.ok(existsSync(`docs/design-briefs/${a.data.articleId}.md`));
  }
});
test("each platform group rejects absent registration, component, caption, thumbnail or translation", () => {
  for (const category of platformCategories) {
    const id = platforms.find((a) => a.data.category === category).data
      .articleId;
    const missing = structuredClone(designRegistry);
    delete missing[id];
    assert.match(
      validateDesigns(articles, missing).join("\n"),
      new RegExp(`${id}: missing design demo registration`),
    );
    const component = structuredClone(designRegistry);
    component[id].component = "MissingPlatform";
    assert.match(
      validateDesigns(articles, component).join("\n"),
      new RegExp(`${id}: missing demo component`),
    );
    const caption = structuredClone(designRegistry);
    delete caption[id].caption.ja;
    assert.match(
      validateDesigns(articles, caption).join("\n"),
      new RegExp(`${id}/ja: missing localized caption`),
    );
    const exists = (p) =>
      p !== `public/thumbnails/${id}-ko.png` && existsSync(p);
    assert.match(
      validateDesigns(articles, designRegistry, exists).join("\n"),
      new RegExp(`${id}/ko: missing thumbnail`),
    );
    assert.deepEqual(
      validateDesigns(articles, designRegistry, exists, { thumbnails: false }),
      [],
    );
    for (const kind of ["missing", "draft", "stale"]) {
      const copy = structuredClone(articles),
        index = copy.findIndex(
          (a) => a.data.articleId === id && a.data.lang === "ko",
        );
      if (kind === "missing") copy.splice(index, 1);
      else if (kind === "draft") copy[index].data.status = "draft";
      else copy[index].data.sourceRevision = 0;
      assert.match(
        validateDesigns(copy).join("\n"),
        new RegExp(`${id}/ko: missing or stale published translation`),
      );
    }
  }
});
test("all platform output paths retain API v1, identity, sources and localized demos", () => {
  const catalog = JSON.parse(readFileSync("dist/ai/catalog.json", "utf8"));
  assert.equal(catalog.schemaVersion, 1);
  for (const a of platforms) {
    const { articleId: id, lang } = a.data,
      entry = catalog.articles.find((a) => a.id === id);
    assert.ok(entry);
    const html = readFileSync(`dist/${lang}/catalog/${id}/index.html`, "utf8");
    assert.ok(html.includes(`data-demo="${id}"`));
    assert.ok(html.includes(`data-comment-term="${id}"`));
    assert.ok(html.includes(`data-term="${id}"`));
    assert.ok(html.includes(`data-pagefind-body`));
    const md = readFileSync(`dist/${lang}/catalog/${id}.md`, "utf8");
    assert.ok(md.includes("Language: en"));
    assert.ok(md.includes("## Example"));
    assert.ok(md.includes("https://"));
    assert.ok(
      readFileSync(`dist/sitemap-${lang}.xml`, "utf8").includes(
        `/${lang}/catalog/${id}/`,
      ),
    );
    assert.ok(existsSync(`dist/thumbnails/${id}-${lang}.png`));
  }
});
