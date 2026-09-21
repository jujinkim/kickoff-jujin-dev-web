import test from "node:test";
import assert from "node:assert/strict";
import {
  readArticles,
  validateArticles,
} from "../scripts/validate-content.mjs";
const originals = readArticles();
function changed(mutator) {
  const copy = structuredClone(originals);
  mutator(copy);
  return validateArticles(copy);
}
test("catalog has 19 complete articles in each of three languages", () => {
  assert.equal(originals.length, 57);
  assert.deepEqual(validateArticles(originals), []);
  for (const lang of ["en", "ko", "ja"])
    assert.equal(
      originals.filter(
        (a) => a.data.lang === lang && a.data.status === "published",
      ).length,
      19,
    );
});
test("duplicate stable IDs in one language are rejected", () =>
  assert.match(changed((a) => a.push(a[0])).join("\n"), /duplicate ID/));
test("missing English originals and future translation revisions are rejected", () => {
  assert.match(
    changed((a) =>
      a.splice(
        a.findIndex((x) => x.file === "en/srs.md"),
        1,
      ),
    ).join("\n"),
    /missing English/,
  );
  assert.match(
    changed(
      (a) => (a.find((x) => x.file === "ko/srs.md").data.sourceRevision = 99),
    ).join("\n"),
    /future revision/,
  );
});
test("broken related IDs and unknown examples are rejected", () => {
  assert.match(
    changed((a) => (a[0].data.related = ["missing"])).join("\n"),
    /invalid related/,
  );
  assert.match(
    changed((a) => (a[0].data.example = "missing")).join("\n"),
    /unknown example/,
  );
});
test("stale translations are allowed, shared metadata drift is not", () => {
  assert.deepEqual(
    changed((a) => {
      const d = a.find((x) => x.file === "en/srs.md").data;
      d.revision += 1;
      d.sourceRevision = d.revision;
    }),
    [],
  );
  assert.match(
    changed(
      (a) => (a.find((x) => x.file === "ko/srs.md").data.category = "design"),
    ).join("\n"),
    /shared metadata/,
  );
});
test("published translations of a draft original cannot leak", () =>
  assert.match(
    changed(
      (a) => (a.find((x) => x.file === "en/srs.md").data.status = "draft"),
    ).join("\n"),
    /original is not published/,
  ));
