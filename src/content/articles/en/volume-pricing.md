---
kind: "concept"
articleId: "volume-pricing"
lang: "en"
title: "Volume pricing"
summary: "The final quantity selects one rate for all units."
category: "pricing-models"
aliases: ["Volume pricing"]
related:
  [
    "revenue",
    "flat-rate-pricing",
    "per-seat-pricing",
    "feature-tiered-pricing",
    "graduated-pricing",
    "base-plus-overage",
    "usage-based",
  ]
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "One rate applies to all units",
    "advantages": "Whole-quantity discount",
    "limitations": "Total can drop at threshold",
    "suitable": "Intentional volume discounts",
    "combinations": "Usage metering and subscriptions",
  }
---

## Why: the goal or problem

A quantity agreement discounts the whole purchase once a threshold is reached. Pricing only the additional units would calculate a different deal.

## How: work toward a solution

A fictional workspace has three seats and 120 monthly exports. The rate is 0.20 through 100 exports, then 0.10 for all exports. Thus 120 costs 12. Change usage: 100 costs 20, but 101 costs 10.10; zero costs zero. Taxes, fees, refunds and tier flat fees are omitted.

## What: the concept

Volume pricing uses the final quantity tier to price every unit. Crossing a threshold can reduce the total, unlike graduated pricing.

Show threshold effects; compare graduated pricing with the identical tier table.

[Source](https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing)
