# Consumable purchase / 소모성 구매 / 消耗型購入

ID: `consumable-purchase` · Group: [purchase-types](../groups/purchase-types.md) · Checked: 2026-09-22.

## Scope and argument

A consumable purchase supplies units that are depleted through use and can be bought again. It differs from a non-consumable feature entitlement.

A fictional puzzle app starts with zero hints. Buy three, then use hints repeatedly: the balance falls to zero and further use is blocked. Buying another pack adds three again. This is a local simulation; no purchase is processed. Prices, taxes, fees and refunds are omitted. Reset or reload clears the example.

Choose it for repeatable consumable value. Combine with free access while making balance and spending clear.

## Comparison and terminology

Peers: `non-consumable-purchase`. Five comparison fields: Units consumed through use; Repeatable purchases; Balance and spending need clarity; Optional consumable items; Freemium access.
Terms: Consumable purchase / 소모성 구매 / 消耗型購入. These are editorial translations; “tier” must specify feature package, whole-quantity rate or graduated slice.

## Evidence and required visualization

[Official evidence](https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types), inspected 2026-09-22; definition/mechanism only. [Source boundary](../monetization-sources.md). Suitability is editorial; amounts and conversion states are fictional. No country-specific tax advice, real price comparison or revenue guarantee.

[Full visualization plan](../../design-briefs/consumable-purchase.md) follows the mandatory template and records fixture, reading order, keyboard, no-JS and translation requirements. [Release verification](../../monetization-review.md).
