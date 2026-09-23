# Skeuomorphism / 스큐어모피즘 / スキューモーフィズム

Writing design only. ID: `skeuomorphism` · Group: [styles](../groups/styles.md) · Queue order: 4 · Checked: 2026-09-21.

## Reader question and scope

**Question:** When does a physical metaphor explain a digital action?

**Include:** Explain a paper index-card and bookmark metaphor with an explicit digital Save label.

**Exclude:** Photorealistic rendering and universally familiar objects.

**Prevent confusion:** Realistic texture alone is not a functional metaphor; metaphors can be drawn flat.

**Terms (EN / KO / JA):** Skeuomorphism / 스큐어모피즘 / スキューモーフィズム; Metaphor / 은유 / メタファー. Also use the [group terms](../groups/styles.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain a paper index-card and bookmark metaphor with an explicit digital Save label. Explain the distinguishing mechanism: Physical references inform appearance or interaction [style-skeuo]. Immediately separate the nearby concept: Realistic texture alone is not a functional metaphor; metaphors can be drawn flat.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: shared card. Initial: paper frame and unmarked bookmark. Action: Save. Result: labeled Saved bookmark without requiring a drag gesture.

### 3. Advantages and limitations

Explain the conditional benefit: For readers familiar with bookmarks, the marker can explain saved status. Then show its boundary: Readers may not share the metaphor; avoid imposing irrelevant physical constraints. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [brutalism](brutalism.md), [neobrutalism](neobrutalism.md), [glassmorphism](glassmorphism.md), [neumorphism](neumorphism.md), [flat-design](flat-design.md), [minimalism](minimalism.md).

Use the shared axes, in this order: **surface and depth; ornament; information retained; action signifiers; background dependence; state visibility**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/styles.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** A task whose audience recognizes the reference object.

**Unsuitable:** An unfamiliar metaphor used as the only action label.

**Combine:** Use a flat bookmark icon and minimal content; realism is optional.

### 6. Related reading and sources

Link existing guides: [theme](../../../src/content/articles/en/theme.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                       |
| -------------- | ----------------------------------------------------------------------------------- |
| `features`     | Physical references inform appearance or interaction [style-skeuo].                 |
| `advantages`   | For readers familiar with bookmarks, the marker can explain saved status.           |
| `limitations`  | Readers may not share the metaphor; avoid imposing irrelevant physical constraints. |
| `suitable`     | A task whose audience recognizes the reference object.                              |
| `combinations` | Use a flat bookmark icon and minimal content; realism is optional.                  |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                        | Exact location to consult                                                                  | Claim boundary                                                                                               | Checked    |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ---------- |
| [style-skeuo](https://ixdf.org/literature/topics/skeuomorphism) | What is Skeuomorphism?                                                                     | [Verified claim and context](../sources.md#style-skeuo); apply only to this mechanism, not general rankings. | 2026-09-21 |
| [style-flat](https://www.nngroup.com/articles/flat-design/)     | Three-Dimensional Effects, Skeuomorphism, and Realism; Usability Problems with Flat Design | [Verified claim and context](../sources.md#style-flat); apply only to this mechanism, not general rankings.  | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “When does a physical metaphor explain a digital action?” through the fixture rather than a decorative illustration.

**Shared input:** A fictional reading card: title Field notes, summary Three ways to save an article, metadata 5 min, Save button, Saved state, and visible focus. Keep content and action identical across seven studies.

**Form and composition:** Annotated screen studies: neutral reference and style variant. Show default, focus and saved states. Label changed tokens. These are fictional studies, not service screenshots.

**Interaction/state script:** Input: shared card. Initial: paper frame and unmarked bookmark. Action: Save. Result: labeled Saved bookmark without requiring a drag gesture.

**Annotations, caption and topic acceptance:** Annotate physical reference, digital action and analogy limits. Caption: Bookmark metaphor supports the Save label. Accept if no physical-object knowledge is needed to operate it.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[style-skeuo]: https://ixdf.org/literature/topics/skeuomorphism
