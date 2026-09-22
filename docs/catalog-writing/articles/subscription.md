> Current implementation (2026-09-22): [visualization brief](../../design-briefs/subscription.md), [source refresh](../monetization-sources.md), [release review](../../monetization-review.md). Historical long-form outline below is research; current articles use three short sections.

# Subscription / 구독 / サブスクリプション

Writing design only. ID: `subscription` · Group: [billing](../groups/billing.md) · Queue order: 1801 · Checked: 2026-09-21.

## Reader question and scope

**Question:** How do recurring charges relate to access and payment state?

**Include:** Explain billing intervals, recurring access and the need for failed-payment/cancellation policies.

**Exclude:** Provider-specific proration, cancellation law and real plan prices.

**Prevent confusion:** Subscription is not necessarily flat-rate; usage charges can recur within it.

**Terms (EN / KO / JA):** Subscription / 구독 / サブスクリプション; Renewal / 갱신 / 更新. Also use the [group terms](../groups/billing.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain billing intervals, recurring access and the need for failed-payment/cancellation policies. Explain the distinguishing mechanism: Recurring payments have a managed lifecycle [subscription]. Immediately separate the nearby concept: Subscription is not necessarily flat-rate; usage charges can recur within it.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: 12 units/month, three successful periods. Initial: inactive access. Action: collect each month. Result: 12+12+12=36. Branch: failed month 2 marks payment pending; access policy is authored as a 7-day grace period, not a provider default.

### 3. Advantages and limitations

Explain the conditional benefit: The example matches ongoing access to repeated billing periods. Then show its boundary: Failed payments and cancellation require explicit access decisions. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [one-time-payment](one-time-payment.md), [usage-based](usage-based.md).

Use the shared axes, in this order: **charge trigger; amount calculation; billing timing; access entitlement; forecasting uncertainty; lifecycle obligations**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/billing.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** Continuing service with recurring customer value.

**Unsuitable:** Recurring charges for a one-off deliverable without an ongoing offer.

**Combine:** Add metered overages or one-time setup fees; distinguish source of revenue and seller role.

### 6. Related reading and sources

Link existing guides: [revenue](../../../src/content/articles/en/revenue.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                               |
| -------------- | ------------------------------------------------------------------------------------------- |
| `features`     | Recurring payments have a managed lifecycle [subscription].                                 |
| `advantages`   | The example matches ongoing access to repeated billing periods.                             |
| `limitations`  | Failed payments and cancellation require explicit access decisions.                         |
| `suitable`     | Continuing service with recurring customer value.                                           |
| `combinations` | Add metered overages or one-time setup fees; distinguish source of revenue and seller role. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                               | Exact location to consult                            | Claim boundary                                                                                                | Checked    |
| ---------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------- |
| [subscription](https://docs.stripe.com/billing/subscriptions/overview) | How subscriptions work; Subscription lifecycle       | [Verified claim and context](../sources.md#subscription); apply only to this mechanism, not general rankings. | 2026-09-21 |
| [checkout](https://docs.stripe.com/payments/checkout)                  | Accept payments on your website; payment UI overview | [Verified claim and context](../sources.md#checkout); apply only to this mechanism, not general rankings.     | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How do recurring charges relate to access and payment state?” through the fixture rather than a decorative illustration.

**Shared input:** A fictional export tool offers a three-month comparison. One-time license: 30 currency units paid once; subscription: 12 units per month for 3 months; usage: 0.02 units per export with monthly volumes 100,300,600. Ignore tax, fees, refunds, discounts and exchange rates explicitly.

**Form and composition:** Charge timeline plus labeled formula and money flow. Controls choose only the stated authored scenarios; show calculation steps and assumptions in text.

**Interaction/state script:** Input: 12 units/month, three successful periods. Initial: inactive access. Action: collect each month. Result: 12+12+12=36. Branch: failed month 2 marks payment pending; access policy is authored as a 7-day grace period, not a provider default.

**Annotations, caption and topic acceptance:** Draw separate payment and access lanes with the failure branch. Caption: Billing state and access policy need an explicit connection. Accept if grace period is labeled illustrative and success total is 36.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[subscription]: https://docs.stripe.com/billing/subscriptions/overview
