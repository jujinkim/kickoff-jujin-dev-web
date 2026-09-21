# Processing order / 처리 순서 / 処理順序

Group ID: `processing-order` · Checked: 2026-09-21 · Writing designs, not article bodies.

## Shared case and comparison contract

Tasks A(priority 2), B(priority 1), C(priority 2) arrive A then B then C. Smaller number means higher priority. Equal priorities use arrival order in this authored example.

**Comparison axes, fixed order:** next-removal rule; tie policy; empty behavior; starvation risk; possible backing structure.

**Boundary:** Ordering contracts are separate from array/linked/heap implementation. No elapsed-time comparison. FIFO example does not promise completion order with concurrent workers.

**Visual family:** Interactive add/remove trace, remaining state and removal log; Next and Reset expose one step at a time.

**Core terms (EN / KO / JA):** FIFO / 선입선출 / 先入れ先出し; LIFO / 후입선출 / 後入れ先出し; Priority / 우선순위 / 優先度.

## Sibling review matrix

All rows use the same case. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                                                          | Distinguishing feature                                 | Conditional advantage                                               | Limitation                                                                       | Suitable context                                         | Combination                                                                                     |
| -------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [Stack / 스택 / スタック](../articles/stack.md)                                  | Last arrival is removed first [orders].                | The proposed undo history can reverse the most recent action first. | Old pending work waits while newer work keeps arriving.                          | Nested work and undo operations requiring reverse order. | Back with array or linked nodes; use a separate queue for arrival-ordered work.                 |
| [Queue / 큐 / キュー](../articles/queue.md)                                      | Items leave in arrival order [orders].                 | The example serves earlier waiting tasks first.                     | Urgent later work cannot jump ahead under this contract.                         | A simple arrival-ordered work buffer.                    | Use a circular array or linked nodes; separate priority queues when urgency is needed.          |
| [Priority queue / 우선순위 큐 / 優先度付きキュー](../articles/priority-queue.md) | Removal follows priority rather than arrival [orders]. | The authored urgent task B can run before A.                        | Lower-priority work can wait indefinitely unless scheduling policy addresses it. | Work where priority has a clear domain meaning.          | Implement with a heap; add an arrival sequence to the comparator when stable ties are required. |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[orders]: https://opendatastructures.org/ods-java/1_2_Interfaces.html
