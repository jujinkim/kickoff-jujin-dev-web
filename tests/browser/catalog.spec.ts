import { activeTaxonomy as taxonomy } from "../../scripts/catalog-data.mjs";
import { isDesignCategory } from "../../scripts/design-registry.mjs";
import { readArticles } from "../../scripts/validate-content.mjs";
const publishedDesignCount = readArticles().filter(
  (a) =>
    a.data.lang === "en" &&
    a.data.status === "published" &&
    a.data.kind === "concept" &&
    isDesignCategory(a.data.category),
).length;
import { test, expect } from "@playwright/test";
for (const [lang, query, id] of [
  ["en", "requirements", "srs"],
  ["ko", "요구사항", "srs"],
  ["ja", "要件", "srs"],
]) {
  test(`${lang}: full-text search, category and deep links`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(`/${lang}/guides/`);
    await expect(page.locator(".catalog-card:visible")).toHaveCount(9);
    await page.locator("#search").fill(query);
    const target = page.locator(
      `#search-results a[href="/${lang}/guides/${id}/"]`,
    );
    await expect(target).toBeVisible();
    const links = await page
      .locator("#search-results a")
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")));
    expect(links.every((link) => link?.startsWith(`/${lang}/`))).toBeTruthy();
    await expect(page.locator('#category option[value="data"]')).toHaveCount(0);
    await page.locator("#search").fill("");
    await page.locator("#category").selectOption("planning");
    await expect(page.locator(".catalog-card:visible")).toHaveCount(2);
    await page.locator("#search").fill(query);
    await expect(target).toBeVisible();
    await page.goto(`/${lang}/guides/srs/`);
    await page.reload();
    await expect(page.locator("h1")).toContainText(
      /Requirements|요구사항|要件/,
    );
    expect(errors).toEqual([]);
  });
}
test("views, theme and language survive navigation and reload", async ({
  page,
}) => {
  await page.goto("/en/guides/");
  for (const view of ["list", "card"]) {
    await page.locator(`button[data-view=${view}]`).click();
    await expect(page.locator("html")).toHaveAttribute("data-view", view);
    await page.reload();
    await expect(
      page.locator(`button[data-view=${view}][aria-pressed=true]`),
    ).toBeVisible();
  }
  await page.locator("#theme-toggle").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("#theme-toggle")).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await page.goto("/en/guides/srs/");
  await page.locator(".languages a[lang=ko]").click();
  await expect(page).toHaveURL(/\/ko\/guides\/srs\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "ko");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});
test("keyboard navigation, copy and AI lookup complete the reader flow", async ({
  page,
  context,
  request,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/en/");
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused();
  await page.goto("/en/guides/srs/");
  await page.locator(".prompt-section summary").click();
  await page.locator("[data-copy]").click();
  await expect(page.locator(".prompt-section [role=status]")).toHaveText(
    "Copied",
  );
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain(
    "Ask only about unresolved product behavior",
  );
  await page.goto("/en/ai/");
  await page.locator("[data-copy]").click();
  await expect(page.locator("[role=status]")).toHaveText("Copied");
  const catalog = await (await request.get("/ai/catalog.json")).json();
  const article = catalog.articles.find((a: any) =>
    a.translations.ko.aliases.includes("요구사항"),
  );
  const md = await request.get(
    new URL(article.translations.ko.markdown).pathname,
  );
  expect(md.ok()).toBeTruthy();
  expect(article.translations.ko.markdown).toBe(
    article.translations.en.markdown,
  );
  expect(await md.text()).toContain("## What: the concept");
});
test("search failure keeps browse available and copy failure explains fallback", async ({
  page,
}) => {
  await page.route("**/pagefind/**", (route) => route.abort());
  await page.goto("/en/guides/");
  await page.locator("#search").fill("requirements");
  await expect(page.locator("#result-status")).toContainText(
    "Search could not load",
  );
  await expect(page.locator(".catalog-card:visible")).toHaveCount(9);
  await page.goto("/en/ai/");
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: () => Promise.reject(new Error("denied")) },
      configurable: true,
    }),
  );
  await page.locator("[data-copy]").click();
  await expect(page.locator("[role=status]")).toContainText("Copy failed");
  await expect(page.locator("#project-prompt")).toBeVisible();
});
test("mobile and desktop layouts contain content without horizontal overflow", async ({
  page,
}) => {
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const lang of ["en", "ko", "ja"]) {
      for (const path of [
        "",
        "catalog/",
        "catalog/categories/styles/",
        "catalog/categories/columns/",
        "guides/",
        "guides/layout/",
        "ai/",
      ]) {
        await page.goto(`/${lang}/${path}`);
        await expect(page.locator("h1")).toBeVisible();
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
        ).toBeTruthy();
      }
    }
  }
});
test("comments use identical strict mapping and language-specific widget configuration", async ({
  page,
}) => {
  await page.route("https://giscus.app/client.js", (route) =>
    route.fulfill({ contentType: "application/javascript", body: "" }),
  );
  for (const lang of ["en", "ko", "ja"]) {
    await page.goto(`/${lang}/guides/srs/`);
    const script = page.locator(".giscus script");
    await expect(script).toHaveAttribute("data-mapping", "specific");
    await expect(script).toHaveAttribute("data-strict", "1");
    await expect(script).toHaveAttribute("data-term", "srs");
    await expect(script).toHaveAttribute("data-lang", lang);
  }
});

