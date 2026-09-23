---
kind: concept
articleId: jekyll
lang: en
title: Jekyll
summary: Ruby builds; hosting serves files.
category: static-generators
aliases:
  - Jekyll
related:
  - static-sites
  - astro
  - hugo
status: published
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: Ruby build with reusable layouts
  advantages: One layout serves many articles
  limitations: Build dependencies need maintenance
  suitable: Existing Jekyll publishing workflows
  combinations: CI build plus static hosting
---

## Why: the goal or problem

Imagine a family recipe site where relatives add new dishes. Copying whole pages makes shared layout changes tedious.

## How: work toward a solution

Start a family recipe archive with three Markdown articles and one layout. Next runs the Ruby build, creates an index and three article pages, then sends files through hosting to the browser. Missing layout stops this example before output. Reading these files needs no Ruby request handler. Personal Save records need a separate API. Previous, Reset, or reload restores earlier states.

## What: the concept

Jekyll transforms Markdown and layouts into a static site using a Ruby build workflow. Generation and hosting are separate choices.

Maintain build dependencies separately from hosting.

[Source](https://jekyllrb.com/docs/)
