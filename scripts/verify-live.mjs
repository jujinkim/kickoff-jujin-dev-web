import { designRegistry } from "./design-registry.mjs";
const origin = process.env.SITE_ORIGIN ?? "https://jujin.dev";
let failed = 0;
const styles = Object.keys(designRegistry);
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
  await check(`/${lang}/`, `lang="${lang}"`);
  for (const id of styles) {
    await check(`/${lang}/catalog/${id}/`, [
      `data-comment-term="${id}"`,
      `data-demo="${id}"`,
      `rel="canonical" href="https://jujin.dev/${lang}/catalog/${id}/"`,
      ...["en", "ko", "ja"].map(
        (other) =>
          `hreflang="${other}" href="https://jujin.dev/${other}/catalog/${id}/"`,
      ),
    ]);
    await check(`/${lang}/catalog/${id}.md`, `ID: ${id}`);
  }
  await check(`/${lang}/catalog/categories/styles/`, 'class="comparison"');
  await check(
    `/${lang}/guides/srs/`,
    `href="https://jujin.dev/${lang}/guides/srs/"`,
  );
  await check(`/${lang}/guides/srs.md`, "ID: srs");
  await check(`/sitemap-${lang}.xml`, [
    "/guides/srs/",
    ...styles.map((id) => `/${lang}/catalog/${id}/`),
  ]);
}
await check("/llms.txt", "/ai/catalog.json");
await check("/ai/instructions.md", "EVERY unresolved choice");
const catalog = await check("/ai/catalog.json", '"schemaVersion": 1');
if (catalog) {
  try {
    if (JSON.parse(catalog).articles.length !== 30)
      throw new Error("Expected exactly 30 articles");
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
