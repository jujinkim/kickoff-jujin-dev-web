# Queue / 큐 / キュー

Writing design only. ID: `queue` · Group: [processing-order](../groups/processing-order.md) · Queue order: 601 · Checked: 2026-09-21.

## Reader question and scope

**Question:** What does first-in-first-out guarantee and what does it not?

**Include:** Explain enqueue and dequeue at different ends with explicit empty handling.

**Exclude:** Distributed delivery guarantees and concurrent completion-order promises.

**Prevent confusion:** FIFO dequeue order is not necessarily processing completion order.

**Terms (EN / KO / JA):** Queue / 큐 / キュー; Enqueue and dequeue / 큐 삽입·제거 / エンキュー・デキュー. Also use the [group terms](../groups/processing-order.md) and [shared glossary](../glossary.md). These are editorial translations, not claims of standardized terminology.

## Six-section article outline

### 1. Definition

Open by answering the reader question. Establish this boundary: Explain enqueue and dequeue at different ends with explicit empty handling. Explain the distinguishing mechanism: Items leave in arrival order [orders]. Immediately separate the nearby concept: FIFO dequeue order is not necessarily processing completion order.

### 2. Features and examples

Use the exact group fixture below. Walk through initial state, action and result; annotate the mechanism in the required visualization. Explain every changed value rather than presenting an unexplained before/after.

Input: A,B,C. Initial: empty. Action: enqueue all, dequeue repeatedly. Result: A,B,C; next dequeue shows Empty.

### 3. Advantages and limitations

Explain the conditional benefit: The example serves earlier waiting tasks first. Then show its boundary: Urgent later work cannot jump ahead under this contract. Use the unsuitable case below as a counterexample; do not turn editorial advice into an empirical performance or usability result.

### 4. Comparison within the category

Compare every sibling: [stack](stack.md), [priority-queue](priority-queue.md).

Use the shared axes, in this order: **next-removal rule; tie policy; empty behavior; starvation risk; possible backing structure**. Populate the five comparison fields below from this same argument. Read the [group matrix](../groups/processing-order.md) before drafting peer comparisons; differences must use the same fixture and assumptions.

### 5. Selection and combination conditions

**Suitable:** A simple arrival-ordered work buffer.

**Unsuitable:** A scheduler that must prioritize urgent tasks.

**Combine:** Use a circular array or linked nodes; separate priority queues when urgency is needed.

### 6. Related reading and sources

Link existing guides: [collections](../../../src/content/articles/en/collections.md). Explain how they broaden this concept into its surrounding decision. Cite evidence at the factual claim, with the locators below. Unpublished peer IDs remain editorial references, not public article links.

## Comparison frontmatter brief

| Field          | Planned point                                                                          |
| -------------- | -------------------------------------------------------------------------------------- |
| `features`     | Items leave in arrival order [orders].                                                 |
| `advantages`   | The example serves earlier waiting tasks first.                                        |
| `limitations`  | Urgent later work cannot jump ahead under this contract.                               |
| `suitable`     | A simple arrival-ordered work buffer.                                                  |
| `combinations` | Use a circular array or linked nodes; separate priority queues when urgency is needed. |

## Claim and evidence map

Facts: the definition and mechanism in sections 1–2 and source-tagged points above are bounded by the following passages. Advice about suitability, tradeoffs without source tags, and combinations is **editorial judgment**, justified by the stated example and counterexample. All fixture values and predicted fixture outputs are **authored illustrations**, not measurements. No uncited claim of universal superiority is authorized.

| Evidence                                                              | Exact location to consult                                       | Claim boundary                                                                                          | Checked    |
| --------------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------- |
| [orders](https://opendatastructures.org/ods-java/1_2_Interfaces.html) | Section 1.2.1, Queue, priority Queue and Stack; figures 1.1–1.3 | [Verified claim and context](../sources.md#orders); apply only to this mechanism, not general rankings. | 2026-09-21 |

**Writing-time refresh:** Reopen these sources before writing. Product documentation is a dated capability reference, not a pinned implementation tutorial. No price, current version, license entitlement, service limit or legal guarantee is asserted by this brief. Adding any such claim requires fresh official evidence, an exact version/plan/jurisdiction scope, and a new check date. See the source-specific context in the ledger.

## Required visualization specification

**Purpose:** Answer “What does first-in-first-out guarantee and what does it not?” through the fixture rather than a decorative illustration.

**Shared input:** Tasks A(priority 2), B(priority 1), C(priority 2) arrive A then B then C. Smaller number means higher priority. Equal priorities use arrival order in this authored example.

**Form and composition:** Interactive add/remove trace, remaining state and removal log; Next and Reset expose one step at a time.

**Interaction/state script:** Input: A,B,C. Initial: empty. Action: enqueue all, dequeue repeatedly. Result: A,B,C; next dequeue shows Empty.

**Annotations, caption and topic acceptance:** Label front and rear and preserve input timestamps. Caption: Arrival order controls removal, not worker completion. Accept if no later task leaves before an earlier pending one.

**Mobile:** Stack panels at 320 CSS px; wrap labels and keep controls before the result. For spatial diagrams, provide a numbered vertical sequence with the same node names. Do not shrink text to fit a desktop canvas.

**Keyboard:** Native buttons/selects for all proposed controls, visible focus, logical tab order, and Enter/Space activation. Step examples need Previous, Next and Reset; disable unavailable steps visibly and semantically. Static studies need no artificial tab stops. No drag-only operation or timed advancement.

**Non-color encoding:** Label roles, states and sequence numbers; use line patterns or shapes alongside colors. Preserve information with shadows and color removed. Text contrast follows [contrast](../sources.md#contrast); keyboard and reflow criteria follow [keyboard](../sources.md#keyboard) and [reflow](../sources.md#reflow).

**Alternative description:** Use the caption as the short figure label, followed by the complete input → initial state → action → result script above as visible long description. Interactive output announces the resulting state without moving focus.

**Markdown equivalent:** Include that full script as a numbered text sequence and describe each annotated relationship in words. Include all values, assumptions and failure outcomes; never substitute “see interactive example.”

**Review acceptance:** Verify the stated result by tracing the authored fixture; check reset determinism, keyboard-only operation, mobile reading order, grayscale differentiation, and text/figure agreement. Label it “Illustrative example”; do not resemble an actual benchmark, transaction receipt, vendor console or production screenshot. Implementation and execution of this future visualization are outside this writing-design task.

## Draft handoff

No blocking editorial decision remains within this scope. Write and review this group's English originals together, then translate to Korean and Japanese using the shared terms. Source refresh and the future visualization acceptance checks are drafting/publication gates, not completed runtime work. Keep candidates pending until separately reviewed and published.

[orders]: https://opendatastructures.org/ods-java/1_2_Interfaces.html
