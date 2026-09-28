import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { readArticles } from "../scripts/validate-content.mjs";
import {
  activeCandidates as candidates,
  isListedArticle,
} from "../scripts/catalog-data.mjs";
const read = (p) => readFileSync(`dist/${p}`, "utf8");
const published = readArticles().filter(
  (a) => a.data.status === "published" && isListedArticle(a.data),
);
const publishedEnglish = published.filter((a) => a.data.lang === "en");
const catalog = JSON.parse(read("ai/catalog.json"));
test("AI aliases resolve to English Markdown while HTML stays localized", () => {
  assert.equal(catalog.schemaVersion, 1);
  assert.deepEqual(
    catalog.articles.map((a) => a.id).sort(),
    publishedEnglish.map((a) => a.data.articleId).sort(),
  );
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
      assert.equal(t.markdown, article.translations.en.markdown);
      assert.ok(md.startsWith(`# ${article.translations.en.title}`));
      assert.ok(md.includes("Language: en"));
      const kind = article.kind === "guide" ? "guides" : "catalog";
      assert.equal(read(`${lang}/${kind}/${article.id}.md`), md);
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
test("AI rules keep decision ownership and selective evidence; scenarios live in contributor guidance", () => {
  const text = read("ai/instructions.md");
  const contributor = readFileSync("CONTRIBUTING.md", "utf8");
  for (const scenario of [
    "Uncatalogued option",
    "Specific article requested",
    "Optional source unavailable",
    "Confirmed choice",
    "Limited delegation",
    "Approved development",
    "Large task resumes next session",
    "Failed or unrun verification",
    "Existing commit prohibition",
    "No repository or no writing tools",
    "Partial completion or interruption",
  ])
    assert.ok(contributor.includes(scenario), scenario);
  for (const rule of [
    "These internal choices need no separate delegation",
    "Preserve confirmed choices and authorization",
    "Offer acceptance, rejection, another option, or scoped delegation",
    "Investigate facts available there before asking",
    "realistic options, pros/cons",
    "recommendation justified by project requirements and constraints",
    "explicitly delegates the choice in its conversational context",
    "ask only if ambiguity would materially affect the result",
    "Silence or “I don't know” is not delegation",
    "Planning or choice delegation does not grant permission to deploy, publish, or spend money",
    "maintain an existing task document or project convention",
    "Small edits need no task file",
    "Update after each unit, scope/blocker changes, and before stopping or handoff",
    "check the record against actual artifacts",
    "automatically commit that unit and its task record locally",
    "honoring existing commit prohibitions and excluding unrelated changes",
    "Record failed or unrun checks; do not mark affected work complete",
    "save files without initializing one on your own",
    "Without file-writing tools, provide a copyable task record",
    "pushes, require existing remote-action authority",
    "user-confirmed versus delegated AI choices",
    "task-document location, save/commit status",
    "Do not present proposals as applied results",
    "When interrupted, report progress and the resume point",
    "Use model knowledge for general concepts",
    "using relevant official sources",
    "Read an article before citing it",
    "catalog access failure alone must not block planning",
    "acceptance criteria",
  ])
    assert.ok(text.includes(rule), rule);
  assert.ok(!text.includes("## Acceptance scenarios"));
  const llms = read("llms.txt");
  assert.ok(llms.includes("Optional reference index"));
  assert.ok(llms.includes("/ai/catalog.json"));
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
test("published concepts and pending candidates remain separate", () => {
  assert.equal(catalog.articles.filter((a) => a.kind === "guide").length, 9);
  assert.equal(
    catalog.articles.filter((a) => a.kind === "concept").length,
    publishedEnglish.filter((a) => a.data.kind === "concept").length,
  );
  for (const lang of ["en", "ko", "ja"]) {
    const html = read(`${lang}/catalog/categories/styles/index.html`);
    assert.equal([...html.matchAll(/data-candidate=/g)].length, 0);
    for (const { data } of publishedEnglish.filter(
      (a) => a.data.category === "styles",
    )) {
      assert.ok(html.includes(`href="/${lang}/catalog/${data.articleId}/"`));
      assert.ok(read("llms.txt").includes(`/en/catalog/${data.articleId}.md`));
    }
    assert.ok(html.includes('class="comparison"'));
    for (const category of new Set(candidates.map((c) => c.category))) {
      const categoryHtml = read(
        `${lang}/catalog/categories/${category}/index.html`,
      );
      const members = candidates.filter((c) => c.category === category);
      const isPublished = (id) =>
        published.some((a) => a.data.articleId === id && a.data.lang === lang);
      assert.equal(
        [...categoryHtml.matchAll(/data-candidate=/g)].length,
        members.filter((c) => !isPublished(c.id)).length,
        `${lang}/${category}: pending names`,
      );
      for (const candidate of members) {
        assert.equal(
          existsSync(`dist/${lang}/catalog/${candidate.id}/index.html`),
          isPublished(candidate.id),
          `${lang}/${candidate.id}: only published candidates have pages`,
        );
        assert.equal(
          categoryHtml.includes(`href="/${lang}/catalog/${candidate.id}/"`),
          isPublished(candidate.id),
          `${lang}/${candidate.id}: only published candidates have links`,
        );
      }
    }
  }
  const manifest = JSON.parse(read("pagefind/pagefind-entry.json"));
  assert.equal(
    Object.values(manifest.languages).reduce((n, l) => n + l.page_count, 0),
    published.length,
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
    (a) => a.data.kind === "concept" && isListedArticle(a.data),
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
