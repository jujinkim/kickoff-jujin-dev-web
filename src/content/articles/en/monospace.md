---
kind: concept
articleId: monospace
lang: en
title: Monospace
summary: Equal character advances suit aligned text data; shape and fallback coverage remain separate concerns.
category: character-width
aliases:
  - Monospace
related:
  - theme
  - proportional
status: published
revision: 8
sourceRevision: 8
updated: "2026-09-27"
comparison:
  features: Equal character advances suit aligned text data; shape and fallback coverage remain separate concerns.
  advantages: Equal Latin advances preserve code and data column alignment.
  limitations: "CJK, emoji, combining marks, and fallback faces can break that model; inspect the supported character set."
  suitable: Choose it for code or aligned Latin data.
  combinations: Use fixed-width code beside proportional explanatory text.
checked: "2026-09-27"
---

## Why: the goal or problem

Imagine a weather log with readings aligned in text tables. Variable Latin letter widths make its columns drift.

## How: work toward a solution

Read the weather log’s aligned time, temperature and wind columns. In the separate lab, compare i and W, edit the sample and enable measured guides. Supported Latin advances match; reset restores the lab to 48px.

## What: the concept

Monospaced Latin glyphs share an advance width even when their ink shapes differ.

CJK, emoji, combining marks, and fallback faces can break that model; inspect the supported character set.

[W3C](https://www.w3.org/TR/css-fonts-3/)
