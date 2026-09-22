import { test, expect } from "@playwright/test";
import { mkdirSync } from "node:fs";

const ids = ["monolith", "modular-monolith", "microservices"];
test.use({ javaScriptEnabled: false });
for (const lang of ["en", "ko", "ja"]) {
  test(`${lang}: service diagrams preserve release scope and failure timing without JavaScript`, async ({
    page,
  }) => {
    await page.route("https://giscus.app/**", (route) => route.abort());
    mkdirSync("artifacts/service-split-demos", { recursive: true });
    let shared: string[] | undefined;
    for (const id of ids) {
      await page.goto(`/${lang}/catalog/${id}/`);
      const root = page.locator(`[data-demo="${id}"]`);
      await expect(root).toBeVisible();
      await expect(
        root.locator("button, input, select, [tabindex]"),
      ).toHaveCount(0);
      const values = await Promise.all(
        [
          "[data-fixture]",
          "[data-change]",
          '[data-result="success"]',
          '[data-result="failure"]',
        ].map((selector) => root.locator(selector).innerText()),
      );
      if (shared) expect(values).toEqual(shared);
      else shared = values;
      expect(values[0]).toContain("A17");
      expect(values[2]).toContain("travel");
      await expect(root.locator("[data-deployment]")).toHaveCount(
        id === "microservices" ? 3 : 1,
      );
      for (const unit of await root.locator("[data-deployment]").all()) {
        expect(
          await unit.evaluate((node) => getComputedStyle(node).borderTopStyle),
        ).toBe("dotted");
      }
      if (id === "microservices") {
        await expect(
          root.locator('[data-service="catalog"] [data-version]'),
        ).toHaveText("v1 → v1");
        await expect(
          root.locator('[data-service="library"] [data-version]'),
        ).toHaveText("v1 → v2");
        await expect(
          root.locator('[data-service="billing"] [data-version]'),
        ).toHaveText("v1 → v1");
        await expect(root.locator("[data-store]")).toHaveCount(3);
        await expect(root.locator("[data-contract]")).toBeVisible();
        await expect(
          root.locator('[data-timeout] [data-result="failure"]'),
        ).toBeVisible();
        expect(
          await root
            .locator("[data-communication]")
            .evaluate((node) => getComputedStyle(node).borderTopStyle),
        ).toBe("dashed");
      } else {
        await expect(root.locator("[data-version]")).toContainText("v1");
        await expect(root.locator("[data-version]")).toContainText("v2");
        await expect(root.locator("[data-store]")).toHaveCount(1);
        expect(
          await root
            .locator("[data-communication]")
            .evaluate((node) => getComputedStyle(node).borderTopStyle),
        ).toBe("solid");
        if (id === "modular-monolith") {
          await expect(root.locator("[data-module] [data-api]")).toHaveCount(3);
          await expect(
            root.locator("[data-module] [data-owned-tables]"),
          ).toHaveCount(3);
          await expect(root.locator("[data-table-rule]")).toContainText("API");
        } else await expect(root.locator("[data-capability]")).toHaveCount(3);
      }
      const initial = await root.innerText();
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
            path: `artifacts/service-split-demos/${id}-${lang}-${width}-${theme}.png`,
            style: ".skip-link { visibility: hidden !important; }",
          });
        }
      }
      await page.setViewportSize({ width: 320, height: 1000 });
      await page.emulateMedia({
        forcedColors: "active",
        reducedMotion: "reduce",
      });
      expect(await root.innerText()).toBe(initial);
      await root.screenshot({
        path: `artifacts/service-split-demos/${id}-${lang}-forced-colors.png`,
        style: ".skip-link { visibility: hidden !important; }",
      });
      await page.emulateMedia({
        forcedColors: "none",
        reducedMotion: "no-preference",
      });
      await page.reload();
      expect(await root.innerText()).toBe(initial);
    }
  });
}
