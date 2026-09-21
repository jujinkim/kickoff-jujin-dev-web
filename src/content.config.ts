import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { languages } from "./lib/i18n";
const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    kind: z.enum(["concept", "guide"]),
    comparison: z
      .object({
        features: z.string().min(1),
        advantages: z.string().min(1),
        limitations: z.string().min(1),
        suitable: z.string().min(1),
        combinations: z.string().min(1),
      })
      .optional(),
    articleId: z.string().regex(/^[a-z0-9-]+$/),
    lang: z.enum(languages),
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    aliases: z.array(z.string()).min(1),
    related: z.array(z.string()).min(1),
    example: z
      .enum([
        "spec",
        "objects",
        "layers",
        "decision",
        "collections",
        "tools",
        "generators",
        "shipping",
        "layout",
        "theme",
        "revenue",
        "payments",
      ])
      .optional(),
    status: z.enum(["draft", "published"]),
    revision: z.number().int().positive(),
    sourceRevision: z.number().int().positive(),
    updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    checked: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional(),
    aiPrompt: z.string().min(50).optional(),
  }),
});
export const collections = { articles };
