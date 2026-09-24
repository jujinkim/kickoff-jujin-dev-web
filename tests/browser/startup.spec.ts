import { test, expect } from "@playwright/test";

const handoff = {
  en: /external AI tool/,
  ko: /외부 AI 도구/,
  ja: /外部AIツール/,
};
const identity = {
  en: {
    learning: "Learning resources for project planning and design",
    ai: "Instructions for AI",
    places: ["This site", "External AI"],
  },
  ko: {
    learning: "프로젝트 기획·설계를 위한 학습 자료",
    ai: "AI용 지침",
    places: ["이 사이트", "외부 AI"],
  },
  ja: {
    learning: "プロジェクトの企画・設計を学ぶ資料",
    ai: "AI向け指示",
    places: ["このサイト", "外部AI"],
  },
};

for (const lang of ["en", "ko", "ja"] as const) {
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
    await page.locator("#service-description").fill("Neighbors lend books");
    const prompt = page.locator("#prompt-preview");
    await expect(prompt).toHaveValue(/\/ai\/startup\/latest.md/);
    await expect(prompt).toHaveValue(/\/ai\/instructions.md/);
    await expect(prompt).not.toHaveValue(
      /llms\.txt|catalog\.json|\/categories\//,
    );
    await page.locator("[data-copy-prompt]").click();
    await expect
      .poll(() => page.evaluate(() => navigator.clipboard.readText()))
      .toBe(await prompt.inputValue());
    await page
      .locator(`main .resource-links a[href="/${lang}/start/v1/"]`)
      .click();
    await expect(page.locator("#startup-prompt")).toContainText(
      `/ai/startup/v1.md`,
    );
    await page.locator('[data-copy="startup-prompt"]').click();
    await expect
      .poll(() => page.evaluate(() => navigator.clipboard.readText()))
      .toContain("/ai/startup/v1.md");
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
    await page.goto(`/${lang}/ai/`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      identity[lang].ai,
    );
    const aiPrompt = page.locator("#project-prompt");
    await expect(aiPrompt).toContainText("/ai/instructions.md");
    await expect(aiPrompt).not.toContainText(/llms\.txt|catalog\.json/);
    await page.locator('[data-copy="project-prompt"]').click();
    await expect
      .poll(() => page.evaluate(() => navigator.clipboard.readText()))
      .toBe(await aiPrompt.textContent());
  });
}

