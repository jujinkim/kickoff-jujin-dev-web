---
kind: concept
articleId: astro
lang: en
title: Astro
summary: Static pages with optional islands.
category: static-generators
aliases:
  - Astro
related:
  - static-sites
  - hugo
  - jekyll
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  features: Selective client islands
  advantages: Article text stays static
  limitations: Personal saves need a service
  suitable: Content with small interactive areas
  combinations: UI islands plus static hosting
---

## Concept

Astro renders content into HTML and adds client interactivity through selected islands. This example uses static output; Astro also supports server rendering.

## Example

Start with three Markdown articles and one layout. Next builds an index and three article pages, then sends files through hosting to the browser. Enable the optional Save island: article text stays readable. Missing layout stops the build; static files alone cannot retain personal saves. Previous, Reset, or reload restores earlier states.

## When to choose it

Choose it for content with a few interactive controls. Pair an island with a separate storage API.

[Source](https://docs.astro.build/en/concepts/why-astro/)
