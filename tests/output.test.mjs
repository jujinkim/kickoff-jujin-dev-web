import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { readArticles } from "../scripts/validate-content.mjs";
const read = (p) => readFileSync(`dist/${p}`, "utf8");
const catalog = JSON.parse(read("ai/catalog.json"));
test("AI aliases resolve to published Markdown with matching title and instructions", () => {
  assert.equal(catalog.schemaVersion, 1);
  assert.equal(catalog.articles.length, 19);
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
      const html = read(
        `${lang}/${article.kind === "guide" ? "guides" : "catalog"}/${article.id}/index.html`,
      );
      assert.ok(html.includes(`data-comment-term="${article.id}"`));
      assert.ok(html.includes(`data-term="${article.id}"`));
    }
  }
});
test("each translated page has self canonical, reciprocal translations, and English x-default", () => {
  for (const article of catalog.articles) {
    for (const [lang, t] of Object.entries(article.translations)) {
      const html = read(
        `${lang}/${article.kind === "guide" ? "guides" : "catalog"}/${article.id}/index.html`,
      );
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

test("legacy HTML redirects and Markdown preserve guide content and identity", () => {
  for (const article of catalog.articles.filter((a) => a.kind === "guide"))
    for (const [lang, t] of Object.entries(article.translations)) {
      assert.equal(article.kind, "guide");
      const alias = read(`${lang}/catalog/${article.id}/index.html`);
      assert.ok(alias.includes(`0;url=/${lang}/guides/${article.id}/`));
      assert.ok(alias.includes(`rel="canonical" href="${t.url}"`));
      assert.ok(alias.includes('content="noindex"'));
      assert.ok(!alias.includes("data-pagefind-body"));
      assert.equal(
        read(`${lang}/catalog/${article.id}.md`),
        read(`${lang}/guides/${article.id}.md`),
      );
      assert.ok(
        !read(`sitemap-${lang}.xml`).includes(
          `/${lang}/catalog/${article.id}/`,
        ),
      );
    }
});
test("seven published concepts and 51 pending candidates remain separate", () => {
  assert.equal(catalog.articles.filter((a) => a.kind === "guide").length, 12);
  assert.equal(catalog.articles.filter((a) => a.kind === "concept").length, 7);
  for (const lang of ["en", "ko", "ja"]) {
    const html = read(`${lang}/catalog/categories/styles/index.html`);
    assert.equal([...html.matchAll(/data-candidate=/g)].length, 0);
    assert.ok(html.includes(`href="/${lang}/catalog/brutalism/"`));
    assert.ok(html.includes('class="comparison"'));
    const pending = read(`${lang}/catalog/categories/columns/index.html`);
    assert.equal([...pending.matchAll(/data-candidate=/g)].length, 3);
    assert.ok(!existsSync(`dist/${lang}/catalog/single-column/index.html`));
  }
  const manifest = JSON.parse(read("pagefind/pagefind-entry.json"));
  assert.equal(
    Object.values(manifest.languages).reduce((n, l) => n + l.page_count, 0),
    57,
  );
});

test("article and category tables render the same reviewed summaries", () => {
  const escape = (text) =>
    text
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  for (const { data } of readArticles().filter(
    (a) => a.data.kind === "concept",
  )) {
    const page = read(`${data.lang}/catalog/${data.articleId}/index.html`);
    const category = read(
      `${data.lang}/catalog/categories/${data.category}/index.html`,
    );
    for (const value of Object.values(data.comparison)) {
      assert.ok(
        page.includes(escape(value)),
        `${data.lang}/${data.articleId}: article summary`,
      );
      assert.ok(
        category.includes(escape(value)),
        `${data.lang}/${data.articleId}: category summary`,
      );
    }
  }
});
