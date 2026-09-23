---
kind: concept
articleId: proportional
lang: en
title: Proportional
summary: Compare the same text specimen.
category: character-width
aliases:
  - Proportional
related:
  - theme
  - monospace
status: published
revision: 5
sourceRevision: 5
updated: "2026-09-23"
comparison:
  features: Proportional letters use varying advance widths.
  advantages: Different advances fit letters to their individual proportions.
  limitations: >-
    Font coverage and number features vary; measure the loaded face rather than
    infer widths from its name.
  suitable: Choose it for flowing text.
  combinations: Both serif and sans-serif can be proportional; tabular digits can coexist.
---

## Why: the goal or problem

Imagine a garden newsletter with long paragraphs. Giving narrow and wide letters equal space can make its prose uneven.

## How: work toward a solution

For a garden newsletter, compare a phrase with iiiWWW 0123 and aligned numbers. Edit the specimen, adjust its size, and show measured width guides or tabular digits. Text remains shaped as one string. Reset or reload restores the initial text at 48px. The measured i and W advances differ; tabular digits can still align.

## What: the concept

Proportional letters use varying advance widths.

Font coverage and number features vary; measure the loaded face rather than infer widths from its name.

[W3C](https://www.w3.org/TR/css-fonts-3/)
