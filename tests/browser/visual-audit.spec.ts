import { test, expect } from "@playwright/test";
import { designRegistry } from "../../scripts/design-registry.mjs";
import { readArticles } from "../../scripts/validate-content.mjs";

const kinds = new Map(
  readArticles()
    .filter(({ data }) => data.lang === "en" && data.status === "published")
    .map(({ data }) => [data.articleId, data.kind]),
);

test.use({ javaScriptEnabled: false });

for (const lang of ["en", "ko", "ja"]) {
  test(`${lang}: every registered visual reads and reflows without JavaScript`, async ({
    page,
  }) => {
    test.setTimeout(300_000);
    await page.route("https://giscus.app/**", (route) => route.abort());
    for (const [id, entry] of Object.entries(
      designRegistry as Record<string, { capture: string }>,
    )) {
      const route = kinds.get(id) === "guide" ? "guides" : "catalog";
      await page.goto(`/${lang}/${route}/${id}/`);
      const root = page.locator(entry.capture);
      await expect(root, id).toBeVisible();
      const initial = await root.innerText();
      expect(initial.length, id).toBeGreaterThan(40);
      expect(initial, id).not.toMatch(/\b(?:A17|B04|C99|R1|reader-01)\b/);
      await expect(
        root.locator("button[data-interactive]:not(:disabled)"),
        id,
      ).toHaveCount(0);
      for (const width of [320, 768, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        for (const theme of ["light", "dark"]) {
          await page.evaluate((value) => {
            document.documentElement.dataset.theme = value;
          }, theme);
          expect(
            await root.evaluate(
              (node) => node.scrollWidth <= node.clientWidth + 2,
            ),
            `${id}/${lang}/${width}/${theme}`,
          ).toBe(true);
        }
      }
      expect(await root.innerText(), id).toBe(initial);
    }
  });
}