for (const lang of ["en", "ko", "ja"]) {
  test(`${lang}: concept tree, published styles and legacy redirect`, async ({
    page,
  }) => {
    await page.goto(`/${lang}/catalog/`);
    await expect(page.locator(".catalog-card")).toHaveCount(0);
    await page
      .locator(`.category-card[href="/${lang}/catalog/categories/design/"]`)
      .click();
    await page
      .locator(`.category-tree a[href="/${lang}/catalog/categories/styles/"]`)
      .click();
    await expect(page.locator("[data-candidate]")).toHaveCount(0);
    await expect(page.locator("[data-candidate] a")).toHaveCount(0);
    await expect(page.locator("table.comparison")).toHaveCount(1);
    await page.locator(".languages a[lang=en]").click();
    await expect(page).toHaveURL(/\/en\/catalog\/categories\/styles\/$/);
    await page.goto(`/${lang}/catalog/srs/`);
    await expect(page).toHaveURL(new RegExp(`/${lang}/guides/srs/$`));
    await expect(page.locator("h1")).toContainText(
      /Requirements|요구사항|要件/,
    );
  });
}

for (const [lang, layout, typography] of [
  ["en", "Layout", "Typography"],
  ["ko", "레이아웃", "타이포그래피"],
  ["ja", "レイアウト", "タイポグラフィ"],
]) {
  test(`${lang}: category-scoped groups, parent filters and search labels`, async ({
    page,
  }) => {
    await page.goto(`/${lang}/catalog/categories/design/`);
    expect(
      await page
        .locator("[data-catalog-group]:visible")
        .evaluateAll((nodes) =>
          nodes.map((node) => node.getAttribute("data-catalog-group")).sort(),
        ),
    ).toEqual(["styles", "layout", "typography"].sort());
    await expect(
      page.locator('#category option[value="business"]'),
    ).toHaveCount(0);
    await page.locator("#category").selectOption("layout");
    await expect(page.locator(".catalog-card:visible")).toHaveCount(6);
    await expect(page.locator("[data-catalog-group]:visible h2")).toHaveText(
      layout,
    );
    for (const view of ["card", "list"]) {
      await page.locator(`button[data-view=${view}]`).click();
      await expect(
        page.locator(".catalog-card:visible .card-category").first(),
      ).toContainText(layout);
    }
    await page.reload();
    await expect(page.locator("#category")).toHaveValue("layout");
    await expect(page.locator(".catalog-card:visible")).toHaveCount(6);
    await page.locator("#category").selectOption("typography");
    await expect(page.locator(".catalog-card:visible")).toHaveCount(5);
    const title = await page
      .locator(".catalog-card:visible h3")
      .first()
      .innerText();
    await page.locator("#search").fill(title);
    await expect(
      page.locator("#search-results .card-category").first(),
    ).toContainText(typography);
    await page.locator("#category").selectOption("layout");
    await expect(page.locator("#search-results article")).toHaveCount(0);
    await page.locator("#search").fill("");
    await expect(page.locator(".catalog-card:visible")).toHaveCount(6);
    await page.locator("#category").selectOption("columns");
    await expect(page.locator(".catalog-card:visible")).toHaveCount(3);
    await page.locator("#category").selectOption("design");
    await expect(page.locator(".catalog-card:visible")).toHaveCount(
      publishedDesignCount,
    );
    await expect(page.locator("[data-catalog-group]:visible")).toHaveCount(3);
    await page.goto(`/${lang}/catalog/categories/business/`);
    await expect(page.locator(".catalog-card:visible")).toHaveCount(24);
    await expect(page.locator("[data-catalog-group]:visible")).toHaveCount(7);
  });
}

