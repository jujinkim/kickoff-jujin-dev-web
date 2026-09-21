# Map / 맵 / マップ

Writing design only. ID: `map` · Group: [abstract-collections](../groups/abstract-collections.md) · Queue order: 402 · Checked: 2026-09-21.

## Reader question and scope

**Question:** How does an identifier retrieve and update an associated value?

**Include:** Explain key-to-value association, replacement under the same key and explicit missing lookup.

**Exclude:** Geographic maps, functional map operations and hash-table internals.

**Prevent confusion:** Keys are unique; values need not be.

**Terms (EN / KO / JA):** Map / 맵 / マップ; Association / 대응 관계 / 対応関係. Also use the [group terms](../groups/abstract-collections.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain key-to-value association, replacement under the same key and explicit missing lookup. Explain the distinguishing mechanism: At most one value per key [map]. Immediately separate the nearby concept: Keys are unique; values need not be.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: A17→Alpha, B04→Beta, A17→Updated Alpha. Initial: empty map. Action: put pairs, get(A17), get(C99). Result: two keys, Updated Alpha and explicit missing.

### 3. Advantages and limitations

Explain the conditional benefit: An article ID can directly name its current title. Then show its boundary: The key design decides collisions and replacement semantics; history needs another structure. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [list](list.md), [set](set.md).

Use the shared axes, in this order: **order contract; duplicates; lookup identity; update behavior; implementation independence**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/abstract-collections.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** Article details indexed by stable ID.

**Unsuitable:** A history store that overwrites earlier events with the same ID.

**Combine:** Store lists as values for one-to-many data; pair with an ordered ID list for display.

### 6. Related reading and sources

Link existing guides: [collections](../../../src/content/articles/en/collections.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------- |
| `features`     | At most one value per key [map].                                                              |
| `advantages`   | An article ID can directly name its current title.                                            |
| `limitations`  | The key design decides collisions and replacement semantics; history needs another structure. |
| `suitable`     | Article details indexed by stable ID.                                                         |
| `combinations` | Store lists as values for one-to-many data; pair with an ordered ID list for display.         |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                                       | Exact location to consult                   | Claim boundary                                                                                       | Checked    |
| ------------------------------------------------------------------------------ | ------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------- |
| [map](https://docs.oracle.com/javase/tutorial/collections/interfaces/map.html) | The Map Interface opening; Collection Views | [Verified claim and context](../sources.md#map); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How does an identifier retrieve and update an associated value?” through the fixture rather than a decorative illustration.

**Shared input:** Event values A17, B04, A17 arrive in that order. Also associate A17 with title Alpha and then Updated Alpha. Equality means exact article-ID equality.

**Form and composition:** Step controls show input tokens and logical contents after each operation; deliberately avoid physical memory addresses.

**Interaction/state script:** Input: A17→Alpha, B04→Beta, A17→Updated Alpha. Initial: empty map. Action: put pairs, get(A17), get(C99). Result: two keys, Updated Alpha and explicit missing.

**Annotations, caption and topic acceptance:** Show key cells separately from value cells and highlight replacement. Caption: Reusing a key updates its association. Accept if A17 has one current value and missing is not confused with an empty string.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[map]: https://docs.oracle.com/javase/tutorial/collections/interfaces/map.html
