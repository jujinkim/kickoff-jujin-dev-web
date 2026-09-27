---
kind: concept
articleId: two-columns
lang: en
title: Sidebar layout
summary: >-
  Keep navigation, filters or supporting information beside the main content so
  both remain available.
category: columns
aliases:
  - Sidebar layout
  - Two columns
  - 2 columns
  - 2열
related:
  - layout
  - single-column
  - multiple-columns
status: published
revision: 7
sourceRevision: 7
updated: "2026-09-27"
comparison:
  features: A main region beside a narrower supporting region
  advantages: Keep filters and results in view together
  limitations: Stack regions when usable reading width is lost
  suitable: Persistent navigation or filtering alongside content
  combinations: The main region may contain a list or grid
checked: "2026-09-26"
---

## Why: the goal or problem

Cooks use a recipe index to choose dinner by ingredient and time. They adjust filters while comparing dishes. Controls beside results matter more than uninterrupted reading; equally important work areas need a different arrangement.

## How: work toward a solution

Choose tomato and 20 minutes: only tomato basil pasta remains. Open its cooking notes. A 10-minute limit gives an empty state; clear the filters to recover. On narrow screens, filters precede recipes.

## What: the concept

[**Sidebar layout**](https://design-system.w3.org/layouts/sidebar.html) places a narrower supporting region alongside the main region when space permits. It can use Flexbox or Grid. This is page composition, not CSS multi-column text flow. Stack regions before either becomes too cramped.
