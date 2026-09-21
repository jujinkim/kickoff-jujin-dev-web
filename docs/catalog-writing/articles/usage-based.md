# Usage-based billing / 사용량 기반 과금 / 従量課金

Writing design only. ID: `usage-based` · Group: [billing](../groups/billing.md) · Queue order: 1802 · Checked: 2026-09-21.

## Reader question and scope

**Question:** How does measured consumption become a charge?

**Include:** Explain billable unit, metering, aggregation and a transparent amount calculation.

**Exclude:** Provider metering APIs, real prices and complex tier formulas.

**Prevent confusion:** Usage billing can be collected on a recurring subscription schedule.

**Terms (EN / KO / JA):** Usage-based billing / 사용량 기반 과금 / 従量課金; Billable unit / 과금 단위 / 課金単位. Also use the [group terms](../groups/billing.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain billable unit, metering, aggregation and a transparent amount calculation. Explain the distinguishing mechanism: Charges depend on measured consumption [usage]. Immediately separate the nearby concept: Usage billing can be collected on a recurring subscription schedule.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: exports 100,300,600 at 0.02 units each. Initial: zero usage each month. Action: aggregate deduplicated billable events. Result: 2,6,12 units, total 20; a retried event does not create a second billable export under this authored rule.

### 3. Advantages and limitations

Explain the conditional benefit: The example exposes a direct relationship between export count and amount. Then show its boundary: Meter accuracy, duplicate events and unpredictable totals require design. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [one-time-payment](one-time-payment.md), [subscription](subscription.md).

Use the shared axes, in this order: **charge trigger; amount calculation; billing timing; access entitlement; forecasting uncertainty; lifecycle obligations**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/billing.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** A product with a clear auditable billable unit.

**Unsuitable:** A metric customers cannot verify or reasonably control.

**Combine:** Combine with a recurring base fee or prepaid credits when terms are explicit.

### 6. Related reading and sources

Link existing guides: [revenue](../../../src/content/articles/en/revenue.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                 |
| -------------- | ----------------------------------------------------------------------------- |
| `features`     | Charges depend on measured consumption [usage].                               |
| `advantages`   | The example exposes a direct relationship between export count and amount.    |
| `limitations`  | Meter accuracy, duplicate events and unpredictable totals require design.     |
| `suitable`     | A product with a clear auditable billable unit.                               |
| `combinations` | Combine with a recurring base fee or prepaid credits when terms are explicit. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                               | Exact location to consult                               | Claim boundary                                                                                                | Checked    |
| ---------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------- |
| [usage](https://docs.stripe.com/billing/subscriptions/usage-based)     | Opening definition; Basic usage-based billing resources | [Verified claim and context](../sources.md#usage); apply only to this mechanism, not general rankings.        | 2026-09-21 |
| [subscription](https://docs.stripe.com/billing/subscriptions/overview) | How subscriptions work; Subscription lifecycle          | [Verified claim and context](../sources.md#subscription); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How does measured consumption become a charge?” through the fixture rather than a decorative illustration.

**Shared input:** A fictional export tool offers a three-month comparison. One-time license: 30 currency units paid once; subscription: 12 units per month for 3 months; usage: 0.02 units per export with monthly volumes 100,300,600. Ignore tax, fees, refunds, discounts and exchange rates explicitly.

**Form and composition:** Charge timeline plus labeled formula and money flow. Controls choose only the stated authored scenarios; show calculation steps and assumptions in text.

**Interaction/state script:** Input: exports 100,300,600 at 0.02 units each. Initial: zero usage each month. Action: aggregate deduplicated billable events. Result: 2,6,12 units, total 20; a retried event does not create a second billable export under this authored rule.

**Annotations, caption and topic acceptance:** Show meter→aggregate→multiply→invoice with counts and units. Caption: Measure first, apply the declared price rule second. Accept if (100+300+600)×0.02=20 and excluded fees/tax remain stated.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[usage]: https://docs.stripe.com/billing/subscriptions/usage-based
