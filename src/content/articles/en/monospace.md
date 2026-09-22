---
kind: concept
articleId: monospace
lang: en
title: Monospace
summary: Compare the same text specimen.
category: character-width
aliases:
  - Monospace
related:
  - theme
  - proportional
status: published
revision: 3
sourceRevision: 3
updated: "2026-09-23"
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

## Why: the goal or problem

Code and text tables rely on aligned positions. Variable Latin character widths make those positions drift.

## How: work toward a solution

All five specimens share a sentence, iiiWWW 0123, and the same numbers. Edit the specimen, adjust its size, and show measured width guides or tabular digits. Text remains shaped as one string. Reset or reload restores the initial text at 48px. Supported Latin characters share an advance width; fallback characters may differ.

## What: the concept

Monospaced Latin glyphs share an advance width even when their ink shapes differ.

CJK, emoji, combining marks, and fallback faces can break that model; inspect the supported character set.

[W3C](https://www.w3.org/TR/css-fonts-3/)
