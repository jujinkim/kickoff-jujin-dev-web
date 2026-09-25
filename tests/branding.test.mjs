import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";

const read = (path) => readFileSync(path, "utf8");
const origin = "https://kickoff.jujin.dev";

test("kickoff.md display branding keeps the existing domain, repository, URLs, and comments", () => {
  const config = JSON.parse(read("src/lib/giscus.json"));
  assert.equal(config.repo, "jujinkim/kickoff-jujin-dev-web");
  assert.equal(config.repoId, "R_kgDOUitRaQ");
  assert.equal(config.categoryId, "DIC_kwDOUitRac4DGCIb");
  assert.equal(read("dist/CNAME").trim(), "kickoff.jujin.dev");
  for (const file of readdirSync("dist", { recursive: true })) {
    if (!/\.(html|md|json|xml|txt)$/.test(file) || file.startsWith("pagefind/"))
      continue;
    const body = read(`dist/${file}`);
    assert.ok(!body.includes("Kickoff"), file);
    assert.doesNotMatch(body, /https?:\/\/kickoff\.md(?:[\/"?#]|$)/, file);
    assert.doesNotMatch(
      body,
      /https:\/\/jujin\.dev\/(?:en|ko|ja|ai|llms\.txt|sitemap)/,
      file,
    );
    assert.ok(!body.includes("github.com/jujinkim/jujin-dev-web"), file);
    if (file.endsWith(".html")) {
      if (body.includes('property="og:site_name"'))
        assert.ok(
          body.includes(
            'property="og:site_name" content="kickoff.md by jujin"',
          ),
          file,
        );
      for (const canonical of body.matchAll(
        /rel="canonical" href="([^"]+)"/g,
      )) {
        assert.equal(new URL(canonical[1]).origin, origin, file);
      }
    }
  }
  for (const lang of ["en", "ko", "ja"]) {
    const html = read(`dist/${lang}/catalog/brutalism/index.html`);
    assert.ok(html.includes('data-comment-term="brutalism"'));
    assert.ok(html.includes('data-repo="jujinkim/kickoff-jujin-dev-web"'));
    assert.ok(html.includes('aria-label="kickoff.md by jujin"'));
    assert.ok(html.includes('href="https://jujin.dev"'));
  }
});
