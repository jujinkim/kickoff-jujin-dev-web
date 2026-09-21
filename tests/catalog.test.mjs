import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  candidates,
  taxonomy,
  validateCatalog,
  candidateStatus,
} from "../scripts/catalog-data.mjs";
import { createConcept } from "../scripts/content-new.mjs";
import {
  readArticles,
  validateArticles,
} from "../scripts/validate-content.mjs";
const articles = readArticles();
const guides = articles.filter((a) => a.data.kind === "guide");
test("58 candidates, six roots, styles first; valid tree and relationships", () => {
  assert.equal(candidates.length, 58);
  assert.equal(taxonomy.filter((c) => !c.parent).length, 6);
  assert.deepEqual(validateCatalog(taxonomy, candidates, articles), []);
  assert.ok(
    candidates
      .toSorted((a, b) => a.order - b.order)
      .slice(0, 7)
      .every((c) => c.category === "styles"),
  );
});
test("taxonomy rejects duplicate IDs, missing parents and cycles", () => {
  assert.match(
    validateCatalog([...taxonomy, taxonomy[0]], candidates, articles).join(
      "\n",
    ),
    /duplicate category/,
  );
  for (const [parent, pattern] of [
    ["missing", /missing parent/],
    ["boundaries", /cycle/],
  ]) {
    const copy = structuredClone(taxonomy);
    copy.find((c) => c.id === "planning").parent = parent;
    assert.match(
      validateCatalog(copy, candidates, articles).join("\n"),
      pattern,
    );
  }
});
test("candidate collisions, non-leaf categories and broken peers/guides fail", () => {
  assert.match(
    validateCatalog(taxonomy, [...candidates, candidates[0]], articles).join(
      "\n",
    ),
    /duplicate candidate/,
  );
  for (const [field, value, pattern] of [
    ["id", "srs", /collision/],
    ["category", "design", /leaf category/],
    ["compareWith", ["missing"], /comparison peer/],
    ["relatedGuides", ["missing"], /related guide/],
  ]) {
    const copy = structuredClone(candidates);
    copy[0][field] = value;
    assert.match(validateCatalog(taxonomy, copy, articles).join("\n"), pattern);
  }
});
test("scaffolds remain private, derive status and never overwrite any language", () => {
  const dir = mkdtempSync(join(tmpdir(), "jujin-scaffold-"));
  try {
    const candidate = candidates.find((c) => c.id === "brutalism");
    assert.equal(candidateStatus(candidate, guides), "planned");
    const paths = createConcept("brutalism", dir);
    const drafts = readArticles(dir);
    assert.equal(drafts.length, 3);
    assert.ok(
      drafts.every(
        (a) => a.data.status === "draft" && a.data.kind === "concept",
      ),
    );
    assert.equal(candidateStatus(candidate, drafts), "draft");
    assert.deepEqual(validateArticles([...guides, ...drafts]), []);
    const before = paths.map((p) => readFileSync(p, "utf8"));
    assert.throws(() => createConcept("brutalism", dir), /overwrite/);
    assert.deepEqual(
      paths.map((p) => readFileSync(p, "utf8")),
      before,
    );
    rmSync(paths[0]);
    assert.throws(() => createConcept("brutalism", dir), /overwrite/);
    assert.throws(() => createConcept("../escape", dir), /Unknown candidate/);
    const mismatch = structuredClone([...guides, ...drafts]);
    mismatch.find((a) => a.file === "ko/brutalism.md").data.kind = "guide";
    assert.match(validateArticles(mismatch).join("\n"), /shared metadata/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
