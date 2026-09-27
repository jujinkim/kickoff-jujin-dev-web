import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route("https://giscus.app/**", (route) => route.abort());
});

for (const lang of ["en", "ko", "ja"]) {
  test(`${lang}: tier boundaries, low use and high use keep exact arithmetic`, async ({
    page,
  }) => {
    for (const [id, cases] of [
      [
        "volume-pricing",
        [
          [100, "20.00"],
          [101, "10.10"],
          [1000, "100.00"],
        ],
      ],
      [
        "graduated-pricing",
        [
          [100, "20.00"],
          [101, "20.10"],
          [1000, "110.00"],
        ],
      ],
      [
        "base-plus-overage",
        [
          [0, "20.00"],
          [100, "20.00"],
          [101, "20.10"],
        ],
      ],
      [
        "per-seat-pricing",
        [
          [1, "8.00"],
          [3, "24.00"],
          [30, "240.00"],
        ],
      ],
      [
        "usage-based",
        [
          [0, "18.00"],
          [100, "20.00"],
          [10000, "218.00"],
        ],
      ],
    ] as const) {
      await page.goto(`/${lang}/catalog/${id}/`);
      const root = page.locator(`[data-demo="${id}"]`);
      for (const [quantity, result] of cases) {
        const button = root.locator(`[data-quantity-preset="${quantity}"]`);
        await button.focus();
        await page.keyboard.press("Enter");
        await expect(root.locator("[data-total]")).toHaveText(result);
        await expect(root.locator("[data-quantity]")).toHaveValue(
          String(quantity),
        );
        await button.click();
        await expect(root.locator("[data-total]")).toHaveText(result);
      }
      await root.locator("[data-reset]").click();
      await page.reload();
      await expect(root.locator("[data-quantity]")).toHaveValue(
        id === "per-seat-pricing" ? "3" : id === "usage-based" ? "100" : "120",
      );
    }
  });

  test(`${lang}: revenue assumptions expose loss without changing the price`, async ({
    page,
  }) => {
    await page.goto(`/${lang}/guides/revenue/`);
    const root = page.locator('[data-demo="revenue"]');
    for (const [scenario, gross, cost, remaining] of [
      ["0,20,100", "0.00", "100.00", "-100.00"],
      ["100,20,100", "500.00", "140.00", "360.00"],
      ["100,1000,100", "500.00", "2100.00", "-1600.00"],
    ]) {
      await root.locator(`[data-scenario="${scenario}"]`).click();
      await expect(root.locator("[data-gross]")).toHaveText(gross);
      await expect(root.locator("[data-cost]")).toHaveText(cost);
      await expect(root.locator("[data-remaining]")).toHaveText(remaining);
    }
    await root.locator("[data-users]").fill("-1");
    await expect(root.locator("[data-remaining]")).toHaveText("-1600.00");
    await root.locator("[data-reset]").click();
    await expect(root.locator("[data-remaining]")).toHaveText("360.00");
  });
}

test("mobile photo diary loads one small source and its lens follows navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/ko/catalog/liquid-glass/");
  const root = page.locator('[data-demo="liquid-glass"]');
  await root.scrollIntoViewIfNeeded();
  await expect(root).toHaveAttribute("data-ready", "true");
  await expect
    .poll(() =>
      root
        .locator("[data-photo]:visible img")
        .evaluate(
          (image: HTMLImageElement) => image.complete && image.naturalWidth > 0,
        ),
    )
    .toBe(true);
  const resources = await page.evaluate(() =>
    performance
      .getEntriesByType("resource")
      .filter((r) => new URL(r.name).pathname.startsWith("/images/"))
      .map((r) => ({
        url: r.name,
        bytes: (r as PerformanceResourceTiming).encodedBodySize,
      })),
  );
  expect(
    resources.every(
      (r) => r.url.includes("beach-diary") && r.url.endsWith(".webp"),
    ),
  ).toBe(true);
  expect(resources.reduce((sum, r) => sum + r.bytes, 0)).toBeLessThan(180_000);
  await root.locator("[data-next]").click();
  await expect
    .poll(() =>
      root
        .locator("[data-lens-image]")
        .evaluate((image: HTMLImageElement) => image.currentSrc),
    )
    .toContain("harbor-diary");
  await root.locator("[data-tools-toggle]").click();
  await root.locator("[data-opaque]").check();
  await expect(root.locator(".lens-surface")).toBeHidden();
});