test("legacy views become cards with full-width top-cropped thumbnails", async ({
  page,
}) => {
  for (const previous of ["preview", "thumbnail"]) {
    await page.addInitScript(
      (value) => localStorage.setItem("catalog-view", value),
      previous,
    );
    await page.goto("/ko/catalog/categories/design/");
    await expect(page.locator("button[data-view]")).toHaveCount(2);
    await expect(page.locator("button[data-view=card]")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    for (const width of [320, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const id of [
        "single-column",
        "two-columns",
        "masonry",
        "liquid-glass",
      ]) {
        const image = page.locator(`img[src="/thumbnails/${id}-ko.png"]`);
        await image.scrollIntoViewIfNeeded();
        await expect(image).toBeVisible();
        await expect
          .poll(() =>
            image.evaluate(
              (node: HTMLImageElement) =>
                node.complete && node.naturalHeight > 0,
            ),
          )
          .toBeTruthy();
        const dimensions = await image.evaluate((node: HTMLImageElement) => ({
          height: node.clientHeight,
          natural: (node.clientWidth * node.naturalHeight) / node.naturalWidth,
          fit: getComputedStyle(node).objectFit,
          position: getComputedStyle(node).objectPosition,
          width: node.clientWidth,
          parentWidth: node.parentElement!.clientWidth,
        }));
        expect(dimensions.height).toBeLessThanOrEqual(360);
        expect(
          Math.abs(dimensions.height - Math.min(360, dimensions.natural)),
        ).toBeLessThan(1);
        expect(dimensions.fit).toBe("cover");
        expect(dimensions.position).toBe("50% 0%");
        expect(dimensions.width).toBe(dimensions.parentWidth);
      }
    }
    await page.locator("button[data-view=list]").click();
    await expect(page.locator(".style-preview-image:visible")).toHaveCount(0);
  }
});

for (const javaScriptEnabled of [true, false]) {
  test(`category cards: responsive and keyboard accessible (JS ${javaScriptEnabled})`, async ({
    browser,
  }, testInfo) => {
    test.setTimeout(120_000);
    const context = await browser.newContext({ javaScriptEnabled });
    const page = await context.newPage();
    const roots = taxonomy.filter(
      (category: { parent: string | null }) => !category.parent,
    );
    for (const lang of ["en", "ko", "ja"]) {
      for (const width of [320, 768, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        for (const theme of ["light", "dark"]) {
          await page.goto(`/${lang}/catalog/`);
          await page.evaluate(
            (value) => (document.documentElement.dataset.theme = value),
            theme,
          );
          const cards = page.locator(".category-card");
          await expect(cards).toHaveCount(roots.length);
          await expect(
            page.locator(".catalog-card, .catalog-toolbar, #search, #category"),
          ).toHaveCount(0);
          await expect(page.locator('script[src="/catalog.js"]')).toHaveCount(
            0,
          );
          const columns = await page
            .locator(".catalog-categories")
            .evaluate(
              (node) =>
                getComputedStyle(node).gridTemplateColumns.split(" ").length,
            );
          expect(columns).toBe(width <= 600 ? 1 : width <= 900 ? 2 : 3);
          expect(
            (await cards.first().boundingBox())!.height,
          ).toBeGreaterThanOrEqual(220);
          expect(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth,
            ),
          ).toBeTruthy();
          await cards.first().focus();
          await expect(cards.first()).toBeFocused();
          if (lang === "ko") {
            await page.screenshot({
              path: testInfo.outputPath(`${lang}-${width}-${theme}.png`),
              fullPage: true,
            });
          }
          await page.keyboard.press("Enter");
          await expect(page).toHaveURL(
            new RegExp(`/${lang}/catalog/categories/${roots[0].id}/$`),
          );
        }
      }
      for (const category of roots) {
        await page.goto(`/${lang}/catalog/`);
        await page
          .locator(
            `.category-card[href="/${lang}/catalog/categories/${category.id}/"]`,
          )
          .click();
        await expect(page).toHaveURL(
          new RegExp(`/${lang}/catalog/categories/${category.id}/$`),
        );
        await expect(page.locator("h1")).toHaveText(category.names[lang]);
        await expect(page.locator(".catalog-card").first()).toBeVisible();
        const paths = await page
          .locator(".catalog-card")
          .evaluateAll((nodes) =>
            nodes.map((node) =>
              node.getAttribute("data-category-path")!.split(" "),
            ),
          );
        expect(paths.every((path) => path.includes(category.id))).toBeTruthy();
      }
    }
    await context.close();
  });
}
