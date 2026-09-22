# Volume pricing / 전체 수량 구간 단가 / 全数量段階単価

ID: `volume-pricing` · Group: [pricing-models](../groups/pricing-models.md) · Checked: 2026-09-22.

## Scope and argument

Volume pricing uses the final quantity tier to price every unit. Crossing a threshold can reduce the total, unlike graduated pricing.

A fictional workspace has three seats and 120 monthly exports. The rate is 0.20 through 100 exports, then 0.10 for all exports. Thus 120 costs 12. Change usage: 100 costs 20, but 101 costs 10.10; zero costs zero. Taxes, fees, refunds and tier flat fees are omitted.

Choose it for explicit whole-quantity discounts. Show threshold effects; compare graduated pricing with the identical tier table.

## Comparison and terminology

Peers: `flat-rate-pricing`, `per-seat-pricing`, `feature-tiered-pricing`, `graduated-pricing`, `base-plus-overage`. Five comparison fields: One rate applies to all units; Whole-quantity discount; Total can drop at threshold; Intentional volume discounts; Usage metering and subscriptions.
Terms: Volume pricing / 전체 수량 구간 단가 / 全数量段階単価. These are editorial translations; “tier” must specify feature package, whole-quantity rate or graduated slice.

## Evidence and required visualization

[Official evidence](https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing), inspected 2026-09-22; definition/mechanism only. [Source boundary](../monetization-sources.md). Suitability is editorial; amounts and conversion states are fictional. No country-specific tax advice, real price comparison or revenue guarantee.

[Full visualization plan](../../design-briefs/volume-pricing.md) follows the mandatory template and records fixture, reading order, keyboard, no-JS and translation requirements. [Release verification](../../monetization-review.md).
