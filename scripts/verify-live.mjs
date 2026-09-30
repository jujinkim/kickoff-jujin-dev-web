import { isListedArticle } from "./catalog-data.mjs";
import { readArticles } from "./validate-content.mjs";
import { designRegistry } from "./design-registry.mjs";
const origin = process.env.SITE_ORIGIN ?? "https://kickoff.jujin.dev";
let failed = 0;
const activeArticles = readArticles().filter(
  (a) =>
    a.data.lang === "en" &&
    a.data.status === "published" &&
    isListedArticle(a.data),
);
const examples = activeArticles.filter((a) => designRegistry[a.data.articleId]);
const sectionFor = (article) =>
  article.data.kind === "guide" ? "guides" : "catalog";
async function check(path, expected) {
  try {
    const url = new URL(path, origin);
    const response = await fetch(url, {
      redirect: "manual",
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok)
      throw new Error(
        `${response.status}${response.headers.get("location") ? ` -> ${response.headers.get("location")}` : ""}`,
      );
    const body = await response.text();
    for (const token of expected ? [expected].flat() : [])
      if (!body.includes(token))
        throw new Error(`Missing expected content: ${token}`);
    console.log(`PASS ${url.pathname}`);
    return body;
  } catch (error) {
    failed++;
    console.error(`FAIL ${path}: ${error.message}`);
    return null;
  }
}
for (const lang of ["en", "ko", "ja"]) {
  await check(`/${lang}/`, [
    `lang="${lang}"`,
    "data-prompt-example",
    "data-example-prompt",
    'data-home-section="prompt-value"',
  ]);
  await check(`/${lang}/start/`, "data-builder");
  await check(`/${lang}/help/`, 'id="make-prompt"');
  for (const article of examples) {
    const id = article.data.articleId;
    const section = sectionFor(article);
    await check(`/${lang}/${section}/${id}/`, [
      `data-comment-term="${id}"`,
      `data-demo="${id}"`,
      `rel="canonical" href="https://kickoff.jujin.dev/${lang}/${section}/${id}/"`,
      ...["en", "ko", "ja"].map(
        (other) =>
          `hreflang="${other}" href="https://kickoff.jujin.dev/${other}/${section}/${id}/"`,
      ),
    ]);
    await check(`/${lang}/${section}/${id}.md`, `ID: ${id}`);
  }
  await check(`/${lang}/catalog/categories/styles/`, 'class="comparison"');
  await check(
    `/${lang}/guides/srs/`,
    `href="https://kickoff.jujin.dev/${lang}/guides/srs/"`,
  );
  await check(`/${lang}/guides/srs.md`, "ID: srs");
  await check(`/sitemap-${lang}.xml`, [
    "/guides/srs/",
    ...examples.map(
      (article) => `/${lang}/${sectionFor(article)}/${article.data.articleId}/`,
    ),
  ]);
}
await check("/llms.txt", "/ai/catalog.json");
await check("/ai/instructions.md", [
  "Within approved requirements and boundaries",
  "These documents guide assistants; they do not enforce behavior.",
]);
const catalog = await check("/ai/catalog.json", '"schemaVersion": 1');
if (catalog) {
  try {
    if (JSON.parse(catalog).articles.length !== activeArticles.length)
      throw new Error(`Expected ${activeArticles.length} active articles`);
  } catch (error) {
    failed++;
    console.error(error.message);
  }
}
await check("/catalog.js", "/pagefind/pagefind.js");
await check("/pagefind/pagefind.js", "search");
await check("/pagefind/pagefind-entry.json", '"ko"');
process.exitCode = failed ? 1 : 0;
console.log(
  `${failed} failed checks. Browser search and authenticated comment posting require separate verification.`,
);
