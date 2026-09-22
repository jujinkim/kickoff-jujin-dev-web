import { test, expect, type Page, type Locator } from "@playwright/test";
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
  await expect(control).toBeFocused();
}
async function reset(page: Page, root: Locator) {
  await key(page, root.locator("[data-reset]"));
  await expect(root.locator("[role=status]")).not.toBeEmpty();
}
for (const lang of ["en", "ko", "ja"]) {
  test(`${lang}: pricing boundaries, seat changes, invalid inputs, keyboard and reset`, async ({
    page,
  }) => {
    for (const [id, amounts] of [
      ["volume-pricing", ["0.00", "20.00", "10.10"]],
      ["graduated-pricing", ["0.00", "20.00", "20.10"]],
      ["base-plus-overage", ["20.00", "20.00", "20.10"]],
      ["usage-based", ["18.00", "20.00", "20.02"]],
    ] as const) {
      const root = await open(page, lang, id),
        input = root.locator("[data-quantity]");
      const initial = await root.locator("[data-total]").textContent();
      for (const [i, q] of [0, 100, 101].entries()) {
        await input.fill(String(q));
        await expect(root.locator("[data-total]")).toHaveText(amounts[i]);
        await expect(root.locator("[data-formula]")).toContainText("=");
      }
      for (const invalid of ["", "-1", "1.5", "10001"]) {
        await input.fill(invalid);
        await expect(input).toHaveAttribute("aria-invalid", "true");
        await expect(root.locator("[data-total]")).toHaveText("—");
        await expect(root.locator("[role=status]")).not.toBeEmpty();
      }
      await reset(page, root);
      await expect(root.locator("[data-total]")).toHaveText(initial!);
      await key(page, root.locator("[data-more]"));
      await page.reload();
      await expect(root.locator("[data-total]")).toHaveText(initial!);
    }
    const root = await open(page, lang, "per-seat-pricing"),
      input = root.locator("[data-quantity]");
    await expect(root.locator("[data-total]")).toHaveText("24.00");
    await key(page, root.locator("[data-more]"));
    await expect(root.locator("[data-total]")).toHaveText("32.00");
    await key(page, root.locator("[data-less]"));
    await key(page, root.locator("[data-less]"));
    await expect(root.locator("[data-total]")).toHaveText("16.00");
    await input.fill("0");
    await key(page, root.locator("[data-less]"));
    await expect(input).toHaveValue("0");
    await expect(root.locator("[data-total]")).toHaveText("0.00");
    await reset(page, root);
    await expect(input).toHaveValue("3");
  });
  test(`${lang}: prepaid depletion blocks overspend atomically and top-up restores usage`, async ({
    page,
  }) => {
    const root = await open(page, lang, "prepaid-credits");
    for (const [q, balance] of [
      [100, 900],
      [300, 600],
      [600, 0],
    ]) {
      await key(page, root.locator(`[data-spend="${q}"]`));
      await expect(root.locator("[data-balance]")).toHaveText(String(balance));
    }
    await expect(root.locator("[data-spent]")).toHaveText("1000");
    await root.locator("[data-quantity]").fill("1");
    await key(page, root.locator("[data-consume]"));
    await expect(root.locator("[data-balance]")).toHaveText("0");
    await expect(root.locator("[data-spent]")).toHaveText("1000");
    await key(page, root.locator("[data-topup]"));
    await key(page, root.locator("[data-consume]"));
    await expect(root.locator("[data-balance]")).toHaveText("999");
    await root.locator("[data-quantity]").fill("1000");
    await key(page, root.locator("[data-consume]"));
    await expect(root.locator("[data-balance]")).toHaveText("999");
    for (const value of ["", "-1", "0.5"]) {
      await root.locator("[data-quantity]").fill(value);
      await key(page, root.locator("[data-consume]"));
      await expect(root.locator("[data-balance]")).toHaveText("999");
    }
    await reset(page, root);
    await expect(root.locator("[data-balance]")).toHaveText("1000");
    await root.locator("[data-quantity]").fill("0");
    await key(page, root.locator("[data-consume]"));
    await expect(root.locator("[data-spent]")).toHaveText("0");
    await key(page, root.locator('[data-spend="100"]'));
    await page.reload();
    await expect(root.locator("[data-balance]")).toHaveText("1000");
  });
  test(`${lang}: subscription renewal boundary and failed retry access policy`, async ({
    page,
  }) => {
    const root = await open(page, lang, "subscription"),
      next = root.locator("[data-next]");
    await key(page, root.locator("[data-renew]"));
    await expect(root).toHaveAttribute("data-phase", "active");
    await key(page, next);
    await expect(root).toHaveAttribute("data-phase", "ended");
    await expect(root.locator("[data-paid]")).toHaveText("12.00");
    await root.locator("[data-retry]").dispatchEvent("click");
    await expect(root).toHaveAttribute("data-phase", "ended");
    await reset(page, root);
    await root.locator("[data-failure]").check();
    await key(page, next);
    await expect(root).toHaveAttribute("data-phase", "past-due");
    await expect(root.locator("[data-month]")).toHaveText("2");
    await key(page, root.locator("[data-retry]"));
    await expect(root).toHaveAttribute("data-phase", "past-due");
    await expect(root.locator("[data-paid]")).toHaveText("12.00");
    await root.locator("[data-failure]").uncheck();
    await key(page, root.locator("[data-retry]"));
    await expect(root).toHaveAttribute("data-phase", "active");
    await expect(root.locator("[data-paid]")).toHaveText("24.00");
    await root.locator("[data-retry]").dispatchEvent("click");
    await expect(root.locator("[data-paid]")).toHaveText("24.00");
    await key(page, next);
    await expect(root.locator("[data-paid]")).toHaveText("36.00");
    await key(page, next);
    await expect(root).toHaveAttribute("data-phase", "ended");
    await page.reload();
    await expect(root).toHaveAttribute("data-phase", "active");
    await expect(root.locator("[data-paid]")).toHaveText("12.00");
  });
  test(`${lang}: free access survives time, trial expires, conversion is explicit`, async ({
    page,
  }) => {
    for (const id of ["freemium", "free-trial"]) {
      const root = await open(page, lang, id);
      await key(page, root.locator("[data-edit]"));
      await expect(root.locator("[data-actions]")).toHaveText("1");
      for (let i = 0; i < 3; i++)
        await key(page, root.locator("[data-day-next]"));
      await expect(root).toHaveAttribute("data-paid", "false");
      await expect(root).toHaveAttribute(
        "data-expired",
        String(id === "free-trial"),
      );
      await key(page, root.locator("[data-export]"));
      await expect(root.locator("[data-actions]")).toHaveText("1");
      await key(page, root.locator("[data-edit]"));
      await expect(root.locator("[data-actions]")).toHaveText(
        id === "freemium" ? "2" : "1",
      );
      await key(page, root.locator("[data-upgrade]"));
      await expect(root).toHaveAttribute("data-paid", "true");
      await key(page, root.locator("[data-export]"));
      await expect(root.locator("[data-actions]")).toHaveText(
        id === "freemium" ? "3" : "2",
      );
      await reset(page, root);
      await expect(root).toHaveAttribute("data-paid", "false");
      await expect(root.locator("[data-day]")).toHaveText("0");
      await key(page, root.locator("[data-upgrade]"));
      await page.reload();
      await expect(root).toHaveAttribute("data-paid", "false");
    }
  });
  test(`${lang}: consumable depletion and persistent theme entitlement`, async ({
    page,
  }) => {
    for (const id of ["consumable-purchase", "non-consumable-purchase"]) {
      const root = await open(page, lang, id),
        use = root.locator("[data-use]"),
        buy = root.locator("[data-buy]");
      await use.dispatchEvent("click");
      await expect(root.locator("[data-uses]")).toHaveText("0");
      await key(page, buy);
      await expect(root.locator("[data-purchases]")).toHaveText("1");
      for (let i = 0; i < 3; i++) await key(page, use);
      await expect(root.locator("[data-uses]")).toHaveText("3");
      if (id === "consumable-purchase") {
        await expect(root.locator("[data-inventory]")).toHaveText("0");
        await use.dispatchEvent("click");
        await expect(root.locator("[data-uses]")).toHaveText("3");
        await key(page, buy);
        await expect(root.locator("[data-inventory]")).toHaveText("3");
        await expect(root.locator("[data-purchases]")).toHaveText("2");
      } else {
        await expect(root).toHaveAttribute("data-owned", "true");
        await expect(root).toHaveAttribute("data-applied", "true");
        await buy.dispatchEvent("click");
        await expect(root.locator("[data-purchases]")).toHaveText("1");
      }
      await reset(page, root);
      await expect(root.locator("[data-purchases]")).toHaveText("0");
      await expect(root).toHaveAttribute("data-owned", "false");
      await key(page, buy);
      await page.reload();
      await expect(root.locator("[data-purchases]")).toHaveText("0");
    }
  });
  test(`${lang}: optional rewarded participation, interruption, exactly-once completion and normal play`, async ({
    page,
  }) => {
    const root = await open(page, lang, "rewarded-ads"),
      complete = root.locator("[data-complete]"),
      start = root.locator("[data-opt-in]");
    await complete.dispatchEvent("click");
    await expect(root.locator("[data-rewards]")).toHaveText("0");
    await key(page, root.locator("[data-skip]"));
    await key(page, root.locator("[data-play]"));
    await expect(root.locator("[data-plays]")).toHaveText("1");
    await key(page, start);
    await key(page, root.locator("[data-skip]"));
    await complete.dispatchEvent("click");
    await expect(root.locator("[data-rewards]")).toHaveText("0");
    await key(page, start);
    await key(page, complete);
    await expect(root.locator("[data-rewards]")).toHaveText("1");
    await complete.dispatchEvent("click");
    await complete.dispatchEvent("click");
    await expect(root.locator("[data-rewards]")).toHaveText("1");
    await key(page, start);
    await key(page, complete);
    await expect(root.locator("[data-rewards]")).toHaveText("2");
    await reset(page, root);
    await expect(root.locator("[data-rewards]")).toHaveText("0");
    await key(page, start);
    await page.reload();
    await expect(root).toHaveAttribute("data-phase", "idle");
  });
}
