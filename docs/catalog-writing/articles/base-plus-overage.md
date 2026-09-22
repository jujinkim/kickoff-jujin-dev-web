# Base fee plus overage / 기본료+초과 사용량 / 基本料＋超過利用量

ID: `base-plus-overage` · Group: [pricing-models](../groups/pricing-models.md) · Checked: 2026-09-22.

## Scope and argument

Base fee plus overage combines a fixed charge with included usage and a rate for excess units. The base remains payable even with no usage.

A fictional workspace has three seats and 120 monthly exports. The monthly base is 20, including 100 exports; each extra export costs 0.10. Total: 20 + 20 × 0.10 = 22. Change usage: zero and 100 both cost 20; 101 costs 20.10. Taxes, fees and refunds are omitted.

Choose it when baseline service and variable consumption both matter. Combine with subscription billing.

## Comparison and terminology

Peers: `flat-rate-pricing`, `per-seat-pricing`, `feature-tiered-pricing`, `volume-pricing`, `graduated-pricing`. Five comparison fields: Base plus excess units; Covers baseline service; Base charged at zero usage; Fixed and variable costs; Subscription and usage metering.
Terms: Base fee plus overage / 기본료+초과 사용량 / 基本料＋超過利用量. These are editorial translations; “tier” must specify feature package, whole-quantity rate or graduated slice.

## Evidence and required visualization

[Official evidence](https://docs.stripe.com/products-prices/pricing-models), inspected 2026-09-22; definition/mechanism only. [Source boundary](../monetization-sources.md). Suitability is editorial; amounts and conversion states are fictional. No country-specific tax advice, real price comparison or revenue guarantee.

[Full visualization plan](../../design-briefs/base-plus-overage.md) follows the mandatory template and records fixture, reading order, keyboard, no-JS and translation requirements. [Release verification](../../monetization-review.md).
