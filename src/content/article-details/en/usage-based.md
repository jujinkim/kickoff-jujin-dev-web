---
articleId: usage-based
lang: en
sourceRevision: 6
sources:
  - title: "Stripe: usage-based billing"
    url: "https://docs.stripe.com/billing/usage-based"
    claim: Usage meters feed billing; the example chooses a simple per-export rate and monthly periods.
    checked: "2026-09-27"
---

## Selection & comparison

A map exporter suits metered billing when processing costs vary with exports. A subscription can provide predictable access; prepaid credits collect before use. Metered pricing may coexist with a subscription base, rather than replacing recurring billing.

## Applications

The customer pays 0.02 per export: 100, 300 and 600 exports cost 2, 6 and 12. Zero exports cost zero here. Payment timing, access limits and seller responsibilities still need contract terms.

## Implementation & cautions

Meter accepted work once, deduplicate retries and expose usage before the bill. Define failed-job treatment, late events, rounding and spending alerts. The browser calculator is not an authoritative meter or invoice ledger.
