---
kind: concept
articleId: multiple-columns
lang: en
title: Multi-region layout
summary: "Coordinate navigation, active content and context in distinct regions when they must be seen together."
category: columns
aliases:
  - Multiple columns
  - Multi-region layout
related:
  - layout
  - single-column
  - two-columns
status: published
revision: 8
sourceRevision: 8
updated: "2026-09-27"
comparison:
  features: "Coordinate navigation, active content and context in distinct regions when they must be seen together."
  advantages: References remain visible beside active work.
  limitations: More regions divide attention and need an explicit small-screen order.
  suitable: Choose it when context must remain visible beside work.
  combinations: Use flat controls within regions and a single column on mobile.
checked: "2026-09-27"
---

## Why: the goal or problem

A botanical museum page helps visitors choose a plant exhibit and examine its features. Switching between the exhibit list, specimen and explanation interrupts comparison. A simple sidebar is insufficient when commentary also needs its own visible region.

## How: work toward a solution

Choose Rosemary needles. The central image and name change with the commentary beside them. Open its observation prompt. On narrow screens, the regions follow navigation, exhibit, explanation in that order.

## What: the concept

A multi-region layout coordinates separate page areas. This is page composition, not CSS multi-column text flowing between columns. More regions divide attention and require a clear mobile and keyboard order.

[W3C: CSS Grid Level 1](https://www.w3.org/TR/css-grid-1/)
