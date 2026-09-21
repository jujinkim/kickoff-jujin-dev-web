import taxonomy from "../data/categories.json";
import { published, articleUrl } from "./content";
import { languages, type Lang } from "./i18n";
const site = "https://jujin.dev";
export async function sitemap(lang: Lang) {
  const all = await published();
  const entries = [
    "",
    "start/",
    "catalog/",
    "guides/",
    "ai/",
    "about/",
    ...taxonomy.map((c) => `catalog/categories/${c.id}/`),
  ].map((path) => ({
    url: `/${lang}/${path}`,
    alternates: languages.map((l) => ({ lang: l, url: `/${l}/${path}` })),
    updated: undefined as string | undefined,
  }));
  for (const article of all.filter((a) => a.data.lang === lang)) {
    entries.push({
      url: articleUrl(article),
      updated: article.data.updated,
      alternates: all
        .filter((a) => a.data.articleId === article.data.articleId)
        .map((a) => ({ lang: a.data.lang, url: articleUrl(a) })),
    });
  }
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.map((e) => `<url><loc>${site}${e.url}</loc>${e.updated ? `<lastmod>${e.updated}</lastmod>` : ""}${[...e.alternates, { lang: "x-default", url: e.alternates.find((a) => a.lang === "en")!.url }].map((a) => `<xhtml:link rel="alternate" hreflang="${a.lang}" href="${site}${a.url}"/>`).join("")}</url>`).join("")}</urlset>`;
}
