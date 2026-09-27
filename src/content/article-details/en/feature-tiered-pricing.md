---
articleId: feature-tiered-pricing
lang: en
sourceRevision: 6
sources:
  - title: "Stripe: pricing models"
    url: "https://docs.stripe.com/products-prices/pricing-models"
    claim: Pricing models distinguish package offers from quantity-based tiers; this example changes capabilities at fixed capacity.
    checked: "2026-09-27"
---

## Selection & comparison

A photo editor fits feature plans when some teams need approval workflows and others only export. Per-seat pricing tracks people; graduated and volume pricing track quantity. Feature plans can use either quantity model, but their defining difference is capability.

## Applications

The team pays 20 for Basic exports or 35 for Pro with approvals each month. Both include up to five seats and 200 exports. Three seats and 120 exports therefore isolate the price difference caused by features.

## Implementation & cautions

Define feature entitlements on the server, not only hidden buttons. Explain downgrade effects on existing work. Plan changes here update a local quote; migration, proration, seller contracts and actual charges are not simulated.
