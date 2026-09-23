# Billing methods / 과금 방식 / 課金方式

Group ID: `billing` · Checked: 2026-09-21 · Writing designs, not article bodies.

## Shared case and comparison contract

A fictional export tool offers a three-month comparison. One-time license: 30 currency units paid once; subscription: 12 units per month for 3 months; usage: 0.02 units per export with monthly volumes 100,300,600. Ignore tax, fees, refunds, discounts and exchange rates explicitly.

**Comparison axes, fixed order:** charge trigger; amount calculation; billing timing; access entitlement; forecasting uncertainty; lifecycle obligations.

**Boundary:** These are hypothetical arithmetic examples, not market prices or equivalent product entitlements. Subscription can include metered usage. Payment frequency does not determine seller responsibility or revenue source.

**Visual family:** Charge timeline plus labeled formula and money flow. Controls choose only the stated authored scenarios; show calculation steps and assumptions in text.

**Core terms (EN / KO / JA):** Billing period / 청구 기간 / 請求期間; Unit price / 단가 / 単価; Meter / 사용량 계량 / 使用量計測.

## Sibling review matrix

Rows share comparison dimensions and assumptions; published articles use distinct situations. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                                                         | Distinguishing feature                                      | Conditional advantage                                                      | Limitation                                                                  | Suitable context                                   | Combination                                                                                             |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [One-time payment / 일회성 결제 / 買い切り](../articles/one-time-payment.md)    | One-time collection is a supported payment mode [checkout]. | The example gives an upfront amount for the stated license.                | Future support cost and entitlement duration still need explicit agreement. | A defined deliverable or license with clear scope. | Combine with paid upgrades or a separate recurring service; select seller responsibility independently. |
| [Subscription / 구독 / サブスクリプション](../articles/subscription.md)         | Recurring payments have a managed lifecycle [subscription]. | The example matches ongoing access to repeated billing periods.            | Failed payments and cancellation require explicit access decisions.         | Continuing service with recurring customer value.  | Add metered overages or one-time setup fees; distinguish source of revenue and seller role.             |
| [Usage-based billing / 사용량 기반 과금 / 従量課金](../articles/usage-based.md) | Charges depend on measured consumption [usage].             | The example exposes a direct relationship between export count and amount. | Meter accuracy, duplicate events and unpredictable totals require design.   | A product with a clear auditable billable unit.    | Combine with a recurring base fee or prepaid credits when terms are explicit.                           |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[checkout]: https://docs.stripe.com/payments/checkout
[subscription]: https://docs.stripe.com/billing/subscriptions/overview
[usage]: https://docs.stripe.com/billing/subscriptions/usage-based

## Current monetization release (2026-09-22)

Shared fixture: The same export tool over three months: 100, 300, 600 exports. One-time 30; subscription 12/month; metered 0.02/export; prepaid starts at 1,000 credits and consumes 1/export.

Revenue source, billing timing, amount calculation, access, purchase rights and seller responsibility remain separate axes. Only siblings in this group populate `compareWith`; combinations go in related reading. Figures and conversion outcomes are fictional; taxes, fees and refunds are omitted unless the example names the platform fee as its subject.

English definitions/examples/comparison fields were reviewed together before Korean/Japanese translation. [Source refresh](../monetization-sources.md), [verification](../../monetization-review.md).

| Concept                                             | Mode        | Distinguishing mechanism  |
| --------------------------------------------------- | ----------- | ------------------------- |
| [One-time payment](../articles/one-time-payment.md) | static      | One charge                |
| [Subscription](../articles/subscription.md)         | interactive | Recurring billing periods |
| [Usage-based billing](../articles/usage-based.md)   | interactive | Metered billable units    |
| [Prepaid credits](../articles/prepaid-credits.md)   | interactive | Pre-funded usage balance  |
