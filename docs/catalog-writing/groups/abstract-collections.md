# Abstract collections / 추상 컬렉션 / 抽象コレクション

Group ID: `abstract-collections` · Checked: 2026-09-21 · Writing designs, not article bodies.

## Shared case and comparison contract

Event values A17, B04, A17 arrive in that order. Also associate A17 with title Alpha and then Updated Alpha. Equality means exact article-ID equality.

**Comparison axes, fixed order:** order contract; duplicates; lookup identity; update behavior; implementation independence.

**Boundary:** List, set and map are abstract contracts. Array, linked storage and hashing are separate implementation choices; map here is not a geographic map or map transformation.

**Visual family:** Step controls show input tokens and logical contents after each operation; deliberately avoid physical memory addresses.

**Core terms (EN / KO / JA):** Equality / 동등성 / 等価性; Key / 키 / キー; Value / 값 / 値.

## Sibling review matrix

Rows share comparison dimensions and assumptions; published articles use distinct situations. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                       | Distinguishing feature                                         | Conditional advantage                                     | Limitation                                                                                    | Suitable context                                                | Combination                                                                           |
| --------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [List / 리스트 / リスト](../articles/list.md) | Ordered sequence that permits duplicates [list].               | Arrival history can retain both occurrences of A17.       | Finding an item by identity may need a separate lookup strategy.                              | History or playlist data where repeated entries are meaningful. | Implement with an array or linked list; add a map for ID lookup.                      |
| [Set / 집합 / 集合](../articles/set.md)       | Duplicate elements are excluded under the equality rule [set]. | Repeated saves can be represented as one membership fact. | The abstraction alone does not preserve frequency or a portable ordering guarantee.           | Unique selected article IDs.                                    | Combine a set of selected IDs with a list of events or map of article details.        |
| [Map / 맵 / マップ](../articles/map.md)       | At most one value per key [map].                               | An article ID can directly name its current title.        | The key design decides collisions and replacement semantics; history needs another structure. | Article details indexed by stable ID.                           | Store lists as values for one-to-many data; pair with an ordered ID list for display. |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[list]: https://docs.oracle.com/javase/tutorial/collections/interfaces/list.html
[map]: https://docs.oracle.com/javase/tutorial/collections/interfaces/map.html
[set]: https://docs.oracle.com/javase/tutorial/collections/interfaces/set.html
