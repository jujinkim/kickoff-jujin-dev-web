// Capture real UI treatments instead of unrelated decorative stock imagery.
// Build first, serve dist, run this script, then rebuild to copy the new assets.
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { designRegistry } from "./design-registry.mjs";
import { readArticles } from "./validate-content.mjs";
const selected = process.argv.includes("--id")
  ? process.argv[process.argv.indexOf("--id") + 1]
  : undefined;
if (process.argv.includes("--id") && (!selected || !designRegistry[selected]))
  throw new Error("--id requires a registered design ID");
const articles = readArticles();
const origin = process.env.STYLE_PREVIEW_ORIGIN ?? "http://127.0.0.1:4322";
const browser = await chromium.launch({ args: ["--no-sandbox"] });
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
  });
  await page.route("https://giscus.app/**", (route) => route.abort());
  mkdirSync("public/thumbnails", { recursive: true });
  for (const [id, entry] of Object.entries(designRegistry).filter(
    ([id]) =>
      (!selected || selected === id) &&
      articles.some(
        (a) => a.data.articleId === id && a.data.status === "published",
      ),
  )) {
    for (const lang of ["en", "ko", "ja"]) {
      const response = await page.goto(`${origin}/${lang}/catalog/${id}/`);
      if (!response.ok()) throw new Error(`Missing demo route: ${id}/${lang}`);
      await page.locator(`${entry.capture}[data-ready="true"]`).waitFor();
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(
        () => (document.documentElement.dataset.theme = "light"),
      );
      await page.locator(`${entry.capture} [data-reset]`).click();
      await page.evaluate(() => {
        document.querySelector('[data-demo] [role="status"]').textContent = "";
      });
      await page.evaluate(
        () =>
          new Promise((resolve) =>
            requestAnimationFrame(() => requestAnimationFrame(resolve)),
          ),
      );
      const failedFonts = await page.evaluate(() =>
        [...document.fonts]
          .filter((font) => font.status === "error")
          .map((font) => font.family),
      );
      if (failedFonts.length)
        throw new Error(`Fonts failed: ${failedFonts.join(", ")}`);
      await page.locator(entry.capture).screenshot({
        path: `public/thumbnails/${id}-${lang}.png`,
        type: "png",
      });
      console.log(`Captured ${id}/${lang}`);
    }
  }
} finally {
  await browser.close();
}
