import { test, expect } from "@playwright/test";
for (const lang of ["en", "ko", "ja"]) {
  test(`${lang}: semantic theme changes both surfaces and preserves local form state`, async ({
    page,
  }) => {
    await page.route("https://giscus.app/**", (r) => r.abort());
    await page.goto(`/${lang}/guides/theme/`);
    const root = page.locator('[data-demo="theme"]');
    await expect(root).toHaveAttribute("data-ready", "true");
    const siteTheme = await page.locator("html").getAttribute("data-theme");
    await root.locator("button[type=submit]").click();
    await expect(root.locator("[data-error]")).toBeVisible();
    await expect(root.locator("[data-session]")).toBeFocused();
    const cardColor = await root
      .locator(".card")
      .evaluate((el) => getComputedStyle(el).backgroundColor);
    await root.locator('[data-choice="dark"]').click();
    await expect(root).toHaveAttribute("data-theme-choice", "dark");
    await expect(root.locator("[data-error]")).toBeVisible();
    expect(
      await root
        .locator(".card")
        .evaluate((el) => getComputedStyle(el).backgroundColor),
    ).not.toBe(cardColor);
    expect(
      await root
        .locator(".card")
        .evaluate((el) => getComputedStyle(el).backgroundColor),
    ).toBe(
      await root
        .locator("form")
        .evaluate((el) => getComputedStyle(el).backgroundColor),
    );
    expect(await page.locator("html").getAttribute("data-theme")).toBe(
      siteTheme,
    );
    await root.locator("[data-session]").selectOption("morning");
    await root.locator("button[type=submit]").click();
    await expect(root.locator("[data-error]")).toBeHidden();
    await expect(root.locator("[role=status]")).not.toBeEmpty();
    await root.locator("[data-reset]").click();
    await expect(root).toHaveAttribute("data-theme-choice", "light");
    await expect(root.locator("[data-session]")).toHaveValue("");
    await root.locator('[data-choice="dark"]').click();
    await page.reload();
    await expect(root).toHaveAttribute("data-theme-choice", "light");
  });
  test(`${lang}: fictional revenue exposes zero, loss and invalid assumptions`, async ({
    page,
  }) => {
    await page.route("https://giscus.app/**", (r) => r.abort());
    await page.goto(`/${lang}/guides/revenue/`);
    const root = page.locator('[data-demo="revenue"]');
    await expect(root).toHaveAttribute("data-ready", "true");
    await expect(root.locator("[data-remaining]")).toHaveText("360.00");
    await root.locator("[data-users]").fill("0");
    await expect(root.locator("[data-gross]")).toHaveText("0.00");
    await expect(root.locator("[data-remaining]")).toHaveText("-100.00");
    await root.locator("[data-fixed]").fill("0");
    await expect(root.locator("[data-remaining]")).toHaveText("0.00");
    await root.locator("[data-users]").fill("100");
    await root.locator("[data-usage]").fill("300");
    await expect(root.locator("[data-remaining]")).toHaveText("-100.00");
    for (const invalid of ["", "-1", "1.5", "10001"]) {
      await root.locator("[data-users]").fill(invalid);
      await expect(root.locator("[data-users]")).toHaveAttribute(
        "aria-invalid",
        "true",
      );
      await expect(root.locator("[data-remaining]")).toHaveText("-100.00");
      await expect(root).toHaveAttribute("data-invalid-state", "true");
    }
    await root.locator("[data-reset]").click();
    await expect(root.locator("[data-remaining]")).toHaveText("360.00");
    await expect(root.locator("[data-users]")).toHaveAttribute(
      "aria-invalid",
      "false",
    );
    await root.locator("[data-fixed]").fill("1000");
    await page.reload();
    await expect(root.locator("[data-remaining]")).toHaveText("360.00");
  });
}
