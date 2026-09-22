# Graduated pricing / 구간별 누진 단가 / 区分別累進単価

ID: `graduated-pricing` · Group: [pricing-models](../groups/pricing-models.md) · Checked: 2026-09-22.

## Scope and argument

Graduated pricing prices units within each tier separately and adds the subtotals. Reaching a cheaper tier does not reprice earlier units.

A fictional workspace has three seats and 120 monthly exports. The first 100 cost 0.20 each; later exports cost 0.10 each. Thus 100 × 0.20 + 20 × 0.10 = 22. Change usage: 100 costs 20, 101 costs 20.10 and zero costs zero. Taxes, fees, refunds and tier flat fees are omitted.

Choose it for progressive quantity discounts. Compare volume pricing using the same thresholds.

## Comparison and terminology

Peers: `flat-rate-pricing`, `per-seat-pricing`, `feature-tiered-pricing`, `volume-pricing`, `base-plus-overage`. Five comparison fields: Sum separately priced slices; Earlier units keep their rate; More calculation to explain; Progressive usage discounts; Usage metering and subscriptions.
Terms: Graduated pricing / 구간별 누진 단가 / 区分別累進単価. These are editorial translations; “tier” must specify feature package, whole-quantity rate or graduated slice.

## Evidence and required visualization

[Official evidence](https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing), inspected 2026-09-22; definition/mechanism only. [Source boundary](../monetization-sources.md). Suitability is editorial; amounts and conversion states are fictional. No country-specific tax advice, real price comparison or revenue guarantee.

[Full visualization plan](../../design-briefs/graduated-pricing.md) follows the mandatory template and records fixture, reading order, keyboard, no-JS and translation requirements. [Release verification](../../monetization-review.md).
