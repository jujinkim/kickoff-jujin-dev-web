# Multiple columns / 다열 / マルチカラム

Writing design only. ID: `multiple-columns` · Group: [columns](../groups/columns.md) · Queue order: 1202 · Checked: 2026-09-21.

## Reader question and scope

**Question:** When do three adjacent page regions justify their width cost?

**Include:** Explain three or more independent regions with a responsive stacking plan.

**Exclude:** CSS multicol text fragmentation and dense dashboard implementation.

**Prevent confusion:** Independent regions differ from one paragraph flowing across columns [multicol].

**Terms (EN / KO / JA):** Multiple columns / 다열 / マルチカラム; Page region / 페이지 영역 / ページ領域. Also use the [group terms](../groups/columns.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain three or more independent regions with a responsive stacking plan. Explain the distinguishing mechanism: Multiple page tracks can arrange independent regions [grid]. Immediately separate the nearby concept: Independent regions differ from one paragraph flowing across columns [multicol].

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: N,M,R. Initial: 1200px N|M|R. Action: narrow to 320px. Result: N→M→R vertical sequence; no lost related links.

### 3. Advantages and limitations

Explain the conditional benefit: The wide fixture exposes navigation, article and related reading together. Then show its boundary: Reduced per-region space can damage text wrapping and hierarchy. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [single-column](single-column.md), [two-columns](two-columns.md).

Use the shared axes, in this order: **page-region count; primary/secondary hierarchy; reading order; available width; narrow-screen collapse**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/columns.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** A sufficiently wide workspace where secondary panels support the main task.

**Unsuitable:** Keeping three tracks at phone width or treating all regions as equally important.

**Combine:** Use restrained style and list arrangement inside panels; collapse to single column on narrow screens.

### 6. Related reading and sources

Link existing guides: [layout](../../../src/content/articles/en/layout.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                                         |
| -------------- | ----------------------------------------------------------------------------------------------------- |
| `features`     | Multiple page tracks can arrange independent regions [grid].                                          |
| `advantages`   | The wide fixture exposes navigation, article and related reading together.                            |
| `limitations`  | Reduced per-region space can damage text wrapping and hierarchy.                                      |
| `suitable`     | A sufficiently wide workspace where secondary panels support the main task.                           |
| `combinations` | Use restrained style and list arrangement inside panels; collapse to single column on narrow screens. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                          | Exact location to consult                                                                            | Claim boundary                                                                                            | Checked    |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------- |
| [grid](https://www.w3.org/TR/css-grid-1/)                         | 1.1.1 Adapting Layouts to Available Space; 3.2 Grid Tracks and Cells; 4 Reordering and Accessibility | [Verified claim and context](../sources.md#grid); apply only to this mechanism, not general rankings.     | 2026-09-21 |
| [multicol](https://www.w3.org/TR/css-multicol-1/)                 | 1 Introduction; The multi-column model                                                               | [Verified claim and context](../sources.md#multicol); apply only to this mechanism, not general rankings. | 2026-09-21 |
| [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) | Success Criterion; Intent                                                                            | [Verified claim and context](../sources.md#reflow); apply only to this mechanism, not general rankings.   | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “When do three adjacent page regions justify their width cost?” through the fixture rather than a decorative illustration.

**Shared input:** A page contains navigation N, article content M and related reading R, in that logical order. Compare 1200px and 320px illustrative viewports using identical text.

**Form and composition:** Paired wireframes with N/M/R labels and numbered source order; show wide and narrow layouts with the same content.

**Interaction/state script:** Input: N,M,R. Initial: 1200px N|M|R. Action: narrow to 320px. Result: N→M→R vertical sequence; no lost related links.

**Annotations, caption and topic acceptance:** Number each region and provide a separate note contrasting newspaper-style flow. Caption: Three regions are not three fragments of one text. Accept if source and visual reading orders remain compatible.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[grid]: https://www.w3.org/TR/css-grid-1/
[multicol]: https://www.w3.org/TR/css-multicol-1/
