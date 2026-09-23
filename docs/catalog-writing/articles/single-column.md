# Single column / 단일 열 / 単一カラム

Writing design only. ID: `single-column` · Group: [columns](../groups/columns.md) · Queue order: 1200 · Checked: 2026-09-21.

## Reader question and scope

**Question:** How do we keep one reading sequence as the viewport narrows?

**Include:** Explain vertically stacked page regions and constrained text width.

**Exclude:** Claims that single column requires edge-to-edge text or forbids nested grids.

**Prevent confusion:** Page-region layout and item-list arrangement are separate axes.

**Terms (EN / KO / JA):** Single column / 단일 열 / 単一カラム; Reading measure / 한 줄 길이 / 行長. Also use the [group terms](../groups/columns.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain vertically stacked page regions and constrained text width. Explain the distinguishing mechanism: One primary region per horizontal row; reflow is a separate requirement [reflow]. Immediately separate the nearby concept: Page-region layout and item-list arrangement are separate axes.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: N,M,R and identical article text. Initial: 1200px view with one centered track. Action: narrow to 320px. Result: N then M then R, text wraps without horizontal page scroll.

### 3. Advantages and limitations

Explain the conditional benefit: The proposed N→M→R sequence needs no side-to-side reading jumps. Then show its boundary: Secondary material moves farther down a long page in this example. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [two-columns](two-columns.md), [multiple-columns](multiple-columns.md).

Use the shared axes, in this order: **page-region count; primary/secondary hierarchy; reading order; available width; narrow-screen collapse**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/columns.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** Focused long-form reading and narrow screens.

**Unsuitable:** A wide analytical workspace needing simultaneous comparison of several panels.

**Combine:** Place a uniform card grid inside the main region at wider widths; choose any visual style.

### 6. Related reading and sources

Link existing guides: [layout](../../../src/content/articles/en/layout.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                              |
| -------------- | ------------------------------------------------------------------------------------------ |
| `features`     | One primary region per horizontal row; reflow is a separate requirement [reflow].          |
| `advantages`   | The proposed N→M→R sequence needs no side-to-side reading jumps.                           |
| `limitations`  | Secondary material moves farther down a long page in this example.                         |
| `suitable`     | Focused long-form reading and narrow screens.                                              |
| `combinations` | Place a uniform card grid inside the main region at wider widths; choose any visual style. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                          | Exact location to consult                                                                            | Claim boundary                                                                                          | Checked    |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------- |
| [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) | Success Criterion; Intent                                                                            | [Verified claim and context](../sources.md#reflow); apply only to this mechanism, not general rankings. | 2026-09-21 |
| [grid](https://www.w3.org/TR/css-grid-1/)                         | 1.1.1 Adapting Layouts to Available Space; 3.2 Grid Tracks and Cells; 4 Reordering and Accessibility | [Verified claim and context](../sources.md#grid); apply only to this mechanism, not general rankings.   | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How do we keep one reading sequence as the viewport narrows?” through the fixture rather than a decorative illustration.

**Shared input:** A page contains navigation N, article content M and related reading R, in that logical order. Compare 1200px and 320px illustrative viewports using identical text.

**Form and composition:** Paired wireframes with N/M/R labels and numbered source order; show wide and narrow layouts with the same content.

**Interaction/state script:** Input: N,M,R and identical article text. Initial: 1200px view with one centered track. Action: narrow to 320px. Result: N then M then R, text wraps without horizontal page scroll.

**Annotations, caption and topic acceptance:** Outline one track and mark maximum reading width as an authored choice. Caption: One page track, consistent reading order. Accept if nested content is not mislabeled a second page column.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[reflow]: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
