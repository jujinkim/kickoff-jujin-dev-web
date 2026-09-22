import type { APIRoute } from "astro";
import { languages, type Lang } from "../../../lib/i18n";
import { startupMarkdownResponse } from "../../../lib/startup-markdown";
export const getStaticPaths = () =>
  languages.map((lang) => ({ params: { lang } }));
export const GET: APIRoute = ({ params }) =>
  startupMarkdownResponse(params.lang as Lang, "v1");