for (const lang of ["en", "ko", "ja"] as const) {
  test(`${lang}: home to prompt, optional fields, edits, reset, and help`, async ({
    page,
    context,
  }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(`/${lang}/`);
    await page.locator(".hero-actions .primary").click();
    await expect(page).toHaveURL(`/${lang}/start/`);
    const description = page.locator("#service-description");
    const preview = page.locator("#prompt-preview");
    const copy = page.locator("[data-copy-prompt]");
    const status = page.locator(".prompt-builder [role=status]");
    await expect(preview).toHaveAccessibleDescription(handoff[lang]);
    await expect(copy).toBeDisabled();
    await description.fill(" \n\t　");
    await expect(copy).toBeDisabled();
    await expect(preview).toHaveValue("");
    await description.fill("Neighbors lend books");
    await expect(preview).toHaveValue(/Undecided|미정|未定/);
    await expect(preview).toHaveValue(
      /Needs clarification|추가 확인 필요|追加確認が必要/,
    );
    await copy.click();
    await expect(status).toContainText(handoff[lang]);
    await expect
      .poll(() => page.evaluate(() => navigator.clipboard.readText()))
      .toBe(await preview.inputValue());
    const special =
      "<script>window.promptInjected=true</script> & <b>books</b>\nSecond line";
    await page.locator("#service-name").fill('Books & "Friends"');
    await expect(status).toBeEmpty();
    await description.fill(special);
    await page.locator("#service-notes").fill("Budget < 100\nNo ads");
    await expect(preview).toHaveValue(new RegExp("Second line"));
    expect(await preview.inputValue()).toContain(special);
    expect(await page.evaluate(() => "promptInjected" in window)).toBe(false);
    await copy.click();
    await expect
      .poll(() => page.evaluate(() => navigator.clipboard.readText()))
      .toBe(await preview.inputValue());
    await page.locator("[data-reset-prompt]").click();
    for (const field of [
      "#service-name",
      "#service-description",
      "#service-notes",
      "#prompt-preview",
    ])
      await expect(page.locator(field)).toHaveValue("");
    await expect(copy).toBeDisabled();
    await expect(status).toBeEmpty();
    await expect(page.locator("#service-name")).toBeFocused();
    await page.locator(`main a[href="/${lang}/help/#make-prompt"]`).click();
    await expect(page.locator("#make-prompt")).toBeVisible();
    await expect(
      page.locator(".help-taxonomy .category-tree[data-root=true] > li"),
    ).toHaveCount(5);
    await page
      .locator(`.help-taxonomy a[href="/${lang}/catalog/categories/styles/"]`)
      .click();
    await expect(page.locator(".catalog-card").first()).toBeVisible();
    expect(errors).toEqual([]);
  });

  test(`${lang}: denied clipboard selects preview for manual copy`, async ({
    page,
  }) => {
    await page.addInitScript(() =>
      Object.defineProperty(navigator, "clipboard", {
        value: {
          writeText: async () => {
            throw new Error("denied");
          },
        },
      }),
    );
    await page.goto(`/${lang}/start/`);
    await page.locator("#service-description").fill("Neighbors lend books");
    await page.locator("[data-copy-prompt]").click();
    await expect(page.locator(".prompt-builder [role=status]")).toContainText(
      /Copy failed|복사 실패|コピー失敗/,
    );
    await expect(page.locator(".prompt-builder [role=status]")).toContainText(
      handoff[lang],
    );
    await expect(page.locator("#prompt-preview")).toBeFocused();
    expect(
      await page
        .locator("#prompt-preview")
        .evaluate(
          (node: HTMLTextAreaElement) =>
            node.selectionStart === 0 &&
            node.selectionEnd === node.value.length,
        ),
    ).toBe(true);
    await page.locator("#service-notes").fill("Ask about budget");
    await expect(page.locator(".prompt-builder [role=status]")).toBeEmpty();
  });

  test(`${lang}: without JavaScript, base prompt and help remain usable`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 320, height: 900 },
    });
    const page = await context.newPage();
    await page.goto(`/${lang}/`);
    await page.locator(".hero-actions .primary").click();
    await expect(page.locator("[data-editor]")).toBeHidden();
    await expect(page.locator("noscript .notice")).toContainText("JavaScript");
    await expect(page.locator("noscript .notice")).toContainText(handoff[lang]);
    await expect(page.locator("noscript pre")).toContainText(
      "/ai/startup/latest.md",
    );
    await page.locator("noscript pre").focus();
    await expect(page.locator("noscript pre")).toBeFocused();
    await page.locator(`main a[href="/${lang}/help/#make-prompt"]`).click();
    await expect(page.locator("#make-prompt")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await context.close();
  });
}

test("input has no network, URL, or persistent storage side effects", async ({
  page,
  context,
}) => {
  await page.goto("/en/start/");
  const url = page.url();
  const state = await context.storageState();
  const requests: string[] = [];
  page.on("request", (request) =>
    requests.push(`${request.url()} ${request.postData() ?? ""}`),
  );
  await page.locator("#service-name").fill("private-name-482");
  await page.locator("#service-description").fill("private-description-482");
  await page.locator("#service-notes").fill("private-notes-482");
  expect(page.url()).toBe(url);
  expect(await context.storageState()).toEqual(state);
  expect(await page.evaluate(() => sessionStorage.length)).toBe(0);
  expect(requests.some((request) => request.includes("private-"))).toBe(false);
  await page.locator("#service-name").press("Enter");
  expect(page.url()).toBe(url);
  await page.reload();
  await expect(page.locator("#service-description")).toHaveValue("");
  await expect(page.locator("#prompt-preview")).toHaveValue("");
});

