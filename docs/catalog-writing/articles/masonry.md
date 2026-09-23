# Masonry / 메이슨리 / メイソンリー

Writing design only. ID: `masonry` · Group: [content-arrangement](../groups/content-arrangement.md) · Queue order: 1302 · Checked: 2026-09-21.

## Reader question and scope

**Question:** How does fitting variable-height cards change alignment and scan order?

**Include:** Explain vertical-gap packing using a deterministic two-column illustrative algorithm.

**Exclude:** Native CSS support promises and claims that packing always improves usability.

**Prevent confusion:** A masonry pattern is not the same thing as the Masonry library or ordinary aligned grid rows.

**Terms (EN / KO / JA):** Masonry / 메이슨리 / メイソンリー; Packing / 빈 공간 채우기 / 詰め込み配置. Also use the [group terms](../groups/content-arrangement.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain vertical-gap packing using a deterministic two-column illustrative algorithm. Explain the distinguishing mechanism: Items can be placed according to available vertical space [masonry]. Immediately separate the nearby concept: A masonry pattern is not the same thing as the Masonry library or ordinary aligned grid rows.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: heights A120,B200,C140,D180,E120,F160, zero gap for arithmetic. Initial: two empty columns. Action: place next item in shorter column, tie left. Result: left A,C,E,F (540); right B,D (380). Narrow view returns A,B,C,D,E,F.

### 3. Advantages and limitations

Explain the conditional benefit: The fixture uses gaps left by differently sized images. Then show its boundary: Visual neighbors may diverge from logical order; height changes need careful handling. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [list-layout](list-layout.md), [uniform-grid](uniform-grid.md).

Use the shared axes, in this order: **item scan path; alignment; variable height; ordering semantics; density; responsive behavior**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/content-arrangement.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** A visual collection where variable image height matters more than row alignment.

**Unsuitable:** Ordered steps or data that requires cross-row field comparison.

**Combine:** Use semantic A–F source order and a one-column mobile fallback; keep labels visible.

### 6. Related reading and sources

Link existing guides: [layout](../../../src/content/articles/en/layout.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                          |
| -------------- | -------------------------------------------------------------------------------------- |
| `features`     | Items can be placed according to available vertical space [masonry].                   |
| `advantages`   | The fixture uses gaps left by differently sized images.                                |
| `limitations`  | Visual neighbors may diverge from logical order; height changes need careful handling. |
| `suitable`     | A visual collection where variable image height matters more than row alignment.       |
| `combinations` | Use semantic A–F source order and a one-column mobile fallback; keep labels visible.   |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                  | Exact location to consult                                                                            | Claim boundary                                                                                           | Checked    |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------- |
| [masonry](https://masonry.desandro.com/)  | What is Masonry?                                                                                     | [Verified claim and context](../sources.md#masonry); apply only to this mechanism, not general rankings. | 2026-09-21 |
| [grid](https://www.w3.org/TR/css-grid-1/) | 1.1.1 Adapting Layouts to Available Space; 3.2 Grid Tracks and Cells; 4 Reordering and Accessibility | [Verified claim and context](../sources.md#grid); apply only to this mechanism, not general rankings.    | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How does fitting variable-height cards change alignment and scan order?” through the fixture rather than a decorative illustration.

**Shared input:** Six cards A–F have identical title/summary data across all examples but different illustration heights: 120,200,140,180,120,160 illustrative pixels. Input order is A,B,C,D,E,F.

**Form and composition:** Same six cards in alternative layouts; numbered reading order and fixed content with responsive one-track fallback.

**Interaction/state script:** Input: heights A120,B200,C140,D180,E120,F160, zero gap for arithmetic. Initial: two empty columns. Action: place next item in shorter column, tie left. Result: left A,C,E,F (540); right B,D (380). Narrow view returns A,B,C,D,E,F.

**Annotations, caption and topic acceptance:** Show successive column totals (120,0), (120,200), (260,200), (260,380), (380,380), (540,380) and placement numbers. Caption: Gap packing does not create aligned rows. Accept if the last tie places F left and keyboard order remains A–F.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[masonry]: https://masonry.desandro.com/
