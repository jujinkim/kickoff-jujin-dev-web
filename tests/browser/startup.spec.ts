import { test, expect } from "@playwright/test";

for (const lang of ["en", "ko", "ja"]) {
  test(`startup prompt and versioned document: ${lang}`, async ({
    page,
    context,
  }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto(`/${lang}/start/`);
    await expect(page.locator(".prompt-section")).toContainText(
      { en: "preferred language", ko: "편한 언어", ja: "使いやすい言語" }[
        lang
      ]!,
    );
    const prompt = page.locator("#startup-prompt");
    await expect(prompt).toContainText(`/ai/startup/latest.md`);
    await page.locator('[data-copy="startup-prompt"]').click();
    await expect
      .poll(() => page.evaluate(() => navigator.clipboard.readText()))
      .toBe((await prompt.textContent())!.trim());
    await page.locator(`.prompt-section a[href="/${lang}/start/v1/"]`).click();
    await expect(page.locator("#startup-prompt")).toContainText(
      `/ai/startup/v1.md`,
    );
    const latest = await page.request.get(`/ai/startup/latest.md`);
    expect(latest.status()).toBe(200);
    expect(latest.headers()["content-type"]).toContain("text/markdown");
    await expect(page.locator(".prose h2")).toHaveCount(7);
    await expect(page.locator(".prose")).toContainText("SOLID");
    await page.setViewportSize({ width: 320, height: 800 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const md = await page.request.get(`/${lang}/start/v1.md`);
    expect(md.headers()["content-type"]).toContain("text/markdown");
    const markdown = await md.text();
    expect(markdown).toContain("Reply in the user's language");
    expect(markdown).toBe(
      await (await page.request.get("/ai/startup/v1.md")).text(),
    );
    expect(await latest.text()).toBe(await md.text());
  });
}

test("startup copy failure reports status and leaves prompt selectable", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: async () => {
          throw new Error("denied");
        },
      },
    });
  });
  await page.goto("/ko/start/");
  const button = page.locator('[data-copy="startup-prompt"]');
  await button.click();
  await expect(page.locator(".prompt-section [role=status]")).toHaveText(
    (await button.getAttribute("data-error"))!,
  );
  await expect(page.locator("#startup-prompt")).toBeVisible();
});