test("late clipboard completion cannot restore stale success after edit or reset", async ({
  page,
}) => {
  await page.addInitScript(() =>
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: () =>
          new Promise<void>((resolve) => {
            (window as any).finishCopy = resolve;
          }),
      },
    }),
  );
  await page.goto("/en/start/");
  for (const change of ["edit", "reset"]) {
    await page.locator("#service-description").fill("Neighbors lend books");
    await page.locator("[data-copy-prompt]").click();
    if (change === "edit") await page.locator("#service-name").fill("New name");
    else await page.locator("[data-reset-prompt]").click();
    await page.evaluate(() => (window as any).finishCopy());
    await expect(page.locator(".prompt-builder [role=status]")).toBeEmpty();
    if (change === "reset")
      await expect(page.locator("[data-copy-prompt]")).toBeDisabled();
  }
});

for (const lang of ["en", "ko", "ja"] as const) {
  test(`${lang}: keyboard can enter, preview, copy, and reset`, async ({
    page,
    context,
  }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto(`/${lang}/`);
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.keyboard.press("Tab");
    await expect(page.locator(".hero-actions .primary")).toBeFocused();
    await page.keyboard.press("Enter");
    await page.locator("#service-name").focus();
    await page.keyboard.type("Book swap");
    await page.keyboard.press("Tab");
    await expect(page.locator("#service-description")).toBeFocused();
    await page.keyboard.type("Neighbors lend books");
    await page.keyboard.press("Tab");
    await expect(page.locator("#service-notes")).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.locator("#prompt-preview")).toBeFocused();
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await expect(page.locator(".prompt-builder [role=status]")).toContainText(
      handoff[lang],
    );
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await expect(page.locator("#service-name")).toBeFocused();
    await expect(page.locator("#prompt-preview")).toHaveValue("");
  });
}

for (const lang of ["en", "ko", "ja"] as const) {
  test(`${lang}: home, builder and help fit all screen sizes and themes`, async ({
    page,
  }, testInfo) => {
    test.setTimeout(120_000);
    for (const width of [320, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const theme of ["light", "dark"]) {
        for (const path of ["", "start/", "help/", "ai/"]) {
          await page.goto(`/${lang}/${path}`);
          await page.evaluate((value) => {
            document.documentElement.dataset.theme = value;
          }, theme);
          if (path === "start/")
            await page
              .locator("#service-description")
              .fill("Long input: " + "Book".repeat(80));
          await expect(page.locator(".site-header nav a")).toHaveCount(6);
          for (const link of await page.locator(".site-header nav a").all())
            await expect(link).toBeVisible();
          await expect(
            page.locator(`.site-header nav a[href="/${lang}/ai/"]`),
          ).toHaveText(identity[lang].ai);
          if (path === "") {
            await expect(page.locator(".hero .eyebrow")).toHaveText(
              identity[lang].learning,
            );
            await expect(page.locator(".hero-handoff")).toContainText(
              handoff[lang],
            );
            const flow = page.getByRole("figure");
            await expect(flow).toBeVisible();
            await expect(flow).toHaveAccessibleName(/.+/);
            const accessibleFlow = await flow.ariaSnapshot();
            for (const place of identity[lang].places) {
              await expect(
                flow.getByText(place, { exact: true }),
              ).toBeVisible();
              expect(accessibleFlow).toContain(place);
            }
            for (const step of await flow.locator(".flow-steps li").all())
              await expect(step).toBeVisible();
          }
          expect(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth,
            ),
            `${path} ${width} ${theme}`,
          ).toBe(true);
          await page.screenshot({
            path: testInfo.outputPath(
              `${path.replace("/", "") || "home"}-${width}-${theme}.png`,
            ),
            fullPage: true,
          });
        }
      }
    }
  });
}
