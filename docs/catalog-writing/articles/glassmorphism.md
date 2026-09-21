# Glassmorphism / 글래스모피즘 / グラスモーフィズム

Writing design only. ID: `glassmorphism` · Group: [styles](../groups/styles.md) · Queue order: 2 · Checked: 2026-09-21.

## Reader question and scope

**Question:** What happens to a translucent card when the background changes?

**Include:** Explain translucent layers and backdrop blur over calm and busy backgrounds.

**Exclude:** Platform material APIs, rendering benchmarks and claims that blur ensures contrast.

**Prevent confusion:** Backdrop blur differs from blurring text and from opaque extrusion.

**Terms (EN / KO / JA):** Glassmorphism / 글래스모피즘 / グラスモーフィズム; Backdrop blur / 배경 흐림 / 背景ぼかし. Also use the [group terms](../groups/styles.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain translucent layers and backdrop blur over calm and busy backgrounds. Explain the distinguishing mechanism: Translucent layering exposes background dependence [style-glass]. Immediately separate the nearby concept: Backdrop blur differs from blurring text and from opaque extrusion.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: shared card and two backdrops. Initial: calm backdrop. Action: switch to busy, then opaque mode. Result: reading and Save remain available.

### 3. Advantages and limitations

Explain the conditional benefit: The proposed overlay preserves some surrounding visual context. Then show its boundary: Changing backgrounds can undermine text contrast [style-glass]. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [brutalism](brutalism.md), [neobrutalism](neobrutalism.md), [neumorphism](neumorphism.md), [skeuomorphism](skeuomorphism.md), [flat-design](flat-design.md), [minimalism](minimalism.md).

Use the shared axes, in this order: **surface and depth; ornament; information retained; action signifiers; background dependence; state visibility**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/styles.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** A contextual overlay with controlled backgrounds and an opaque mode.

**Unsuitable:** Essential text over unpredictable imagery without a fallback.

**Combine:** Combine with flat controls and minimal content; keep text opaque.

### 6. Related reading and sources

Link existing guides: [theme](../../../src/content/articles/en/theme.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                        |
| -------------- | -------------------------------------------------------------------- |
| `features`     | Translucent layering exposes background dependence [style-glass].    |
| `advantages`   | The proposed overlay preserves some surrounding visual context.      |
| `limitations`  | Changing backgrounds can undermine text contrast [style-glass].      |
| `suitable`     | A contextual overlay with controlled backgrounds and an opaque mode. |
| `combinations` | Combine with flat controls and minimal content; keep text opaque.    |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                              | Exact location to consult                                           | Claim boundary                                                                                                     | Checked    |
| --------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- |
| [style-glass](https://www.nngroup.com/articles/glassmorphism/)        | What Is Glassmorphism?; Characteristics; Meet Contrast Requirements | [Verified claim and context](../sources.md#style-glass); apply only to this mechanism, not general rankings.       | 2026-09-21 |
| [style-glass-cross](https://ixdf.org/literature/topics/glassmorphism) | What is Glassmorphism?                                              | [Verified claim and context](../sources.md#style-glass-cross); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “What happens to a translucent card when the background changes?” through the fixture rather than a decorative illustration.

**Shared input:** A fictional reading card: title Field notes, summary Three ways to save an article, metadata 5 min, Save button, Saved state, and visible focus. Keep content and action identical across seven studies.

**Form and composition:** Annotated screen studies: neutral reference and style variant. Show default, focus and saved states. Label changed tokens. These are fictional studies, not service screenshots.

**Interaction/state script:** Input: shared card and two backdrops. Initial: calm backdrop. Action: switch to busy, then opaque mode. Result: reading and Save remain available.

**Annotations, caption and topic acceptance:** Label backdrop and opacity toggles; separate text from blur layer. Caption: Background changes affect readability. Accept after checking both backgrounds and opaque mode.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[style-glass]: https://www.nngroup.com/articles/glassmorphism/
