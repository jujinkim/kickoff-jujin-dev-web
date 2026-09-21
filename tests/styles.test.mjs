import test from "node:test";
import assert from "node:assert/strict";
import { readArticles } from "../scripts/validate-content.mjs";
import { candidates, candidateStatus } from "../scripts/catalog-data.mjs";
const articles = readArticles();
const styles = candidates.filter((c) => c.category === "styles");
test("reviewed styles preserve full group identity and textual examples", () => {
  assert.equal(styles.length, 7);
  assert.equal(
    candidates.filter((c) => candidateStatus(c, articles) === "planned").length,
    51,
  );
  for (const candidate of styles) {
    for (const lang of ["en", "ko", "ja"]) {
      const article = articles.find(
        (a) => a.data.articleId === candidate.id && a.data.lang === lang,
      );
      assert.ok(article);
      assert.equal(article.data.status, "published");
      assert.equal(article.data.kind, "concept");
      assert.equal(article.data.category, "styles");
      assert.equal(article.data.revision, 2);
      assert.equal(article.data.sourceRevision, 2);
      assert.deepEqual(
        new Set(article.data.related),
        new Set([
          "theme",
          ...styles.filter((s) => s.id !== candidate.id).map((s) => s.id),
        ]),
      );
      assert.match(article.content, /```/);
    }
  }
});
