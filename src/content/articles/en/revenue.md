---
articleId: "revenue"
lang: "en"
title: "Subscription, one-time payment, or ads?"
summary: "Match the bill to the value. The pricing page cannot rescue the product."
category: "business"
aliases:
  [
    "subscription",
    "one-time",
    "advertising",
    "구독",
    "일회 결제",
    "광고",
    "サブスクリプション",
    "買い切り",
    "広告",
  ]
related: ["payments", "srs"]
example: "revenue"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "Compare subscription, one-time purchase, and advertising for our audience and ongoing costs. Separate gross revenue from costs with explicit assumptions. Ask about entitlement duration, cancellation, and privacy choices. Do not select a business model without delegation; return a decision record and acceptance criteria."
checked: "2026-09-21"
---

## Concept

A subscription charges for continuing access or value. A one-time purchase pays for a defined entitlement. Advertising sells attention or placement. Revenue is not profit: collection fees, refunds, taxes, infrastructure, and support still exist.

## When you need it

Choose a model before designing entitlements, cancellation, and account deletion. Recurring hosting costs do not automatically make customers want a subscription. Advertising needs an audience and policy-compatible inventory.

## Example

A local export tool might sell a perpetual license for a stated version. A hosted collaboration service might charge for continuing service. A public learning guide might use ads if the reading experience and audience fit. The arithmetic below is illustrative and excludes costs; it is not an earnings promise.

```text
Illustrative monthly model, not a forecast:
100 members x $5 = $500 gross recurring revenue
minus fees, refunds, tax, hosting, support, acquisition
One-time: new sales must cover ongoing promises
Ads: eligible traffic x variable realized yield
```

## Options and tradeoffs

Subscriptions can align with ongoing service but create retention, failed-payment, and cancellation work. One-time sales are easy to explain but may fund years of support poorly. Ads reduce payment friction but introduce volume dependence, privacy decisions, and potential distraction. Hybrid models increase operational complexity.

## When to choose it

Map what users receive, for how long, and what happens after cancellation or failed payment. Model conservative revenue and full operating cost. Validate willingness to pay before polishing a three-column pricing table. Check provider eligibility and terms directly before launch.

## AI instructions

Compare subscription, one-time purchase, and advertising for our audience and ongoing costs. Separate gross revenue from costs with explicit assumptions. Ask about entitlement duration, cancellation, and privacy choices. Do not select a business model without delegation; return a decision record and acceptance criteria.

## Related reading and sources

- [Payment channels, PG, and merchant of record](/en/catalog/payments/)
- [SRS: make ‘done’ mean something](/en/catalog/srs/)

- [Stripe — Billing subscriptions](https://docs.stripe.com/billing/subscriptions/overview)
- [Google — AdSense eligibility](https://support.google.com/adsense/answer/9724)

Service documentation reviewed: 2026-09-21. Availability, policies, and contracts can change; confirm them before launch.
