import { test, expect } from "@playwright/test";
import { readArticles } from "../../scripts/validate-content.mjs";
import { readingSeconds } from "../../src/lib/reading-budget.mjs";

test("57 visible introductions stay concise and localized catalog images load", async ({
  page,
}) => {
  test.setTimeout(120_000);
  await page.route("https://giscus.app/**", (route) => route.abort());
  for (const { data } of readArticles()) {
    await page.goto(
      `/${data.lang}/${data.kind === "guide" ? "guides" : "catalog"}/${data.articleId}/`,
    );
    const text = await page.locator(".article-main").innerText();
    expect(
      readingSeconds(text),
      `${data.lang}/${data.articleId}`,
    ).toBeLessThanOrEqual(60);
    await expect(page.locator("article.prose h2")).toHaveCount(3);
  }
  for (const lang of ["en", "ko", "ja"]) {
    await page.goto(`/${lang}/catalog/`);
    await page.locator('button[data-view="preview"]').click();
    const images = page.locator(".style-preview-image");
    await expect(images).toHaveCount(7);
    for (const img of await images.all()) {
      await img.scrollIntoViewIfNeeded();
      await expect(img).toHaveAttribute("alt", /.+/);
      await expect
        .poll(() => img.evaluate((el: HTMLImageElement) => el.naturalWidth))
        .toBeGreaterThan(0);
    }
  }
});
