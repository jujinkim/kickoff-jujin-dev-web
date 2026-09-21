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
test(
  "real build excludes drafts and supports missing/stale translations",
  { timeout: 60000 },
  () => {
    const dir = mkdtempSync(join(tmpdir(), "jujin-publication-"));
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
          article.data.revision = 2;
          article.data.sourceRevision = 2;
        }
        writeFileSync(
          articlePath(lang),
          matter.stringify(article.content, article.data),
        );
      }
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
        existsSync(join(dir, "dist/en/catalog/private-fixture/index.html")),
        false,
      );
      assert.equal(
        existsSync(join(dir, "dist/en/catalog/private-fixture.md")),
        false,
      );
      assert.equal(
        read("en/catalog/index.html").includes("private-fixture"),
        false,
      );
      assert.equal(read("sitemap-en.xml").includes("private-fixture"), false);
      assert.equal(read("llms.txt").includes("private-fixture"), false);
      const entry = catalog.articles.find(
        (a) => a.id === "english-only-fixture",
      );
      assert.deepEqual(Object.keys(entry.translations), ["en"]);
      assert.equal(
        existsSync(
          join(dir, "dist/ko/catalog/english-only-fixture/index.html"),
        ),
        false,
      );
      const html = read("en/catalog/english-only-fixture/index.html");
      assert.ok(!html.includes('hreflang="ko"'));
      assert.ok(html.includes("Not translated"));
      assert.ok(html.includes('href="/en/catalog/english-only-fixture/"'));
      assert.ok(
        read("ko/catalog/srs/index.html").includes("번역 갱신이 필요합니다"),
      );
      assert.ok(
        read("ko/catalog/srs/index.html").includes("미번역 — 영어로 읽기"),
      );
      assert.equal(
        catalog.articles.find((a) => a.id === "srs").translations.ko.stale,
        true,
      );
      const manifest = JSON.parse(read("pagefind/pagefind-entry.json"));
      assert.equal(
        Object.values(manifest.languages).reduce((n, l) => n + l.page_count, 0),
        37,
      );
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  },
);
