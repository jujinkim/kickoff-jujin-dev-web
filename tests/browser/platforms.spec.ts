import { test, expect, type Page, type Locator } from "@playwright/test";
import { mkdirSync } from "node:fs";
const generators = ["astro", "hugo", "jekyll"];
const ui = ["react", "vue", "svelte"];
const engines = ["godot", "unity", "unreal-engine"];
const hosts = ["static-hosting", "always-on-server", "serverless-functions"];
const ids = [
  ...generators,
  ...ui,
  ...engines,
  ...hosts,
  "rolling",
  "blue-green",
  "canary",
];
test.beforeEach(async ({ page }) => {
  await page.route("https://giscus.app/**", (r) => r.abort());
});
async function open(page: Page, lang: string, id: string) {
  await page.goto(`/${lang}/catalog/${id}/`);
  const root = page.locator(`[data-demo="${id}"]`);
  await expect(root).toHaveAttribute("data-ready", "true");
  return root;
}
async function key(page: Page, control: Locator) {
  await control.focus();
  await page.keyboard.press("Space");
}
async function reset(page: Page, root: Locator) {
  await key(page, root.locator("[data-reset]"));
  await expect(root.locator("[data-reset]")).toBeFocused();
  await expect(root.locator("[role=status]")).not.toBeEmpty();
}
for (const lang of ["en", "ko", "ja"]) {
  test(`${lang}: generator build boundaries, failure, previous and optional island`, async ({
    page,
  }) => {
    for (const id of generators) {
      const root = await open(page, lang, id),
        next = root.locator("[data-next]"),
        prev = root.locator("[data-previous]");
      await expect(prev).toBeDisabled();
      await root.locator("[data-missing]").check();
      await key(page, next);
      await expect(root).toHaveAttribute("data-failed", "true");
      await expect(next).toBeDisabled();
      await expect(root.locator("[data-output-count]")).toHaveText("0");
      await prev.click();
      await expect(root).toHaveAttribute("data-failed", "false");
      await root.locator("[data-missing]").uncheck();
      for (let step = 1; step <= 4; step++) {
        await next.click();
        await expect(root).toHaveAttribute("data-step", String(step));
      }
      await expect(next).toBeDisabled();
      await expect(root.locator("[data-output-count]")).toHaveText("4");
      await prev.click();
      await expect(root).toHaveAttribute("data-step", "3");
      if (id === "astro") {
        await root.locator("[data-island]").check();
        await expect(root.locator("[data-output-count]")).toHaveText("4");
      }
      await reset(page, root);
      await expect(prev).toBeDisabled();
      await expect(root.locator("[data-output-count]")).toHaveText("0");
      await next.click();
      await page.reload();
      await expect(root).toHaveAttribute("data-step", "0");
    }
  });
  test(`${lang}: UI card independence, shared count and duplicate saves`, async ({
    page,
  }) => {
    for (const id of ui) {
      const root = await open(page, lang, id),
        a = root.locator("[data-save]").first(),
        b = root.locator("[data-save]").last();
      await key(page, a);
      await expect(a).toBeFocused();
      await expect(a).toHaveAttribute("aria-pressed", "true");
      await expect(b).toHaveAttribute("aria-pressed", "false");
      await expect(root.locator("[data-count]")).toHaveText("1");
      await a.click();
      await expect(root.locator("[data-count]")).toHaveText("1");
      await b.click();
      await b.click();
      await expect(root.locator("[data-count]")).toHaveText("2");
      await reset(page, root);
      await expect(root.locator("[data-count]")).toHaveText("0");
      await a.click();
      await page.reload();
      await expect(root.locator("[data-count]")).toHaveText("0");
    }
  });
  test(`${lang}: engine contact failure and guarded one-time collection`, async ({
    page,
  }) => {
    for (const id of engines) {
      const root = await open(page, lang, id),
        move = root.locator("[data-touch]");
      await root.locator("[data-contact-off]").check();
      await key(page, move);
      await expect(move).toBeFocused();
      await expect(root.locator("[data-score]")).toHaveText("0");
      await expect(root.locator("[data-item]")).toBeVisible();
      await root.locator("[data-contact-off]").uncheck();
      await move.click();
      await expect(root.locator("[data-score]")).toHaveText("1");
      await expect(root.locator("[data-item]")).toBeHidden();
      await move.click();
      await expect(root.locator("[data-score]")).toHaveText("1");
      await reset(page, root);
      await expect(root.locator("[data-item]")).toBeVisible();
      await expect(root.locator("[data-player]")).toHaveAttribute(
        "transform",
        "translate(0 0)",
      );
      await move.click();
      await page.reload();
      await expect(root.locator("[data-score]")).toHaveText("0");
    }
  });
  test(`${lang}: hosting paths, failed writes, restart and idempotent records`, async ({
    page,
  }) => {
    for (const id of hosts) {
      const root = await open(page, lang, id),
        save = root.locator("[data-save]");
      await key(page, root.locator("[data-read]"));
      await expect(root).toHaveAttribute("data-path", "read");
      await expect(root.locator("[data-calls]")).toHaveText(
        id === "static-hosting" ? "0" : "1",
      );
      await root.locator("[data-fail-save]").check();
      await save.click();
      await expect(root.locator("[data-count]")).toHaveText("0");
      await expect(root).toHaveAttribute("data-path", "failure");
      await expect(root.locator("[data-fail-save]")).not.toBeChecked();
      await save.click();
      await save.click();
      await expect(root.locator("[data-count]")).toHaveText("1");
      await root.locator("[data-fail-save]").check();
      await save.click();
      await expect(root.locator("[data-count]")).toHaveText("1");
      await root.locator("[data-restart]").click();
      await expect(root.locator("[data-generation]")).toHaveText("2");
      await expect(root.locator("[data-calls]")).toHaveText("0");
      await expect(root.locator("[data-records]")).toHaveText(
        (await root.getAttribute("data-record-label"))!,
      );
      await save.click();
      await expect(root.locator("[data-count]")).toHaveText("1");
      await reset(page, root);
      await expect(root.locator("[data-count]")).toHaveText("0");
      await save.click();
      await page.reload();
      await expect(root.locator("[data-count]")).toHaveText("0");
    }
  });
  test(`${lang}: release readiness, traffic reversal, data retention and empty evidence`, async ({
    page,
  }) => {
    let root = await open(page, lang, "rolling");
    await expect(root.locator("[data-previous]")).toBeDisabled();
    await root.locator("[data-fail-ready]").check();
    await root.locator("[data-next]").click();
    await key(page, root.locator("[data-next]"));
    await expect(root).toHaveAttribute("data-failed", "true");
    await expect(root.locator("[data-old]")).toHaveText("4");
    await expect(root.locator("[data-new]")).toHaveText("1");
    await expect(root.locator("[data-ready-count]")).toHaveText("4");
    await expect(root.locator("[data-next]")).toBeDisabled();
    await root.locator("[data-previous]").click();
    await expect(root).toHaveAttribute("data-step", "0");
    await reset(page, root);
    const expected = [
      [4, 1, 4],
      [4, 1, 5],
      [3, 1, 4],
      [3, 2, 4],
      [3, 2, 5],
      [2, 2, 4],
      [2, 3, 4],
      [2, 3, 5],
      [1, 3, 4],
      [1, 4, 4],
      [1, 4, 5],
      [0, 4, 4],
    ];
    for (const [old, fresh, ready] of expected) {
      await root.locator("[data-next]").click();
      await expect(root.locator("[data-old]")).toHaveText(String(old));
      await expect(root.locator("[data-new]")).toHaveText(String(fresh));
      await expect(root.locator("[data-ready-count]")).toHaveText(
        String(ready),
      );
    }
    await expect(root.locator("[data-next]")).toBeDisabled();
    await page.reload();
    await expect(root).toHaveAttribute("data-step", "0");
    root = await open(page, lang, "blue-green");
    await expect(root.locator("[data-save]")).toBeDisabled();
    await expect(root.locator("[data-rollback]")).toBeDisabled();
    await root.locator("[data-fail-ready]").check();
    await root.locator("[data-next]").click();
    await expect(root.locator("[data-next]")).toBeDisabled();
    await expect(root).toHaveAttribute("data-route", "blue");
    await root.locator("[data-previous]").click();
    await reset(page, root);
    await root.locator("[data-next]").click();
    await expect(root).toHaveAttribute("data-route", "blue");
    await root.locator("[data-next]").click();
    await expect(root).toHaveAttribute("data-route", "green");
    await root.locator("[data-save]").click();
    await root.locator("[data-save]").click();
    await expect(root.locator("[data-count]")).toHaveText("1");
    await root.locator("[data-rollback]").click();
    await expect(root).toHaveAttribute("data-route", "blue");
    await expect(root.locator("[data-records]")).toHaveText(
      (await root.getAttribute("data-saved-label"))!,
    );
    await root.locator("[data-previous]").click();
    await expect(root).toHaveAttribute("data-route", "green");
    await expect(root.locator("[data-records]")).toHaveText(
      (await root.getAttribute("data-saved-label"))!,
    );
    await reset(page, root);
    await expect(root.locator("[data-count]")).toHaveText("0");
    await root.locator("[data-next]").click();
    await page.reload();
    await expect(root).toHaveAttribute("data-step", "0");
    root = await open(page, lang, "canary");
    await key(page, root.locator("[data-next]"));
    await expect(root.locator("[data-control-rate]")).toHaveText("0.2%");
    await expect(root.locator("[data-canary-rate]")).toHaveText("3.0%");
    await root.locator("[data-next]").click();
    await expect(root).toHaveAttribute("data-decision", "stop");
    await expect(root.locator("[data-next]")).toBeDisabled();
    await root.locator("[data-previous]").click();
    await expect(root).toHaveAttribute("data-step", "1");
    await root.locator("[data-empty-samples]").check();
    await root.locator("[data-next]").click();
    await root.locator("[data-next]").click();
    await expect(root).toHaveAttribute("data-decision", "unknown");
    await expect(root.locator("[data-control-sample]")).toHaveText("0 / 0");
    await expect(root).not.toContainText("NaN");
    await reset(page, root);
    await expect(root.locator("[data-control-sample]")).toHaveText("2 / 1,000");
    await root.locator("[data-empty-samples]").check();
    await page.reload();
    await expect(root.locator("[data-empty-samples]")).not.toBeChecked();
  });
  test(`${lang}: forced colors and reduced motion retain legible controls and keyboard actions`, async ({
    page,
  }) => {
    test.setTimeout(90_000);
    await page.emulateMedia({
      forcedColors: "active",
      reducedMotion: "reduce",
    });
    await page.setViewportSize({ width: 320, height: 900 });
    mkdirSync("artifacts/platform-demos", { recursive: true });
    for (const id of ids) {
      const root = await open(page, lang, id);
      const action = root.locator("button:enabled").first();
      await key(page, action);
      await expect(root.locator("[role=status]")).not.toBeEmpty();
      expect(
        await root.evaluate((el) => el.scrollWidth <= el.clientWidth + 2),
      ).toBeTruthy();
      await reset(page, root);
      await root.screenshot({
        path: `artifacts/platform-demos/${id}-${lang}-forced.png`,
        style: ".skip-link { visibility: hidden !important; }",
      });
    }
  });
}
