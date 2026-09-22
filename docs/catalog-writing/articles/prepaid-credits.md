# Prepaid credits / 선불 크레딧 / 前払いクレジット

ID: `prepaid-credits` · Group: [billing](../groups/billing.md) · Checked: 2026-09-22.

## Scope and argument

Prepaid credits collect payment before usage and reduce a balance as units are consumed. Credit value, expiry and eligible uses depend on the offer.

A fictional export tool starts with 1,000 credits, spending one per export. Run the shared months of 100, 300 and 600 exports: balances become 900, 600 and zero. Any further export is blocked until a simulated top-up. Credits here do not expire; purchase price, taxes, fees and refunds are omitted.

Choose it when customers want a bounded usage budget. Explain balance rules; combine with metering.

## Comparison and terminology

Peers: `one-time-payment`, `subscription`, `usage-based`. Five comparison fields: Pre-funded usage balance; Visible spending boundary; Top-ups and expiry rules; Budgeted consumption; Usage metering.
Terms: Prepaid credits / 선불 크레딧 / 前払いクレジット. These are editorial translations; “tier” must specify feature package, whole-quantity rate or graduated slice.

## Evidence and required visualization

[Official evidence](https://docs.stripe.com/billing/subscriptions/usage-based/billing-credits), inspected 2026-09-22; definition/mechanism only. [Source boundary](../monetization-sources.md). Suitability is editorial; amounts and conversion states are fictional. No country-specific tax advice, real price comparison or revenue guarantee.

[Full visualization plan](../../design-briefs/prepaid-credits.md) follows the mandatory template and records fixture, reading order, keyboard, no-JS and translation requirements. [Release verification](../../monetization-review.md).
