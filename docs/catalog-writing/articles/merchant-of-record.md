> Current implementation (2026-09-22): [visualization brief](../../design-briefs/merchant-of-record.md), [source refresh](../monetization-sources.md), [release review](../../monetization-review.md). Historical long-form outline below is research; current articles use three short sections.

# Merchant of record model / MoR 모델 / MoRモデル

Writing design only. ID: `merchant-of-record` · Group: [seller-responsibility](../groups/seller-responsibility.md) · Queue order: 1901 · Checked: 2026-09-21.

## Reader question and scope

**Question:** Which transaction responsibilities move under an outsourced MoR arrangement?

**Include:** Explain a contracted MoR as seller for covered transactions, settlement to the product business and retained product obligations.

**Exclude:** Universal compliance guarantees, exact tax coverage and provider fee comparisons.

**Prevent confusion:** MoR is a transaction role, not automatically the product creator or provider of every support obligation.

**Terms (EN / KO / JA):** Merchant of record model / MoR 모델 / MoRモデル; Covered transaction / 적용 대상 거래 / 対象取引. Also use the [group terms](../groups/seller-responsibility.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain a contracted MoR as seller for covered transactions, settlement to the product business and retained product obligations. Explain the distinguishing mechanism: The MoR role carries transaction responsibilities [mor]. Immediately separate the nearby concept: MoR is a transaction role, not automatically the product creator or provider of every support obligation.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: covered license purchase under an illustrative reseller agreement. Initial: MoR named on transaction. Action: customer pays MoR; MoR settles contracted proceeds to business. Result: MoR routes covered refunds and transaction-tax handling, while business delivers product and its agreed support.

### 3. Advantages and limitations

Explain the conditional benefit: The authored business can delegate covered transaction operations to the contracted seller. Then show its boundary: Coverage, settlement, exclusions and retained duties must be checked against the actual agreement. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [direct-seller](direct-seller.md).

Use the shared axes, in this order: **contractual seller; payment handling; receipt identity; refund/dispute route; transaction-tax role; retained product obligations**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/seller-responsibility.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** A business preferring a supported reseller arrangement for its eligible product and market.

**Unsuitable:** Assuming every jurisdiction and product is covered or that all business taxes disappear.

**Combine:** Combine with subscription or one-time customer revenue; define product support separately from transaction support.

### 6. Related reading and sources

Link existing guides: [payments](../../../src/content/articles/en/payments.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------- |
| `features`     | The MoR role carries transaction responsibilities [mor].                                                            |
| `advantages`   | The authored business can delegate covered transaction operations to the contracted seller.                         |
| `limitations`  | Coverage, settlement, exclusions and retained duties must be checked against the actual agreement.                  |
| `suitable`     | A business preferring a supported reseller arrangement for its eligible product and market.                         |
| `combinations` | Combine with subscription or one-time customer revenue; define product support separately from transaction support. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                    | Exact location to consult                                                                                                | Claim boundary                                                                                       | Checked    |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ---------- |
| [mor](https://stripe.com/resources/more/merchant-of-record) | What is a merchant of record?; What is a merchant of record responsible for?; Merchant of record vs. payment facilitator | [Verified claim and context](../sources.md#mor); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “Which transaction responsibilities move under an outsourced MoR arrangement?” through the fixture rather than a decorative illustration.

**Shared input:** Sell a fictional digital reading-tool license to a customer. Compare business as contractual seller using a payment processor versus a contracted MoR reseller handling the covered transaction. Track customer receipt, money settlement, refund routing and transaction-tax responsibility only within the illustrative arrangement.

**Form and composition:** Separate money (solid), contract (dashed) and responsibility (labeled ownership) diagrams with customer, business, processor and optional MoR.

**Interaction/state script:** Input: covered license purchase under an illustrative reseller agreement. Initial: MoR named on transaction. Action: customer pays MoR; MoR settles contracted proceeds to business. Result: MoR routes covered refunds and transaction-tax handling, while business delivers product and its agreed support.

**Annotations, caption and topic acceptance:** Label customer↔MoR sale contract and MoR↔business agreement; keep product delivery arrow separate. Caption: Covered transaction duties move; product duties still have owners. Accept if no unsupported all-taxes or all-countries claim appears.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[mor]: https://stripe.com/resources/more/merchant-of-record
