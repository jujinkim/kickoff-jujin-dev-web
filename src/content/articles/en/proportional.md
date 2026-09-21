---
kind: concept
articleId: proportional
lang: en
title: Proportional
summary: Measure varying glyph advances.
category: character-width
aliases:
  - Proportional
related:
  - theme
  - monospace
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-22"
comparison:
  features: Proportional letters use varying advance widths.
  advantages: Different advances fit letters to their individual proportions.
  limitations: >-
    Font coverage and number features vary; measure the loaded face rather than
    infer widths from its name.
  suitable: Choose it for flowing text.
  combinations: Both serif and sans-serif can be proportional; tabular digits can coexist.
---

## Concept

Proportional letters use varying advance widths. Advance includes spacing around a glyph, not just its ink outline; digits can still be tabular.

## Example

Enter a specimen and show measured width guides. In Noto Sans, i and W differ. Toggle tabular digits to align numeric rows without changing letter widths. Reset or reload restores the initial state.

## When to choose it

Choose it for flowing text. Font coverage and number features vary; measure the loaded face rather than infer widths from its name.

[W3C](https://www.w3.org/TR/css-fonts-3/)
