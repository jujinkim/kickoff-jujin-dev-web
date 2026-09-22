# Per-seat pricing / 좌석 과금 / 席数課金

ID: `per-seat-pricing` · Group: [pricing-models](../groups/pricing-models.md) · Checked: 2026-09-22.

## Scope and argument

Per-seat pricing multiplies a seat count by a unit price. Specify which seats are billable; activity and usage are different measurements.

A fictional workspace begins with three licensed seats and 120 monthly exports. At 8 per seat monthly, the total is 24. Change the seat count: four costs 32; zero costs zero in this example. Exports do not change this calculation. Proration, taxes, fees and refunds are omitted.

Choose it when licensed access tracks customer value. Combine with subscriptions; define seat changes and billing timing separately.

## Comparison and terminology

Peers: `flat-rate-pricing`, `feature-tiered-pricing`, `volume-pricing`, `graduated-pricing`, `base-plus-overage`. Five comparison fields: Count times seat price; Scales with licensed access; Billable seat definition needed; Team access products; Subscription or feature packages.
Terms: Per-seat pricing / 좌석 과금 / 席数課金. These are editorial translations; “tier” must specify feature package, whole-quantity rate or graduated slice.

## Evidence and required visualization

[Official evidence](https://docs.stripe.com/products-prices/pricing-models), inspected 2026-09-22; definition/mechanism only. [Source boundary](../monetization-sources.md). Suitability is editorial; amounts and conversion states are fictional. No country-specific tax advice, real price comparison or revenue guarantee.

[Full visualization plan](../../design-briefs/per-seat-pricing.md) follows the mandatory template and records fixture, reading order, keyboard, no-JS and translation requirements. [Release verification](../../monetization-review.md).
