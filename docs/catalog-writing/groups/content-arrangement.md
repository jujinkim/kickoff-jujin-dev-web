# Content arrangement / 콘텐츠 나열 / コンテンツ配置

Group ID: `content-arrangement` · Checked: 2026-09-21 · Writing designs, not article bodies.

## Shared case and comparison contract

Six cards A–F have identical title/summary data across all examples but different illustration heights: 120,200,140,180,120,160 illustrative pixels. Input order is A,B,C,D,E,F.

**Comparison axes, fixed order:** item scan path; alignment; variable height; ordering semantics; density; responsive behavior.

**Boundary:** Item arrangement differs from page-column composition and from list as a data structure. A uniform grid need not crop content; masonry implementation and native CSS support are separate questions.

**Visual family:** Same six cards in alternative layouts; numbered reading order and fixed content with responsive one-track fallback.

**Core terms (EN / KO / JA):** Card / 카드 / カード; Row / 행 / 行; Alignment / 정렬 / 整列.

## Sibling review matrix

All rows use the same case. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                                                  | Distinguishing feature                                                                                          | Conditional advantage                                                       | Limitation                                                                             | Suitable context                                                                 | Combination                                                                          |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [List layout / 리스트 / リスト](../articles/list-layout.md)              | Repeated items follow one vertical sequence; authored layout using the grid/reflow constraints [grid] [reflow]. | The fixture keeps titles and metadata at predictable row positions.         | Long sequences require scrolling and may use wide screens sparsely.                    | Reading and comparing textual card details.                                      | Use two-column page composition with a list in main; combine with any style.         |
| [Uniform grid / 균등 그리드 / 均等グリッド](../articles/uniform-grid.md) | Grid tracks provide two-dimensional alignment [grid].                                                           | The fixture supports side-by-side comparison of similarly structured cards. | Variable content can leave unused space inside a row.                                  | A catalog with comparable item fields.                                           | Use multiple page columns independently; choose flat or other card styling.          |
| [Masonry / 메이슨리 / メイソンリー](../articles/masonry.md)              | Items can be placed according to available vertical space [masonry].                                            | The fixture uses gaps left by differently sized images.                     | Visual neighbors may diverge from logical order; height changes need careful handling. | A visual collection where variable image height matters more than row alignment. | Use semantic A–F source order and a one-column mobile fallback; keep labels visible. |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[grid]: https://www.w3.org/TR/css-grid-1/
[masonry]: https://masonry.desandro.com/
[reflow]: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
