import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";
const read = (p) => readFileSync(`dist/${p}`, "utf8");
const catalog = JSON.parse(read("ai/catalog.json"));
test("AI aliases resolve to published Markdown with matching title and instructions", () => {
  assert.equal(catalog.schemaVersion, 1);
  assert.equal(catalog.articles.length, 12);
  for (const alias of ["SRS", "요구사항", "要件"]) {
    assert.equal(
      catalog.articles.find((a) =>
        Object.values(a.translations).some((t) => t.aliases.includes(alias)),
      ).id,
      "srs",
    );
  }
  for (const article of catalog.articles) {
    assert.equal(Object.keys(article.translations).length, 3);
    for (const [lang, t] of Object.entries(article.translations)) {
      const md = read(new URL(t.markdown).pathname.slice(1));
      assert.ok(md.startsWith(`# ${t.title}`));
      assert.ok(md.includes(`ID: ${article.id}`));
      assert.ok(md.includes("## "));
      const html = read(`${lang}/catalog/${article.id}/index.html`);
      assert.ok(html.includes(`data-comment-term="${article.id}"`));
      assert.ok(html.includes(`data-term="${article.id}"`));
    }
  }
});
test("each translated page has self canonical, reciprocal translations, and English x-default", () => {
  for (const article of catalog.articles) {
    for (const [lang, t] of Object.entries(article.translations)) {
      const html = read(`${lang}/catalog/${article.id}/index.html`);
      assert.ok(html.includes(`rel="canonical" href="${t.url}"`));
      for (const [other, translation] of Object.entries(article.translations))
        assert.ok(
          html.includes(`hreflang="${other}" href="${translation.url}"`),
        );
      assert.ok(
        html.includes(
          `hreflang="x-default" href="${article.translations.en.url}"`,
        ),
      );
      assert.ok(read(`sitemap-${lang}.xml`).includes(t.url));
    }
  }
});
test("all internal HTML links and local assets resolve in static output", () => {
  const files = readdirSync("dist", { recursive: true }).filter((p) =>
    p.endsWith(".html"),
  );
  for (const file of files) {
    const html = read(file);
    for (const m of html.matchAll(
      /(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g,
    )) {
      const path = decodeURIComponent(m[1]);
      assert.ok(
        existsSync(
          resolve("dist", `.${path}`, path.endsWith("/") ? "index.html" : ""),
        ),
        `${file}: ${path}`,
      );
    }
  }
});
test("AI rules cover ambiguity, strong recommendation, delegated scope, missing topic, and access failure", () => {
  const text = read("ai/instructions.md");
  for (const scenario of [
    "Ambiguous request",
    "Single strong recommendation",
    "Explicit delegation",
    "Missing subject",
    "Access failure",
  ])
    assert.ok(text.includes(scenario));
  for (const rule of [
    "EVERY unresolved choice",
    "Do not ask again",
    "accept the recommendation",
    "search keywords",
    "ONLY to its stated scope",
    "acceptance criteria",
    "inaccessible sources",
  ])
    assert.ok(text.includes(rule));
  assert.ok(read("llms.txt").includes("/ai/catalog.json"));
});
