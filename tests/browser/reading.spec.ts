import { isListedArticle } from "../../scripts/catalog-data.mjs";
import { designRegistry } from "../../scripts/design-registry.mjs";
import { test, expect } from "@playwright/test";
import { readArticles } from "../../scripts/validate-content.mjs";
import { readingSeconds } from "../../src/lib/reading-budget.mjs";
import {
  articleSections,
  readingBudgets,
} from "../../src/lib/article-format.mjs";

test("articles follow Why/How/What, respect kind-specific reading budgets and load localized images", async ({
  page,
}) => {
  test.setTimeout(120_000);
  await page.route("https://giscus.app/**", (route) => route.abort());
  for (const { data } of readArticles()) {
    await page.goto(
      `/${data.lang}/${data.kind === "guide" ? "guides" : "catalog"}/${data.articleId}/`,
    );
    const text = (
      await page.locator(".article-body > section > .prose").allInnerTexts()
    ).join("\n");
    const seconds =
      15 + readingSeconds(`${data.title}\n${data.summary}\n${text}`);
    const budget = readingBudgets[data.kind as keyof typeof readingBudgets];
    expect(seconds, `${data.lang}/${data.articleId}`).toBeGreaterThanOrEqual(
      budget.min,
    );
    expect(seconds, `${data.lang}/${data.articleId}`).toBeLessThanOrEqual(
      budget.max,
    );
    await expect(
      page.locator(".article-body > section > .prose > h2"),
    ).toHaveText(articleSections[data.lang as keyof typeof articleSections]);
    expect(
      await page
        .locator(".article-body > section")
        .evaluateAll((nodes) =>
          nodes.map((node) => node.getAttribute("data-article-section")),
        ),
    ).toEqual(["why", "how", "what"]);
    const visual = page.locator(
      ".article-body [data-demo], .article-body .article-example",
    );
    await expect(visual).toHaveCount(1);
    await expect(
      page.locator(
        '[data-article-section="how"] [data-demo], [data-article-section="how"] .article-example',
      ),
    ).toHaveCount(1);
    if (data.kind === "guide")
      await expect(page.locator(".article-meta")).toContainText(/2[–〜]3/);
  }
  for (const lang of ["en", "ko", "ja"]) {
    const articles = readArticles().filter(
      (a) =>
        a.data.lang === lang &&
        a.data.kind === "concept" &&
        a.data.status === "published" &&
        isListedArticle(a.data) &&
        designRegistry[a.data.articleId],
    );
    for (const category of new Set(articles.map((a) => a.data.category))) {
      await page.goto(`/${lang}/catalog/categories/${category}/`);
      await page.locator('button[data-view="card"]').click();
      const images = page.locator(".style-preview-image");
      await expect(images).toHaveCount(
        articles.filter((a) => a.data.category === category).length,
      );
      for (const img of await images.all()) {
        await img.scrollIntoViewIfNeeded();
        await expect(img).toHaveAttribute("alt", /.+/);
        await expect
          .poll(() => img.evaluate((el: HTMLImageElement) => el.naturalWidth))
          .toBeGreaterThan(0);
      }
    }
  }
});
