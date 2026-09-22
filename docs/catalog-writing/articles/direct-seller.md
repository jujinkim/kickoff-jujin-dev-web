> Current implementation (2026-09-22): [visualization brief](../../design-briefs/direct-seller.md), [source refresh](../monetization-sources.md), [release review](../../monetization-review.md). Historical long-form outline below is research; current articles use three short sections.

# Direct seller model / 직접 판매자 모델 / 直接販売者モデル

Writing design only. ID: `direct-seller` · Group: [seller-responsibility](../groups/seller-responsibility.md) · Queue order: 1900 · Checked: 2026-09-21.

## Reader question and scope

**Question:** What remains with the business when a processor only handles payment?

**Include:** Explain the business as seller in a bounded processor arrangement and separate payment execution from transaction responsibility.

**Exclude:** Country-specific tax advice, provider fees and claims about every product of a named provider.

**Prevent confusion:** Direct seller concerns responsibility; customer direct payment concerns revenue source.

**Terms (EN / KO / JA):** Direct seller model / 직접 판매자 모델 / 直接販売者モデル; Seller obligation / 판매자 의무 / 販売者の義務. Also use the [group terms](../groups/seller-responsibility.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain the business as seller in a bounded processor arrangement and separate payment execution from transaction responsibility. Explain the distinguishing mechanism: The MoR responsibility role differs from payment facilitation [mor]. Immediately separate the nearby concept: Direct seller concerns responsibility; customer direct payment concerns revenue source.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: one digital-license purchase. Initial: business named as seller, processor contracted for payment only. Action: customer pays via processor. Result: business issues the sale entitlement and owns the stated refund/tax workflow; processor settles according to contract.

### 3. Advantages and limitations

Explain the conditional benefit: The authored business can control its customer sales terms and direct relationship. Then show its boundary: It must arrange applicable transaction obligations and handle the agreed refund/dispute process. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [merchant-of-record](merchant-of-record.md).

Use the shared axes, in this order: **contractual seller; payment handling; receipt identity; refund/dispute route; transaction-tax role; retained product obligations**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/seller-responsibility.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** A business with capacity to operate its sales obligations in its target market.

**Unsuitable:** Assuming a payment button alone outsources seller responsibilities.

**Combine:** Use one-time or recurring billing and optional specialist services; retain a documented responsibility map.

### 6. Related reading and sources

Link existing guides: [payments](../../../src/content/articles/en/payments.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                                               |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| `features`     | The MoR responsibility role differs from payment facilitation [mor].                                        |
| `advantages`   | The authored business can control its customer sales terms and direct relationship.                         |
| `limitations`  | It must arrange applicable transaction obligations and handle the agreed refund/dispute process.            |
| `suitable`     | A business with capacity to operate its sales obligations in its target market.                             |
| `combinations` | Use one-time or recurring billing and optional specialist services; retain a documented responsibility map. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                    | Exact location to consult                                                                                                | Claim boundary                                                                                            | Checked    |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | ---------- |
| [mor](https://stripe.com/resources/more/merchant-of-record) | What is a merchant of record?; What is a merchant of record responsible for?; Merchant of record vs. payment facilitator | [Verified claim and context](../sources.md#mor); apply only to this mechanism, not general rankings.      | 2026-09-21 |
| [checkout](https://docs.stripe.com/payments/checkout)       | Accept payments on your website; payment UI overview                                                                     | [Verified claim and context](../sources.md#checkout); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “What remains with the business when a processor only handles payment?” through the fixture rather than a decorative illustration.

**Shared input:** Sell a fictional digital reading-tool license to a customer. Compare business as contractual seller using a payment processor versus a contracted MoR reseller handling the covered transaction. Track customer receipt, money settlement, refund routing and transaction-tax responsibility only within the illustrative arrangement.

**Form and composition:** Separate money (solid), contract (dashed) and responsibility (labeled ownership) diagrams with customer, business, processor and optional MoR.

**Interaction/state script:** Input: one digital-license purchase. Initial: business named as seller, processor contracted for payment only. Action: customer pays via processor. Result: business issues the sale entitlement and owns the stated refund/tax workflow; processor settles according to contract.

**Annotations, caption and topic acceptance:** Show customer↔business sale contract and separate processor money path. Caption: Payment processing alone does not decide the seller role. Accept if every responsibility names its assumed contract owner.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[mor]: https://stripe.com/resources/more/merchant-of-record
