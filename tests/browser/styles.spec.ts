import { test, expect } from "@playwright/test";
import { designRegistry as registry } from "../../scripts/design-registry.mjs";
import { readArticles } from "../../scripts/validate-content.mjs";
import { mkdirSync } from "node:fs";
const ids = Object.keys(registry);
const articles = readArticles();
const languages = ["en", "ko", "ja"] as const;
test.beforeEach(async ({ page }) => {
  await page.route("https://giscus.app/**", (route) => route.abort());
});
for (const lang of languages) {
  test(`${lang}: every published article is searchable`, async ({ page }) => {
    test.setTimeout(120_000);
    for (const { data } of articles.filter(
      (a) => a.data.lang === lang && a.data.status === "published",
    )) {
      const section = data.kind === "guide" ? "guides" : "catalog";
      await page.goto(`/${lang}/${section}/`);
      await page.locator("#search").fill(data.title);
      await expect(
        page.locator(
          `#search-results a[href="/${lang}/${section}/${data.articleId}/"]`,
        ),
      ).toHaveCount(1);
    }
  });
  test(`${lang}: designs reflow in both themes and retain keyboard reset`, async ({
    page,
  }) => {
    test.setTimeout(180_000);
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    mkdirSync("artifacts/design-demos", { recursive: true });
    for (const id of ids) {
      await page.goto(`/${lang}/catalog/${id}/`);
      const root = page.locator(`[data-demo="${id}"]`);
      await expect(root).toHaveAttribute("data-ready", "true");
      await page.evaluate(() => document.fonts.ready);
      for (const width of [320, 768, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        await page.evaluate(
          () =>
            new Promise((resolve) =>
              requestAnimationFrame(() => requestAnimationFrame(resolve)),
            ),
        );
        for (const theme of ["light", "dark"]) {
          await page.evaluate(
            (t) => (document.documentElement.dataset.theme = t),
            theme,
          );
          expect(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth,
            ),
            `${id}/${width}/${theme}`,
          ).toBeTruthy();
          await expect(root).toBeVisible();
          expect(
            await root.evaluate((el) => el.scrollWidth <= el.clientWidth + 2),
            `${id} internal overflow`,
          ).toBeTruthy();
          if (lang === "en" && theme === "light" && width !== 768)
            await root.screenshot({
              path: `artifacts/design-demos/${id}-${width}.png`,
            });
        }
      }
      const first = root.locator("[data-interactive]").first();
      await first.focus();
      const kind = await first.evaluate((el) =>
        el.tagName === "INPUT"
          ? (el as HTMLInputElement).type
          : el.tagName.toLowerCase(),
      );
      if (["select", "range"].includes(kind))
        await page.keyboard.press("ArrowDown");
      else if (["text", "search", "textarea"].includes(kind))
        await page.keyboard.insertText("test");
      else await page.keyboard.press("Space");
      await expect(first).toBeFocused();
      const reset = root.locator("[data-reset]");
      await reset.focus();
      await page.keyboard.press("Enter");
      await expect(reset).toBeFocused();
      await expect(root.locator("[role=status]")).not.toBeEmpty();
      expect(
        await reset.evaluate((el) =>
          parseFloat(getComputedStyle(el).outlineWidth),
        ),
      ).toBeGreaterThanOrEqual(3);
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.addStyleTag({
        content:
          "[data-demo] * {box-shadow:none!important;text-shadow:none!important;}",
      });
      await reset.click();
      await expect(reset).toBeEnabled();
    }
    expect(errors).toEqual([]);
  });
  test(`${lang}: no JavaScript retains initial screens and explanations`, async ({
    browser,
    baseURL,
  }) => {
    test.setTimeout(120_000);
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 320, height: 900 },
    });
    const page = await context.newPage();
    for (const id of ids) {
      await page.goto(`${baseURL}/${lang}/catalog/${id}/`);
      await expect(page.locator(`[data-demo="${id}"]`)).toBeVisible();
      await expect(page.locator(".design-demo noscript")).toBeVisible();
      await expect(page.locator("[data-reset]")).toBeDisabled();
      await expect(page.locator("article.prose h2")).toHaveCount(3);
      for (const width of [320, 768, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        for (const theme of ["light", "dark"]) {
          await page.evaluate(
            (t) => (document.documentElement.dataset.theme = t),
            theme,
          );
          expect(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth,
            ),
            `${id}/${width}/${theme}/nojs`,
          ).toBeTruthy();
        }
      }
    }
    await context.close();
  });
}
test("representative actions handle repetition, empty inputs and reload", async ({
  page,
}) => {
  test.setTimeout(120_000);
  const open = async (id: string) => {
    await page.goto(`/en/catalog/${id}/`);
    const root = page.locator("[data-demo]");
    await expect(root).toHaveAttribute("data-ready", "true");
    return root;
  };
  let root = await open("brutalism");
  await root.locator("[data-search]").fill("no such document");
  await expect(root.locator("[data-empty]")).toBeVisible();
  await root.locator("[data-search]").fill("");
  await root.locator("[data-filter]").selectOption("manual");
  await expect(root.locator("[data-row]:visible")).toHaveCount(1);
  await root.locator("[data-reset]").click();
  await expect(root.locator("[data-row]:visible")).toHaveCount(3);
  root = await open("neobrutalism");
  await root.locator("[data-date]").selectOption("1");
  await expect(root.locator("[data-lineup]")).toContainText("Velvet");
  await page.reload();
  await expect(root.locator("[data-date]")).toHaveValue("0");
  root = await open("glassmorphism");
  await root.locator("[data-night]").check();
  await root.locator("[data-opaque]").check();
  await expect(root).toHaveAttribute("data-night", "true");
  expect(
    await root
      .locator(".glass")
      .first()
      .evaluate((el) => getComputedStyle(el).backdropFilter),
  ).toBe("none");
  root = await open("neumorphism");
  await root.locator("[data-power]").click();
  await expect(root.locator("output")).toHaveText("0%");
  await root.locator("[data-power]").click();
  await root.locator("[data-level]").fill("90");
  await expect(root.locator("output")).toHaveText("90%");
  root = await open("skeuomorphism");
  await root.locator("[data-note]").fill("My first note");
  await root.locator("[data-mark]").click();
  await root.locator("[data-page]").selectOption("1");
  await expect(root.locator("[data-note]")).toHaveValue("");
  await root.locator("[data-note]").fill("Second page");
  await root.locator("[data-page]").selectOption("0");
  await expect(root.locator("[data-note]")).toHaveValue("My first note");
  await expect(root.locator("[data-mark]")).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await root.locator("[data-reset]").click();
  await expect(root.locator("[data-mark]")).toHaveAttribute(
    "aria-pressed",
    "false",
  );
  root = await open("flat-design");
  await root.locator("[data-filter]").selectOption("done");
  await expect(root.locator("[data-empty]")).toBeVisible();
  await root.locator("[data-filter]").selectOption("all");
  await root.locator("[data-check]").first().check();
  await expect(root.locator("[data-count]")).toHaveText("1 / 3");
  await root.locator("[data-filter]").selectOption("done");
  await expect(root.locator("[data-task]:visible")).toHaveCount(1);
  root = await open("minimalism");
  await root.locator("[data-prev]").click();
  await expect(root.locator("[data-number]")).toHaveText("03 / 03");
  await root.locator("[data-next]").click();
  await expect(root.locator("[data-number]")).toHaveText("01 / 03");
  for (const id of ["single-column", "two-columns", "multiple-columns"]) {
    root = await open(id);
    await root.locator("[data-width]").selectOption("narrow");
    await expect(root.locator(".frame")).toHaveAttribute(
      "data-width",
      "narrow",
    );
    if (id === "single-column") {
      await root.locator("summary").click();
      await expect(root.locator("details")).toHaveAttribute("open", "");
    } else {
      await root.locator('[data-doc="1"]').click();
      await expect(root.locator("[data-doc-title]")).toHaveText("Materials");
      const positions = await root
        .locator(".workspace > *")
        .evaluateAll((els) => els.map((el) => el.getBoundingClientRect().y));
      expect(positions[1]).toBeGreaterThan(positions[0]);
    }
  }
  root = await open("list-layout");
  await root.locator("select[data-topic]").selectOption("type");
  await root.locator("[data-sort]").selectOption("short");
  await expect(root.locator("[data-row]:visible")).toHaveCount(2);
  await expect(root.locator("[data-row]:visible").first()).toHaveAttribute(
    "data-minutes",
    "2",
  );
  root = await open("uniform-grid");
  await root.locator("[data-filter]").selectOption("type");
  await expect(root.locator("[data-card]:visible")).toHaveCount(3);
  await root.locator("[data-card]:visible summary").first().click();
  await expect(root.locator("details[open]")).toHaveCount(1);
  root = await open("serif");
  await root.locator("[data-terminals]").check();
  await expect(root.locator(".terminal").first()).toBeVisible();
  await root.locator("[data-size]").fill("64");
  await expect(root.locator("[data-size-value]")).toHaveText("64px");
  root = await open("sans-serif");
  await root.locator("[data-weight]").fill("700");
  expect(
    await root
      .locator("[data-sample]")
      .evaluate((el) => getComputedStyle(el).fontWeight),
  ).toBe("700");
  root = await open("script");
  await root.locator("[data-text]").fill("");
  await expect(root.locator("[data-sample]")).toBeEmpty();
  await root.locator("[data-text]").fill("Hello garden");
  await expect(root.locator("[data-sample]")).toHaveText("Hello garden");
  for (const id of ["proportional", "monospace"]) {
    root = await open(id);
    await root.locator("[data-text]").fill("");
    await expect(root.locator("[data-sample]")).toBeEmpty();
    await root.locator("[data-text]").fill("iiiWWW");
    await root.locator("[data-guides]").check();
    await expect(root.locator("[data-sample]")).toHaveClass(/guides/);
    const widths = await root
      .locator("[data-sample] span")
      .evaluateAll((els) => els.map((el) => el.getBoundingClientRect().width));
    if (id === "monospace")
      expect(Math.abs(widths[0] - widths[3])).toBeLessThan(0.1);
    else expect(widths[3]).toBeGreaterThan(widths[0] * 2);
  }
});
test("masonry preserves non-overlap and DOM focus order after expansion", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/en/catalog/masonry/");
  const root = page.locator("[data-demo]");
  const geometry = async () =>
    root.locator("[data-tile]").evaluateAll((els) =>
      els.map((el) => {
        const r = el.getBoundingClientRect();
        return { x: r.x, y: r.y, w: r.width, h: r.height };
      }),
    );
  await expect(root.locator(".board")).toHaveAttribute(
    "data-positioned",
    "true",
  );
  const before = await geometry();
  await root.locator("summary").first().focus();
  await page.keyboard.press("Enter");
  await expect(root.locator("details").first()).toHaveAttribute("open", "");
  await expect
    .poll(async () => JSON.stringify(await geometry()))
    .not.toBe(JSON.stringify(before));
  await expect
    .poll(async () => {
      const after = await geometry();
      for (let i = 0; i < after.length; i++)
        for (let j = i + 1; j < after.length; j++) {
          const a = after[i],
            b = after[j];
          if (!(
            a.x + a.w <= b.x + 1 ||
            b.x + b.w <= a.x + 1 ||
            a.y + a.h <= b.y + 1 ||
            b.y + b.h <= a.y + 1
          ))
            return false;
        }
      return true;
    })
    .toBe(true);
  await page.keyboard.press("Tab");
  await expect(root.locator("summary").nth(1)).toBeFocused();
  await page.setViewportSize({ width: 320, height: 900 });
  await expect
    .poll(
      async () => new Set((await geometry()).map((r) => Math.round(r.x))).size,
    )
    .toBe(1);
});
test("local fonts and CJK specimens load; tabular numbers align", async ({
  page,
}) => {
  test.setTimeout(90_000);
  for (const lang of languages)
    for (const id of [
      "serif",
      "sans-serif",
      "script",
      "proportional",
      "monospace",
    ]) {
      await page.goto(`/${lang}/catalog/${id}/`);
      await page.evaluate(() => document.fonts.ready);
      const loaded = await page.evaluate(() =>
        [...document.fonts]
          .filter((f) => f.status === "loaded")
          .map((f) => f.family.replaceAll('"', "")),
      );
      const face =
        id === "serif"
          ? "Demo Serif"
          : id === "script"
            ? "Demo Script"
            : id === "monospace"
              ? "Demo Mono"
              : "Demo Sans";
      expect(loaded).toContain(face);
      if (lang !== "en" && ["serif", "sans-serif"].includes(id))
        expect(loaded).toContain(`${face} ${lang === "ko" ? "KR" : "JP"}`);
    }
  await page.goto("/en/catalog/proportional/");
  await page.evaluate(() => document.fonts.ready);
  const rows = page.locator(".numbers span");
  const before = await rows.evaluateAll((els) =>
    els.map((e) => e.getBoundingClientRect().width),
  );
  expect(before[0]).not.toBeCloseTo(before[1], 1);
  await page.locator("input[data-tabular]").check();
  const after = await rows.evaluateAll((els) =>
    els.map((e) => e.getBoundingClientRect().width),
  );
  expect(after[0]).toBeCloseTo(after[1], 1);
});
