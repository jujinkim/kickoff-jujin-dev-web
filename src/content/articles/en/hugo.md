---
kind: concept
articleId: hugo
lang: en
title: Hugo
summary: Content and templates become files.
category: static-generators
aliases:
  - Hugo
related:
  - static-sites
  - astro
  - jekyll
status: published
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: Content plus Go templates
  advantages: No request-time article renderer
  limitations: Templates and widgets need work
  suitable: File-centered documentation
  combinations: Static hosting plus a Save API
---

## Why: the goal or problem

Imagine a town guide with pages for walks and landmarks. Copying their shared navigation into each page makes updates repetitive.

## How: work toward a solution

Start a town visitor guide with three Markdown articles and one layout. Next resolves templates, creates an index and three article pages, then sends files through hosting to the browser. Missing layout stops this example before output. A separate browser widget can call a Save API; the build tool never handles reader requests. Previous, Reset, or reload restores earlier states.

## What: the concept

Hugo combines content with templates to generate static files. Its Go implementation does not require authors to write articles as Go programs.

Plan template maintenance and personal storage separately.

[Source](https://gohugo.io/about/introduction/)
