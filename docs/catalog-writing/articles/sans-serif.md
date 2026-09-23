# Sans serif / 산세리프 / サンセリフ

Writing design only. ID: `sans-serif` · Group: [type-shapes](../groups/type-shapes.md) · Queue order: 1501 · Checked: 2026-09-21.

## Reader question and scope

**Question:** What does the absence of serif endings tell us about a typeface?

**Include:** Explain generally unadorned stroke endings, variation within sans forms and multilingual coverage.

**Exclude:** Claims that sans is always modern, more readable or monospaced.

**Prevent confusion:** No serifs does not mean no shape variation or guaranteed clarity.

**Terms (EN / KO / JA):** Sans serif / 산세리프 / サンセリフ; Stroke ending / 획 끝 / ストロークの端. Also use the [group terms](../groups/type-shapes.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain generally unadorned stroke endings, variation within sans forms and multilingual coverage. Explain the distinguishing mechanism: Sans-serif classification generally lacks serif endings [fonts]. Immediately separate the nearby concept: No serifs does not mean no shape variation or guaranteed clarity.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: shared specimen plus I l 1. Initial: equal nominal size. Action: inspect endings and similar glyphs across language fallbacks. Result: annotated absence of serifs and explicit ambiguous-glyph check.

### 3. Advantages and limitations

Explain the conditional benefit: The proposed UI label can keep decorative stroke endings out of its visual vocabulary. Then show its boundary: Similar-looking glyphs and fallback behavior still need checking at actual size. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [serif](serif.md), [script](script.md).

Use the shared axes, in this order: **stroke endings; construction; handwritten reference; script coverage; intended text role; independence from width**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/type-shapes.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** UI labels with tested glyph distinction and script coverage.

**Unsuitable:** Assuming a generic category guarantees distinguishable I, l and 1.

**Combine:** Use with any layout/style; pair proportional UI text with monospace code separately.

### 6. Related reading and sources

Link existing guides: [theme](../../../src/content/articles/en/theme.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                          |
| -------------- | -------------------------------------------------------------------------------------- |
| `features`     | Sans-serif classification generally lacks serif endings [fonts].                       |
| `advantages`   | The proposed UI label can keep decorative stroke endings out of its visual vocabulary. |
| `limitations`  | Similar-looking glyphs and fallback behavior still need checking at actual size.       |
| `suitable`     | UI labels with tested glyph distinction and script coverage.                           |
| `combinations` | Use with any layout/style; pair proportional UI text with monospace code separately.   |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                    | Exact location to consult                                             | Claim boundary                                                                                         | Checked    |
| ------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------- |
| [fonts](https://www.w3.org/TR/css-fonts-3/) | 3.1.1 Generic font families: serif, sans-serif, cursive and monospace | [Verified claim and context](../sources.md#fonts); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “What does the absence of serif endings tell us about a typeface?” through the fixture rather than a decorative illustration.

**Shared input:** Compare the same text: Field notes 2026 / 기록 2026 / 記録 2026, plus a magnified Latin H, n and a. Keep nominal size and text constant; describe fallback coverage separately.

**Form and composition:** Annotated glyph silhouettes and identical multilingual specimen lines; no font-product ranking or fabricated readability score.

**Interaction/state script:** Input: shared specimen plus I l 1. Initial: equal nominal size. Action: inspect endings and similar glyphs across language fallbacks. Result: annotated absence of serifs and explicit ambiguous-glyph check.

**Annotations, caption and topic acceptance:** Magnify endings without changing source text; show I/l/1 test separately. Caption: Sans describes endings, not an automatic readability result. Accept if no cross-language shape equivalence is implied.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[fonts]: https://www.w3.org/TR/css-fonts-3/
