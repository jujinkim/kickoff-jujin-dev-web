import { test, expect, type Page } from "@playwright/test";
import { designRegistry } from "../../scripts/design-registry.mjs";
import { readArticles } from "../../scripts/validate-content.mjs";
const styleIds = readArticles()
  .filter(
    (a) =>
      a.data.lang === "en" &&
      a.data.category === "styles" &&
      a.data.status === "published" &&
      designRegistry[a.data.articleId],
  )
  .map((a) => a.data.articleId);
test.beforeEach(async ({ page }) => {
  await page.route("https://giscus.app/**", (route) => route.abort());
});
const open = async (page: Page, lang: string, id: string) => {
  await page.goto(`/${lang}/catalog/${id}/`);
  const root = page.locator(`[data-demo="${id}"]`);
  await expect(root).toHaveAttribute("data-ready", "true");
  return root;
};
for (const lang of ["en", "ko", "ja"]) {
  test(`${lang}: repair booths, appointment choices and picnic participation`, async ({
    page,
  }) => {
    let root = await open(page, lang, "brutalism");
    await expect(root.locator("[data-booth]:visible")).toHaveCount(3);
    await root.locator("[data-filter]").selectOption("bike");
    await expect(root.locator("[data-booth]:visible")).toHaveCount(2);
    await root.locator("[data-filter]").selectOption("electrical");
    await expect(root.locator("[data-empty]")).toBeVisible();
    await root.locator("[data-reset]").click();
    await expect(root.locator("[data-booth]:visible")).toHaveCount(3);
    root = await open(page, lang, "flat-design");
    await expect(root.locator("[data-receipt]")).toBeHidden();
    await root.locator("[data-service]").selectOption({ index: 1 });
    await root.locator("[data-slot]").nth(1).click();
    await root.locator("[data-confirm]").click();
    await expect(root.locator("[data-receipt]")).toBeVisible();
    const booking = await root.locator("[data-booking]").innerText();
    await root.locator("[data-confirm]").click();
    await expect(root.locator("[data-booking]")).toHaveText(booking);
    await root.locator("[data-slot]").nth(2).click();
    await expect(root.locator("[data-receipt]")).toBeHidden();
    await root.locator("[data-reset]").click();
    await expect(root.locator("[data-slot]").first()).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    root = await open(page, lang, "material-3-expressive");
    await root.locator("[data-people]").selectOption("3");
    await root.locator("[data-join]").click();
    await expect(root.locator("[data-places]")).toHaveText("3");
    await root.locator("[data-people]").selectOption("6");
    await expect(root.locator("[data-places]")).toHaveText("6");
    await root.locator("[data-join]").click();
    await expect(root.locator("[data-places]")).toHaveText("0");
    await root.locator("[data-join]").click();
    await page.reload();
    await expect(root.locator("[data-places]")).toHaveText("0");
  });
  test(`${lang}: photo browsing, packing list and festival interests`, async ({
    page,
  }) => {
    let root = await open(page, lang, "liquid-glass");
    await root.locator("[data-prev]").click();
    await expect(root.locator("[data-position]")).toHaveText("3 / 3");
    await root.locator("[data-next]").click();
    await expect(root.locator("[data-position]")).toHaveText("1 / 3");
    await root.locator("[data-next]").click();
    await expect(root.locator("[data-photo]:visible")).toHaveCount(1);
    await expect(root.locator("[data-photo]:visible img")).toHaveAttribute(
      "src",
      /harbor/,
    );
    await root.locator("[data-tools-toggle]").click();
    await expect(root.locator("[data-tools]")).toBeVisible();
    await root.locator("[data-reset]").click();
    await expect(root.locator("[data-tools]")).toBeHidden();
    await expect(root.locator("[data-position]")).toHaveText("1 / 3");
    root = await open(page, lang, "minimalism");
    await root.locator("[data-pack]").first().check();
    await expect(root.locator("[data-count]")).toHaveText("1 / 3");
    await root.locator("summary").focus();
    await page.keyboard.press("Enter");
    await expect(root.locator("details[open]")).toHaveCount(1);
    await root.locator("[data-pack]").first().uncheck();
    await expect(root.locator("[data-count]")).toHaveText("0 / 3");
    await root.locator("[data-reset]").click();
    await expect(root.locator("details[open]")).toHaveCount(0);
    root = await open(page, lang, "neobrutalism");
    await root.locator("[data-interest]").first().click();
    await expect(root.locator("[data-count]")).toHaveText("1");
    await root.locator("[data-filter]").selectOption("music");
    await expect(root.locator("[data-event]:visible")).toHaveCount(1);
    await expect(root.locator("[data-count]")).toHaveText("1");
    await root.locator("[data-filter]").selectOption("all");
    await expect(root.locator("[data-interest]").first()).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await root.locator("[data-interest]").first().click();
    await expect(root.locator("[data-count]")).toHaveText("0");
  });
  test(`${lang}: timer pause, completion and reset use elapsed time`, async ({
    page,
  }) => {
    await page.clock.install();
    const root = await open(page, lang, "neumorphism");
    await root.locator("[data-pause]").click();
    await expect(root.locator("[data-seconds]")).toHaveText("30");
    await root.locator("[data-move]").selectOption("1");
    await root.locator("[data-start]").click();
    await root.locator("[data-start]").click();
    await page.clock.runFor(2000);
    await expect(root.locator("[data-seconds]")).toHaveText("28");
    await root.locator("[data-pause]").click();
    await page.clock.runFor(5000);
    await expect(root.locator("[data-seconds]")).toHaveText("28");
    await expect(root.locator("[data-pause]")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await root.locator("[data-start]").click();
    await page.clock.runFor(28000);
    await expect(root.locator("[data-seconds]")).toHaveText("0");
    await expect(root.locator("[data-start]")).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    await root.locator("[data-reset]").click();
    await expect(root.locator("[data-seconds]")).toHaveText("30");
    await expect(root.locator("[data-move]")).toHaveValue("0");
    await root.locator("[data-start]").click();
    await page.reload();
    await expect(root.locator("[data-seconds]")).toHaveText("30");
  });
  test(`${lang}: arcade windows, recipe scaling and keepsake order`, async ({
    page,
  }) => {
    let root = await open(page, lang, "retro-digital");
    await root.locator("[data-game]").selectOption({ index: 1 });
    await root.locator("[data-open]").focus();
    await page.keyboard.press("Enter");
    await expect(root.locator("[data-window]")).toBeVisible();
    await expect(root.locator("[data-session]:visible")).toHaveCount(1);
    await page.keyboard.press("Escape");
    await expect(root.locator("[data-window]")).toBeHidden();
    await expect(root.locator("[data-open]")).toBeFocused();
    await root.locator("[data-open]").click();
    await root.locator("[data-close]").click();
    await expect(root.locator("[data-open]")).toBeFocused();
    root = await open(page, lang, "skeuomorphism");
    const amount = root
      .locator("[data-recipe-panel]:visible [data-amount]")
      .first();
    const baseline = Number(await amount.innerText());
    await root.locator("[data-servings]").selectOption("4");
    await expect(amount).toHaveText(String(baseline * 2));
    await root.locator("[data-recipe]").nth(1).click();
    await expect(root.locator("[data-recipe-panel]:visible")).toHaveCount(1);
    await root.locator("[data-reset]").click();
    await expect(amount).toHaveText(String(baseline));
    root = await open(page, lang, "tactile-collage");
    const order = () =>
      root
        .locator("[data-piece]")
        .evaluateAll((nodes) =>
          nodes.map((n) => (n as HTMLElement).dataset.piece),
        );
    await root.locator("[data-earlier]").click();
    expect(await order()).toEqual(["photo", "ticket", "note"]);
    await root.locator('[data-select="note"]').click();
    await root.locator("[data-earlier]").click();
    expect(await order()).toEqual(["photo", "note", "ticket"]);
    await root.locator("[data-earlier]").click();
    expect(await order()).toEqual(["note", "photo", "ticket"]);
    await expect(root.locator("[data-earlier]")).toBeFocused();
    await root.locator("[data-later]").click();
    expect(await order()).toEqual(["photo", "note", "ticket"]);
    await root.locator("[data-reset]").click();
    expect(await order()).toEqual(["photo", "ticket", "note"]);
    await root.locator("[data-later]").click();
    await page.reload();
    expect(await order()).toEqual(["photo", "ticket", "note"]);
  });
  test(`${lang}: walks, exhibits, book results and plant cards`, async ({
    page,
  }) => {
    let root = await open(page, lang, "single-column");
    await root.locator("summary").first().focus();
    await page.keyboard.press("Enter");
    await expect(root.locator("details[open]")).toHaveCount(1);
    await root.locator("[data-reset]").click();
    await expect(root.locator("details[open]")).toHaveCount(0);
    root = await open(page, lang, "multiple-columns");
    await root.locator("[data-exhibit]").nth(1).click();
    await expect(root.locator("[data-display]").nth(1)).toBeVisible();
    await expect(root.locator("[data-context]").nth(1)).toBeVisible();
    await expect(root.locator("[data-display]").first()).toBeHidden();
    await root.locator("[data-reset]").click();
    await expect(root.locator("[data-display]").first()).toBeVisible();
    root = await open(page, lang, "list-layout");
    await root.locator("[data-search]").fill(" mary SHELLEY ");
    await expect(root.locator("[data-book]:visible")).toHaveCount(1);
    await root.locator("[data-availability]").selectOption("available");
    await expect(root.locator("[data-empty]")).toBeVisible();
    await root.locator("[data-reset]").click();
    await expect(root.locator("[data-count]")).toHaveText("4");
    await root.locator("[data-search]").fill("no-such-book");
    await expect(root.locator("[data-empty]")).toBeVisible();
    await page.reload();
    await expect(root.locator("[data-count]")).toHaveText("4");
    root = await open(page, lang, "uniform-grid");
    await root.locator("[data-light]").selectOption("sun");
    await expect(root.locator("[data-plant]:visible")).toHaveCount(1);
    await expect(root.locator("[data-plant]:visible img")).toHaveAttribute(
      "src",
      /rosemary/,
    );
    await root.locator("[data-reset]").click();
    await expect(root.locator("[data-plant]:visible")).toHaveCount(3);
  });
}

test("material cues retain text state without shadows and motion", async ({
  page,
}) => {
  let root = await open(page, "en", "neumorphism");
  await root.locator("[data-start]").focus();
  await page.keyboard.press("Enter");
  await root.locator("[data-pause]").click();
  await page.addStyleTag({
    content:
      "[data-demo] * {box-shadow:none!important;text-shadow:none!important}",
  });
  await expect(root.locator("[data-phase]")).toHaveText("Paused");
  await page.emulateMedia({ forcedColors: "active" });
  await root.locator("[data-reset]").focus();
  expect(
    await root
      .locator("[data-reset]")
      .evaluate((el) => parseFloat(getComputedStyle(el).outlineWidth)),
  ).toBeGreaterThanOrEqual(3);
  await page.emulateMedia({ forcedColors: "none", reducedMotion: "reduce" });
  root = await open(page, "en", "material-3-expressive");
  await root.locator("[data-join]").click();
  expect(
    await root
      .locator("[data-reactive-shape]")
      .evaluate((el) => el.getAnimations().length),
  ).toBe(0);
});
test("glass tools expand in flow and all glass has opaque fallbacks", async ({
  page,
}) => {
  const cdp = await page.context().newCDPSession(page);
  for (const id of ["glassmorphism", "liquid-glass"]) {
    const root = await open(page, "en", id);
    const surface = root.locator(
      id === "liquid-glass" ? ".float-layer" : ".route-card",
    );
    if (id === "liquid-glass") {
      const before = (await surface.boundingBox())!.height;
      await root.locator("[data-tools-toggle]").click();
      expect((await surface.boundingBox())!.height).toBeGreaterThan(before);
    }
    await root.locator("[data-opaque]").check();
    expect(
      await surface.evaluate((el) => getComputedStyle(el).backdropFilter),
    ).toBe("none");
    await root.locator("[data-reset]").click();
    await expect(root.locator("[data-opaque]")).not.toBeChecked();
    await cdp.send("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-reduced-transparency", value: "reduce" }],
    });
    expect(
      await surface.evaluate((el) => getComputedStyle(el).backdropFilter),
    ).toBe("none");
    await cdp.send("Emulation.setEmulatedMedia", { features: [] });
  }
});
test("category thumbnails fill width, cap height and align to the top", async ({
  page,
}) => {
  await page.goto("/ko/catalog/categories/styles/");
  for (const width of [320, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const id of styleIds) {
      const image = page.locator(`img[src="/thumbnails/${id}-ko.webp"]`);
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (el: HTMLImageElement) => el.complete && el.naturalHeight > 0,
          ),
        )
        .toBeTruthy();
      const d = await image.evaluate((el: HTMLImageElement) => ({
        w: el.clientWidth,
        pw: el.parentElement!.clientWidth,
        h: el.clientHeight,
        expected: Math.min(
          360,
          (el.clientWidth * el.naturalHeight) / el.naturalWidth,
        ),
        fit: getComputedStyle(el).objectFit,
        position: getComputedStyle(el).objectPosition,
      }));
      expect(d.w).toBe(d.pw);
      expect(d.h).toBeLessThanOrEqual(360);
      expect(Math.abs(d.h - d.expected)).toBeLessThan(1);
      expect(d.fit).toBe("cover");
      expect(d.position).toBe("50% 0%");
    }
  }
});
