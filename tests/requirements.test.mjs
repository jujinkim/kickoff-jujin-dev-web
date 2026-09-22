import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readArticles } from "../scripts/validate-content.mjs";
import {
  designRegistry,
  validateDesigns,
} from "../scripts/design-registry.mjs";

test("planning publication rejects missing diagrams, captures and stale translations", () => {
  const articles = readArticles();
  assert.deepEqual(validateDesigns(articles), []);
  const planning = articles.filter(
    (a) =>
      ["requirements", "boundaries", "service-split"].includes(
        a.data.category,
      ) && a.data.lang === "en",
  );
  assert.equal(planning.length, 9);
  for (const {
    data: { articleId: id },
  } of planning) {
    const registry = structuredClone(designRegistry);
    delete registry[id];
    assert.ok(
      validateDesigns(articles, registry).includes(
        `${id}: missing design demo registration`,
      ),
    );
    const stale = structuredClone(articles);
    stale.find(
      (a) => a.data.articleId === id && a.data.lang === "ja",
    ).data.sourceRevision = 0;
    assert.ok(
      validateDesigns(stale).includes(
        `${id}/ja: missing or stale published translation`,
      ),
    );
    const missingCapture = (path) =>
      !path.endsWith(`${id}-ko.png`) && existsSync(path);
    assert.ok(
      validateDesigns(articles, designRegistry, missingCapture).includes(
        `${id}/ko: missing thumbnail`,
      ),
    );
    assert.deepEqual(
      validateDesigns(articles, designRegistry, missingCapture, {
        thumbnails: false,
      }),
      [],
    );
  }
});
