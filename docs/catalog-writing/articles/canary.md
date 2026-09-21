# Canary / 카나리 / カナリア

Writing design only. ID: `canary` · Group: [release-replacement](../groups/release-replacement.md) · Queue order: 1102 · Checked: 2026-09-21.

## Reader question and scope

**Question:** What evidence should decide whether limited exposure expands?

**Include:** Explain a small v2 cohort, a v1 control and a predetermined evaluation rule.

**Exclude:** Universal safe percentages and treating synthetic counts as production measurements.

**Prevent confusion:** A canary is release risk evaluation, not automatically a product A/B experiment.

**Terms (EN / KO / JA):** Canary / 카나리 / カナリア; Control cohort / 대조 집단 / 対照群. Also use the [group terms](../groups/release-replacement.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain a small v2 cohort, a v1 control and a predetermined evaluation rule. Explain the distinguishing mechanism: Limited exposure is evaluated against a control [canary]. Immediately separate the nearby concept: A canary is release risk evaluation, not automatically a product A/B experiment.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: illustrative 1000 requests per cohort. Initial: control errors 2, canary errors 30. Action: compute 0.2% versus 3.0%; apply authored stop rule above 1% canary errors for this exercise. Result: stop and return canary traffic to v1; not a universal threshold.

### 3. Advantages and limitations

Explain the conditional benefit: A bad v2 can be stopped before the authored rollout reaches everyone. Then show its boundary: Small or biased samples can miss defects; signals and sampling require domain judgment. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [rolling](rolling.md), [blue-green](blue-green.md).

Use the shared axes, in this order: **replacement unit; simultaneous versions; traffic routing; evaluation gate; rollback action; data compatibility**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/release-replacement.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** A service with measurable outcomes and controlled traffic assignment.

**Unsuitable:** Expanding on an empty metric window or unrepresentative traffic.

**Combine:** Use canary evaluation ahead of rolling or blue-green completion.

### 6. Related reading and sources

Link existing guides: [shipping](../../../src/content/articles/en/shipping.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                           |
| -------------- | --------------------------------------------------------------------------------------- |
| `features`     | Limited exposure is evaluated against a control [canary].                               |
| `advantages`   | A bad v2 can be stopped before the authored rollout reaches everyone.                   |
| `limitations`  | Small or biased samples can miss defects; signals and sampling require domain judgment. |
| `suitable`     | A service with measurable outcomes and controlled traffic assignment.                   |
| `combinations` | Use canary evaluation ahead of rolling or blue-green completion.                        |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                  | Exact location to consult                                 | Claim boundary                                                                                          | Checked    |
| --------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------- |
| [canary](https://sre.google/workbook/canarying-releases/) | Opening definition; Canarying Principles; Canary Analysis | [Verified claim and context](../sources.md#canary); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “What evidence should decide whether limited exposure expands?” through the fixture rather than a decorative illustration.

**Shared input:** Replace v1 of a stateless reading API with v2. Illustrative pool has four v1 replicas. Both versions can read the same backward-compatible data. Readiness and error metrics are explicitly defined before release.

**Form and composition:** Step timeline with version labels, traffic fractions and a separate shared-data lane; arrows identify checks and stop paths.

**Interaction/state script:** Input: illustrative 1000 requests per cohort. Initial: control errors 2, canary errors 30. Action: compute 0.2% versus 3.0%; apply authored stop rule above 1% canary errors for this exercise. Result: stop and return canary traffic to v1; not a universal threshold.

**Annotations, caption and topic acceptance:** Show labeled synthetic counts, denominators and decision gate. Caption: Limited exposure needs a declared evaluation rule. Accept if empty samples mean insufficient evidence, not success.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[canary]: https://sre.google/workbook/canarying-releases/
