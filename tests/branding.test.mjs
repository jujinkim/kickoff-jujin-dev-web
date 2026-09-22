import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";

const read = (path) => readFileSync(path, "utf8");
const origin = "https://kickoff.jujin.dev";

test("all public canonical and machine-readable links use Kickoff while comments keep their identity", () => {
  const config = JSON.parse(read("src/lib/giscus.json"));
  assert.equal(config.repo, "jujinkim/kickoff-jujin-dev-web");
  assert.equal(config.repoId, "R_kgDOUitRaQ");
  assert.equal(config.categoryId, "DIC_kwDOUitRac4DGCIb");
  assert.equal(read("dist/CNAME").trim(), "kickoff.jujin.dev");
  for (const file of readdirSync("dist", { recursive: true })) {
    if (!/\.(html|md|json|xml|txt)$/.test(file) || file.startsWith("pagefind/"))
      continue;
    const body = read(`dist/${file}`);
    assert.doesNotMatch(
      body,
      /https:\/\/jujin\.dev\/(?:en|ko|ja|ai|llms\.txt|sitemap)/,
      file,
    );
    assert.ok(!body.includes("github.com/jujinkim/jujin-dev-web"), file);
    if (file.endsWith(".html")) {
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
    assert.ok(html.includes('aria-label="Kickoff by jujin"'));
    assert.ok(html.includes('href="https://jujin.dev"'));
  }
});
