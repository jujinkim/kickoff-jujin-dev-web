> Current implementation (2026-09-22): [visualization brief](../../design-briefs/direct-payment.md), [source refresh](../monetization-sources.md), [release review](../../monetization-review.md). Historical long-form outline below is research; current articles use three short sections.

# Customer direct payment / 고객 직접 결제 / 顧客の直接支払い

Writing design only. ID: `direct-payment` · Group: [revenue-sources](../groups/revenue-sources.md) · Queue order: 1700 · Checked: 2026-09-21.

## Reader question and scope

**Question:** What changes when customers fund the product they use?

**Include:** Explain customer-funded access independently of billing schedule and legal seller arrangement.

**Exclude:** Revenue forecasts, checkout integration and universal tax rules.

**Prevent confusion:** Direct customer revenue is not synonymous with the direct-seller responsibility model.

**Terms (EN / KO / JA):** Customer direct payment / 고객 직접 결제 / 顧客の直接支払い; Entitlement / 이용 권한 / 利用権. Also use the [group terms](../groups/revenue-sources.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain customer-funded access independently of billing schedule and legal seller arrangement. Explain the distinguishing mechanism: Customers pay for product access; checkout can collect one-time or recurring payments [checkout]. Immediately separate the nearby concept: Direct customer revenue is not synonymous with the direct-seller responsibility model.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: reader buys access for an illustrative 10 units. Initial: no entitlement. Action: confirmed purchase triggers authored entitlement logic. Result: reader gets access; payment may pass through a processor or MoR.

### 3. Advantages and limitations

Explain the conditional benefit: The fictional service can connect payment to a defined reader benefit. Then show its boundary: It must define access, refunds and ongoing value; willingness to pay is unmeasured. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [advertising](advertising.md), [sponsorship](sponsorship.md).

Use the shared axes, in this order: **payer; value exchanged; user access; dependency on third parties; incentives; compatible billing**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/revenue-sources.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** A product with a clear benefit a customer chooses to purchase.

**Unsuitable:** Assuming a paywall creates demand without validating the offered value.

**Combine:** Use one-time, subscription or usage billing; outsource the MoR role if a suitable contract permits.

### 6. Related reading and sources

Link existing guides: [revenue](../../../src/content/articles/en/revenue.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------- |
| `features`     | Customers pay for product access; checkout can collect one-time or recurring payments [checkout].   |
| `advantages`   | The fictional service can connect payment to a defined reader benefit.                              |
| `limitations`  | It must define access, refunds and ongoing value; willingness to pay is unmeasured.                 |
| `suitable`     | A product with a clear benefit a customer chooses to purchase.                                      |
| `combinations` | Use one-time, subscription or usage billing; outsource the MoR role if a suitable contract permits. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                    | Exact location to consult                                                                                                | Claim boundary                                                                                            | Checked    |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | ---------- |
| [checkout](https://docs.stripe.com/payments/checkout)       | Accept payments on your website; payment UI overview                                                                     | [Verified claim and context](../sources.md#checkout); apply only to this mechanism, not general rankings. | 2026-09-21 |
| [mor](https://stripe.com/resources/more/merchant-of-record) | What is a merchant of record?; What is a merchant of record responsible for?; Merchant of record vs. payment facilitator | [Verified claim and context](../sources.md#mor); apply only to this mechanism, not general rankings.      | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “What changes when customers fund the product they use?” through the fixture rather than a decorative illustration.

**Shared input:** A fictional reading service publishes articles. Compare reader payments for access, advertiser payments for placement, and supporter funding for maintaining public work. Keep billing frequency and seller-of-record role as separate decisions.

**Form and composition:** Money arrows and value arrows between reader, publisher, advertiser or sponsor; label any intermediary separately.

**Interaction/state script:** Input: reader buys access for an illustrative 10 units. Initial: no entitlement. Action: confirmed purchase triggers authored entitlement logic. Result: reader gets access; payment may pass through a processor or MoR.

**Annotations, caption and topic acceptance:** Label money, access and optional intermediary arrows. Caption: Customer funds the product; billing and seller roles are separate. Accept if no net-profit claim is calculated from gross payment.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[checkout]: https://docs.stripe.com/payments/checkout
