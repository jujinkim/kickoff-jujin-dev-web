// Capture real UI treatments instead of unrelated decorative stock imagery.
// Build first, serve dist, run this script, then rebuild to copy the new assets.
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { candidates } from "./catalog-data.mjs";
const origin = process.env.STYLE_PREVIEW_ORIGIN ?? "http://127.0.0.1:4322";
const browser = await chromium.launch({ args: ["--no-sandbox"] });
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
  });
  await page.route("https://giscus.app/**", (route) => route.abort());
  mkdirSync("public/thumbnails", { recursive: true });
  for (const { id } of candidates.filter((c) => c.category === "styles")) {
    for (const lang of ["en", "ko", "ja"]) {
      await page.goto(`${origin}/${lang}/catalog/${id}/`);
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(
        () => (document.documentElement.dataset.theme = "light"),
      );
      await page.locator('[data-panel="variant"] .study-backdrop').screenshot({
        path: `public/thumbnails/${id}-${lang}.png`,
        type: "png",
      });
    }
  }
} finally {
  await browser.close();
}
