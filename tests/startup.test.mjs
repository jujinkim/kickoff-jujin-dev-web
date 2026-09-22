import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = (p) => readFileSync(`dist/${p}`, "utf8");

test("startup versions publish localized HTML and English-only Markdown with latest discovery and pinned version pages", () => {
  for (const lang of ["en", "ko", "ja"]) {
    const source = readFileSync(`src/startup/v1/${lang}.md`, "utf8");
    const md = read(`${lang}/start/v1.md`);
    const html = read(`${lang}/start/v1/index.html`);
    assert.ok(md.endsWith(readFileSync("src/startup/v1/en.md", "utf8")));
    assert.equal(md, read("ai/startup/v1.md"));
    assert.equal(read(`${lang}/start/latest.md`), md);
    for (const heading of source.matchAll(/^## (.+)$/gm))
      assert.ok(html.includes(heading[1]));
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
      assert.ok(
        body.includes(
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
});
