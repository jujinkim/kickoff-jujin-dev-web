---
kind: "concept"
articleId: "subscription"
lang: "en"
title: "Subscription"
summary: "Recurring billing with explicit access policies."
category: "billing"
aliases: ["Subscription"]
related:
  [
    "revenue",
    "one-time-payment",
    "usage-based",
    "prepaid-credits",
    "flat-rate-pricing",
  ]
status: "published"
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "Recurring billing periods",
    "advantages": "Supports continuing service",
    "limitations": "Renewal and failure handling",
    "suitable": "Ongoing customer value",
    "combinations": "Usage charges or flat rate",
  }
---

## Why: the goal or problem

Imagine a family-photo app that stores pictures for later visits. Storage and support costs continue long after signup.

## How: work toward a solution

A fictional family photo backup charges 12 monthly: three successful months total 36, with 100, 300 and 600 exports. Advance periods, disable renewal or simulate failure. Here cancellation ends access at the paid period boundary; failure pauses access until a successful retry. These are example policies. Taxes, fees and refunds are omitted.

## What: the concept

A subscription repeats billing over agreed periods. It can include usage charges; recurring does not mean flat-rate.

Specify renewal and failure handling; combine with usage metering when consumption varies.

[Source](https://docs.stripe.com/billing/subscriptions/overview)
