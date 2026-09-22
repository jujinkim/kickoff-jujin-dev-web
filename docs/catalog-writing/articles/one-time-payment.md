> Current implementation (2026-09-22): [visualization brief](../../design-briefs/one-time-payment.md), [source refresh](../monetization-sources.md), [release review](../../monetization-review.md). Historical long-form outline below is research; current articles use three short sections.

# One-time payment / 일회성 결제 / 買い切り

Writing design only. ID: `one-time-payment` · Group: [billing](../groups/billing.md) · Queue order: 1800 · Checked: 2026-09-21.

## Reader question and scope

**Question:** What is paid once, and what future access does that payment buy?

**Include:** Explain a single charge and separately specified entitlement, support and upgrade terms.

**Exclude:** Lifetime-service promises, real prices and refund law.

**Prevent confusion:** One payment does not inherently mean perpetual updates or permanent hosted service.

**Terms (EN / KO / JA):** One-time payment / 일회성 결제 / 買い切り; Single charge / 단일 청구 / 単発請求. Also use the [group terms](../groups/billing.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain a single charge and separately specified entitlement, support and upgrade terms. Explain the distinguishing mechanism: One-time collection is a supported payment mode [checkout]. Immediately separate the nearby concept: One payment does not inherently mean perpetual updates or permanent hosted service.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: license 30 units. Initial: month 1 unpurchased. Action: one confirmed charge. Result: month totals 30,0,0; three-month total 30, with updates and hosting outside the example entitlement.

### 3. Advantages and limitations

Explain the conditional benefit: The example gives an upfront amount for the stated license. Then show its boundary: Future support cost and entitlement duration still need explicit agreement. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [subscription](subscription.md), [usage-based](usage-based.md).

Use the shared axes, in this order: **charge trigger; amount calculation; billing timing; access entitlement; forecasting uncertainty; lifecycle obligations**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/billing.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** A defined deliverable or license with clear scope.

**Unsuitable:** Funding indefinite operating obligations while promising them without a cost model.

**Combine:** Combine with paid upgrades or a separate recurring service; select seller responsibility independently.

### 6. Related reading and sources

Link existing guides: [revenue](../../../src/content/articles/en/revenue.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| `features`     | One-time collection is a supported payment mode [checkout].                                             |
| `advantages`   | The example gives an upfront amount for the stated license.                                             |
| `limitations`  | Future support cost and entitlement duration still need explicit agreement.                             |
| `suitable`     | A defined deliverable or license with clear scope.                                                      |
| `combinations` | Combine with paid upgrades or a separate recurring service; select seller responsibility independently. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                              | Exact location to consult                            | Claim boundary                                                                                            | Checked    |
| ----------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------- |
| [checkout](https://docs.stripe.com/payments/checkout) | Accept payments on your website; payment UI overview | [Verified claim and context](../sources.md#checkout); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “What is paid once, and what future access does that payment buy?” through the fixture rather than a decorative illustration.

**Shared input:** A fictional export tool offers a three-month comparison. One-time license: 30 currency units paid once; subscription: 12 units per month for 3 months; usage: 0.02 units per export with monthly volumes 100,300,600. Ignore tax, fees, refunds, discounts and exchange rates explicitly.

**Form and composition:** Charge timeline plus labeled formula and money flow. Controls choose only the stated authored scenarios; show calculation steps and assumptions in text.

**Interaction/state script:** Input: license 30 units. Initial: month 1 unpurchased. Action: one confirmed charge. Result: month totals 30,0,0; three-month total 30, with updates and hosting outside the example entitlement.

**Annotations, caption and topic acceptance:** Show charge at month 1 and entitlement note on a separate lane. Caption: One charge does not define every future right. Accept if 30+0+0=30 and exclusions remain visible.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[checkout]: https://docs.stripe.com/payments/checkout
