import { test, expect } from "@playwright/test";
import { mkdirSync } from "node:fs";

test.use({ javaScriptEnabled: false });

for (const lang of ["en", "ko", "ja"]) {
  test(`${lang}: guide infographics explain their examples without scripts`, async ({
    page,
  }) => {
    await page.route("https://giscus.app/**", (route) => route.abort());
    mkdirSync("artifacts/guide-visuals", { recursive: true });
    for (const id of [
      "architecture",
      "layout",
      "payments",
      "collections",
      "adr",
    ]) {
      await page.goto(`/${lang}/guides/${id}/`);
      const root = page.locator(`[data-demo="${id}"]`);
      await expect(root).toBeVisible();
      if (id === "architecture" || id === "payments")
        await expect(root.locator("ol > li")).toHaveCount(
          id === "payments" ? 4 : 3,
        );
      if (id === "layout")
        await expect(root.locator(".results li")).toHaveCount(2);
      if (id === "collections")
        await expect(root.locator(".structures > div")).toHaveCount(3);
      if (id === "adr")
        await expect(root.locator(".record > div")).toHaveCount(3);
      await expect(
        root.locator("button, input, select, [tabindex]"),
      ).toHaveCount(0);
      await expect(page.locator(`[data-design-id="${id}"]`)).toHaveAttribute(
        "data-demo-mode",
        "static",
      );
      const initial = await root.innerText();
      for (const width of [320, 768, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        for (const theme of ["light", "dark"]) {
          await page.evaluate((value) => {
            document.documentElement.dataset.theme = value;
          }, theme);
          expect(
            await root.evaluate((node) => node.scrollWidth <= node.clientWidth),
          ).toBe(true);
          expect(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth,
            ),
          ).toBe(true);
          await root.screenshot({
            path: `artifacts/guide-visuals/${id}-${lang}-${width}-${theme}.png`,
          });
        }
      }
      expect(await root.innerText()).toBe(initial);
    }
  });
}
