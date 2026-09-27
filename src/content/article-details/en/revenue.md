---
articleId: revenue
lang: en
sourceRevision: 6
sources:
  - title: "Apple: business models"
    url: "https://developer.apple.com/app-store/business-models/"
    claim: Product value and access can use different business models; no model guarantees profit.
    checked: "2026-09-27"
---

## Selection & comparison

Subscription can fund continuing service, a one-time sale a bounded promise, and usage pricing variable consumption. Advertising changes who pays and what they buy. Compare the axes separately: payer, collection timing, formula, entitlement and seller responsibility. Several can coexist.

## Applications

The map exporter assumes 100 paying users at 5 monthly, 20 exports each at cost 0.02, and fixed costs of 100. Revenue is 500, modeled cost 140 and remaining amount 360. Reducing users or raising usage exposes how the same offer can stop covering costs.

## Implementation & cautions

These are fictional currency units and arithmetic, not demand forecasts or net profit. Taxes, payment fees, refunds, free-user usage and unlisted labor are omitted. Invalid inputs preserve the last valid estimate with an error; zero and negative remaining amounts stay visible. Nothing is saved or charged.
