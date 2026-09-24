import { test, expect } from "@playwright/test";

for (const lang of ["en", "ko", "ja"]) {
  test(`${lang}: focused catalog, working search and integrated guide navigation`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(`/${lang}/catalog/`);
    await expect(page.locator(".catalog-card")).toHaveCount(0);
    await expect(page.locator(".category-card")).toHaveCount(5);
    await page
      .locator(
        `.category-card[href="/${lang}/catalog/categories/development/"]`,
      )
      .click();
    await expect(page.locator(".catalog-card")).toHaveCount(9);
    for (const id of ["data", "requirements", "release-replacement"]) {
      await expect(page.locator(`#category option[value="${id}"]`)).toHaveCount(
        0,
      );
    }
    await page.locator("#search").fill("OOAD");
    await expect(page.locator("#result-status")).toHaveText(
      /No matches|결과가 없습니다|見つかりません/,
    );
    await expect(page.locator('#search-results a[href*="/ooad/"]')).toHaveCount(
      0,
    );
    await page.locator("#search").fill("React");
    await expect(
      page.locator(`#search-results a[href="/${lang}/catalog/react/"]`),
    ).toBeVisible();
    await page.goto(`/${lang}/catalog/categories/requirements/`);
    await expect(page).toHaveURL(new RegExp(`/${lang}/guides/srs/$`));
    await expect(page.locator(".prompt-section summary")).toBeVisible();
    await page.locator(".prompt-section summary").click();
    await expect(page.locator("#article-prompt")).toBeVisible();
    await expect(page.locator("[data-catalog-retired]")).toHaveCount(0);
    await page.goto(`/${lang}/guides/`);
    await expect(page.locator(".catalog-card")).toHaveCount(9);
    for (const id of ["collections", "ooad", "adr"]) {
      await expect(
        page.locator(`.catalog-card a[href="/${lang}/guides/${id}/"]`),
      ).toHaveCount(0);
    }
    await page.goto(`/${lang}/start/`);
    await expect(
      page.locator(`main a[href="/${lang}/help/#make-prompt"]`),
    ).toBeVisible();
    await expect(page.locator(`a[href="/${lang}/guides/adr/"]`)).toHaveCount(0);
    expect(errors).toEqual([]);
  });
}
