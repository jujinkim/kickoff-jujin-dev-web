# List / 리스트 / リスト

Writing design only. ID: `list` · Group: [abstract-collections](../groups/abstract-collections.md) · Queue order: 400 · Checked: 2026-09-21.

## Reader question and scope

**Question:** What does preserving order and duplicates mean?

**Include:** Explain position-based sequence operations while leaving physical storage open.

**Exclude:** UI list layouts and language-specific collection performance rankings.

**Prevent confusion:** List is not synonymous with linked list or array.

**Terms (EN / KO / JA):** List / 리스트 / リスト; Position / 위치 / 位置. Also use the [group terms](../groups/abstract-collections.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain position-based sequence operations while leaving physical storage open. Explain the distinguishing mechanism: Ordered sequence that permits duplicates [list]. Immediately separate the nearby concept: List is not synonymous with linked list or array.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: A17, B04, A17. Initial: empty list. Action: append each value, then read index 1 with zero-based indexing. Result: [A17, B04, A17], read B04.

### 3. Advantages and limitations

Explain the conditional benefit: Arrival history can retain both occurrences of A17. Then show its boundary: Finding an item by identity may need a separate lookup strategy. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [set](set.md), [map](map.md).

Use the shared axes, in this order: **order contract; duplicates; lookup identity; update behavior; implementation independence**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/abstract-collections.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** History or playlist data where repeated entries are meaningful.

**Unsuitable:** A membership-only store that must reject duplicates by contract.

**Combine:** Implement with an array or linked list; add a map for ID lookup.

### 6. Related reading and sources

Link existing guides: [collections](../../../src/content/articles/en/collections.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                    |
| -------------- | ---------------------------------------------------------------- |
| `features`     | Ordered sequence that permits duplicates [list].                 |
| `advantages`   | Arrival history can retain both occurrences of A17.              |
| `limitations`  | Finding an item by identity may need a separate lookup strategy. |
| `suitable`     | History or playlist data where repeated entries are meaningful.  |
| `combinations` | Implement with an array or linked list; add a map for ID lookup. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                                         | Exact location to consult                                           | Claim boundary                                                                                        | Checked    |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------- |
| [list](https://docs.oracle.com/javase/tutorial/collections/interfaces/list.html) | The List Interface opening; Positional Access and Search Operations | [Verified claim and context](../sources.md#list); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “What does preserving order and duplicates mean?” through the fixture rather than a decorative illustration.

**Shared input:** Event values A17, B04, A17 arrive in that order. Also associate A17 with title Alpha and then Updated Alpha. Equality means exact article-ID equality.

**Form and composition:** Step controls show input tokens and logical contents after each operation; deliberately avoid physical memory addresses.

**Interaction/state script:** Input: A17, B04, A17. Initial: empty list. Action: append each value, then read index 1 with zero-based indexing. Result: [A17, B04, A17], read B04.

**Annotations, caption and topic acceptance:** Number positions 0–2 and connect read(1) to B04. Caption: Position and repetition are part of the contract. Accept if both A17 entries remain.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[list]: https://docs.oracle.com/javase/tutorial/collections/interfaces/list.html
