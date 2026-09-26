import { test, expect } from "@playwright/test";

for (const lang of ["en", "ko", "ja"] as const) {
  test(`${lang}: mobile prompt starts with a blank description and nearby copy`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`/${lang}/start/`);
    const description = page.locator("#service-description");
    await expect(description).toHaveValue("");
    await expect(description).toBeInViewport();
    await expect(page.locator("#description-example")).toBeVisible();
    await expect(page.locator("#service-name")).toBeHidden();
    await expect(page.locator("#service-notes")).toBeHidden();
    await expect(page.locator(".startup-references")).not.toHaveAttribute(
      "open",
      "",
    );
    await description.fill("A free local book club, in one language.");
    const copy = page.locator("[data-copy-prompt]");
    await expect(copy).toBeEnabled();
    const position = await page.evaluate(() => {
      const y = (selector: string) =>
        document.querySelector(selector)!.getBoundingClientRect().top + scrollY;
      return {
        copy: y("[data-copy-prompt]"),
        preview: y("#prompt-preview"),
        references: y(".startup-references"),
      };
    });
    expect(position.copy).toBeLessThan(position.preview);
    expect(position.copy).toBeLessThan(position.references);
    for (const target of await page
      .locator(".languages a, .site-header nav a, #theme-toggle")
      .all()) {
      const box = (await target.boundingBox())!;
      expect(box.height).toBeGreaterThanOrEqual(44);
    }
  });

  test(`${lang}: scoped search recovers through reset, parent, and other resources`, async ({
    page,
  }) => {
    await page.goto(`/${lang}/catalog/categories/styles/`);
    const scope = page.locator("[data-search-scope]");
    const baseScope = await scope.innerText();
    await expect(page.locator("#search")).toHaveAccessibleDescription(
      new RegExp(baseScope),
    );
    await page.locator("#search").fill("zzzxqvkjwplmn");
    await expect(page.locator("[data-search-recovery]")).toBeVisible();
    await expect(
      page.locator(
        '[data-search-recovery] a[href="/' +
          lang +
          '/catalog/categories/design/"]',
      ),
    ).toBeVisible();
    await page.locator("[data-search-reset]").click();
    await expect(page.locator("#search")).toBeFocused();
    await expect(page.locator("#search")).toHaveValue("");
    await expect(page.locator(".catalog-card:visible").first()).toBeVisible();
    await expect(page.locator("[data-search-recovery]")).toBeHidden();
    await page.locator("#search").fill("zzzxqvkjwplmn");
    await page
      .locator(
        `[data-search-recovery] a[href="/${lang}/catalog/categories/design/"]`,
      )
      .click();
    await expect(page).toHaveURL(`/${lang}/catalog/categories/design/`);
    await page.locator("#category").selectOption("styles");
    await expect(scope).toContainText(baseScope);
    await page.locator("#search").fill("zzzxqvkjwplmn");
    await expect(page.locator("[data-search-recovery]")).toBeVisible();
    await page.locator("[data-search-reset]").click();
    await expect(page.locator("#category")).toHaveValue("");
    await expect(page.locator("#search")).toHaveValue("");
    await page.locator("#search").fill("zzzxqvkjwplmn");
    await page
      .locator(`[data-search-recovery] a[href="/${lang}/guides/"]`)
      .click();
    await expect(page).toHaveURL(`/${lang}/guides/`);
    await expect(scope).toHaveText(
      await page
        .locator(`.site-header nav a[href="/${lang}/guides/"]`)
        .innerText(),
    );
    await page.locator("#search").fill("zzzxqvkjwplmn");
    await expect(
      page.locator(`[data-search-recovery] a[href="/${lang}/catalog/"]`),
    ).toBeVisible();
  });

  test(`${lang}: article application and help disclosures work without JavaScript`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 844 },
    });
    const page = await context.newPage();
    await page.route("https://giscus.app/**", (route) => route.abort());
    await page.goto(`/${lang}/guides/theme/`);
    const application = page.locator(".apply-project");
    await expect(application).toContainText(
      {
        en: "Already talking with external AI",
        ko: "이미 외부 AI와 대화 중",
        ja: "すでに外部AIと会話中",
      }[lang],
    );
    await expect(
      application.locator(`a[href="/${lang}/guides/theme/"]`),
    ).toBeVisible();
    await application.locator(`a[href="/${lang}/start/"]`).click();
    await expect(page.locator("noscript pre")).toContainText(
      "/ai/startup/latest.md",
    );
    await page.goto(`/${lang}/help/#catalog`);
    const group = page.locator('.help-category[data-category="design"]');
    await expect(group).not.toHaveAttribute("open", "");
    await group.locator("summary").focus();
    await page.keyboard.press("Enter");
    await group
      .locator(`a[href="/${lang}/catalog/categories/styles/"]`)
      .click();
    await expect(page.locator(".catalog-card").first()).toBeVisible();
    await context.close();
  });
}
