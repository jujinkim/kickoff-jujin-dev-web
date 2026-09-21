# Character width / 문자 폭 / 文字幅

Group ID: `character-width` · Checked: 2026-09-21 · Writing designs, not article bodies.

## Shared case and comparison contract

Compare iiiWWW and two rows of values 111 / 888, followed by 기록 / 記録. Use boxes to show advance width, not merely the black outline of each glyph.

**Comparison axes, fixed order:** advance-width rule; alignment behavior; prose spacing; tabular digits; script/fallback caveats.

**Boundary:** Width is independent of serif/sans/script shape. Terminal display cells, glyph advance and perceived ink width differ. CJK fallback and mixed-script text need explicit inspection.

**Visual family:** Same strings with labeled advance boxes and column guides; variable-width and equal-width schematic versions, not measured font samples.

**Core terms (EN / KO / JA):** Advance width / 전진 폭 / 送り幅; Tabular figures / 표 형식 숫자 / 等幅数字; Proportional figures / 비례폭 숫자 / プロポーショナル数字.

## Sibling review matrix

All rows use the same case. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                                                 | Distinguishing feature                                                                                                      | Conditional advantage                                                                | Limitation                                                                 | Suitable context                                                                 | Combination                                                                       |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [Proportional / 비례폭 / プロポーショナル](../articles/proportional.md) | Contrast variable advances with the fixed-width criterion in CSS [fonts]; the variable-width specimen is an authored model. | The proposed prose specimen can allocate different space to narrow and wide letters. | Plain spaces do not guarantee vertical numeric alignment.                  | Prose and labels where equal-width cells are unnecessary.                        | Use table layout or tabular figures for data; serif or sans shape is independent. |
| [Monospace / 고정폭 / 等幅](../articles/monospace.md)                   | Fixed advance is the monospace criterion [fonts].                                                                           | The authored Latin specimen aligns positions predictably.                            | Fallback and mixed scripts may not preserve the assumed single-width grid. | Code-like text needing explicit position alignment within a supported glyph set. | Combine with serif or sans glyph shapes; use proportional prose around code.      |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[fonts]: https://www.w3.org/TR/css-fonts-3/
