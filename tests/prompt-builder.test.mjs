import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";
import { activeTaxonomy } from "../scripts/catalog-data.mjs";
const read = (path) => readFileSync(path, "utf8");
const moduleURL = (source) =>
  `data:text/javascript;base64,${Buffer.from(
    ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
      },
    }).outputText,
  ).toString("base64")}`;
const startupURL = moduleURL(read("src/lib/startup.ts"));
const { composeStartupPrompt } = await import(
  moduleURL(
    read("src/lib/prompt-builder.ts").replace(
      '"./startup"',
      JSON.stringify(startupURL),
    ),
  )
);

for (const [lang, name, notes] of [
  ["en", "Undecided", "Needs clarification"],
  ["ko", "미정", "추가 확인 필요"],
  ["ja", "未定", "追加確認が必要"],
]) {
  test(`${lang}: prompt requires description and preserves unknowns and literal input`, () => {
    for (const description of ["", " \n\t　"])
      assert.equal(
        composeStartupPrompt(lang, {
          name: "Book swap",
          description,
          notes: "No account",
        }),
        "",
      );
    const minimal = composeStartupPrompt(lang, {
      name: "　",
      description: "Neighbors lend books",
      notes: " \t",
    });
    assert.ok(
      minimal.includes("https://kickoff.jujin.dev/ai/startup/latest.md"),
    );
    assert.ok(minimal.includes(`:\n${name}\n\n`));
    assert.ok(minimal.includes(`:\n${notes}\n\n`));
    const literal = '<script>alert("x")</script> & <b>books</b>\nSecond line';
    const complete = composeStartupPrompt(lang, {
      name: "Book & Book",
      description: literal,
      notes: "Budget < 100\nNo ads",
    });
    for (const value of ["Book & Book", literal, "Budget < 100\nNo ads"])
      assert.ok(complete.includes(value));
  });
  test(`${lang}: help metadata, hierarchy, descriptions, links, navigation, and home order`, () => {
    const help = read(`dist/${lang}/help/index.html`);
    const escape = (s) =>
      s
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
    assert.ok(
      help.includes(
        `rel="canonical" href="https://kickoff.jujin.dev/${lang}/help/"`,
      ),
    );
    for (const other of ["en", "ko", "ja", "x-default"])
      assert.ok(
        help.includes(
          `hreflang="${other}" href="https://kickoff.jujin.dev/${other === "x-default" ? "en" : other}/help/"`,
        ),
      );
    assert.ok(read(`dist/sitemap-${lang}.xml`).includes(`/${lang}/help/`));
    const categoryLinks = [
      ...help.matchAll(
        new RegExp(`href="/${lang}/catalog/categories/([^/]+)/"`, "g"),
      ),
    ].map((m) => m[1]);
    assert.deepEqual(
      categoryLinks.sort(),
      activeTaxonomy.map((c) => c.id).sort(),
    );
    for (const c of activeTaxonomy) {
      assert.ok(help.includes(escape(c.descriptions[lang])), c.id);
      assert.doesNotMatch(
        c.descriptions[lang],
        /^(Explore |.*항목을 탐색|.*の項目を探)/,
      );
      assert.ok(
        read(`dist/${lang}/catalog/categories/${c.id}/index.html`).includes(
          escape(c.names[lang]),
        ),
      );
    }
    const home = read(`dist/${lang}/index.html`);
    assert.deepEqual(
      [...home.matchAll(/data-home-section="([^"]+)"/g)].map((m) => m[1]),
      ["help", "catalog", "planning", "ai", "recent"],
    );
    const nav = home.match(/<nav[^>]*>([\s\S]*?)<\/nav>/)[1];
    assert.deepEqual(
      [...nav.matchAll(/href="[^"]+\/([^/]+)\/"/g)].map((m) => m[1]),
      ["start", "help", "catalog", "guides", "ai", "about"],
    );
    for (const id of ["make-prompt", "catalog", "agree-plan"]) {
      assert.ok(home.includes(`/${lang}/help/#${id}`));
      assert.ok(help.includes(`id="${id}"`));
    }
  });
}
test("llms entry points describe prompt creation, help, and project planning", () => {
  const llms = read("dist/llms.txt");
  for (const text of [
    "Create a prompt",
    "/en/help/",
    "Project planning",
    "/ai/startup/latest.md",
  ])
    assert.ok(llms.includes(text));
});
