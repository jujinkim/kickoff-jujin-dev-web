---
kind: concept
articleId: static-hosting
lang: en
title: Static hosting
summary: Public files and private writes separate.
category: hosting-models
aliases:
  - Static hosting
related:
  - shipping
  - always-on-server
  - serverless-functions
status: published
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: Prebuilt file delivery
  advantages: Reading needs no app renderer
  limitations: Personal writes need an API
  suitable: Public articles and documentation
  combinations: Static generator plus server or function
---

## Why: the goal or problem

Public articles do not change for each request. Running application logic for every read adds work that file delivery can avoid.

## How: work toward a solution

Read article follows the file path. Save A17 follows a separate API path into an external store. Repeat Save keeps one record under the example’s reader/article key. Fail next save returns failure without changing storage. Restart handler keeps the record because storage is outside the handler. Reset or reload clears this page-memory simulation, including its illustrated store.

## What: the concept

Static hosting delivers prebuilt HTML, CSS, and JavaScript. Browser interaction remains possible, but public files do not store private reader records.

Pair generated files with an authenticated API for personal writes.

[Source](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
