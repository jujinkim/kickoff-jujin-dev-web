import { test, expect } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { readDetails } from "../../scripts/validate-details.mjs";
import { readArticles } from "../../scripts/validate-content.mjs";
import { isListedArticle } from "../../scripts/catalog-data.mjs";
const supplements = readDetails();
const active = readArticles().filter(
  (a) =>
    a.data.lang === "en" &&
    a.data.status === "published" &&
    isListedArticle(a.data),
);
const articleRoute = (id: string) =>
  `${active.find((a) => a.data.articleId === id)?.data.kind === "guide" ? "guides" : "catalog"}/${id}/`;
const review = { articles: active.map((a) => a.data.articleId) };

const languages = ["en", "ko", "ja"] as const;
test.beforeEach(async ({ page }) => {
  await page.route("https://giscus.app/**", (route) => route.abort());
});
for (const lang of languages) {
  test(`${lang}: photo routes and recipe filters demonstrate their own concepts`, async ({
    page,
  }) => {
    await page.goto(`/${lang}/catalog/glassmorphism/`);
    const glass = page.locator('[data-demo="glassmorphism"]');
    const route = glass.locator('[data-route="1"]');
    await route.focus();
    await page.keyboard.press("Enter");
    await expect(route).toHaveAttribute("aria-pressed", "true");
    await expect(glass.locator('[data-route-panel="1"]')).toBeVisible();
    await expect(glass.locator('[data-route-panel="0"]')).toBeHidden();
    await route.click();
    await expect(glass.locator('[data-route-panel="1"]')).toContainText(
      "4.1 km",
    );
    await glass.locator("input[data-opaque]").check();
    expect(
      await glass
        .locator(".route-card")
        .evaluate((el) => getComputedStyle(el).backdropFilter),
    ).toBe("none");
    await glass.locator("[data-reset]").click();
    await expect(glass.locator('[data-route="0"]')).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect(glass.locator("input[data-opaque]")).not.toBeChecked();
    await route.click();
    await page.reload();
    await expect(glass.locator('[data-route="0"]')).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    await page.goto(`/${lang}/catalog/two-columns/`);
    const recipes = page.locator('[data-demo="two-columns"]');
    await recipes.locator("select[data-ingredient]").selectOption("tomato");
    await recipes.locator("select[data-time]").selectOption("20");
    await expect(recipes.locator("[data-recipe]:visible")).toHaveCount(1);
    await expect(recipes.locator("[data-count]")).toHaveText("1 / 4");
    await recipes.locator("[data-recipe]:visible summary").focus();
    await page.keyboard.press("Enter");
    await expect(recipes.locator("details[open]")).toHaveCount(1);
    await recipes.locator("select[data-time]").selectOption("10");
    await expect(recipes.locator("[data-empty]")).toBeVisible();
    await recipes.locator("[data-reset]").focus();
    await page.keyboard.press("Enter");
    await expect(recipes.locator("[data-reset]")).toBeFocused();
    await expect(recipes.locator("[data-recipe]:visible")).toHaveCount(4);
    await expect(recipes.locator("details[open]")).toHaveCount(0);
    await recipes.locator("select[data-ingredient]").selectOption("mushroom");
    await page.reload();
    await expect(recipes.locator("[data-count]")).toHaveText("4 / 4");
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      const [filters, results] = await Promise.all([
        recipes.locator(".recipe-filters").boundingBox(),
        recipes.locator(".recipes").boundingBox(),
      ]);
      if (width === 390)
        expect(filters!.y + filters!.height).toBeLessThanOrEqual(results!.y);
      else expect(filters!.x + filters!.width).toBeLessThan(results!.x);
    }
  });

  test(`${lang}: all active screens reflow, expose evidence, and survive enlargement`, async ({
    page,
  }) => {
    test.setTimeout(360_000);
    mkdirSync("artifacts/quality-review", { recursive: true });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const routes = [
      "",
      "start/",
      "catalog/",
      "catalog/categories/design/",
      "help/",
      "about/",
      "ai/",
      ...review.articles.map(articleRoute),
    ];
    for (const route of routes) {
      await page.goto(`/${lang}/${route}`);
      await page.evaluate(() => document.fonts.ready);
      await page.locator("[data-demo] img").evaluateAll(async (images) => {
        await Promise.all(
          images.map(async (node) => {
            const img = node as HTMLImageElement;
            img.loading = "eager";
            await img.decode();
          }),
        );
      });
      const key = route.replaceAll("/", "-") || "home";
      const details = page.locator("[data-article-details]");
      if (await details.count()) {
        await expect(details.locator("details")).toHaveCount(4);
        for (const summary of await details.locator("summary").all()) {
          await summary.focus();
          await page.keyboard.press("Enter");
        }
        await expect(details.locator("details[open]")).toHaveCount(4);
        const supplement = supplements.find(
          (d) =>
            d.data.lang === lang &&
            d.data.articleId === route.split("/").filter(Boolean).at(-1),
        );
        if (!supplement)
          throw new Error(`Missing evidence for ${lang}/${route}`);
        await expect(details.locator("time").first()).toHaveText(
          supplement.data.sources[0].checked,
        );
      }
      for (const width of [320, 390, 768, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        for (const theme of ["light", "dark"]) {
          await page.evaluate(
            (t) => (document.documentElement.dataset.theme = t),
            theme,
          );
          await expect
            .poll(
              () =>
                page.evaluate(
                  () => document.documentElement.scrollWidth <= innerWidth,
                ),
              { message: `${route}/${width}/${theme}` },
            )
            .toBe(true);
          for (const img of await page.locator("[data-demo] img").all())
            await expect
              .poll(() =>
                img.evaluate(
                  (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
                ),
              )
              .toBe(true);
          if (
            lang === "ko" &&
            ((width === 1440 && theme === "light") ||
              (width === 390 && theme === "dark"))
          ) {
            await page.evaluate(() => {
              (document.activeElement as HTMLElement | null)?.blur();
              window.scrollTo(0, 0);
            });
            await (
              (await page.locator("[data-demo]").count())
                ? page.locator("[data-demo]")
                : page
            ).screenshot({
              path: `artifacts/quality-review/${key}${lang}-${width}-${theme}.png`,
              // Chromium can include fixed off-screen navigation in tall element captures.
              style: ".skip-link { visibility: hidden !important; }",
            });
          }
        }
      }
      await page.setViewportSize({ width: 768, height: 1000 });
      await page.evaluate(
        () => (document.documentElement.style.fontSize = "200%"),
      );
      await expect
        .poll(
          () =>
            page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth,
            ),
          { message: `${route}/200%-text` },
        )
        .toBe(true);
      await page.evaluate(() => (document.documentElement.style.fontSize = ""));
    }
    expect(errors).toEqual([]);
  });

  test(`${lang}: all active supplementary reading works without JavaScript`, async ({
    browser,
    baseURL,
  }) => {
    test.setTimeout(180_000);
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 900 },
    });
    const page = await context.newPage();
    for (const id of review.articles) {
      await page.goto(`${baseURL}/${lang}/${articleRoute(id)}`);
      await expect(page.locator("[data-article-section]")).toHaveCount(3);
      const summaries = page.locator("[data-article-details] summary");
      await summaries.last().click();
      await expect(
        page.locator("[data-article-details] details[open] a").first(),
      ).toBeVisible();
      for (const control of await page.locator("[data-interactive]").all())
        await expect(control).toBeDisabled();
    }
    await context.close();
  });
}

test("catalog finds sidebar by legacy alias and by supplementary terminology", async ({
  page,
}) => {
  await page.goto("/ko/catalog/");
  await page.locator("#search").fill("2열");
  await expect(
    page.locator('#search-results a[href="/ko/catalog/two-columns/"]'),
  ).toBeVisible();
  await page.goto("/en/catalog/");
  await page.locator("#search").fill("column-count");
  await expect(
    page.locator('#search-results a[href="/en/catalog/two-columns/"]'),
  ).toBeVisible();
});
