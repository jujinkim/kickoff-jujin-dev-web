import { test, expect } from "@playwright/test";
import { mkdirSync } from "node:fs";

const ids = ["no-extra-skills", "spec-kit", "superpowers", "openspec"];
test.beforeEach(async ({ page }) => {
  await page.route("https://giscus.app/**", (route) => route.abort());
});
for (const lang of ["en", "ko", "ja"]) {
  test(`${lang}: workflow comparison, alias search and related learning`, async ({
    page,
  }) => {
    await page.goto(`/${lang}/catalog/categories/agent-workflows/`);
    await expect(page.locator(".catalog-card")).toHaveCount(ids.length);
    await expect(page.locator("table.comparison tbody tr")).toHaveCount(
      ids.length,
    );
    await page.goto(`/${lang}/catalog/`);
    for (const [query, id] of [
      [
        lang === "ko"
          ? "추가 스킬 없이 시작하기"
          : lang === "ja"
            ? "追加スキルなしで始める"
            : "No additional skills",
        "no-extra-skills",
      ],
      ["speckit", "spec-kit"],
      ["Superpowers", "superpowers"],
      ["OpenSpec", "openspec"],
    ]) {
      await page.locator("#search").fill(query);
      await expect(
        page.locator(`#search-results a[href="/${lang}/catalog/${id}/"]`),
      ).toBeVisible();
    }
    await page.goto(`/${lang}/guides/tools/`);
    await page.locator("[data-related-reading] > summary").focus();
    await page.keyboard.press("Enter");
    for (const id of ids)
      await expect(
        page.locator(`a[href="/${lang}/catalog/${id}/"]`).first(),
      ).toBeVisible();
  });
  test(`${lang}: four workflow mechanisms reflow across widths, themes and enlarged text`, async ({
    page,
  }) => {
    test.setTimeout(180_000);
    mkdirSync("artifacts/agent-workflows", { recursive: true });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const id of ids) {
      await page.goto(`/${lang}/catalog/${id}/`);
      const root = page.locator(`[data-demo="${id}"]`);
      await expect(root.locator("h2")).toBeVisible();
      await expect(
        root.locator("button,input,select,[data-interactive],script"),
      ).toHaveCount(0);
      await expect(root.locator("[data-boundary]")).toBeVisible();
      const details = page.locator("[data-article-details]");
      for (const summary of await details.locator("summary").all()) {
        await summary.focus();
        await page.keyboard.press("Enter");
      }
      await expect(details.locator("details[open]")).toHaveCount(4);
      for (const width of [320, 390, 768, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        for (const theme of ["light", "dark"]) {
          await page.evaluate(
            (theme) => (document.documentElement.dataset.theme = theme),
            theme,
          );
          expect(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth,
            ),
            `${id}/${lang}/${width}/${theme}`,
          ).toBe(true);
          expect(
            await root.evaluate((el) => el.scrollWidth <= el.clientWidth),
            `${id} diagram overflow`,
          ).toBe(true);
          // Catch site-theme colors leaking onto the diagrams' opaque surfaces.
          const contrastFailures = await root.evaluate((root) => {
            const rgb = (value: string) => value.match(/[\d.]+/g)!.map(Number);
            const luminance = (color: number[]) => {
              const linear = color.slice(0, 3).map((v) => {
                const c = v / 255;
                return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
              });
              return (
                linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722
              );
            };
            const failures: string[] = [];
            const walker = document.createTreeWalker(
              root,
              NodeFilter.SHOW_TEXT,
            );
            let text: Node | null;
            while ((text = walker.nextNode())) {
              const el = text.parentElement!;
              if (!text.textContent?.trim() || !el.getClientRects().length)
                continue;
              let surface: Element | null = el;
              let background: number[] = [];
              while (surface) {
                background = rgb(getComputedStyle(surface).backgroundColor);
                if ((background[3] ?? 1) === 1) break;
                surface = surface.parentElement;
              }
              const fg = luminance(rgb(getComputedStyle(el).color));
              const bg = luminance(background);
              const ratio =
                (Math.max(fg, bg) + 0.05) / (Math.min(fg, bg) + 0.05);
              if (ratio < 4.5)
                failures.push(
                  `${text.textContent.trim()}: ${ratio.toFixed(2)}`,
                );
            }
            return failures;
          });
          expect(
            contrastFailures,
            `${id}/${lang}/${theme} text contrast`,
          ).toEqual([]);
          if (
            (width === 1440 && theme === "light") ||
            (width === 390 && theme === "dark")
          )
            await root.screenshot({
              path: `artifacts/agent-workflows/${id}-${lang}-${width}-${theme}.png`,
              style: ".skip-link { visibility: hidden !important; }",
            });
        }
      }
      await page.setViewportSize({ width: 768, height: 1000 });
      await page.evaluate(
        () => (document.documentElement.style.fontSize = "200%"),
      );
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${id}/${lang}/200%`,
      ).toBe(true);
      expect(
        await root.evaluate((el) => el.scrollWidth <= el.clientWidth),
      ).toBe(true);
      await page.evaluate(() => (document.documentElement.style.fontSize = ""));
    }
    expect(errors).toEqual([]);
  });

  test(`${lang}: diagrams and evidence remain readable without JavaScript`, async ({
    browser,
    baseURL,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 320, height: 900 },
    });
    const page = await context.newPage();
    for (const id of ids) {
      await page.goto(`${baseURL}/${lang}/catalog/${id}/`);
      await expect(
        page.locator(`[data-demo="${id}"] [data-boundary]`),
      ).toBeVisible();
      const evidence = page.locator("[data-article-details] summary").last();
      await evidence.focus();
      await page.keyboard.press("Enter");
      await expect(
        page.locator("[data-article-details] details[open] a").first(),
      ).toBeVisible();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
    await context.close();
  });
}

test("workflow diagrams expose different mechanisms and evidence limits", async ({
  page,
}) => {
  const conditions: Record<string, [string, RegExp][]> = {
    "no-extra-skills": [
      ["[data-direct-change]", /Gym.*Library/s],
      ["[data-existing-checks]", /packages to install: 0/],
    ],
    "spec-kit": [
      ["[data-artifact-trace]", /spec.md.*plan.md.*tasks.md.*Convergence/s],
      ["[data-gap-loop]", /remaining tasks/],
    ],
    superpowers: [
      ["[data-test-failure]", /200 g/],
      ["[data-test-pass]", /100 g/],
      ["[data-boundary]", /not an executed test/],
    ],
    openspec: [
      ["[data-current-spec]", /confirmation/],
      ["[data-proposed-delta]", /24 hours/],
      ["[data-sync-archive]", /Reconciled specification.*Archived change/s],
    ],
  };
  for (const [id, checks] of Object.entries(conditions)) {
    await page.goto(`/en/catalog/${id}/`);
    for (const [selector, text] of checks)
      await expect(
        page.locator(`[data-demo="${id}"] ${selector}`),
      ).toContainText(text);
  }
});
