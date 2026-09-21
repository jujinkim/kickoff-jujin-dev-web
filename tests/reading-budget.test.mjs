import test from "node:test";
import assert from "node:assert/strict";
import {
  readArticles,
  validateArticles,
} from "../scripts/validate-content.mjs";
import {
  articleOverviewSeconds,
  readingSeconds,
} from "../src/lib/reading-budget.mjs";
test("every published overview fits one minute including a visual allowance", () => {
  for (const article of readArticles().filter(
    (a) => a.data.status === "published",
  ))
    assert.ok(
      articleOverviewSeconds(article) <= 60,
      `${article.file}: ${articleOverviewSeconds(article)}s`,
    );
});
test("reading budget counts code and unspaced CJK without counting link destinations", () => {
  assert.equal(
    readingSeconds("[Source](https://example.com/" + "long/".repeat(500) + ")"),
    readingSeconds("Source"),
  );
  assert.ok(readingSeconds("```text\n" + "word ".repeat(200) + "\n```") > 60);
  for (const text of [
    "word ".repeat(200),
    "概念".repeat(400),
    "개념".repeat(400),
  ]) {
    const articles = structuredClone(readArticles());
    articles[0].content += "\n" + text;
    assert.match(
      validateArticles(articles).join("\n"),
      /one-minute reading budget/,
    );
  }
});
