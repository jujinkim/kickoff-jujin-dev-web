# Set / 집합 / 集合

Writing design only. ID: `set` · Group: [abstract-collections](../groups/abstract-collections.md) · Queue order: 401 · Checked: 2026-09-21.

## Reader question and scope

**Question:** How does membership differ from storing an arrival history?

**Include:** Explain uniqueness under equality and membership queries independent of iteration order.

**Exclude:** Claims that all sets are unordered in every language or always use hashing.

**Prevent confusion:** Set iteration order and mathematical membership are different concerns.

**Terms (EN / KO / JA):** Set / 집합 / 集合; Membership / 포함 여부 / 所属判定. Also use the [group terms](../groups/abstract-collections.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain uniqueness under equality and membership queries independent of iteration order. Explain the distinguishing mechanism: Duplicate elements are excluded under the equality rule [set]. Immediately separate the nearby concept: Set iteration order and mathematical membership are different concerns.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: A17, B04, A17. Initial: empty set. Action: add each, then contains(A17). Result: two members and true; display order is illustrative only.

### 3. Advantages and limitations

Explain the conditional benefit: Repeated saves can be represented as one membership fact. Then show its boundary: The abstraction alone does not preserve frequency or a portable ordering guarantee. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [list](list.md), [map](map.md).

Use the shared axes, in this order: **order contract; duplicates; lookup identity; update behavior; implementation independence**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/abstract-collections.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** Unique selected article IDs.

**Unsuitable:** A log where repeated A17 events must be counted separately.

**Combine:** Combine a set of selected IDs with a list of events or map of article details.

### 6. Related reading and sources

Link existing guides: [collections](../../../src/content/articles/en/collections.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                       |
| -------------- | ----------------------------------------------------------------------------------- |
| `features`     | Duplicate elements are excluded under the equality rule [set].                      |
| `advantages`   | Repeated saves can be represented as one membership fact.                           |
| `limitations`  | The abstraction alone does not preserve frequency or a portable ordering guarantee. |
| `suitable`     | Unique selected article IDs.                                                        |
| `combinations` | Combine a set of selected IDs with a list of events or map of article details.      |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                                       | Exact location to consult                           | Claim boundary                                                                                       | Checked    |
| ------------------------------------------------------------------------------ | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------- |
| [set](https://docs.oracle.com/javase/tutorial/collections/interfaces/set.html) | The Set Interface opening; implementation paragraph | [Verified claim and context](../sources.md#set); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “How does membership differ from storing an arrival history?” through the fixture rather than a decorative illustration.

**Shared input:** Event values A17, B04, A17 arrive in that order. Also associate A17 with title Alpha and then Updated Alpha. Equality means exact article-ID equality.

**Form and composition:** Step controls show input tokens and logical contents after each operation; deliberately avoid physical memory addresses.

**Interaction/state script:** Input: A17, B04, A17. Initial: empty set. Action: add each, then contains(A17). Result: two members and true; display order is illustrative only.

**Annotations, caption and topic acceptance:** Mark duplicate insertion as no membership change. Caption: Membership changes only for a new value. Accept if size stays 2 after the third add.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[set]: https://docs.oracle.com/javase/tutorial/collections/interfaces/set.html
