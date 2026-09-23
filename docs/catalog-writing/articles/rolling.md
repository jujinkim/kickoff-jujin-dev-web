# Rolling / 롤링 / ローリング

Original writing design; implemented article and demo: [review](../../platform-demos-review.md). ID: `rolling` · Group: [release-replacement](../groups/release-replacement.md) · Queue order: 1100 · Checked: 2026-09-22.

## Reader question and scope

**Question:** How does replacing replicas gradually create mixed-version periods?

**Include:** Explain replica replacement, readiness and capacity assumptions through a four-replica pool.

**Exclude:** Zero-downtime guarantees and universal orchestration defaults.

**Prevent confusion:** Progressive replacement alone is not canary analysis.

**Terms (EN / KO / JA):** Rolling / 롤링 / ローリング; Replica / 복제본 / レプリカ. Also use the [group terms](../groups/release-replacement.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain replica replacement, readiness and capacity assumptions through a four-replica pool. Explain the distinguishing mechanism: Replicas update progressively under rollout constraints [rolling]. Immediately separate the nearby concept: Progressive replacement alone is not canary analysis.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: four v1 replicas and v2 artifact. Initial: all ready v1. Action: add one ready v2, remove one v1, repeat with one spare slot. Result: four v2; stop if new readiness fails.

### 3. Advantages and limitations

Explain the conditional benefit: The example can reuse a pool while keeping ready old replicas serving. Then show its boundary: Mixed versions require compatible contracts; readiness is not complete correctness. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [blue-green](blue-green.md), [canary](canary.md).

Use the shared axes, in this order: **replacement unit; simultaneous versions; traffic routing; evaluation gate; rollback action; data compatibility**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/release-replacement.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** A replicated service supporting v1/v2 coexistence.

**Unsuitable:** An incompatible schema change that breaks surviving v1 replicas.

**Combine:** Run a canary gate before broader rolling replacement; use expand/contract data changes.

### 6. Related reading and sources

Link existing guides: [shipping](../../../src/content/articles/en/shipping.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                           |
| -------------- | --------------------------------------------------------------------------------------- |
| `features`     | Replicas update progressively under rollout constraints [rolling].                      |
| `advantages`   | The example can reuse a pool while keeping ready old replicas serving.                  |
| `limitations`  | Mixed versions require compatible contracts; readiness is not complete correctness.     |
| `suitable`     | A replicated service supporting v1/v2 coexistence.                                      |
| `combinations` | Run a canary gate before broader rolling replacement; use expand/contract data changes. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                                         | Exact location to consult                                                    | Claim boundary                                                                                           | Checked    |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------- |
| [rolling](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) | Updating a Deployment; Rolling Update Deployment; Max Unavailable; Max Surge | [Verified claim and context](../sources.md#rolling); apply only to this mechanism, not general rankings. | 2026-09-22 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How does replacing replicas gradually create mixed-version periods?” through the fixture rather than a decorative illustration.

**Shared input:** Replace v1 of a stateless reading API with v2. Illustrative pool has four v1 replicas. Both versions can read the same backward-compatible data. Readiness and error metrics are explicitly defined before release.

**Form and composition:** Step timeline with version labels, traffic fractions and a separate shared-data lane; arrows identify checks and stop paths.

**Interaction/state script:** Input: four v1 replicas and v2 artifact. Initial: all ready v1. Action: add one ready v2, remove one v1, repeat with one spare slot. Result: four v2; stop if new readiness fails.

**Annotations, caption and topic acceptance:** Show counts 4+0 → 4+1 → 3+1 through 0+4 and mark temporary capacity. Caption: Old and new versions coexist during replacement. Accept if each removal follows the assumed readiness check.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[rolling]: https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
