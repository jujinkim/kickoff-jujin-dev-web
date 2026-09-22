import { test, expect } from "@playwright/test";
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
for (const lang of ["en", "ko", "ja"]) {
  test(`${lang}: workspace navigation, progress, notes, empty states and restoration`, async ({
    page,
  }) => {
    test.setTimeout(150_000);
    for (const id of styleIds) {
      await page.goto(`/${lang}/catalog/${id}/`);
      const root = page.locator(`[data-demo="${id}"]`);
      await expect(root).toHaveAttribute("data-ready", "true");
      await expect(root.locator("[data-filter]")).toHaveValue("all");
      await expect(root.locator("[data-check]:checked")).toHaveCount(0);
      await expect(root.locator("[data-percent]")).toHaveText("0%");
      await expect(root.locator("details[open]")).toHaveCount(0);
      for (const link of await root.locator("[data-section-link]").all()) {
        const href = await link.getAttribute("href");
        await link.focus();
        await page.keyboard.press("Enter");
        await expect(root.locator(href!)).toBeFocused();
      }
      await root.locator("[data-filter]").selectOption("done");
      await expect(root.locator("[data-empty]")).toBeVisible();
      await root.locator("[data-filter]").selectOption("all");
      for (let i = 0; i < 3; i++) {
        await root.locator("[data-check]").nth(i).check();
        await expect(root.locator("[data-count]")).toHaveText(`${i + 1} / 3`);
        await expect(root.locator("[data-percent]")).toHaveText(
          `${Math.round(((i + 1) / 3) * 100)}%`,
        );
        await expect(root.locator("progress")).toHaveJSProperty("value", i + 1);
      }
      await root.locator("[data-filter]").selectOption("open");
      await expect(root.locator("[data-task]:visible")).toHaveCount(0);
      await expect(root.locator("[data-empty]")).toBeVisible();
      await root.locator("[data-filter]").selectOption("all");
      for (const summary of await root.locator("details summary").all()) {
        await summary.focus();
        await page.keyboard.press("Enter");
      }
      await expect(root.locator("details[open]")).toHaveCount(2);
      if (id === "liquid-glass")
        await root.locator("[data-tools-toggle]").click();
      for (const width of [320, 768, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        for (const theme of ["light", "dark"]) {
          await page.evaluate((value) => {
            document.documentElement.dataset.theme = value;
          }, theme);
          expect(
            await root.evaluate((el) => el.scrollWidth <= el.clientWidth + 2),
            `${id}/${lang}/${width}/${theme}/expanded`,
          ).toBeTruthy();
          const notes = await root
            .locator("[data-resource]")
            .evaluateAll((els) =>
              els.map((el) => {
                const r = el.getBoundingClientRect();
                return { top: r.top, bottom: r.bottom };
              }),
            );
          expect(notes[0].bottom).toBeLessThanOrEqual(notes[1].top);
          const footer = await root.locator("footer").boundingBox();
          expect(notes[1].bottom).toBeLessThanOrEqual(footer!.y);
          if (id === "liquid-glass") {
            const tray = await root.locator("[data-tools]").boundingBox();
            const intro = await root.locator(".intro").boundingBox();
            expect(tray!.y + tray!.height).toBeLessThanOrEqual(intro!.y);
          }
          if (
            (width === 320 && theme === "dark") ||
            (width === 1440 && theme === "light")
          ) {
            await root.screenshot({
              path: `artifacts/design-demos/${id}-${lang}-${width}-${theme}-expanded.png`,
              style: ".skip-link { visibility:hidden!important; }",
            });
          }
        }
      }
      await root.locator("[data-check]").first().uncheck();
      await expect(root.locator("[data-count]")).toHaveText("2 / 3");
      const reset = root.locator("[data-reset]");
      await reset.focus();
      await page.keyboard.press("Enter");
      await expect(reset).toBeFocused();
      await expect(root.locator("details[open]")).toHaveCount(0);
      await expect(root.locator("[data-percent]")).toHaveText("0%");
      await expect(root.locator("[data-filter]")).toHaveValue("all");
      await root.locator("details summary").first().click();
      await root.locator("[data-check]").first().check();
      await page.reload();
      await expect(root.locator("[data-percent]")).toHaveText("0%");
      await expect(root.locator("details[open]")).toHaveCount(0);
      // Two columns depend on demo width, not viewport width.
      for (const width of [599, 600, 760]) {
        await page.setViewportSize({ width: 1440, height: 1000 });
        await root.evaluate((el, w) => {
          el.style.boxSizing = "content-box";
          el.style.width = `${w}px`;
          el.style.maxWidth = "none";
        }, width);
        const columns = await root
          .locator(".workspace")
          .evaluate(
            (el) => getComputedStyle(el).gridTemplateColumns.split(" ").length,
          );
        expect(columns, `${id}/${width}`).toBe(width < 600 ? 1 : 2);
      }
    }
  });
}
test("neumorphism has borderless raised and inset surfaces with independent state and focus", async ({
  page,
}) => {
  await page.goto("/en/catalog/neumorphism/");
  const root = page.locator("[data-demo]");
  const surfaces =
    "header, [data-task], .progress-panel, details, button, select, input";
  const borders = async () =>
    root.locator(surfaces).evaluateAll((els) =>
      els.map((el) => {
        const c = getComputedStyle(el);
        return [
          c.borderTopWidth,
          c.borderRightWidth,
          c.borderBottomWidth,
          c.borderLeftWidth,
        ];
      }),
    );
  expect((await borders()).flat().every((x) => x === "0px")).toBeTruthy();
  expect(
    await root
      .locator("[data-task]")
      .first()
      .evaluate((el) => getComputedStyle(el).boxShadow),
  ).not.toContain("inset");
  const check = root.locator("[data-check]").first();
  await check.focus();
  await page.keyboard.press("Space");
  await expect(check).toBeChecked();
  expect(
    await check.evaluate((el) => parseFloat(getComputedStyle(el).outlineWidth)),
  ).toBeGreaterThanOrEqual(3);
  expect(
    await root
      .locator("[data-task]")
      .first()
      .evaluate((el) => getComputedStyle(el).boxShadow),
  ).toContain("inset");
  expect((await borders()).flat().every((x) => x === "0px")).toBeTruthy();
  await page.addStyleTag({
    content:
      "[data-demo], [data-demo] * { box-shadow:none!important; text-shadow:none!important; }",
  });
  expect(
    await check.evaluate(
      (el) => getComputedStyle(el, "::after").borderBottomWidth,
    ),
  ).toBe("3px");
  expect(
    await root
      .locator(".task-label")
      .first()
      .evaluate((el) => getComputedStyle(el).textDecorationLine),
  ).toBe("line-through");
  await expect(root.locator("[data-count]")).toHaveText("1 / 3");
  await page.emulateMedia({ forcedColors: "active" });
  expect(
    (await borders()).flat().every((x) => parseFloat(x) >= 1),
  ).toBeTruthy();
  await expect(check).toBeChecked();
  await root.screenshot({
    path: "artifacts/design-demos/neumorphism-forced-colors.png",
    style: ".skip-link { visibility: hidden !important; }",
  });
});
test("glass tools grow in flow, opaque fallbacks and reduced motion work", async ({
  page,
}) => {
  const cdp = await page.context().newCDPSession(page);
  for (const id of ["glassmorphism", "liquid-glass"]) {
    await page.goto(`/en/catalog/${id}/`);
    const root = page.locator("[data-demo]");
    const surface = root.locator(
      id === "liquid-glass" ? ".float-layer" : "header",
    );
    if (id === "liquid-glass") {
      const before = (await surface.boundingBox())!.height;
      await root.locator("[data-tools-toggle]").click();
      await expect(root.locator("[data-tools-toggle]")).toHaveAttribute(
        "aria-expanded",
        "true",
      );
      expect((await surface.boundingBox())!.height).toBeGreaterThan(before);
      const tools = await root.locator("[data-tools]").boundingBox();
      const intro = await root.locator(".intro").boundingBox();
      expect(tools!.y + tools!.height).toBeLessThan(intro!.y);
    }
    await root.locator("[data-opaque]").check();
    expect(
      await surface.evaluate((el) => getComputedStyle(el).backdropFilter),
    ).toBe("none");
    await root.locator("[data-reset]").click();
    await expect(root.locator("[data-opaque]")).not.toBeChecked();
    if (id === "liquid-glass") {
      await expect(root.locator("[data-tools]")).toBeHidden();
      await expect(root.locator("[data-tools-toggle]")).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    }
    await cdp.send("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-reduced-transparency", value: "reduce" }],
    });
    expect(
      await surface.evaluate((el) => getComputedStyle(el).backdropFilter),
    ).toBe("none");
    await cdp.send("Emulation.setEmulatedMedia", { features: [] });
  }
  await page.goto("/en/catalog/material-3-expressive/");
  const root = page.locator("[data-demo]");
  await root.locator("[data-check]").first().check();
  expect(
    await root
      .locator("[data-reactive-shape]")
      .evaluate((el) => el.getAnimations().length),
  ).toBeGreaterThan(0);
  await root.locator("[data-reset]").click();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await root.locator("[data-check]").first().check();
  expect(
    await root
      .locator("[data-reactive-shape]")
      .evaluate((el) => el.getAnimations().length),
  ).toBe(0);
});
test("category thumbnails fill width, cap height and align to the top", async ({
  page,
}) => {
  await page.goto("/ko/catalog/categories/styles/");
  for (const width of [320, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const id of styleIds) {
      const image = page.locator(`img[src="/thumbnails/${id}-ko.png"]`);
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

test("local control baselines preserve each material's button treatment", async ({
  page,
}) => {
  for (const id of ["brutalism", "flat-design", "material-3-expressive"]) {
    await page.goto(`/en/catalog/${id}/`);
    const root = page.locator("[data-demo]");
    const button = await root.locator("[data-reset]").evaluate((el) => {
      const css = getComputedStyle(el);
      return {
        background: css.backgroundColor,
        border: css.borderTopWidth,
        color: css.color,
      };
    });
    if (id === "brutalism") {
      const ink = await root.evaluate((el) => getComputedStyle(el).color);
      expect(button.background).toBe(ink);
      expect(parseFloat(button.border)).toBeGreaterThanOrEqual(2);
    } else {
      const reference = root.locator(
        id === "flat-design" ? "header" : "select",
      );
      const fill = await reference.evaluate(
        (el) => getComputedStyle(el).backgroundColor,
      );
      expect(button.background).toBe(fill);
      expect(button.border).toBe("0px");
    }
    expect(button.color).not.toBe(button.background);
  }
});
