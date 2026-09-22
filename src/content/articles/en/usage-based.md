---
kind: "concept"
articleId: "usage-based"
lang: "en"
title: "Usage-based billing"
summary: "Meter units, then calculate the charge."
category: "billing"
aliases: ["Usage-based billing"]
related:
  [
    "revenue",
    "one-time-payment",
    "subscription",
    "prepaid-credits",
    "volume-pricing",
  ]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "Metered billable units",
    "advantages": "Charges track consumption",
    "limitations": "Bills vary with usage",
    "suitable": "Measurable consumption",
    "combinations": "Recurring collection or prepaid credits",
  }
---

## Concept

Usage-based billing calculates charges from measured consumption. Define the billable unit and collection schedule separately; usage can be billed within a subscription.

## Example

A fictional export tool charges 0.02 per export. Across months with 100, 300 and 600 exports, charges are 2, 6 and 12: total 20. Change month-one usage or add one export to update its charge and the total. Zero usage costs zero here. Taxes, fees and refunds are omitted.

## When to choose it

Choose it when consumption reflects value or cost. Explain metering and budget variability; compare prepaid credits.

[Source](https://docs.stripe.com/billing/usage-based)
