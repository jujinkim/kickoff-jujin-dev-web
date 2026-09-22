import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { readArticles } from "../scripts/validate-content.mjs";
import {
  designRegistry,
  monetizationCategories,
  validateDesigns,
} from "../scripts/design-registry.mjs";
import { candidates, taxonomy } from "../scripts/catalog-data.mjs";
import { articleOverviewSeconds } from "../src/lib/reading-budget.mjs";
import { priceCents } from "../src/components/demos/monetization-math.mjs";
const articles = readArticles();
const money = articles.filter(
  (a) =>
    a.data.kind === "concept" &&
    monetizationCategories.includes(a.data.category),
);
const english = money.filter((a) => a.data.lang === "en");
test("24 monetization concepts have 72 reviewed translations, seven groups and 12 static/12 interactive figures", () => {
  assert.equal(money.length, 72);
  assert.equal(english.length, 24);
  assert.equal(new Set(money.map((a) => a.data.category)).size, 7);
  assert.equal(
    english.filter((a) => designRegistry[a.data.articleId].mode === "static")
      .length,
    12,
  );
  assert.equal(
    english.filter(
      (a) => designRegistry[a.data.articleId].mode === "interactive",
    ).length,
    12,
  );
  for (const a of money) {
    assert.equal(a.data.status, "published");
    assert.equal(a.data.checked, "2026-09-22");
    assert.equal(a.data.sourceRevision, 1);
    assert.equal(Object.keys(a.data.comparison).length, 5);
    assert.ok(articleOverviewSeconds(a) <= 60, a.file);
    assert.ok(existsSync(`docs/design-briefs/${a.data.articleId}.md`));
    assert.match(a.content, /\]\(https:\/\//);
    if (a.data.lang === "en") {
      const words = a.content
        .replace(/^##.*$/gm, "")
        .replace(/\[Source\]\(.*\)/g, "")
        .trim()
        .split(/\s+/).length;
      assert.ok(words >= 70 && words <= 100, `${a.file}: ${words}`);
    }
    const candidate = candidates.find((c) => c.id === a.data.articleId);
    assert.equal(
      candidate.compareWith.length,
      english.filter((x) => x.data.category === a.data.category).length - 1,
    );
    assert.ok(
      candidate.compareWith.every(
        (id) =>
          candidates.find((c) => c.id === id).category === a.data.category,
      ),
    );
  }
  for (const category of monetizationCategories)
    assert.equal(taxonomy.find((c) => c.id === category).parent, "business");
  for (const [id, order] of [
    ["direct-payment", 1700],
    ["advertising", 1701],
    ["sponsorship", 1702],
    ["one-time-payment", 1800],
    ["subscription", 1801],
    ["usage-based", 1802],
    ["direct-seller", 1900],
    ["merchant-of-record", 1901],
  ])
    assert.equal(candidates.find((c) => c.id === id).order, order);
});
test("pricing boundary fixtures preserve whole-volume, graduated and included-usage semantics", () => {
  for (const [quantity, volume, graduated, base, usage] of [
    [0, 0, 0, 2000, 0],
    [100, 2000, 2000, 2000, 200],
    [101, 1010, 2010, 2010, 202],
    [120, 1200, 2200, 2200, 240],
  ]) {
    assert.equal(priceCents("volume-pricing", quantity), volume);
    assert.equal(priceCents("graduated-pricing", quantity), graduated);
    assert.equal(priceCents("base-plus-overage", quantity), base);
    assert.equal(priceCents("usage-based", quantity), usage);
  }
  for (const [seats, cents] of [
    [0, 0],
    [2, 1600],
    [3, 2400],
    [4, 3200],
  ])
    assert.equal(priceCents("per-seat-pricing", seats), cents);
  assert.equal(
    [100, 300, 600].reduce((sum, q) => sum + priceCents("usage-based", q), 0),
    2000,
  );
  for (const invalid of [-1, 0.5, NaN, Infinity, 10001])
    assert.throws(() => priceCents("volume-pricing", invalid), RangeError);
});
test("every monetization group enforces components, localized captions, translations and first captures", () => {
  assert.deepEqual(validateDesigns(articles), []);
  for (const category of monetizationCategories) {
    const id = english.find((a) => a.data.category === category).data.articleId;
    const registry = structuredClone(designRegistry);
    delete registry[id];
    assert.ok(
      validateDesigns(articles, registry).includes(
        `${id}: missing design demo registration`,
      ),
    );
    const badComponent = structuredClone(designRegistry);
    badComponent[id].component = "Absent";
    assert.ok(
      validateDesigns(articles, badComponent).includes(
        `${id}: missing demo component`,
      ),
    );
    const badCaption = structuredClone(designRegistry);
    delete badCaption[id].caption.ko;
    assert.ok(
      validateDesigns(articles, badCaption).includes(
        `${id}/ko: missing localized caption`,
      ),
    );
    const missing = (p) => !p.endsWith(`${id}-ja.png`) && existsSync(p);
    assert.ok(
      validateDesigns(articles, designRegistry, missing).includes(
        `${id}/ja: missing thumbnail`,
      ),
    );
    assert.deepEqual(
      validateDesigns(articles, designRegistry, missing, { thumbnails: false }),
      [],
    );
    for (const failure of ["missing", "draft", "stale"]) {
      const copy = structuredClone(articles),
        i = copy.findIndex(
          (a) => a.data.articleId === id && a.data.lang === "ja",
        );
      if (failure === "missing") copy.splice(i, 1);
      else if (failure === "draft") copy[i].data.status = "draft";
      else copy[i].data.sourceRevision = 0;
      assert.ok(
        validateDesigns(copy).includes(
          `${id}/ja: missing or stale published translation`,
        ),
      );
    }
  }
});
test("static mode rejects script/control contracts and invalid modes; omitted mode stays interactive", () => {
  for (const [id, mode, message] of [
    ["subscription", "static", "unfinished demo component contract"],
    ["banner-ads", "interactive", "unfinished demo component contract"],
    ["banner-ads", "unknown", "invalid demo mode"],
    ["banner-ads", null, "invalid demo mode"],
  ]) {
    const copy = structuredClone(designRegistry);
    copy[id].mode = mode;
    assert.ok(validateDesigns(articles, copy).includes(`${id}: ${message}`));
  }
  const defaults = structuredClone(designRegistry);
  delete defaults.subscription.mode;
  assert.deepEqual(validateDesigns(articles, defaults), []);
});
test("HTML, Markdown, search, sitemap and AI output retain stable identity and v1", () => {
  const catalog = JSON.parse(readFileSync("dist/ai/catalog.json", "utf8"));
  assert.equal(catalog.schemaVersion, 1);
  const search = JSON.parse(
    readFileSync("dist/pagefind/pagefind-entry.json", "utf8"),
  );
  const llms = readFileSync("dist/llms.txt", "utf8");
  for (const lang of ["en", "ko", "ja"])
    assert.equal(
      search.languages[lang].page_count,
      articles.filter(
        (a) => a.data.status === "published" && a.data.lang === lang,
      ).length,
    );
  for (const a of money) {
    const { articleId: id, lang } = a.data,
      mode = designRegistry[id].mode;
    const html = readFileSync(`dist/${lang}/catalog/${id}/index.html`, "utf8");
    assert.ok(html.includes(`data-demo="${id}"`));
    assert.ok(html.includes(`data-demo-mode="${mode}"`));
    assert.ok(html.includes(`data-comment-term="${id}"`));
    assert.ok(html.includes(`data-term="${id}"`));
    assert.ok(html.includes('class="article-extra"'));
    assert.ok(
      catalog.articles.some((x) => x.id === id && x.kind === "concept"),
    );
    assert.ok(llms.includes(`/en/catalog/${id}.md`));
    assert.ok(
      readFileSync(`dist/sitemap-${lang}.xml`, "utf8").includes(
        `/${lang}/catalog/${id}/`,
      ),
    );
    const md = readFileSync(`dist/${lang}/catalog/${id}.md`, "utf8");
    assert.ok(md.includes("Language: en"));
    assert.ok(md.includes("## Example"));
    assert.ok(
      md.includes(english.find((x) => x.data.articleId === id).content.trim()),
    );
    assert.ok(existsSync(`dist/thumbnails/${id}-${lang}.png`));
  }
});
