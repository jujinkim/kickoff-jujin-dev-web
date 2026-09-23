# Column composition / 열 구성 / 列構成

Group ID: `columns` · Checked: 2026-09-21 · Writing designs, not article bodies.

## Shared case and comparison contract

A page contains navigation N, article content M and related reading R, in that logical order. Compare 1200px and 320px illustrative viewports using identical text.

**Comparison axes, fixed order:** page-region count; primary/secondary hierarchy; reading order; available width; narrow-screen collapse.

**Boundary:** Columns here mean independent page regions, not CSS text fragmentation. Two and multiple columns are editorial comparison labels; multiple means three or more in this group.

**Visual family:** Paired wireframes with N/M/R labels and numbered source order; show wide and narrow layouts with the same content.

**Core terms (EN / KO / JA):** Column / 열 / カラム; Main content / 본문 / メインコンテンツ; Source order / 소스 순서 / ソース順.

## Sibling review matrix

Rows share comparison dimensions and assumptions; published articles use distinct situations. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                                                   | Distinguishing feature                                                            | Conditional advantage                                                      | Limitation                                                             | Suitable context                                                            | Combination                                                                                           |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [Single column / 단일 열 / 単一カラム](../articles/single-column.md)      | One primary region per horizontal row; reflow is a separate requirement [reflow]. | The proposed N→M→R sequence needs no side-to-side reading jumps.           | Secondary material moves farther down a long page in this example.     | Focused long-form reading and narrow screens.                               | Place a uniform card grid inside the main region at wider widths; choose any visual style.            |
| [Two columns / 2열 / 2カラム](../articles/two-columns.md)                 | Grid can arrange distinct page regions in columns [grid].                         | Navigation can remain beside the article in the wide fixture.              | Each region receives less width; collapse order must preserve meaning. | Documentation with useful navigation alongside reading.                     | Use a list or uniform grid inside main; place related reading after article content.                  |
| [Multiple columns / 다열 / マルチカラム](../articles/multiple-columns.md) | Multiple page tracks can arrange independent regions [grid].                      | The wide fixture exposes navigation, article and related reading together. | Reduced per-region space can damage text wrapping and hierarchy.       | A sufficiently wide workspace where secondary panels support the main task. | Use restrained style and list arrangement inside panels; collapse to single column on narrow screens. |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[grid]: https://www.w3.org/TR/css-grid-1/
[reflow]: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
