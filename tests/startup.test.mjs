import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = (p) => readFileSync(`dist/${p}`, "utf8");

test("startup versions publish localized HTML and English-only Markdown with latest discovery and pinned version pages", () => {
  for (const lang of ["en", "ko", "ja"]) {
    const source = readFileSync(`src/startup/v1/${lang}.md`, "utf8");
    const md = read(`${lang}/start/v1.md`);
    const html = read(`${lang}/start/v1/index.html`);
    assert.match(
      source,
      { en: /Revision: 4\./, ko: /리비전: 4\./, ja: /リビジョン: 4。/ }[lang],
    );
    assert.ok(source.includes("2026-09-26"));
    for (const oldRequirement of [
      "Offer the entire catalog",
      "모든 카탈로그를 제안",
      "全カタログを提示",
      "Every category must be considered",
      "모든 분류를 검토하며",
      "空や対象外の分類も",
    ])
      assert.ok(!source.includes(oldRequirement), oldRequirement);
    assert.ok(md.endsWith(readFileSync("src/startup/v1/en.md", "utf8")));
    assert.equal(md, read("ai/startup/v1.md"));
    assert.equal(read(`${lang}/start/latest.md`), md);
    for (const heading of source.matchAll(/^## (.+)$/gm))
      assert.ok(html.replaceAll("’", "'").includes(heading[1]), heading[1]);
    for (const page of [
      "start/index.html",
      "ai/index.html",
      "start/v1/index.html",
    ]) {
      const body = read(`${lang}/${page}`);
      const version = page === "start/v1/index.html" ? "v1" : "latest";
      assert.ok(
        body.includes(`https://kickoff.jujin.dev/ai/startup/${version}.md`),
      );
      assert.ok(body.includes("https://kickoff.jujin.dev/ai/instructions.md"));
      assert.ok(body.includes('href="/ai/instructions.md"'));
      assert.ok(
        page === "start/index.html"
          ? body.includes("data-copy-prompt") && body.includes("<noscript>")
          : body.includes(
              `data-copy="${page === "ai/index.html" ? "project-prompt" : "startup-prompt"}"`,
            ),
      );
    }
    assert.ok(
      html.includes(
        `rel="canonical" href="https://kickoff.jujin.dev/${lang}/start/v1/"`,
      ),
    );
    assert.ok(read(`sitemap-${lang}.xml`).includes(`/${lang}/start/v1/`));
    assert.ok(html.includes("CONTRIBUTING.md"));
  }
  assert.equal(read("ai/startup/v1.md"), read("en/start/v1.md"));
  assert.equal(read("ai/startup/latest.md"), read("en/start/latest.md"));
  assert.ok(read("llms.txt").includes("/ai/startup/latest.md"));
  assert.ok(read("ai/instructions.md").includes("/ai/startup/latest.md"));
  const startup = read("ai/startup/latest.md");
  assert.ok(startup.includes("only two required site documents"));
  assert.ok(
    startup.includes(
      "Derive a decision list from requirements and constraints",
    ),
  );
  assert.ok(startup.includes("whether or not this site covers them"));
  assert.ok(
    startup.includes(
      "No catalog retrieval date, article-ID inventory, or catalog snapshot is required",
    ),
  );
});
