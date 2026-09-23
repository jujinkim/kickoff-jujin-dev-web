# Blue-green / 블루·그린 / ブルーグリーン

Original writing design; implemented article and demo: [review](../../platform-demos-review.md). ID: `blue-green` · Group: [release-replacement](../groups/release-replacement.md) · Queue order: 1101 · Checked: 2026-09-22.

## Reader question and scope

**Question:** What does switching between two prepared environments change?

**Include:** Explain parallel old/new environments, traffic switch and bounded switch-back.

**Exclude:** Guaranteed instant recovery and database rollback automation.

**Prevent confusion:** Environment switch is not necessarily gradual exposure.

**Terms (EN / KO / JA):** Blue-green / 블루·그린 / ブルーグリーン; Traffic switch / 트래픽 전환 / トラフィック切り替え. Also use the [group terms](../groups/release-replacement.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain parallel old/new environments, traffic switch and bounded switch-back. Explain the distinguishing mechanism: Prepared environments exchange the live traffic role [blue-green]. Immediately separate the nearby concept: Environment switch is not necessarily gradual exposure.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: blue v1 pool and prepared green v2 pool. Initial: 100% blue. Action: verify green, switch requests to green; simulate failure and switch back. Result: traffic returns to blue, but data writes are not undone.

### 3. Advantages and limitations

Explain the conditional benefit: The example keeps an old environment available for a routing reversal. Then show its boundary: Duplicated capacity and data compatibility need planning; writes made after switch remain. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [rolling](rolling.md), [canary](canary.md).

Use the shared axes, in this order: **replacement unit; simultaneous versions; traffic routing; evaluation gate; rollback action; data compatibility**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/release-replacement.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** A service with a controlled routing switch and compatible shared data.

**Unsuitable:** Using switch-back after destructive schema changes without a recovery design.

**Combine:** Canary traffic can evaluate green before full switch; manage data changes separately.

### 6. Related reading and sources

Link existing guides: [shipping](../../../src/content/articles/en/shipping.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                              |
| -------------- | ------------------------------------------------------------------------------------------ |
| `features`     | Prepared environments exchange the live traffic role [blue-green].                         |
| `advantages`   | The example keeps an old environment available for a routing reversal.                     |
| `limitations`  | Duplicated capacity and data compatibility need planning; writes made after switch remain. |
| `suitable`     | A service with a controlled routing switch and compatible shared data.                     |
| `combinations` | Canary traffic can evaluate green before full switch; manage data changes separately.      |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                              | Exact location to consult                                       | Claim boundary                                                                                              | Checked    |
| --------------------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------- |
| [blue-green](https://martinfowler.com/bliki/BlueGreenDeployment.html) | Two production environments; router switch; database discussion | [Verified claim and context](../sources.md#blue-green); apply only to this mechanism, not general rankings. | 2026-09-22 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “What does switching between two prepared environments change?” through the fixture rather than a decorative illustration.

**Shared input:** Replace v1 of a stateless reading API with v2. Illustrative pool has four v1 replicas. Both versions can read the same backward-compatible data. Readiness and error metrics are explicitly defined before release.

**Form and composition:** Step timeline with version labels, traffic fractions and a separate shared-data lane; arrows identify checks and stop paths.

**Interaction/state script:** Input: blue v1 pool and prepared green v2 pool. Initial: 100% blue. Action: verify green, switch requests to green; simulate failure and switch back. Result: traffic returns to blue, but data writes are not undone.

**Annotations, caption and topic acceptance:** Draw two labeled environments and distinct route/data arrows. Caption: Traffic can switch back; data history does not. Accept if rollback explicitly preserves post-switch data.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[blue-green]: https://martinfowler.com/bliki/BlueGreenDeployment.html
