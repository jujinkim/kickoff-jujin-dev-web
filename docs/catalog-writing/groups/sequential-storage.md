# Sequential storage structures / 순차 저장 구조 / 順次記憶構造

Group ID: `sequential-storage` · Checked: 2026-09-21 · Writing designs, not article bodies.

## Shared case and comparison contract

Store A17, B04, C99, read zero-based index 2, then insert X05 after B04. Count conceptual access/update steps, not elapsed time.

**Comparison axes, fixed order:** storage relation; indexed access; locating insertion point; edit work; capacity; reference overhead.

**Boundary:** Use conventional contiguous backing-array and doubly linked-node models. A language object called Array may differ; locating a node and editing links are separate costs.

**Visual family:** Stepwise slot/node diagram with numbered operations and explicit used length versus capacity.

**Core terms (EN / KO / JA):** Index / 인덱스 / インデックス; Capacity / 용량 / 容量; Node / 노드 / ノード.

## Sibling review matrix

Rows share comparison dimensions and assumptions; published articles use distinct situations. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                                              | Distinguishing feature                                                    | Conditional advantage                                                           | Limitation                                                                      | Suitable context                                                    | Combination                                                                     |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [Array / 배열 / 配列](../articles/array.md)                          | Conventional backing array supports constant-time indexed access [array]. | Index 2 can select C99 without walking prior values.                            | Middle insertion shifts later values; capacity growth may copy storage [array]. | Frequent indexed reads and predominantly append-oriented sequences. | Use as list storage, stack storage or circular-queue backing.                   |
| [Linked list / 연결 리스트 / 連結リスト](../articles/linked-list.md) | Nodes are joined by references rather than contiguous positions [linked]. | Given B04 and its neighbor, insertion changes local links without shifting C99. | Indexed access needs traversal and nodes carry reference fields [linked].       | Local edits where node references are already available.            | Implement a list or deque; combine a map with node references for keyed access. |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[array]: https://opendatastructures.org/ods-java/2_Array_Based_Lists.html
[linked]: https://opendatastructures.org/ods-java/3_Linked_Lists.html
