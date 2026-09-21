# Proportional / 비례폭 / プロポーショナル

Writing design only. ID: `proportional` · Group: [character-width](../groups/character-width.md) · Queue order: 1600 · Checked: 2026-09-21.

## Reader question and scope

**Question:** Why do i and W occupy different horizontal space in many text fonts?

**Include:** Explain varying advance widths and distinguish text spacing from digit alignment.

**Exclude:** Font-product recommendations and measured reading-speed claims.

**Prevent confusion:** Proportional text can have tabular digits; glyph outline width is not its full advance.

**Terms (EN / KO / JA):** Proportional / 비례폭 / プロポーショナル; Variable advance / 가변 전진 폭 / 可変送り幅. Also use the [group terms](../groups/character-width.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain varying advance widths and distinguish text spacing from digit alignment. Explain the distinguishing mechanism: Contrast variable advances with the fixed-width criterion in CSS [fonts]; the variable-width specimen is an authored model. Immediately separate the nearby concept: Proportional text can have tabular digits; glyph outline width is not its full advance.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: iiiWWW. Initial: authored advances i=4 units,W=10 units. Action: place successive advance boxes. Result: total 42 units, unequal cell widths; values illustrate the rule, not a real font.

### 3. Advantages and limitations

Explain the conditional benefit: The proposed prose specimen can allocate different space to narrow and wide letters. Then show its boundary: Plain spaces do not guarantee vertical numeric alignment. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [monospace](monospace.md).

Use the shared axes, in this order: **advance-width rule; alignment behavior; prose spacing; tabular digits; script/fallback caveats**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/character-width.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** Prose and labels where equal-width cells are unnecessary.

**Unsuitable:** Aligning tabular values with repeated spaces and expecting portable columns.

**Combine:** Use table layout or tabular figures for data; serif or sans shape is independent.

### 6. Related reading and sources

Link existing guides: [theme](../../../src/content/articles/en/theme.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `features`     | Contrast variable advances with the fixed-width criterion in CSS [fonts]; the variable-width specimen is an authored model. |
| `advantages`   | The proposed prose specimen can allocate different space to narrow and wide letters.                                        |
| `limitations`  | Plain spaces do not guarantee vertical numeric alignment.                                                                   |
| `suitable`     | Prose and labels where equal-width cells are unnecessary.                                                                   |
| `combinations` | Use table layout or tabular figures for data; serif or sans shape is independent.                                           |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                    | Exact location to consult                                             | Claim boundary                                                                                         | Checked    |
| ------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------- |
| [fonts](https://www.w3.org/TR/css-fonts-3/) | 3.1.1 Generic font families: serif, sans-serif, cursive and monospace | [Verified claim and context](../sources.md#fonts); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “Why do i and W occupy different horizontal space in many text fonts?” through the fixture rather than a decorative illustration.

**Shared input:** Compare iiiWWW and two rows of values 111 / 888, followed by 기록 / 記録. Use boxes to show advance width, not merely the black outline of each glyph.

**Form and composition:** Same strings with labeled advance boxes and column guides; variable-width and equal-width schematic versions, not measured font samples.

**Interaction/state script:** Input: iiiWWW. Initial: authored advances i=4 units,W=10 units. Action: place successive advance boxes. Result: total 42 units, unequal cell widths; values illustrate the rule, not a real font.

**Annotations, caption and topic acceptance:** Label each advance and separate ink outline from its box. Caption: Advance widths vary; numbers are schematic. Accept if total is 3×4+3×10=42 and no font is claimed measured.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[fonts]: https://www.w3.org/TR/css-fonts-3/
