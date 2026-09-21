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
    await expect(page.locator(".catalog-card:visible")).toHaveCount(12);
    await page.locator("#search").fill(query);
    const target = page.locator(
      `#search-results a[href="/${lang}/guides/${id}/"]`,
    );
    await expect(target).toBeVisible();
    const links = await page
      .locator("#search-results a")
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")));
    expect(links.every((link) => link?.startsWith(`/${lang}/`))).toBeTruthy();
    await page.locator("#search").fill("Map");
    await page.locator("#category").selectOption("data");
    await expect(page.locator("#search-results a")).toHaveCount(1);
    await expect(page.locator("#search-results a")).toHaveAttribute(
      "href",
      `/${lang}/guides/collections/`,
    );
    await page.locator("#search").fill("");
    await expect(page.locator(".catalog-card:visible")).toHaveCount(1);
    await page.locator("#category").selectOption("planning");
    await expect(page.locator(".catalog-card:visible")).toHaveCount(4);
    await page.goto(`/${lang}/guides/srs/`);
    await page.reload();
    await expect(page.locator("h1")).toContainText("SRS");
    expect(errors).toEqual([]);
  });
}
test("views, theme and language survive navigation and reload", async ({
  page,
}) => {
  await page.goto("/en/guides/");
  for (const view of ["list", "thumbnail", "preview"]) {
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
  await page.locator("[data-copy]").click();
  await expect(page.locator(".prompt-section [role=status]")).toHaveText(
    "Copied",
  );
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain(
    "bookshop cart",
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
  expect(await md.text()).toContain("AI 지시 예시");
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
  await expect(page.locator(".catalog-card:visible")).toHaveCount(12);
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
  test(`${lang}: concept tree, pending names and legacy redirect`, async ({
    page,
  }) => {
    await page.goto(`/${lang}/catalog/`);
    await expect(page.locator(".catalog-card")).toHaveCount(0);
    await page
      .locator(`.category-tree a[href="/${lang}/catalog/categories/styles/"]`)
      .click();
    await expect(page.locator("[data-candidate]")).toHaveCount(7);
    await expect(page.locator("[data-candidate] a")).toHaveCount(0);
    await expect(page.locator("table")).toHaveCount(0);
    await page.locator(".languages a[lang=en]").click();
    await expect(page).toHaveURL(/\/en\/catalog\/categories\/styles\/$/);
    await page.goto(`/${lang}/catalog/srs/`);
    await expect(page).toHaveURL(new RegExp(`/${lang}/guides/srs/$`));
    await expect(page.locator("h1")).toContainText("SRS");
  });
}
