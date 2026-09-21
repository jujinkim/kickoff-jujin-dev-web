import { instructions } from "../../lib/ai";
export const GET = () =>
  new Response(instructions, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
