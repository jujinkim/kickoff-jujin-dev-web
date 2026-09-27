import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { readArticles } from "../scripts/validate-content.mjs";
import {
  readDetails,
  validateDetails,
  needsDetails,
} from "../scripts/validate-details.mjs";

const articles = readArticles(),
  details = readDetails();
test("every active article has all three supplements, even when an entire set is removed", () => {
  const active = articles.filter(needsDetails);
  assert.equal(active.length, 249);
  assert.equal(active.filter((a) => a.data.kind === "concept").length, 74 * 3);
  assert.equal(active.filter((a) => a.data.kind === "guide").length, 9 * 3);
  assert.equal(details.length, active.length);
  const id = active[0].data.articleId;
  const missing = details.filter((d) => d.data.articleId !== id);
  assert.equal(
    validateDetails(articles, missing).filter((e) =>
      e.includes("missing active article"),
    ).length,
    3,
  );
  assert.equal(
    validateDetails(articles, []).filter((e) =>
      e.includes("missing active article"),
    ).length,
    249,
  );
});
test("supplements join current articles with translated sections and dated claim evidence", () => {
  assert.deepEqual(validateDetails(articles, details), []);
  for (const mutate of [
    (d) => d.pop(),
    (d) => {
      d[0].data.sourceRevision--;
    },
    (d) => {
      d[0].data.articleId = "absent-article";
    },
    (d) => {
      d[0].data.sources[0].claim = "";
    },
    (d) => {
      d[0].data.sources[0].checked = "yesterday";
    },
    (d) => {
      d[0].content = "## Applications\nWrong order";
    },
    (d) => {
      d[0].data.sources[0].url = "https://example.org/unreviewed";
    },
  ]) {
    const copy = structuredClone(details);
    mutate(copy);
    assert.ok(validateDetails(articles, copy).length > 0);
  }
});
test("English Markdown includes supplements while localized HTML retains local evidence", () => {
  for (const detail of details) {
    const article = articles.find(
      (a) =>
        a.data.lang === detail.data.lang &&
        a.data.articleId === detail.data.articleId,
    );
    const kind = article.data.kind === "guide" ? "guides" : "catalog";
    const id = detail.data.articleId;
    const html = readFileSync(
      `dist/${detail.data.lang}/${kind}/${id}/index.html`,
      "utf8",
    );
    assert.ok(html.includes("data-article-details"));
    assert.ok(html.includes(detail.data.sources[0].checked));
    for (const source of detail.data.sources) {
      assert.ok(
        html.includes(source.url.replaceAll("&", "&amp;")),
        `${id}: HTML evidence URL missing`,
      );
    }
    const en = readFileSync(`dist/en/${kind}/${id}.md`, "utf8");
    assert.ok(en.includes("## Selection & comparison"));
    assert.ok(en.includes("## Evidence"));
    for (const source of detail.data.sources)
      assert.ok(en.includes(source.url));
    assert.equal(
      readFileSync(`dist/${detail.data.lang}/${kind}/${id}.md`, "utf8"),
      en,
    );
  }
});
