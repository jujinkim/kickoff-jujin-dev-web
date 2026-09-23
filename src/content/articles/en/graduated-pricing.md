---
kind: "concept"
articleId: "graduated-pricing"
lang: "en"
title: "Graduated pricing"
summary: "Each slice keeps its own unit price."
category: "pricing-models"
aliases: ["Graduated pricing"]
related:
  [
    "revenue",
    "flat-rate-pricing",
    "per-seat-pricing",
    "feature-tiered-pricing",
    "volume-pricing",
    "base-plus-overage",
    "usage-based",
  ]
status: "published"
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "Sum separately priced slices",
    "advantages": "Earlier units keep their rate",
    "limitations": "More calculation to explain",
    "suitable": "Progressive usage discounts",
    "combinations": "Usage metering and subscriptions",
  }
---

## Why: the goal or problem

Imagine teachers exporting worksheets from a design tool. A school wants cheaper later exports without repricing earlier ones.

## How: work toward a solution

A fictional worksheet maker has three seats and 120 monthly exports. The first 100 cost 0.20 each; later exports cost 0.10 each. Thus 100 × 0.20 + 20 × 0.10 = 22. Change usage: 100 costs 20, 101 costs 20.10 and zero costs zero. Taxes, fees, refunds and tier flat fees are omitted.

## What: the concept

Graduated pricing prices units within each tier separately and adds the subtotals. Reaching a cheaper tier does not reprice earlier units.

Compare volume pricing using the same thresholds.

[Source](https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing)
