import { isListedArticle } from "../../scripts/catalog-data.mjs";
import { designRegistry } from "../../scripts/design-registry.mjs";
import { test, expect } from "@playwright/test";
import { readArticles } from "../../scripts/validate-content.mjs";
import { readingSeconds } from "../../src/lib/reading-budget.mjs";

test("published introductions stay concise and localized catalog images load", async ({
  page,
}) => {
  test.setTimeout(120_000);
  await page.route("https://giscus.app/**", (route) => route.abort());
  for (const { data } of readArticles()) {
    await page.goto(
      `/${data.lang}/${data.kind === "guide" ? "guides" : "catalog"}/${data.articleId}/`,
    );
    const text = await page.locator("article.prose").innerText();
    expect(
      readingSeconds(text),
      `${data.lang}/${data.articleId}`,
    ).toBeLessThanOrEqual(60);
    await expect(page.locator("article.prose h2")).toHaveCount(3);
  }
  for (const lang of ["en", "ko", "ja"]) {
    await page.goto(`/${lang}/catalog/`);
    await page.locator('button[data-view="card"]').click();
    const images = page.locator(".style-preview-image");
    await expect(images).toHaveCount(
      readArticles().filter(
        (a) =>
          a.data.lang === lang &&
          isListedArticle(a.data) &&
          designRegistry[a.data.articleId],
      ).length,
    );
    for (const img of await images.all()) {
      await img.scrollIntoViewIfNeeded();
      await expect(img).toHaveAttribute("alt", /.+/);
      await expect
        .poll(() => img.evaluate((el: HTMLImageElement) => el.naturalWidth))
        .toBeGreaterThan(0);
    }
  }
});
