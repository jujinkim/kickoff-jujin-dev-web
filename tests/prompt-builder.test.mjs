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
const { startupPrompt } = await import(startupURL);
const { projectPrompt } = await import(
  moduleURL(
    read("src/lib/ai.ts").replace('"./startup"', JSON.stringify(startupURL)),
  )
);
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
    const siteUrls = (prompt) =>
      [...prompt.matchAll(/https:\/\/kickoff\.jujin\.dev\/[a-z0-9/.-]+/g)]
        .map((match) => match[0].replace(/\.$/, ""))
        .sort();
    for (const version of ["latest", "v1"]) {
      const expected = [
        "https://kickoff.jujin.dev/ai/instructions.md",
        `https://kickoff.jujin.dev/ai/startup/${version}.md`,
      ];
      assert.deepEqual(siteUrls(startupPrompt(lang, version)), expected);
    }
    const expected = siteUrls(startupPrompt(lang));
    assert.deepEqual(siteUrls(minimal), expected);
    assert.deepEqual(siteUrls(projectPrompt[lang]), expected);
    const versionControl = {
      en: [
        "version control systems",
        "repository hosting",
        "preserve existing choices",
      ],
      ko: ["버전 관리 시스템", "저장소 호스팅", "기존 선택을 유지"],
      ja: [
        "バージョン管理システム",
        "リポジトリホスティング",
        "既存の選択を維持",
      ],
    }[lang];
    const noScript = read(`dist/${lang}/start/index.html`).match(
      /<noscript>[\s\S]*?<\/noscript>/,
    )[0];
    const workflow = {
      en: [
        "realistic options, pros/cons",
        "requirements and constraints",
        "use your recommendation",
        "without asking again",
        "task file",
        "automatically commit locally after checks pass",
        "existing restrictions",
        "applied design/architecture",
        "reasons and tradeoffs",
        "user-confirmed versus delegated",
        "save/commit status",
        "remaining work",
      ],
      ko: [
        "현실적인 선택지·장단점",
        "요구·제약에 근거한 추천",
        "알아서 추천대로 해줘",
        "재확인 없이",
        "작업 파일",
        "금지 규칙을 지켜 자동 로컬 커밋",
        "적용한 디자인·아키텍처",
        "이유·절충점",
        "사용자 확정과 위임받은 선택",
        "저장·커밋 상태",
        "남은 작업",
      ],
      ja: [
        "現実的な選択肢・利点と欠点",
        "要件と制約に基づく推薦",
        "推薦どおりに任せます",
        "聞き直さず",
        "作業ファイル",
        "検証通過後に既存の禁止規則を守って自動でローカルコミット",
        "適用したデザイン・構成",
        "理由・トレードオフ",
        "ユーザー確定と委任された判断",
        "保存・コミット状態",
        "残作業",
      ],
    }[lang];
    for (const prompt of [
      minimal,
      startupPrompt(lang),
      startupPrompt(lang, "v1"),
      projectPrompt[lang],
      noScript,
    ])
      for (const term of [...versionControl, ...workflow])
        assert.ok(prompt.includes(term), `${lang}: ${term}`);
    for (const prompt of [minimal, projectPrompt[lang]])
      assert.doesNotMatch(prompt, /llms\.txt|catalog\.json|\/categories\//);
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
    const nav = home.match(/<nav[^>]*>([\s\S]*?)<\/nav>/)[1];
    for (const route of ["start", "catalog", "guides", "help"])
      assert.ok(nav.includes(`href="/${lang}/${route}/"`));
    const footer = home.match(/<footer[\s\S]*?<\/footer>/)[0];
    for (const route of ["ai", "about"])
      assert.ok(footer.includes(`href="/${lang}/${route}/"`));
    assert.ok(home.includes(`href="/${lang}/start/"`));
    assert.ok(home.includes(`href="/${lang}/help/"`));
    for (const id of ["srs", "architecture", "layout"])
      assert.ok(home.includes(`href="/${lang}/guides/${id}/"`));
    for (const id of ["make-prompt", "catalog", "agree-plan"])
      assert.ok(help.includes(`id="${id}"`));
    const catalog = read(`dist/${lang}/catalog/index.html`);
    const description = (html) =>
      html.match(/name="description" content="([^"]+)"/)[1];
    const learning = { en: /[Ll]earn/, ko: /배우|학습/, ja: /学/ }[lang];
    const external = { en: /external AI/, ko: /외부 AI/, ja: /外部AI/ }[lang];
    assert.match(description(home), learning);
    assert.match(description(catalog), learning);
    assert.notEqual(description(home), description(catalog));
    const corePages = [
      home,
      help,
      ...["start", "start/v1", "about", "ai"].map((path) =>
        read(`dist/${lang}/${path}/index.html`),
      ),
    ];
    const noAI = {
      en: /kickoff does not provide an AI service/,
      ko: /kickoff는 AI 서비스를 제공하지 않습니다/,
      ja: /kickoffはAIサービスを提供していません/,
    }[lang];
    for (const html of corePages) assert.match(description(html), external);
    for (const html of [...corePages, catalog]) {
      assert.ok(
        html.includes(
          `property="og:description" content="${description(html)}"`,
        ),
      );
      assert.match(html.match(/<footer[\s\S]*?<\/footer>/)[0], external);
      assert.match(html.match(/<footer[\s\S]*?<\/footer>/)[0], noAI);
    }
    const builder = read(`dist/${lang}/start/index.html`);
    assert.match(
      builder
        .replace(/<style[^>]*>[\s\S]*?<\/style>/g, "")
        .split(/<div[^>]*\bdata-editor\b/)[0],
      noAI,
    );
    for (const path of ["ai", "start/v1", "guides/srs"]) {
      const html = read(`dist/${lang}/${path}/index.html`);
      assert.match(
        html.match(/class="prompt-handoff"[^>]*>([^<]+)/)[1],
        external,
      );
      for (const result of html.matchAll(/data-(?:success|error)="([^"]+)"/g))
        assert.match(result[1], external);
      assert.match(html.match(/<noscript>[\s\S]*?<\/noscript>/)[0], external);
    }
    if (lang === "ko")
      assert.ok(
        home.includes("AI에게 맡길 첫 작업, 내 프로젝트에 맞는 프롬프트로."),
      );
    const label = {
      en: "Instructions for external AI",
      ko: "외부 AI용 지침",
      ja: "外部AI向け指示",
    }[lang];
    assert.ok(footer.includes(label));
    assert.match(
      help,
      {
        en: /loan status be shared across devices/,
        ko: /여러 기기에서 대여 상태를 공유/,
        ja: /複数の端末で貸出状況を共有/,
      }[lang],
    );
  });
}
test("llms entry points describe prompt creation, help, and project planning", () => {
  const root = read("dist/index.html");
  const home = read("dist/en/index.html");
  for (const pattern of [
    /<title>([^<]+)<\/title>/,
    /name="description" content="([^"]+)"/,
    /property="og:title" content="([^"]+)"/,
    /property="og:description" content="([^"]+)"/,
  ])
    assert.equal(root.match(pattern)[1], home.match(pattern)[1]);
  assert.match(root, /kickoff does not provide an AI service/);
  const llms = read("dist/llms.txt");
  for (const text of [
    "Create a prompt",
    "/en/help/",
    "Project planning",
    "learning project planning",
    "external AI tool",
    "kickoff does not provide an AI service",
    "Create a custom prompt",
    "Instructions for external AI",
    "/ai/startup/latest.md",
  ])
    assert.ok(llms.includes(text));
});
