---
kind: guide
articleId: "payments"
lang: "en"
title: "Payment channels, PG, and merchant of record"
summary: "A payment button is the beginning of the paperwork."
category: "business"
aliases:
  [
    "PG",
    "MoR",
    "Toss Payments",
    "Lemon Squeezy",
    "결제",
    "토스",
    "전자결제대행",
    "決済",
    "販売責任者",
  ]
related: ["revenue", "shipping"]
example: "payments"
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "For our product and seller location, compare Toss Payments PG, Lemon Squeezy MoR, and any required store billing. Ask for missing jurisdiction, customer, and channel details. Use dated official sources for eligibility, fees, tax scope, refunds, and settlement. Report unknowns; ask before selecting a provider. Include server verification and idempotent entitlement handling in the requirements."
checked: "2026-09-21"
---

## Concept

A payment channel is a route; a gateway (PG) processes payments; a merchant of record (MoR) is the legal seller.

## Example

A browser success URL is not payment proof. The server verifies the order and amount before granting access.

## When to choose it

PG and MoR contracts allocate different duties. Neither label settles every tax, refund, or product obligation. Check current agreements and permitted channels. Process trusted events idempotently so retries do not duplicate access. [Toss Payments](https://docs.tosspayments.com/guides/v2/payment-widget/integration) · [Lemon Squeezy](https://docs.lemonsqueezy.com/help/payments/merchant-of-record) · [Apple](https://developer.apple.com/app-store/review/guidelines/) · [Google Play](https://support.google.com/googleplay/android-developer/answer/9858738)

Sources checked 2026-09-21; terms may change.
