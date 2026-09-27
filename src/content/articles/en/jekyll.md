---
kind: concept
articleId: jekyll
lang: en
title: Jekyll
summary: Publish Markdown through a Ruby-based layout workflow.
category: static-generators
aliases:
  - Jekyll
related:
  - static-sites
  - astro
  - hugo
status: published
revision: 7
sourceRevision: 7
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Ruby build with reusable layouts
  advantages: One layout serves many articles
  limitations: Build dependencies need maintenance
  suitable: Existing Jekyll publishing workflows
  combinations: CI build plus static hosting
---

## Why: the goal or problem

Imagine a family recipe site where relatives add Markdown dishes. Its team uses Ruby templates so layout changes reach every page without copying recipes.

## How: work toward a solution

Start a family recipe archive with three Markdown articles and one layout. Next runs the Ruby build, creates an index and three article pages, then sends files through hosting to the browser. Missing layout stops this example before output. Reading these files needs no Ruby request handler. Personal Save records need a separate API. Previous, Reset, or reload restores earlier states.

## What: the concept

Jekyll transforms Markdown and layouts into a static site using a Ruby build workflow. Generation and hosting are separate choices.

Maintain build dependencies separately from hosting.

[Source](https://jekyllrb.com/docs/)
