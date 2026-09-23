---
kind: "concept"
articleId: "base-plus-overage"
lang: "en"
title: "Base fee plus overage"
summary: "Pay a base, then only for excess usage."
category: "pricing-models"
aliases: ["Base fee plus overage"]
related:
  [
    "revenue",
    "flat-rate-pricing",
    "per-seat-pricing",
    "feature-tiered-pricing",
    "volume-pricing",
    "graduated-pricing",
    "subscription",
    "usage-based",
  ]
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "Base plus excess units",
    "advantages": "Covers baseline service",
    "limitations": "Base charged at zero usage",
    "suitable": "Fixed and variable costs",
    "combinations": "Subscription and usage metering",
  }
---

## Why: the goal or problem

A podcast transcript service pays for baseline capacity even in quiet months, then processes extra exports in busy months.

## How: work toward a solution

A fictional podcast transcript tool has three seats and 120 monthly exports. The monthly base is 20, including 100 exports; each extra export costs 0.10. Total: 20 + 20 × 0.10 = 22. Change usage: zero and 100 both cost 20; 101 costs 20.10. Taxes, fees and refunds are omitted.

## What: the concept

Base fee plus overage combines a fixed charge with included usage and a rate for excess units. The base remains payable even with no usage.

Combine with subscription billing.

[Source](https://docs.stripe.com/products-prices/pricing-models)
