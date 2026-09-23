# Revenue sources / 수익원 / 収益源

Group ID: `revenue-sources` · Checked: 2026-09-21 · Writing designs, not article bodies.

## Shared case and comparison contract

A fictional reading service publishes articles. Compare reader payments for access, advertiser payments for placement, and supporter funding for maintaining public work. Keep billing frequency and seller-of-record role as separate decisions.

**Comparison axes, fixed order:** payer; value exchanged; user access; dependency on third parties; incentives; compatible billing.

**Boundary:** Direct payment here identifies who funds the product, not who legally sells it. Sponsorship includes support with defined benefits; do not equate every sponsorship with advertising, charity or tax-deductible donation.

**Visual family:** Money arrows and value arrows between reader, publisher, advertiser or sponsor; label any intermediary separately.

**Core terms (EN / KO / JA):** Payer / 지불 주체 / 支払者; Revenue / 수익 / 収益; Value exchange / 가치 교환 / 価値交換.

## Sibling review matrix

Rows share comparison dimensions and assumptions; published articles use distinct situations. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                                                                      | Distinguishing feature                                                                            | Conditional advantage                                                           | Limitation                                                                                     | Suitable context                                                                           | Combination                                                                                         |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| [Customer direct payment / 고객 직접 결제 / 顧客の直接支払い](../articles/direct-payment.md) | Customers pay for product access; checkout can collect one-time or recurring payments [checkout]. | The fictional service can connect payment to a defined reader benefit.          | It must define access, refunds and ongoing value; willingness to pay is unmeasured.            | A product with a clear benefit a customer chooses to purchase.                             | Use one-time, subscription or usage billing; outsource the MoR role if a suitable contract permits. |
| [Advertising / 광고 / 広告](../articles/advertising.md)                                      | Advertisers fund placements and publisher earnings vary [ads].                                    | The fictional service can offer public reading without charging every reader.   | Placement load and revenue dependence can conflict with reading goals; returns remain unknown. | A publisher choosing clearly identified placements compatible with its reading experience. | Combine with subscriptions for an ad-free option or separately disclosed sponsorship.               |
| [Sponsorship / 후원 / スポンサー支援](../articles/sponsorship.md)                            | GitHub Sponsors illustrates funding contributors with defined tiers [sponsors].                   | The fictional public catalog can remain open while supporters fund maintenance. | Funding is not guaranteed, and promised benefits still create work.                            | A maintained public resource with supporters who value its continuation.                   | Use one-time or monthly support alongside customer sales; disclose placement benefits separately.   |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[ads]: https://support.google.com/adsense/answer/6242051?hl=en
[checkout]: https://docs.stripe.com/payments/checkout
[sponsors]: https://docs.github.com/en/sponsors/getting-started-with-github-sponsors/about-github-sponsors

## Current monetization release (2026-09-22)

Shared fixture: A reading service with reader, publisher and optional advertiser, supporter, shop or marketplace; compare payer and value exchanged. No income forecast.

Revenue source, billing timing, amount calculation, access, purchase rights and seller responsibility remain separate axes. Only siblings in this group populate `compareWith`; combinations go in related reading. Figures and conversion outcomes are fictional; taxes, fees and refunds are omitted unless the example names the platform fee as its subject.

English definitions/examples/comparison fields were reviewed together before Korean/Japanese translation. [Source refresh](../monetization-sources.md), [verification](../../monetization-review.md).

| Concept                                                     | Mode   | Distinguishing mechanism           |
| ----------------------------------------------------------- | ------ | ---------------------------------- |
| [Customer direct payment](../articles/direct-payment.md)    | static | Customer funds access              |
| [Advertising](../articles/advertising.md)                   | static | Advertiser funds placement         |
| [Sponsorship](../articles/sponsorship.md)                   | static | Support funds continued work       |
| [Affiliate commissions](../articles/affiliate-marketing.md) | static | Commission on qualifying referrals |
| [Transaction fees](../articles/transaction-fees.md)         | static | Fee on mediated sale               |
