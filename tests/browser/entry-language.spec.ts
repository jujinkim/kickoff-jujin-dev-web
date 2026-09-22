import { expect, test } from "@playwright/test";

const lookup = "https://api.country.is/";

for (const [country, language] of [
  ["KR", "ko"],
  ["JP", "ja"],
  ["US", "en"],
  [null, "en"],
] as const) {
  test(`root chooses ${language} for country ${country}`, async ({ page }) => {
    await page.route(lookup, (route) =>
      route.fulfill({
        json: { country },
        headers: { "access-control-allow-origin": "*" },
      }),
    );
    await page.goto("/?source=hub#main");
    await expect(page).toHaveURL(`/${language}/?source=hub#main`);
    await expect(page.locator("html")).toHaveAttribute("lang", language);
  });
}

for (const failure of ["network", "http", "json", "timeout"] as const) {
  test(`root falls back to English after a ${failure} failure`, async ({
    page,
  }) => {
    await page.route(lookup, async (route) => {
      if (failure === "network") await route.abort();
      else if (failure === "http") await route.fulfill({ status: 503 });
      else if (failure === "json")
        await route.fulfill({ contentType: "application/json", body: "{" });
      // A stalled request must never leave the entry page waiting indefinitely.
    });
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await expect(page).toHaveURL("/en/");
  });
}

test("a manual choice wins while the country lookup is pending", async ({
  page,
}) => {
  await page.route(lookup, () => {});
  await page.goto("/?source=hub#main");
  await page.locator('nav a[lang="ja"]').click();
  await expect(page).toHaveURL("/ja/?source=hub#main");
});

test("explicit language URLs never perform a country lookup", async ({
  page,
}) => {
  const lookups: string[] = [];
  await page.route(lookup, (route) => {
    lookups.push(route.request().url());
    return route.fulfill({ json: { country: "KR" } });
  });
  for (const language of ["en", "ko", "ja"]) {
    await page.goto(`/${language}/`);
    await expect(page).toHaveURL(`/${language}/`);
    await expect(page.locator("html")).toHaveAttribute("lang", language);
  }
  expect(lookups).toEqual([]);
});

test("root still opens English without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}/`);
  await expect(page).toHaveURL(`${baseURL}/en/`);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await context.close();
});
