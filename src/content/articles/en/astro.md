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
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: Selective client islands
  advantages: Article text stays static
  limitations: Personal saves need a service
  suitable: Content with small interactive areas
  combinations: UI islands plus static hosting
---

## Why: the goal or problem

A neighborhood journal needs readable articles and one Save control, but sending an entire client app for each article adds work for readers.

## How: work toward a solution

Start a neighborhood journal with three Markdown articles and one layout. Next builds an index and three article pages, then sends files through hosting to the browser. Enable the optional Save island: article text stays readable. Missing layout stops the build; static files alone cannot retain personal saves. Previous, Reset, or reload restores earlier states.

## What: the concept

Astro renders content into HTML and adds client interactivity through selected islands. This example uses static output; Astro also supports server rendering.

Pair an island with a separate storage API.

[Source](https://docs.astro.build/en/concepts/why-astro/)
