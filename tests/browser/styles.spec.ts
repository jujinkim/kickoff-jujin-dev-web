import { test, expect } from "@playwright/test";

test.describe.configure({ timeout: 60_000 });

const ids = [
  "brutalism",
  "neobrutalism",
  "glassmorphism",
  "neumorphism",
  "skeuomorphism",
  "flat-design",
  "minimalism",
];
const languages = ["en", "ko", "ja"] as const;
const titles: Record<string, string[]> = {
  en: [
    "Brutalism",
    "Neobrutalism",
    "Glassmorphism",
    "Neumorphism",
    "Skeuomorphism",
    "Flat design",
    "Minimalism",
  ],
  ko: [
    "브루탈리즘",
    "네오브루탈리즘",
    "글래스모피즘",
    "뉴모피즘",
    "스큐어모피즘",
    "플랫 디자인",
    "미니멀리즘",
  ],
  ja: [
    "ブルータリズム",
    "ネオブルータリズム",
    "グラスモーフィズム",
    "ニューモーフィズム",
    "スキューモーフィズム",
    "フラットデザイン",
    "ミニマリズム",
  ],
};
for (const lang of languages) {
  test(`${lang}: every style is searchable and linked to its siblings`, async ({
    page,
  }) => {
    await page.route("https://giscus.app/**", (route) => route.abort());
    for (const id of ids) {
      await page.goto(`/${lang}/catalog/`);
      await page.locator("#search").fill(titles[lang][ids.indexOf(id)]);
      await expect(
        page.locator(`#search-results a[href="/${lang}/catalog/${id}/"]`),
      ).toBeVisible();
      await expect(page.locator("#search-results a").first()).toHaveAttribute(
        "href",
        `/${lang}/catalog/${id}/`,
      );
      await expect(
        page.locator(`#search-results a[href="/${lang}/catalog/${id}/"]`),
      ).toHaveCount(1);
      await page
        .locator(`#search-results a[href="/${lang}/catalog/${id}/"]`)
        .click();
      await expect(page.locator("h1")).toBeVisible();
      for (const peer of ids.filter((peer) => peer !== id))
        await expect(
          page.locator(`.prose a[href="/${lang}/catalog/${peer}/"]`).first(),
        ).toBeVisible();
      for (const other of languages)
        await expect(
          page.locator(`.languages a[lang="${other}"]`),
        ).toHaveAttribute("href", `/${other}/catalog/${id}/`);
      await expect(page.locator(".comparison tbody tr")).toHaveCount(1);
    }
  });
}

for (const lang of languages) {
  test(`${lang}: studies retain content, focus and local state across narrow and dark views`, async ({
    page,
  }) => {
    await page.route("https://giscus.app/**", (route) => route.abort());
    const words = {
      en: ["Save", "Saved"],
      ko: ["저장", "저장됨"],
      ja: ["保存", "保存済み"],
    }[lang]!;
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const id of ids) {
      await page.goto(`/${lang}/catalog/${id}/`);
      const study = page.locator(`[data-style-study="${id}"]`);
      const save = study
        .locator('[data-panel="variant"] [data-study-save]')
        .first();
      const reset = study.locator("[data-study-reset]");
      await expect(save).toBeEnabled();
      for (const width of [320, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        for (const theme of ["light", "dark"]) {
          await page.evaluate(
            (value) => (document.documentElement.dataset.theme = value),
            theme,
          );
          expect(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth,
            ),
          ).toBeTruthy();
          await expect(study).toBeVisible();
          const panels = await study
            .locator(".study-panel")
            .evaluateAll((nodes) =>
              nodes.map((node) => {
                const r = node.getBoundingClientRect();
                return { x: r.x, y: r.y };
              }),
            );
          if (width === 320) expect(panels[1].y).toBeGreaterThan(panels[0].y);
          else expect(panels[1].x).toBeGreaterThan(panels[0].x);
        }
      }
      await save.focus();
      await page.keyboard.press("Space");
      await expect(save).toBeFocused();
      await expect(save).toHaveAttribute("aria-pressed", "true");
      await expect(save).toHaveText(words[1]);
      await expect(study.locator("[data-study-status]")).toContainText(
        words[1],
      );
      const focus = await save.evaluate((node) => ({
        style: getComputedStyle(node).outlineStyle,
        width: getComputedStyle(node).outlineWidth,
      }));
      expect(focus.style).not.toBe("none");
      expect(parseFloat(focus.width)).toBeGreaterThanOrEqual(3);
      await reset.focus();
      await page.keyboard.press("Enter");
      await expect(reset).toBeFocused();
      await expect(save).toHaveAttribute("aria-pressed", "false");
      await expect(save).toHaveText(words[0]);
      await save.click();
      await page.reload();
      await expect(save).toHaveAttribute("aria-pressed", "false");
      await page.addStyleTag({
        content:
          "[data-style-study] { filter: grayscale(1); } [data-style-study] * { box-shadow: none !important; text-shadow: none !important; }",
      });
      await save.click();
      await expect(study.locator("[data-study-state]").first()).toContainText(
        words[1],
      );
      await expect(study.locator(".study-states")).toBeVisible();
    }
    expect(errors).toEqual([]);
  });
}

