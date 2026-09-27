---
articleId: volume-pricing
lang: en
sourceRevision: 6
sources:
  - title: "Stripe: tiered pricing"
    url: "https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing"
    claim: Volume pricing applies the selected tier to all units and can lower totals at a boundary.
    checked: "2026-09-27"
---

## Selection & comparison

A print shop may want a large order to receive one lower rate across the whole batch. Graduated pricing discounts only later units, avoiding this model’s possible total-price drop. Base plus overage includes an allowance before charging excess units.

## Applications

The customer’s monthly rate is 0.20 up to 100 exports, then 0.10 for every export. Thus 100 costs 20, 101 costs 10.10, and 120 costs 12. Access capacity and the seller’s delivery promise are separate from this price formula.

## Implementation & cautions

Test zero and both sides of every threshold. Explain the downward price jump openly; do not substitute a graduated calculation. No flat fees, taxes, refunds or minimum charge are included in this fictional model.
