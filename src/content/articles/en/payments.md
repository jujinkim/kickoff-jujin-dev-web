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
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "For our product and seller location, compare Toss Payments PG, Lemon Squeezy MoR, and any required store billing. Ask for missing jurisdiction, customer, and channel details. Use dated official sources for eligibility, fees, tax scope, refunds, and settlement. Report unknowns; ask before selecting a provider. Include server verification and idempotent entitlement handling in the requirements."
checked: "2026-09-21"
---

## Concept

A payment channel is the route a customer uses, such as web checkout or store billing. A payment gateway (PG) supports payment processing. A merchant of record (MoR) is the legal seller in the customer transaction. These describe different responsibilities, not interchangeable brands.

## When you need it

Compare them after deciding audience, seller location, product type, and distribution channel. Tax, eligibility, store policy, refunds, and settlement affect feasibility. Verify current rules for the actual jurisdiction and contract; this guide cannot settle those facts for your business.

## Example

Toss Payments offers payment integration for merchants. Lemon Squeezy describes itself as MoR and handles transaction responsibilities such as sales tax and refunds within its service. Do not infer that an ordinary PG contract takes over all merchant obligations. Nor does an MoR remove the creator’s own accounting or product obligations.

```text
Customer -> permitted checkout channel -> payment provider
Server: verify order + amount -> confirm payment
Verified event -> idempotent entitlement update
Refund / dispute -> reconcile entitlement and records
Never grant access solely from a browser success URL.
```

## Options and tradeoffs

A PG can fit direct merchant checkout but leaves more merchant operations with you. An MoR can simplify cross-border transaction operations but adds eligibility, payout, and service constraints. Mobile store billing is a separate policy question; external checkout permission depends on current platform rules, region, and program.

## When to choose it

Verify supported countries and products, settlement, refund handling, tax scope, fees, and permitted channels in the current agreement. Never promise a universal fee. Confirm payment server-side against the stored order and amount; process trusted events idempotently. A success URL is not proof of payment.

## AI instructions

For our product and seller location, compare Toss Payments PG, Lemon Squeezy MoR, and any required store billing. Ask for missing jurisdiction, customer, and channel details. Use dated official sources for eligibility, fees, tax scope, refunds, and settlement. Report unknowns; ask before selecting a provider. Include server verification and idempotent entitlement handling in the requirements.

## Related reading and sources

- [Subscription, one-time payment, or ads?](/en/guides/revenue/)
- [Runtime, distribution, hosting: three questions](/en/guides/shipping/)

- [Toss Payments — Payment integration](https://docs.tosspayments.com/guides/v2/payment-widget/integration)
- [Lemon Squeezy — Merchant of Record](https://docs.lemonsqueezy.com/help/payments/merchant-of-record)
- [Apple — App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Google Play — Payments policy](https://support.google.com/googleplay/android-developer/answer/9858738)

Service documentation reviewed: 2026-09-21. Availability, policies, and contracts can change; confirm them before launch.
