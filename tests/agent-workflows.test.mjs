import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import {
  candidates,
  activeTaxonomy,
  validateCatalog,
} from "../scripts/catalog-data.mjs";
import { readArticles } from "../scripts/validate-content.mjs";
import { readDetails, validateDetails } from "../scripts/validate-details.mjs";
import {
  designRegistry,
  validateDesigns,
} from "../scripts/design-registry.mjs";
import { articleOverviewSeconds } from "../src/lib/reading-budget.mjs";

const groups = {
  "agent-workflows": ["no-extra-skills", "spec-kit", "superpowers", "openspec"],
};
const ids = Object.values(groups).flat();
const articles = readArticles();
const details = readDetails();
const read = (path) => readFileSync(`dist/${path}`, "utf8");

test("agent workflows publish comparable alternatives with reviewed translations", () => {
  assert.deepEqual(validateCatalog(undefined, undefined, articles), []);
  assert.deepEqual(
    activeTaxonomy
      .filter((c) => !c.parent)
      .toSorted((a, b) => a.order - b.order)
      .map((c) => c.id),
    [
      "planning",
      "development",
      "version-control",
      "deployment",
      "design",
      "business",
    ],
  );
  for (const [category, members] of Object.entries(groups)) {
    assert.equal(
      activeTaxonomy.find((c) => c.id === category).parent,
      "planning",
    );
    assert.deepEqual(
      candidates.filter((c) => c.category === category).map((c) => c.id),
      members,
    );
    for (const id of members) {
      const candidate = candidates.find((c) => c.id === id);
      assert.deepEqual(
        candidate.compareWith,
        members.filter((p) => p !== id),
      );
      for (const lang of ["en", "ko", "ja"]) {
        const a = articles.find(
          (a) => a.data.articleId === id && a.data.lang === lang,
        );
        assert.equal(a.data.status, "published");
        assert.equal(a.data.revision, 1);
        assert.equal(a.data.sourceRevision, 1);
        assert.deepEqual(a.data.aliases, candidate.aliases);
        assert.ok(articleOverviewSeconds(a) <= 60, `${id}/${lang}`);
        assert.equal(
          details.find((d) => d.data.articleId === id && d.data.lang === lang)
            .data.sourceRevision,
          1,
        );
      }
      assert.equal(designRegistry[id].mode, "static");
      assert.ok(existsSync(`docs/design-briefs/${id}.md`));
    }
  }
});

test("workflow publication rejects missing diagrams, thumbnails, translations and evidence", () => {
  for (const id of ["no-extra-skills", "spec-kit"]) {
    const subset = articles.filter((a) => a.data.articleId === id);
    const missingRegistry = structuredClone(designRegistry);
    delete missingRegistry[id];
    assert.match(
      validateDesigns(subset, missingRegistry).join("\n"),
      /missing design demo registration/,
    );
    const missingComponent = structuredClone(designRegistry);
    missingComponent[id].component = "AbsentWorkflowDemo";
    assert.match(
      validateDesigns(subset, missingComponent).join("\n"),
      /missing demo component/,
    );
    const missingCaption = structuredClone(designRegistry);
    delete missingCaption[id].caption.ja;
    assert.match(
      validateDesigns(subset, missingCaption).join("\n"),
      /missing localized caption/,
    );
    for (const extension of ["png", "webp"]) {
      const exists = (path) =>
        path !== `public/thumbnails/${id}-ja.${extension}` && existsSync(path);
      assert.match(
        validateDesigns(subset, designRegistry, exists).join("\n"),
        /missing (optimized )?thumbnail/,
      );
      assert.deepEqual(
        validateDesigns(subset, designRegistry, exists, { thumbnails: false }),
        [],
      );
    }
    for (const mutation of ["missing", "draft", "stale"]) {
      const copy = structuredClone(subset);
      const index = copy.findIndex((a) => a.data.lang === "ja");
      if (mutation === "missing") copy.splice(index, 1);
      else if (mutation === "draft") copy[index].data.status = "draft";
      else copy[index].data.sourceRevision = 2;
      assert.match(
        validateDesigns(copy).join("\n"),
        /missing or stale published translation/,
      );
    }
    const evidence = structuredClone(details);
    evidence.find(
      (d) => d.data.articleId === id && d.data.lang === "ja",
    ).data.sources = [];
    assert.match(
      validateDetails(articles, evidence).join("\n"),
      /missing claim or dated source/,
    );
  }
});

test("workflow learning remains optional and discoverable with stable API v1 identities", () => {
  const catalog = JSON.parse(read("ai/catalog.json"));
  assert.equal(catalog.schemaVersion, 1);
  for (const id of ids) {
    const entry = catalog.articles.find((a) => a.id === id);
    assert.ok(entry, id);
    assert.ok(read("llms.txt").includes(`/en/catalog/${id}.md`));
    assert.ok(
      !read("ai/startup/latest.md").includes(
        `https://kickoff.jujin.dev/en/catalog/${id}.md`,
      ),
    );
    const english = read(`en/catalog/${id}.md`);
    assert.ok(english.includes("## Evidence"));
    for (const lang of ["en", "ko", "ja"]) {
      const html = read(`${lang}/catalog/${id}/index.html`);
      assert.ok(html.includes(`data-demo="${id}"`));
      assert.ok(html.includes(`data-comment-term="${id}"`));
      assert.ok(html.includes(`data-term="${id}"`));
      assert.ok(html.includes("data-pagefind-body"));
      assert.ok(
        html.includes(
          `rel="canonical" href="https://kickoff.jujin.dev/${lang}/catalog/${id}/"`,
        ),
      );
      for (const alternate of ["en", "ko", "ja"])
        assert.ok(
          html.includes(
            `hreflang="${alternate}" href="https://kickoff.jujin.dev/${alternate}/catalog/${id}/"`,
          ),
        );
      assert.equal(read(`${lang}/catalog/${id}.md`), english);
      assert.ok(
        read(`sitemap-${lang}.xml`).includes(`/${lang}/catalog/${id}/`),
      );
      assert.ok(
        read(`${lang}/guides/tools/index.html`).includes(
          `/${lang}/catalog/${id}/`,
        ),
      );
      assert.ok(
        read(`${lang}/help/index.html`).includes(
          `/${lang}/catalog/categories/agent-workflows/`,
        ),
      );
      assert.ok(entry.translations[lang].aliases.length);
      assert.equal(
        entry.translations[lang].markdown,
        entry.translations.en.markdown,
      );
      for (const extension of ["png", "webp"])
        assert.ok(existsSync(`dist/thumbnails/${id}-${lang}.${extension}`));
    }
  }
});
