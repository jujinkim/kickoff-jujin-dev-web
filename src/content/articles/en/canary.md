---
kind: concept
articleId: canary
lang: en
title: Canary
summary: Evaluate limited exposure against control.
category: release-replacement
aliases:
  - Canary
related:
  - shipping
  - rolling
  - blue-green
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  features: Limited exposure with control comparison
  advantages: Can stop before full exposure
  limitations: Biased or empty samples mislead
  suitable: Measurable outcomes and traffic control
  combinations: Gate rolling or blue-green completion
---

## Concept

Canary releases expose a limited population to a candidate and compare outcomes with a control before expanding. Useful signals need representative samples.

## Example

The synthetic window contains 1,000 requests per cohort: v1 has two errors, v2 thirty. Next computes 0.2% and 3%, then applies this exercise’s stop rule above 1%. Candidate traffic returns to v1. Select No samples: zero requests means insufficient evidence, never success. Previous revisits calculations; Reset or reload restores the fixture.

## When to choose it

Choose it when traffic assignment and outcomes are measurable. This threshold is illustrative; combine evaluation with rolling or blue-green.

[Source](https://sre.google/workbook/canarying-releases/)
