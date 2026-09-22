import { test, expect } from "@playwright/test";
import { mkdirSync } from "node:fs";

const ids = [
  "layered-architecture",
  "hexagonal-architecture",
  "clean-architecture",
];
// These diagrams must convey their complete meaning without client scripts.
test.use({ javaScriptEnabled: false });
for (const lang of ["en", "ko", "ja"]) {
  test(`${lang}: architecture diagrams explain source and call directions without JavaScript`, async ({
    page,
  }) => {
    await page.route("https://giscus.app/**", (route) => route.abort());
    mkdirSync("artifacts/boundaries-demos", { recursive: true });
    let sharedFixture: string | undefined, sharedOutcomes: string | undefined;
    for (const id of ids) {
      await page.goto(`/${lang}/catalog/${id}/`);
      const root = page.locator(`[data-demo="${id}"]`);
      await expect(root).toBeVisible();
      await expect(
        root.locator("button, input, select, [tabindex]"),
      ).toHaveCount(0);
      const fixture = await root.locator("[data-fixture]").innerText();
      const outcomes = await root.locator("[data-outcomes]").innerText();
      if (sharedFixture) {
        expect(fixture).toBe(sharedFixture);
        expect(outcomes).toBe(sharedOutcomes);
      } else {
        sharedFixture = fixture;
        sharedOutcomes = outcomes;
      }
      expect(fixture).toContain("R1");
      expect(fixture).toContain("A17");
      expect(outcomes).toContain("0 → 1 → 1");
      expect(
        await root
          .locator("[data-process]")
          .evaluate((node) => getComputedStyle(node).borderTopStyle),
      ).toBe("dotted");
      if (id === "layered-architecture") {
        await expect(root.locator("[data-layer]")).toHaveCount(3);
        await expect(root.locator("[data-import]")).toHaveCount(2);
        await expect(root.locator("[data-call]")).toHaveCount(2);
        await expect(root.locator("[data-return]")).toContainText("↑");
      } else if (id === "hexagonal-architecture") {
        await expect(root.locator("[data-driving] li")).toHaveCount(2);
        await expect(root.locator("[data-driven] li")).toHaveCount(2);
        await expect(
          root.locator('[data-application] [data-port="output"]'),
        ).toContainText("SaveRepository");
        await expect(root.locator("[data-call] ol li")).toHaveCount(4);
        await expect(root.locator("[data-driven] [data-import]")).toContainText(
          "SaveRepository",
        );
      } else {
        await expect(
          root.locator('[data-ring="application"] [data-ring="domain"]'),
        ).toContainText("SavedArticle");
        await expect(root.locator("[data-port-owner]")).toContainText(
          "SaveRepository",
        );
        await expect(root.locator("[data-storage-import]")).toContainText(
          "SaveRepository",
        );
        await expect(root.locator("[data-call]")).toContainText(
          "SaveArticle →",
        );
        await expect(root.locator("[data-boundary]")).toContainText("ORM");
      }
      const text = await root.innerText();
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
            path: `artifacts/boundaries-demos/${id}-${lang}-${width}-${theme}.png`,
            style: ".skip-link { visibility: hidden !important; }",
          });
        }
      }
      await page.setViewportSize({ width: 320, height: 1000 });
      await page.emulateMedia({
        forcedColors: "active",
        reducedMotion: "reduce",
      });
      expect(await root.innerText()).toBe(text);
      await root.screenshot({
        path: `artifacts/boundaries-demos/${id}-${lang}-forced-colors.png`,
        style: ".skip-link { visibility: hidden !important; }",
      });
      await page.emulateMedia({
        forcedColors: "none",
        reducedMotion: "no-preference",
      });
      await page.reload();
      expect(await root.innerText()).toBe(text);
    }
  });
}
