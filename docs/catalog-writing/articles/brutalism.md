# Brutalism / 브루탈리즘 / ブルータリズム

Writing design only. ID: `brutalism` · Group: [styles](../groups/styles.md) · Queue order: 0 · Checked: 2026-09-21.

## Reader question and scope

**Question:** How can a raw-looking page still make Save obvious?

**Include:** Explain deliberately unadorned web surfaces, visible structure and conventional controls through a reading card.

**Exclude:** Architectural history, shock effects and deliberate navigation breakage.

**Prevent confusion:** Antidesign is not required; a sparse page is not automatically brutalist.

**Terms (EN / KO / JA):** Brutalism / 브루탈리즘 / ブルータリズム; Antidesign / 안티디자인 / アンチデザイン. Also use the [group terms](../groups/styles.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain deliberately unadorned web surfaces, visible structure and conventional controls through a reading card. Explain the distinguishing mechanism: Raw typography and exposed structure [style-brutal]. Immediately separate the nearby concept: Antidesign is not required; a sparse page is not automatically brutalist.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: shared card. Initial: neutral, unsaved. Action: apply plain borders, underlined links and raw heading; activate Save. Result: unchanged content, Saved text and visible focus.

### 3. Advantages and limitations

Explain the conditional benefit: The proposed card can keep hierarchy apparent with few decorative decisions. Then show its boundary: Rough presentation can conflict with the intended tone; test recognition of Save. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [neobrutalism](neobrutalism.md), [glassmorphism](glassmorphism.md), [neumorphism](neumorphism.md), [skeuomorphism](skeuomorphism.md), [flat-design](flat-design.md), [minimalism](minimalism.md).

Use the shared axes, in this order: **surface and depth; ornament; information retained; action signifiers; background dependence; state visibility**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/styles.md) before drafting peer comparisons; compare the same dimensions and assumptions while each published article uses its own familiar situation.

### 5. Selection and combination conditions

**Suitable:** An editorial project choosing a utilitarian visual voice.

**Unsuitable:** A team seeking novelty by hiding links or scrambling reading order.

**Combine:** Pair with minimalism and single-column reading; retain semantic controls.

### 6. Related reading and sources

Link existing guides: [theme](../../../src/content/articles/en/theme.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                     |
| -------------- | --------------------------------------------------------------------------------- |
| `features`     | Raw typography and exposed structure [style-brutal].                              |
| `advantages`   | The proposed card can keep hierarchy apparent with few decorative decisions.      |
| `limitations`  | Rough presentation can conflict with the intended tone; test recognition of Save. |
| `suitable`     | An editorial project choosing a utilitarian visual voice.                         |
| `combinations` | Pair with minimalism and single-column reading; retain semantic controls.         |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                               | Exact location to consult                                   | Claim boundary                                                                                                | Checked    |
| ---------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------- |
| [style-brutal](https://www.nngroup.com/articles/brutalism-antidesign/) | Brutalism; Antidesign; When to Use Brutalism                | [Verified claim and context](../sources.md#style-brutal); apply only to this mechanism, not general rankings. | 2026-09-21 |
| [style-neo](https://www.nngroup.com/articles/neobrutalism/)            | Brutalism vs. Neobrutalism; Characteristics of Neobrutalism | [Verified claim and context](../sources.md#style-neo); apply only to this mechanism, not general rankings.    | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How can a raw-looking page still make Save obvious?” through the fixture rather than a decorative illustration.

**Shared input:** A fictional reading card: title Field notes, summary Three ways to save an article, metadata 5 min, Save button, Saved state, and visible focus. Keep content and action identical across seven studies.

**Form and composition:** Annotated screen studies: neutral reference and style variant. Show default, focus and saved states. Label changed tokens. These are fictional studies, not service screenshots.

**Interaction/state script:** Input: shared card. Initial: neutral, unsaved. Action: apply plain borders, underlined links and raw heading; activate Save. Result: unchanged content, Saved text and visible focus.

**Annotations, caption and topic acceptance:** Annotate heading, rule and link; contrast with the hard-shadow sibling. Caption: Raw surface, unchanged task. Accept only if all words and states survive.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[style-brutal]: https://www.nngroup.com/articles/brutalism-antidesign/
