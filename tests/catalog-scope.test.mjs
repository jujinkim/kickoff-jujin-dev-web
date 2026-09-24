import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createConcept } from "../scripts/content-new.mjs";
import { readArticles } from "../scripts/validate-content.mjs";

const read = (path) => readFileSync(`dist/${path}`, "utf8");
const removedConcepts = [
  "user-story",
  "use-case",
  "job-story",
  "rolling",
  "blue-green",
  "canary",
];
const removedGuides = ["collections", "ooad", "adr"];
const planned = [
  "list",
  "set",
  "map",
  "array",
  "linked-list",
  "stack",
  "queue",
  "priority-queue",
];
const removedCategories = [
  "data",
  "abstract-collections",
  "sequential-storage",
  "processing-order",
  "requirements",
  "release-replacement",
];

test("project choices remain discoverable without internal implementation choices", () => {
  const catalog = JSON.parse(read("ai/catalog.json"));
  assert.equal(catalog.schemaVersion, 1);
  assert.equal(catalog.articles.filter((a) => a.kind === "concept").length, 64);
  assert.equal(catalog.articles.filter((a) => a.kind === "guide").length, 9);
  assert.equal(catalog.categories.filter((c) => !c.parent).length, 5);
  for (const id of [...removedConcepts, ...removedGuides, ...planned]) {
    assert.ok(!catalog.articles.some((a) => a.id === id));
    assert.ok(catalog.articles.every((a) => !a.related.includes(id)));
    assert.ok(!read("llms.txt").includes(`/${id}.md`));
  }
  const retained = [
    "layered-architecture",
    "microservices",
    "minimalism",
    "react",
    "godot",
    "static-hosting",
    "subscription",
    "rewarded-ads",
  ];
  for (const id of retained)
    assert.ok(
      catalog.articles.some((a) => a.id === id),
      id,
    );
  for (const lang of ["en", "ko", "ja"]) {
    for (const page of [
      "index.html",
      "catalog/index.html",
      "guides/index.html",
      "start/index.html",
      "help/index.html",
      "ai/index.html",
      "about/index.html",
    ]) {
      const html = read(`${lang}/${page}`);
      for (const id of removedCategories)
        assert.ok(!html.includes(`href="/${lang}/catalog/categories/${id}/"`));
      for (const id of [...removedConcepts, ...removedGuides]) {
        assert.ok(!html.includes(`href="/${lang}/catalog/${id}/"`));
        assert.ok(!html.includes(`href="/${lang}/guides/${id}/"`));
      }
      assert.ok(!html.includes("data-catalog-retired"));
    }
    for (const id of removedCategories) {
      assert.ok(!read(`sitemap-${lang}.xml`).includes(`/categories/${id}/`));
      assert.ok(
        read(`${lang}/catalog/categories/${id}/index.html`).includes(
          'http-equiv="refresh"',
        ),
      );
    }
    for (const id of planned)
      assert.ok(!existsSync(`dist/${lang}/catalog/${id}/index.html`));
    for (const id of [...removedConcepts, ...removedGuides]) {
      const kind = removedGuides.includes(id) ? "guides" : "catalog";
      const html = read(`${lang}/${kind}/${id}/index.html`);
      assert.ok(html.includes(`data-comment-term="${id}"`));
      assert.ok(html.includes('content="noindex"'));
      assert.ok(!html.includes("data-pagefind-body"));
      assert.ok(!html.includes('data-copy="article-prompt"'));
      assert.ok(!html.includes("data-catalog-retired"));
      assert.ok(!read(`sitemap-${lang}.xml`).includes(`/${kind}/${id}/`));
      assert.ok(read(`${lang}/${kind}/${id}.md`).includes(`ID: ${id}`));
    }
    for (const id of ["srs", "architecture", "shipping"]) {
      const html = read(`${lang}/guides/${id}/index.html`);
      for (const removed of [...removedConcepts, ...removedGuides]) {
        assert.ok(!html.includes(`href="/${lang}/guides/${removed}/"`));
        assert.ok(!html.includes(`href="/${lang}/catalog/${removed}/"`));
      }
    }
  }
});

test("authoring queue cannot regenerate retired choices", () => {
  const queue = execFileSync(
    process.execPath,
    ["scripts/content-new.mjs", "--list"],
    { encoding: "utf8" },
  );
  for (const id of [...removedConcepts, ...planned]) {
    assert.ok(
      !queue.split("\n").some((line) => line.split(/\s+/).includes(id)),
      id,
    );
    assert.throws(() => createConcept(id), /Unknown candidate/);
  }
});

test("integrated guides and startup sources preserve ownership across languages", () => {
  const articles = readArticles();
  for (const lang of ["en", "ko", "ja"]) {
    for (const id of ["srs", "architecture", "shipping"]) {
      const a = articles.find(
        (a) => a.data.articleId === id && a.data.lang === lang,
      );
      assert.ok(a.data.revision >= 4);
      assert.equal(
        a.data.sourceRevision,
        articles.find(
          (original) =>
            original.data.articleId === id && original.data.lang === "en",
        ).data.revision,
      );
    }
    const startup = readFileSync(`src/startup/v1/${lang}.md`, "utf8");
    assert.ok(startup.includes("2026-09-24"));
  }
  const instructions = read("ai/instructions.md");
  assert.ok(
    instructions.includes("These internal choices need no separate delegation"),
  );
  assert.ok(
    instructions.includes("Planning never grants permission to deploy"),
  );
  assert.ok(!instructions.includes("EVERY unresolved choice"));
  const startup = read("ai/startup/latest.md");
  assert.ok(startup.includes("Revision: 3."));
  assert.ok(
    instructions.includes("A local feature still needs a user decision"),
  );
  assert.ok(
    startup.includes(
      "Existing approval and development authorization remain valid",
    ),
  );
});
