> Current implementation (2026-09-22): [visualization brief](../../design-briefs/advertising.md), [source refresh](../monetization-sources.md), [release review](../../monetization-review.md). Historical long-form outline below is research; current articles use three short sections.

# Advertising / 광고 / 広告

Writing design only. ID: `advertising` · Group: [revenue-sources](../groups/revenue-sources.md) · Queue order: 1701 · Checked: 2026-09-21.

## Reader question and scope

**Question:** Who pays when readers see ads alongside content?

**Include:** Explain advertiser-funded placements with a publisher/network example and competing incentives.

**Exclude:** Guaranteed CPM, tracking consent advice and ad-network eligibility.

**Prevent confusion:** An ad-funded site may also charge readers; a direct sponsorship is not necessarily auction advertising.

**Terms (EN / KO / JA):** Advertising / 광고 / 広告; Ad placement / 광고 지면 / 広告枠. Also use the [group terms](../groups/revenue-sources.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain advertiser-funded placements with a publisher/network example and competing incentives. Explain the distinguishing mechanism: Advertisers fund placements and publisher earnings vary [ads]. Immediately separate the nearby concept: An ad-funded site may also charge readers; a direct sponsorship is not necessarily auction advertising.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: reader opens public article and one labeled ad slot. Initial: publisher has a placement agreement. Action: network supplies ad and handles advertiser billing. Result: advertiser-funded publisher payment under actual terms, not a fixed invented payout.

### 3. Advantages and limitations

Explain the conditional benefit: The fictional service can offer public reading without charging every reader. Then show its boundary: Placement load and revenue dependence can conflict with reading goals; returns remain unknown. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [direct-payment](direct-payment.md), [sponsorship](sponsorship.md).

Use the shared axes, in this order: **payer; value exchanged; user access; dependency on third parties; incentives; compatible billing**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/revenue-sources.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** A publisher choosing clearly identified placements compatible with its reading experience.

**Unsuitable:** Assuming any amount of traffic guarantees meaningful revenue.

**Combine:** Combine with subscriptions for an ad-free option or separately disclosed sponsorship.

### 6. Related reading and sources

Link existing guides: [revenue](../../../src/content/articles/en/revenue.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------- |
| `features`     | Advertisers fund placements and publisher earnings vary [ads].                                 |
| `advantages`   | The fictional service can offer public reading without charging every reader.                  |
| `limitations`  | Placement load and revenue dependence can conflict with reading goals; returns remain unknown. |
| `suitable`     | A publisher choosing clearly identified placements compatible with its reading experience.     |
| `combinations` | Combine with subscriptions for an ad-free option or separately disclosed sponsorship.          |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                       | Exact location to consult                 | Claim boundary                                                                                       | Checked    |
| -------------------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------- |
| [ads](https://support.google.com/adsense/answer/6242051?hl=en) | How AdSense works; AdSense in three steps | [Verified claim and context](../sources.md#ads); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “Who pays when readers see ads alongside content?” through the fixture rather than a decorative illustration.

**Shared input:** A fictional reading service publishes articles. Compare reader payments for access, advertiser payments for placement, and supporter funding for maintaining public work. Keep billing frequency and seller-of-record role as separate decisions.

**Form and composition:** Money arrows and value arrows between reader, publisher, advertiser or sponsor; label any intermediary separately.

**Interaction/state script:** Input: reader opens public article and one labeled ad slot. Initial: publisher has a placement agreement. Action: network supplies ad and handles advertiser billing. Result: advertiser-funded publisher payment under actual terms, not a fixed invented payout.

**Annotations, caption and topic acceptance:** Separate reader attention, ad delivery and money arrows. Caption: Reader and payer can be different parties. Accept if no hypothetical impression count is treated as guaranteed earnings.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[ads]: https://support.google.com/adsense/answer/6242051?hl=en
