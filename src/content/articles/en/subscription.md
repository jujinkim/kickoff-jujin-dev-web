---
kind: concept
articleId: subscription
lang: en
title: Subscription
summary: >-
  Charge over recurring periods for continuing value; define renewal, payment
  failure and access policies.
category: billing
aliases:
  - Subscription
related:
  - revenue
  - one-time-payment
  - usage-based
  - prepaid-credits
  - flat-rate-pricing
status: published
revision: 6
sourceRevision: 6
updated: "2026-09-27"
checked: "2026-09-26"
comparison:
  features: Recurring billing periods
  advantages: Supports continuing service
  limitations: Renewal and failure handling
  suitable: Ongoing customer value
  combinations: Usage charges or flat rate
---

## Why: the goal or problem

Imagine a family-photo app that stores pictures for later visits. Storage and support continue after signup. Continuing access matters more than a finished download; meter exports if consumption dominates value.

## How: work toward a solution

A photo backup charges 12 monthly: three paid months total 36, with 100, 300 and 600 exports. Advance periods, disable renewal or simulate failure. Here cancellation ends access at the paid period boundary; failure pauses access until a successful retry. Example policies; taxes, fees and refunds omitted.

## What: the concept

A subscription repeats billing over agreed periods. Usage charges can coexist; recurring does not mean flat-rate.

Specify renewal and failure handling; combine with usage metering when consumption varies.

[Source](https://docs.stripe.com/billing/subscriptions/overview)
