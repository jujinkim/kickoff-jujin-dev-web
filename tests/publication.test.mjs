import test from "node:test";
import assert from "node:assert/strict";
import {
  cpSync,
  mkdtempSync,
  readFileSync,
  writeFileSync,
  symlinkSync,
  rmSync,
  existsSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { execFileSync } from "node:child_process";
import matter from "gray-matter";
import { createConcept } from "../scripts/content-new.mjs";
import {
  validateArticles,
  readArticles,
} from "../scripts/validate-content.mjs";
import { chromium } from "@playwright/test";
import { createServer } from "node:http";
test(
  "real build excludes drafts and supports missing/stale translations",
  { timeout: 60000 },
  async () => {
    const dir = mkdtempSync(join(tmpdir(), "jujin-publication-"));
    let browser, server;
    try {
      for (const name of [
        "src",
        "public",
        "astro.config.mjs",
        "tsconfig.json",
        "package.json",
      ])
        cpSync(name, join(dir, name), { recursive: true });
      symlinkSync(resolve("node_modules"), join(dir, "node_modules"), "dir");
      // Keep this fixture independent of the production concept publication set.
      for (const article of readArticles(join(dir, "src/content/articles"))) {
        if (article.data.kind === "concept")
          rmSync(join(dir, "src/content/articles", article.file));
      }
      const articlePath = (lang) =>
        join(dir, "src/content/articles", lang, "srs.md");
      const original = matter(readFileSync(articlePath("en"), "utf8"));
      for (const [id, status] of [
        ["english-only-fixture", "published"],
        ["private-fixture", "draft"],
      ]) {
        const data = {
          ...original.data,
          articleId: id,
          status,
          title: id,
          aliases: [id],
        };
        writeFileSync(
          join(dir, "src/content/articles/en", `${id}.md`),
          matter.stringify(original.content, data),
        );
      }
      for (const lang of ["en", "ko", "ja"]) {
        const article = matter(readFileSync(articlePath(lang), "utf8"));
        article.data.related.push("english-only-fixture");
        if (lang === "en") {
          article.data.revision += 1;
          article.data.sourceRevision = article.data.revision;
        }
        writeFileSync(
          articlePath(lang),
          matter.stringify(article.content, article.data),
        );
      }
      createConcept("brutalism", join(dir, "src/content/articles"));
      createConcept("glassmorphism", join(dir, "src/content/articles"));
      const conceptPath = join(dir, "src/content/articles/en/brutalism.md");
      const concept = matter(readFileSync(conceptPath, "utf8"));
      concept.data.status = "published";
      concept.data.summary = "Published isolated comparison fixture.";
      concept.data.comparison = {
        features: "Visible structural choices",
        advantages: "Explicit hierarchy",
        limitations: "Requires accessibility review",
        suitable: "Editorial context",
        combinations: "Can combine with grids and proportional type",
      };
      concept.content =
        concept.content.replaceAll("TODO", "Fixture evidence.") +
        "\n```text\nConcrete fixture example\n```\n\n[Official source](https://example.org/)\n";
      writeFileSync(
        conceptPath,
        matter.stringify(concept.content, concept.data),
      );
      // A published page must never expose this draft body/title/summary.
      for (const lang of ["en", "ko", "ja"]) {
        const path = join(
          dir,
          "src/content/articles",
          lang,
          "glassmorphism.md",
        );
        const draft = matter(readFileSync(path, "utf8"));
        draft.data.title = "PRIVATE-DRAFT-SENTINEL";
        draft.data.summary = "PRIVATE-DRAFT-SENTINEL";
        writeFileSync(
          path,
          matter.stringify(
            draft.content + "\nPRIVATE-DRAFT-SENTINEL",
            draft.data,
          ),
        );
      }
      assert.deepEqual(
        validateArticles(readArticles(join(dir, "src/content/articles"))),
        [],
      );
      execFileSync(
        process.execPath,
        [resolve("node_modules/astro/bin/astro.mjs"), "build"],
        { cwd: dir, stdio: "pipe", timeout: 45000 },
      );
      execFileSync(
        process.execPath,
        [resolve("node_modules/pagefind/lib/runner/bin.cjs"), "--site", "dist"],
        { cwd: dir, stdio: "pipe", timeout: 10000 },
      );
      const read = (p) => readFileSync(join(dir, "dist", p), "utf8");
      const catalog = JSON.parse(read("ai/catalog.json"));
      assert.equal(
        catalog.articles.some((a) => a.id === "private-fixture"),
        false,
      );
      assert.equal(
        existsSync(join(dir, "dist/en/guides/private-fixture/index.html")),
        false,
      );
      assert.equal(
        existsSync(join(dir, "dist/en/guides/private-fixture.md")),
        false,
      );
      assert.equal(
        read("en/guides/index.html").includes("private-fixture"),
        false,
      );
      assert.equal(read("sitemap-en.xml").includes("private-fixture"), false);
      assert.equal(read("llms.txt").includes("private-fixture"), false);
      const entry = catalog.articles.find(
        (a) => a.id === "english-only-fixture",
      );
      assert.deepEqual(Object.keys(entry.translations), ["en"]);
      assert.equal(
        existsSync(join(dir, "dist/ko/guides/english-only-fixture/index.html")),
        false,
      );
      const html = read("en/guides/english-only-fixture/index.html");
      assert.ok(!html.includes('hreflang="ko"'));
      assert.ok(html.includes("Not translated"));
      assert.ok(html.includes('href="/en/guides/english-only-fixture/"'));
      assert.ok(
        read("ko/guides/srs/index.html").includes("번역 갱신이 필요합니다"),
      );
      assert.ok(
        read("ko/guides/srs/index.html").includes("미번역 — 영어로 읽기"),
      );
      assert.equal(
        catalog.articles.find((a) => a.id === "srs").translations.ko.stale,
        true,
      );
      const manifest = JSON.parse(read("pagefind/pagefind-entry.json"));
      assert.equal(
        Object.values(manifest.languages).reduce((n, l) => n + l.page_count, 0),
        38,
      );
      const category = read("en/catalog/categories/styles/index.html");
      assert.ok(category.includes('href="/en/catalog/brutalism/"'));
      assert.ok(category.includes("Visible structural choices"));
      assert.ok(category.includes('data-candidate="glassmorphism"'));
      assert.ok(!category.includes('data-candidate="brutalism"'));
      assert.ok(
        read("en/catalog/brutalism/index.html").includes(
          "Visible structural choices",
        ),
      );
      assert.ok(
        read("en/catalog/brutalism/index.html").includes(
          'href="/en/guides/theme/"',
        ),
      );
      assert.ok(
        read("en/guides/theme/index.html").includes(
          'href="/en/catalog/brutalism/"',
        ),
      );
      assert.ok(read("llms.txt").includes("/en/catalog/brutalism.md"));
      assert.equal(
        catalog.articles.find((a) => a.id === "brutalism").kind,
        "concept",
      );
      assert.equal(
        catalog.articles.some((a) => a.id === "glassmorphism"),
        false,
      );
      for (const path of [
        "en/catalog/index.html",
        "en/catalog/categories/styles/index.html",
        "ai/catalog.json",
        "llms.txt",
        "sitemap-en.xml",
      ])
        assert.ok(!read(path).includes("PRIVATE-DRAFT-SENTINEL"));
      assert.equal(
        existsSync(join(dir, "dist/en/catalog/glassmorphism.md")),
        false,
      );
      assert.equal(
        existsSync(join(dir, "dist/ko/catalog/brutalism/index.html")),
        false,
      );
      server = createServer((req, res) => {
        const path = new URL(req.url, "http://localhost").pathname;
        try {
          const body = readFileSync(
            join(dir, "dist", path.endsWith("/") ? path + "index.html" : path),
          );
          res.setHeader(
            "Content-Type",
            path.endsWith(".js")
              ? "text/javascript"
              : path.endsWith(".wasm")
                ? "application/wasm"
                : path.endsWith("/")
                  ? "text/html"
                  : "application/octet-stream",
          );
          res.end(body);
        } catch {
          res.statusCode = 404;
          res.end();
        }
      });
      await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
      browser = await chromium.launch({ args: ["--no-sandbox"] });
      const page = await browser.newPage();
      await page.route("https://giscus.app/**", (route) => route.abort());
      await page.goto(`http://127.0.0.1:${server.address().port}/en/catalog/`);
      await page.locator("#search").fill("brutalism");
      await page
        .locator('#search-results a[href="/en/catalog/brutalism/"]')
        .waitFor();
      await page.locator("#search").fill("PRIVATE-DRAFT-SENTINEL");
      await page.waitForFunction(() =>
        document
          .querySelector("#result-status")
          .textContent.includes("No matches"),
      );
    } finally {
      await browser?.close();
      if (server) await new Promise((resolve) => server.close(resolve));
      rmSync(dir, { recursive: true, force: true });
    }
  },
);
