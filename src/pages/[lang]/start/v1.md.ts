import type { APIRoute } from "astro";
import { languages } from "../../../lib/i18n";
import { startupMarkdownResponse } from "../../../lib/startup-markdown";
export const getStaticPaths = () =>
  languages.map((lang) => ({ params: { lang } }));
export const GET: APIRoute = () => startupMarkdownResponse("v1");
