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
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "Compare Astro, Hugo, and Jekyll for our agreed content workflow. Show how each handles multilingual pages, previews, search, and deployment. Include maintenance costs and official references. Ask me to accept your recommendation, reject it, or choose another candidate before changing the stack."
checked: "2026-09-21"
---

## Concept

A static site generator turns source content and templates into files before visitors arrive. Static output can still contain interactive JavaScript. It does not mean a screenshot with delusions of grandeur.

## When you need it

Use static generation for documentation, catalogs, and publications when a build can publish updates. Per-user secrets and authenticated actions still need appropriate server services; hiding a button is not authorization.

## Example

For this catalog, Markdown becomes article HTML and downloadable Markdown. Astro components create previews; small scripts handle theme and search. Hugo uses Go templates; Jekyll uses Liquid in a Ruby toolchain. All can produce files for GitHub Pages.

```text
Markdown + templates -> build -> HTML / CSS / JS
Astro: components + optional interactive islands
Hugo: Go templates + content pipelines
Jekyll: Liquid templates + Ruby ecosystem
```

## Options and tradeoffs

Astro suits component-oriented layouts and selective interactivity, with a Node toolchain to maintain. Hugo offers content-oriented tooling and a standalone generator, with Go template conventions to learn. Jekyll fits existing Liquid themes and GitHub workflows, with Ruby dependencies and plugin compatibility to consider. Test your actual content instead of borrowing someone else’s speed chart.

## When to choose it

Choose based on existing team skills, preview complexity, multilingual needs, and update workflow. Here Astro matches reusable visual examples and TypeScript. That is a contextual recommendation, not proof that every blog needs Astro. Confirm current deployment and plugin support in official docs.

## AI instructions

Compare Astro, Hugo, and Jekyll for our agreed content workflow. Show how each handles multilingual pages, previews, search, and deployment. Include maintenance costs and official references. Ask me to accept your recommendation, reject it, or choose another candidate before changing the stack.

## Related reading and sources

- [Language, library, framework, engine](/en/guides/tools/)
- [Runtime, distribution, hosting: three questions](/en/guides/shipping/)
- [Design decisions that leave a paper trail](/en/guides/adr/)

- [Astro — Islands architecture](https://docs.astro.build/en/concepts/islands/)
- [Hugo — Introduction](https://gohugo.io/about/introduction/)
- [Jekyll — GitHub Pages](https://jekyllrb.com/docs/github-pages/)

Service documentation reviewed: 2026-09-21. Availability, policies, and contracts can change; confirm them before launch.
