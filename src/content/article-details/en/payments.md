---
articleId: payments
lang: en
sourceRevision: 8
sources:
  - title: "Stripe: fulfill orders"
    url: "https://docs.stripe.com/checkout/fulfillment"
    claim: Fulfillment must be safe when invoked more than once and must use trusted payment status rather than redirects.
    checked: "2026-09-27"
  - title: "Lemon Squeezy: merchant of record"
    url: "https://docs.lemonsqueezy.com/help/payments/merchant-of-record"
    claim: Describes its covered seller duties; retained product duties and eligibility require the actual agreement.
    checked: "2026-09-27"
---

## Selection & comparison

Choose payment arrangements after confirming product, market and seller location. Direct selling retains transaction duties; a merchant of record takes the covered seller role under contract. Store billing matters only for the relevant distribution channel. A checkout provider name does not determine every responsibility.

## Applications

The digital course links order, provider payment and entitlement records. A pending result does not unlock the course. Duplicate verified events preserve one entitlement; a paid order with failed fulfillment remains recoverable without creating another charge.

## Implementation & cautions

Verify signatures and order amount, currency, identity and completion state on a trusted server. Persist idempotency under concurrency; reconcile missed events and define refund effects on access. The diagram neither connects to a provider nor proves eligibility, tax compliance or transaction security.