test("style-specific modes preserve focus, report results and reset", async ({
  page,
}) => {
  for (const [id, modes] of Object.entries({
    glassmorphism: ["simple", "complex", "opaque"],
    neumorphism: ["raised", "inset", "shadowless"],
    "flat-design": ["retained", "failure"],
    minimalism: ["reduced", "missing"],
  })) {
    await page.goto(`/en/catalog/${id}/`);
    const study = page.locator("[data-style-study]");
    const select = study.locator("select[data-study-mode]");
    await select.focus();
    await page.keyboard.press("ArrowDown");
    await expect(select).toHaveValue(modes[1]);
    await expect(select).toBeFocused();
    for (const mode of modes) {
      await select.focus();
      await select.selectOption(mode);
      await expect(select).toBeFocused();
      await expect(study).toHaveAttribute("data-mode", mode);
      await expect(study.locator("[data-study-status]")).not.toBeEmpty();
      if (["failure", "missing"].includes(mode)) {
        await expect(study.locator("[data-study-rejected]")).toBeVisible();
        await expect(
          study.locator('[data-panel="variant"] [data-study-save]'),
        ).toBeHidden();
      }
      if (mode === "opaque")
        expect(
          await study
            .locator('[data-panel="variant"] .study-card')
            .evaluate((node) => getComputedStyle(node).backdropFilter),
        ).toBe("none");
      if (mode === "shadowless")
        expect(
          await study
            .locator('[data-panel="variant"] .study-card')
            .evaluate((node) => getComputedStyle(node).boxShadow),
        ).toBe("none");
    }
    await study.locator("[data-study-reset]").click();
    await expect(select).toHaveValue(modes[0]);
    await expect(
      study.locator('[data-panel="variant"] [data-study-save]'),
    ).toBeVisible();
  }
});

test("JavaScript-disabled studies retain their complete reading content and descriptions", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 320, height: 900 },
  });
  const page = await context.newPage();
  for (const lang of languages) {
    for (const id of ids) {
      await page.goto(`/${lang}/catalog/${id}/`);
      const study = page.locator("[data-style-study]");
      await expect(study.locator(".study-panel")).toHaveCount(2);
      await expect(study.locator(".study-states")).toBeVisible();
      await expect(study.locator("#study-description")).toBeVisible();
      await expect(study.locator("noscript")).toBeVisible();
      await expect(study.locator("[data-study-reset]")).toBeDisabled();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBeTruthy();
    }
  }
  await context.close();
});

test("focus and text contrast survive contrasting material and action fills", async ({
  page,
}) => {
  for (const id of [
    "glassmorphism",
    "neumorphism",
    "skeuomorphism",
    "neobrutalism",
  ]) {
    await page.goto(`/en/catalog/${id}/`);
    await page.evaluate(
      () => (document.documentElement.dataset.theme = "dark"),
    );
    const save = page.locator('[data-panel="variant"] [data-study-save]');
    await save.focus();
    const ratios = await save.evaluate((node) => {
      const parse = (value: string) => value.match(/[\d.]+/g)!.map(Number);
      const luminance = (rgb: number[]) =>
        rgb
          .slice(0, 3)
          .map((c) => {
            const v = c / 255;
            return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
          })
          .reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0);
      const ratio = (a: number[], b: number[]) => {
        const x = luminance(a),
          y = luminance(b);
        return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
      };
      const card = getComputedStyle(node.closest(".study-card")!);
      const style = getComputedStyle(node);
      const raw = parse(card.backgroundColor);
      // Composite translucent white against black: conservative darkest possible backdrop.
      const bg = raw.slice(0, 3).map((v) => v * (raw[3] ?? 1));
      return {
        focus: ratio(parse(style.outlineColor), bg),
        text: ratio(parse(card.color), bg),
        button: ratio(parse(style.color), parse(style.backgroundColor)),
      };
    });
    expect(ratios.focus, `${id}: focus ring`).toBeGreaterThanOrEqual(3);
    expect(ratios.text, `${id}: body text`).toBeGreaterThanOrEqual(4.5);
    expect(ratios.button, `${id}: button text`).toBeGreaterThanOrEqual(4.5);
  }
});

test("exact Japanese title matches still respect category and kind filters", async ({
  page,
}) => {
  await page.goto("/ja/catalog/?q=ブルータリズム&category=columns");
  await expect(page.locator("#result-status")).toContainText("見つかりません");
  await expect(page.locator("#search-results a")).toHaveCount(0);
  await page.locator("#category").selectOption("styles");
  await expect(page.locator("#search-results a").first()).toHaveAttribute(
    "href",
    "/ja/catalog/brutalism/",
  );
  await page.goto("/ja/guides/?q=ブルータリズム");
  await expect(page.locator("#result-status")).not.toHaveText("…");
  await expect(
    page.locator('#search-results a[href="/ja/catalog/brutalism/"]'),
  ).toHaveCount(0);
});
