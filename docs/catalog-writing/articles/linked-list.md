# Linked list / 연결 리스트 / 連結リスト

Writing design only. ID: `linked-list` · Group: [sequential-storage](../groups/sequential-storage.md) · Queue order: 501 · Checked: 2026-09-21.

## Reader question and scope

**Question:** Why does an index read traverse nodes while a known-position edit rewires links?

**Include:** Explain doubly linked nodes, traversal, head/tail and insertion using known adjacent references.

**Exclude:** Allocator internals and blanket claims that linked insertion is always faster.

**Prevent confusion:** Constant-time relinking excludes finding the location.

**Terms (EN / KO / JA):** Linked list / 연결 리스트 / 連結リスト; Pointer / 포인터 / ポインター. Also use the [group terms](../groups/sequential-storage.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain doubly linked nodes, traversal, head/tail and insertion using known adjacent references. Explain the distinguishing mechanism: Nodes are joined by references rather than contiguous positions [linked]. Immediately separate the nearby concept: Constant-time relinking excludes finding the location.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: A17,B04,C99. Initial: head A17, tail C99. Action: follow two next links to read index 2; with B04 known, link B04↔X05↔C99. Result: four-node sequence with consistent back links.

### 3. Advantages and limitations

Explain the conditional benefit: Given B04 and its neighbor, insertion changes local links without shifting C99. Then show its boundary: Indexed access needs traversal and nodes carry reference fields [linked]. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [array](array.md).

Use the shared axes, in this order: **storage relation; indexed access; locating insertion point; edit work; capacity; reference overhead**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/sequential-storage.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** Local edits where node references are already available.

**Unsuitable:** Predominantly random index access without a suitable index.

**Combine:** Implement a list or deque; combine a map with node references for keyed access.

### 6. Related reading and sources

Link existing guides: [collections](../../../src/content/articles/en/collections.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                   |
| -------------- | ------------------------------------------------------------------------------- |
| `features`     | Nodes are joined by references rather than contiguous positions [linked].       |
| `advantages`   | Given B04 and its neighbor, insertion changes local links without shifting C99. |
| `limitations`  | Indexed access needs traversal and nodes carry reference fields [linked].       |
| `suitable`     | Local edits where node references are already available.                        |
| `combinations` | Implement a list or deque; combine a map with node references for keyed access. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                              | Exact location to consult                           | Claim boundary                                                                                          | Checked    |
| --------------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------- |
| [linked](https://opendatastructures.org/ods-java/3_Linked_Lists.html) | Chapter 3 opening comparison with array-based lists | [Verified claim and context](../sources.md#linked); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “Why does an index read traverse nodes while a known-position edit rewires links?” through the fixture rather than a decorative illustration.

**Shared input:** Store A17, B04, C99, read zero-based index 2, then insert X05 after B04. Count conceptual access/update steps, not elapsed time.

**Form and composition:** Stepwise slot/node diagram with numbered operations and explicit used length versus capacity.

**Interaction/state script:** Input: A17,B04,C99. Initial: head A17, tail C99. Action: follow two next links to read index 2; with B04 known, link B04↔X05↔C99. Result: four-node sequence with consistent back links.

**Annotations, caption and topic acceptance:** Show previous/next arrows and separate locate and splice phases. Caption: Finding a position and editing it are different work. Accept if reverse traversal yields C99,X05,B04,A17.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[linked]: https://opendatastructures.org/ods-java/3_Linked_Lists.html
