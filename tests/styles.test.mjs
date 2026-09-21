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
      assert.equal(article.data.revision, 1);
      assert.equal(article.data.sourceRevision, 1);
      assert.deepEqual(
        new Set(article.data.related),
        new Set([
          "theme",
          ...styles.filter((s) => s.id !== candidate.id).map((s) => s.id),
        ]),
      );
      for (const peer of styles.filter((s) => s.id !== candidate.id))
        assert.ok(
          article.content.includes(`/${lang}/catalog/${peer.id}/`),
          `${lang}/${candidate.id}: ${peer.id}`,
        );
      for (const step of [1, 2, 3, 4])
        assert.match(article.content, new RegExp(`^${step}\\. `, "m"));
      assert.match(article.content, /```/);
      if (lang === "en") {
        const count = article.content.split(/\s+/).filter(Boolean).length;
        assert.ok(
          count >= 800 && count <= 1250,
          `${candidate.id}: ${count} words`,
        );
      }
    }
  }
});
