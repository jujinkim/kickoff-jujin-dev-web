---
kind: concept
articleId: monospace
lang: en
title: Monospace
summary: Measure equal Latin advances.
category: character-width
aliases:
  - Monospace
related:
  - theme
  - proportional
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-22"
comparison:
  features: >-
    Monospaced Latin glyphs share an advance width even when their ink shapes
    differ.
  advantages: Equal Latin advances preserve code and data column alignment.
  limitations: >-
    CJK, emoji, combining marks, and fallback faces can break that model;
    inspect the supported character set.
  suitable: Choose it for code or aligned Latin data.
  combinations: Use fixed-width code beside proportional explanatory text.
---

## Concept

Monospaced Latin glyphs share an advance width even when their ink shapes differ. This does not mean every Unicode character occupies one terminal cell.

## Example

Edit the JetBrains Mono specimen and show cell guides. Measured i and W advances match; the code and numeric columns illustrate the same regular spacing. Reset or reload restores the initial state.

## When to choose it

Choose it for code or aligned Latin data. CJK, emoji, combining marks, and fallback faces can break that model; inspect the supported character set.

[W3C](https://www.w3.org/TR/css-fonts-3/)
