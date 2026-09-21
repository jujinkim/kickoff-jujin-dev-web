---
kind: guide
articleId: "static-sites"
lang: "en"
title: "Astro, Hugo, Jekyll: three ways to ship HTML"
summary: "Pick for authoring and maintenance, not a benchmark trophy."
category: "development"
aliases: ["Astro", "Hugo", "Jekyll", "SSG", "정적 사이트", "静的サイト"]
related: ["tools", "shipping", "adr"]
example: "generators"
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "Compare Astro, Hugo, and Jekyll for our agreed content workflow. Show how each handles multilingual pages, previews, search, and deployment. Include maintenance costs and official references. Ask me to accept your recommendation, reject it, or choose another candidate before changing the stack."
checked: "2026-09-21"
---

## Concept

A static site generator builds files before visitors arrive. Static pages can still run interactive JavaScript.

## Example

Markdown + templates → build → HTML, CSS, JavaScript. This catalog uses Astro components for reusable previews.

## When to choose it

Astro uses components; Hugo uses Go templates; Jekyll uses Liquid. Each introduces its own tooling and maintenance. Compare team skills, multilingual content, previews, and publishing workflow. Verify current deployment and plugin support. [Astro](https://docs.astro.build/en/concepts/islands/) · [Hugo](https://gohugo.io/about/introduction/) · [Jekyll](https://jekyllrb.com/docs/github-pages/)

Sources checked 2026-09-21; terms may change.
