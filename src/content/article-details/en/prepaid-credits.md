---
articleId: prepaid-credits
lang: en
sourceRevision: 6
sources:
  - title: "Stripe: billing credits"
    url: "https://docs.stripe.com/billing/subscriptions/usage-based/billing-credits"
    claim: Credit grants can offset eligible usage invoices; this demo uses application credits rather than claiming identical provider settlement behavior.
    checked: "2026-09-27"
---

## Selection & comparison

A poster exporter fits prepayment when a classroom wants a bounded allowance before consuming resources. Postpaid usage billing charges after measurement; subscription access usually follows a time period. Credits define a balance, not necessarily a currency or a renewal interval.

## Applications

A purchased allowance starts at 1,000 credits; each export consumes one. After 100, 300 and 600 exports the balances are 900, 600 and zero. A further export is blocked until top-up; purchase price and expiry are unspecified.

## Implementation & cautions

Keep purchase, reservation, consumption and refunds in a durable ledger. Prevent duplicate deduction and negative balances under concurrency. Define expiration and failed-work refunds explicitly. This local example resets on reload and stores no purchased value.
