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
import { articleSections, readingBudgets } from "../src/lib/article-format.mjs";
test("guides take 2–3 minutes and concepts fit one minute, including the visual allowance", () => {
  for (const article of readArticles().filter(
    (a) => a.data.status === "published",
  ))
    assert.ok(
      articleOverviewSeconds(article) >=
        readingBudgets[article.data.kind].min &&
        articleOverviewSeconds(article) <=
          readingBudgets[article.data.kind].max,
      `${article.file}: ${articleOverviewSeconds(article)}s`,
    );
});
test("reading budget counts code and unspaced CJK without counting link destinations", () => {
  assert.equal(
    readingSeconds("1. First action\n2. Next action"),
    readingSeconds("First action\nNext action"),
  );
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
    articles.find(
      (a) => a.data.kind === "concept" && a.data.lang === "en",
    ).content += "\n" + text;
    assert.match(
      validateArticles(articles).join("\n"),
      /concept reading budget/,
    );
  }
});
test("guide budgets reject both a thin definition and padded prose", () => {
  for (const content of ["Too short.", "word ".repeat(600)]) {
    const articles = structuredClone(readArticles());
    articles.find((a) => a.file === "en/srs.md").content = content;
    assert.match(validateArticles(articles).join("\n"), /guide reading budget/);
  }
});
test("every language requires populated Why, How, What sections in that order", () => {
  for (const lang of ["en", "ko", "ja"]) {
    const articles = structuredClone(readArticles());
    const article = articles.find((a) => a.file === `${lang}/minimalism.md`);
    const [why, how, what] = articleSections[lang];
    article.content = `## ${what}\n\nDefinition.\n\n## ${how}\n\nExample.\n\n## ${why}\n\nProblem.\n`;
    assert.match(
      validateArticles(articles).join("\n"),
      /sections missing or out of order/,
    );
    article.content = `## ${why}\n\n## ${how}\n\nExample.\n\n## ${what}\n\nDefinition.\n`;
    assert.match(
      validateArticles(articles).join("\n"),
      /missing section content/,
    );
  }
});
