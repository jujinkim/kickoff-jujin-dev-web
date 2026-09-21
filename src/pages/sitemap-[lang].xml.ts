import type { APIRoute } from "astro";
import { languages } from "../lib/i18n";
import { sitemap } from "../lib/sitemap";
export const getStaticPaths = () =>
  languages.map((lang) => ({ params: { lang }, props: { lang } }));
export const GET: APIRoute = async ({ props }) =>
  new Response(await sitemap(props.lang), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
