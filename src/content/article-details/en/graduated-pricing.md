---
articleId: graduated-pricing
lang: en
sourceRevision: 6
sources:
  - title: "Stripe: tiered pricing"
    url: "https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing"
    claim: Graduated pricing sums the units priced in each tier instead of repricing earlier units.
    checked: "2026-09-27"
---

## Selection & comparison

A worksheet maker may discount additional exports while preserving the price of earlier work. Volume pricing changes the rate for all units at a threshold. Base plus overage charges a base with included units; these are different formulas even with similar breakpoints.

## Applications

The customer pays 0.20 for each of the first 100 monthly exports and 0.10 thereafter. At 120, the bill is 20 + 2 = 22; at 101 it is 20.10. Zero usage costs zero in this offer.

## Implementation & cautions

State inclusive boundaries and calculate with exact currency units. Test 0, 100, 101 and 120. Flat tier fees, entitlement enforcement, seller duties and payment collection are outside this calculator; do not infer them from the subtotal table.
