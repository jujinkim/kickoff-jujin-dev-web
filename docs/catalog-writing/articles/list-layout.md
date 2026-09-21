# List layout / 리스트 / リスト

Writing design only. ID: `list-layout` · Group: [content-arrangement](../groups/content-arrangement.md) · Queue order: 1300 · Checked: 2026-09-21.

## Reader question and scope

**Question:** When do repeated rows make item details easier to compare?

**Include:** Explain a vertical series of item rows with stable field positions and order.

**Exclude:** List data-structure internals and claims that every list is text-only.

**Prevent confusion:** A visual list can be stored in any suitable collection and placed inside a page column.

**Terms (EN / KO / JA):** List layout / 리스트 / リスト; Item row / 항목 행 / 項目行. Also use the [group terms](../groups/content-arrangement.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain a vertical series of item rows with stable field positions and order. Explain the distinguishing mechanism: Repeated items follow one vertical sequence; authored layout using the grid/reflow constraints [grid] [reflow]. Immediately separate the nearby concept: A visual list can be stored in any suitable collection and placed inside a page column.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: cards A–F. Initial: rows A through F. Action: narrow the viewport. Result: same item order, with each row’s image above its text if needed.

### 3. Advantages and limitations

Explain the conditional benefit: The fixture keeps titles and metadata at predictable row positions. Then show its boundary: Long sequences require scrolling and may use wide screens sparsely. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [uniform-grid](uniform-grid.md), [masonry](masonry.md).

Use the shared axes, in this order: **item scan path; alignment; variable height; ordering semantics; density; responsive behavior**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/content-arrangement.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** Reading and comparing textual card details.

**Unsuitable:** Using huge rows for an image-browsing task without considering alternatives.

**Combine:** Use two-column page composition with a list in main; combine with any style.

### 6. Related reading and sources

Link existing guides: [layout](../../../src/content/articles/en/layout.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| `features`     | Repeated items follow one vertical sequence; authored layout using the grid/reflow constraints [grid] [reflow]. |
| `advantages`   | The fixture keeps titles and metadata at predictable row positions.                                             |
| `limitations`  | Long sequences require scrolling and may use wide screens sparsely.                                             |
| `suitable`     | Reading and comparing textual card details.                                                                     |
| `combinations` | Use two-column page composition with a list in main; combine with any style.                                    |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                          | Exact location to consult                                                                            | Claim boundary                                                                                          | Checked    |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------- |
| [grid](https://www.w3.org/TR/css-grid-1/)                         | 1.1.1 Adapting Layouts to Available Space; 3.2 Grid Tracks and Cells; 4 Reordering and Accessibility | [Verified claim and context](../sources.md#grid); apply only to this mechanism, not general rankings.   | 2026-09-21 |
| [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) | Success Criterion; Intent                                                                            | [Verified claim and context](../sources.md#reflow); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “When do repeated rows make item details easier to compare?” through the fixture rather than a decorative illustration.

**Shared input:** Six cards A–F have identical title/summary data across all examples but different illustration heights: 120,200,140,180,120,160 illustrative pixels. Input order is A,B,C,D,E,F.

**Form and composition:** Same six cards in alternative layouts; numbered reading order and fixed content with responsive one-track fallback.

**Interaction/state script:** Input: cards A–F. Initial: rows A through F. Action: narrow the viewport. Result: same item order, with each row’s image above its text if needed.

**Annotations, caption and topic acceptance:** Draw row baselines and a single A→F scan path. Caption: Repeated rows preserve a simple item sequence. Accept if no title or summary is truncated merely to keep row height equal.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[grid]: https://www.w3.org/TR/css-grid-1/
[reflow]: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
