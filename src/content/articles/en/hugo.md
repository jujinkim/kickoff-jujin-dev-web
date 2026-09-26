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
revision: 6
sourceRevision: 6
updated: "2026-09-26"
checked: "2026-09-22"
comparison:
  features: Content plus Go templates
  advantages: No request-time article renderer
  limitations: Templates and widgets need work
  suitable: File-centered documentation
  combinations: Static hosting plus a Save API
---

## Why: the goal or problem

Imagine a town guide where visitors read walks and landmark articles. Editors repeat layout fixes across pages. They know Go templates and want shared Markdown publishing; page-specific interactive components are a lower priority.

## How: work toward a solution

Start the town guide with three Markdown articles and one layout. Next builds an index and three article pages, then delivers them through hosting. Missing layout stops output. A browser widget can call a separate Save API; Hugo never handles reader requests. Previous, Reset, or reload restores earlier states.

## What: the concept

Hugo combines content with templates to generate static files. Its Go implementation does not require authors to write articles as Go programs.

Plan template maintenance and personal storage separately.

[Source](https://gohugo.io/about/introduction/)
