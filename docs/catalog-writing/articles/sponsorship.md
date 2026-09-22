> Current implementation (2026-09-22): [visualization brief](../../design-briefs/sponsorship.md), [source refresh](../monetization-sources.md), [release review](../../monetization-review.md). Historical long-form outline below is research; current articles use three short sections.

# Sponsorship / 후원 / スポンサー支援

Writing design only. ID: `sponsorship` · Group: [revenue-sources](../groups/revenue-sources.md) · Queue order: 1702 · Checked: 2026-09-21.

## Reader question and scope

**Question:** How can supporters fund continuing work without buying access?

**Include:** Explain support for a public project, defined sponsor benefits and one-time/recurring options.

**Exclude:** Universal charitable status, tax deduction and platform fee claims.

**Prevent confusion:** Supporter funding may include benefits; commercial placement sponsorship can overlap advertising.

**Terms (EN / KO / JA):** Sponsorship / 후원 / スポンサー支援; Supporter / 후원자 / 支援者. Also use the [group terms](../groups/revenue-sources.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain support for a public project, defined sponsor benefits and one-time/recurring options. Explain the distinguishing mechanism: GitHub Sponsors illustrates funding contributors with defined tiers [sponsors]. Immediately separate the nearby concept: Supporter funding may include benefits; commercial placement sponsorship can overlap advertising.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: supporter chooses illustrative 5 units monthly for maintaining public articles. Initial: articles already public. Action: support payment, optional acknowledgment under authored terms. Result: public access unchanged and maintenance receives funding.

### 3. Advantages and limitations

Explain the conditional benefit: The fictional public catalog can remain open while supporters fund maintenance. Then show its boundary: Funding is not guaranteed, and promised benefits still create work. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [direct-payment](direct-payment.md), [advertising](advertising.md).

Use the shared axes, in this order: **payer; value exchanged; user access; dependency on third parties; incentives; compatible billing**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/revenue-sources.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** A maintained public resource with supporters who value its continuation.

**Unsuitable:** Treating voluntary support as a dependable forecast without evidence.

**Combine:** Use one-time or monthly support alongside customer sales; disclose placement benefits separately.

### 6. Related reading and sources

Link existing guides: [revenue](../../../src/content/articles/en/revenue.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------- |
| `features`     | GitHub Sponsors illustrates funding contributors with defined tiers [sponsors].                   |
| `advantages`   | The fictional public catalog can remain open while supporters fund maintenance.                   |
| `limitations`  | Funding is not guaranteed, and promised benefits still create work.                               |
| `suitable`     | A maintained public resource with supporters who value its continuation.                          |
| `combinations` | Use one-time or monthly support alongside customer sales; disclose placement benefits separately. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                                                                   | Exact location to consult                      | Claim boundary                                                                                            | Checked    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------- |
| [sponsors](https://docs.github.com/en/sponsors/getting-started-with-github-sponsors/about-github-sponsors) | About GitHub Sponsors opening; tiers paragraph | [Verified claim and context](../sources.md#sponsors); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How can supporters fund continuing work without buying access?” through the fixture rather than a decorative illustration.

**Shared input:** A fictional reading service publishes articles. Compare reader payments for access, advertiser payments for placement, and supporter funding for maintaining public work. Keep billing frequency and seller-of-record role as separate decisions.

**Form and composition:** Money arrows and value arrows between reader, publisher, advertiser or sponsor; label any intermediary separately.

**Interaction/state script:** Input: supporter chooses illustrative 5 units monthly for maintaining public articles. Initial: articles already public. Action: support payment, optional acknowledgment under authored terms. Result: public access unchanged and maintenance receives funding.

**Annotations, caption and topic acceptance:** Draw supporter→publisher money and publisher→public work; acknowledgment is a separate labeled benefit. Caption: Funding ongoing work need not gate access. Accept if no tax or donation status is inferred.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[sponsors]: https://docs.github.com/en/sponsors/getting-started-with-github-sponsors/about-github-sponsors
