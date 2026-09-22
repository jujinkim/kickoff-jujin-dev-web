import { test, expect } from "@playwright/test";
import { mkdirSync } from "node:fs";

const ids = ["user-story", "use-case", "job-story"];
for (const lang of ["en", "ko", "ja"]) {
  test(`${lang}: requirements diagrams preserve distinct meanings and accessible reading order`, async ({
    page,
  }) => {
    await page.route("https://giscus.app/**", (route) => route.abort());
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    mkdirSync("artifacts/requirements-demos", { recursive: true });
    for (const id of ids) {
      await page.goto(`/${lang}/catalog/${id}/`);
      const root = page.locator(`[data-demo="${id}"]`);
      await expect(root).toBeVisible();
      await expect(root.locator("[data-fixture]")).toContainText("A17");
      await expect(root.locator("[data-boundary]")).toContainText(
        lang === "ko" ? "오프라인" : lang === "ja" ? "オフライン" : "offline",
      );
      await expect(
        root.locator("button, input, select, [tabindex]"),
      ).toHaveCount(0);
      if (id === "user-story") {
        await expect(root.locator("dt")).toHaveCount(3);
        await expect(root.locator('[data-acceptance="success"]')).toContainText(
          "0 → 1 → 1",
        );
        await expect(root.locator('[data-acceptance="failure"]')).toContainText(
          "0",
        );
      } else if (id === "use-case") {
        await expect(root.locator("[data-step]")).toHaveCount(4);
        await expect(root.locator('[data-extension="failure"]')).toContainText(
          "3a",
        );
        await expect(root.locator('[data-extension="failure"]')).toContainText(
          "1",
        );
        await expect(
          root.locator('[data-extension="duplicate"]'),
        ).toContainText("3b");
        await expect(
          root.locator('[data-extension="duplicate"]'),
        ).toContainText("4");
      } else {
        await expect(root.locator("ol > li")).toHaveCount(3);
        await expect(root.locator("ul > li")).toHaveCount(2);
        await expect(root.locator("ul > li").last()).toContainText("A17");
      }
      const content = await root.innerText();
      for (const width of [320, 768, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        for (const theme of ["light", "dark"]) {
          await page.evaluate((value) => {
            document.documentElement.dataset.theme = value;
          }, theme);
          expect(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth,
            ),
          ).toBeTruthy();
          expect(
            await root.evaluate((node) => node.scrollWidth <= node.clientWidth),
          ).toBeTruthy();
          await root.screenshot({
            path: `artifacts/requirements-demos/${id}-${lang}-${width}-${theme}.png`,
          });
        }
      }
      await page.setViewportSize({ width: 320, height: 1000 });
      await page.emulateMedia({
        forcedColors: "active",
        reducedMotion: "reduce",
      });
      await page.addStyleTag({
        content:
          "[data-demo] * { box-shadow: none !important; text-shadow: none !important; }",
      });
      expect(await root.innerText()).toBe(content);
      await root.screenshot({
        path: `artifacts/requirements-demos/${id}-${lang}-forced-colors.png`,
      });
      await page.emulateMedia({
        forcedColors: "none",
        reducedMotion: "no-preference",
      });
    }
    expect(errors).toEqual([]);
  });
}
