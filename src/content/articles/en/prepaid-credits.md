---
kind: "concept"
articleId: "prepaid-credits"
lang: "en"
title: "Prepaid credits"
summary: "Buy a balance before consuming units."
category: "billing"
aliases: ["Prepaid credits"]
related:
  [
    "revenue",
    "one-time-payment",
    "subscription",
    "usage-based",
    "consumable-purchase",
  ]
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "Pre-funded usage balance",
    "advantages": "Visible spending boundary",
    "limitations": "Top-ups and expiry rules",
    "suitable": "Budgeted consumption",
    "combinations": "Usage metering",
  }
---

## Why: the goal or problem

Customers need a spending ceiling before consuming variable resources. An unrestricted bill at month-end makes budgeting difficult.

## How: work toward a solution

A fictional export tool starts with 1,000 credits, spending one per export. Run the shared months of 100, 300 and 600 exports: balances become 900, 600 and zero. Any further export is blocked until a simulated top-up. Credits here do not expire; purchase price, taxes, fees and refunds are omitted.

## What: the concept

Prepaid credits collect payment before usage and reduce a balance as units are consumed. Credit value, expiry and eligible uses depend on the offer.

Explain balance rules; combine with metering.

[Source](https://docs.stripe.com/billing/subscriptions/usage-based/billing-credits)
