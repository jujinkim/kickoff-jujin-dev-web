# Architecture boundaries & dependencies / 아키텍처의 경계·의존 구조 / 境界と依存構造

Group ID: `boundaries` · Checked: 2026-09-22. Published concise articles and static diagrams now implement this research brief. See [source refresh](../boundaries-sources.md), [visualization briefs](../../design-briefs/) and [release review](../../boundaries-review.md).

## Shared case and comparison contract

SaveArticle receives reader ID and article ID, rejects invalid input, records a save and returns Saved. Compare HTTP UI and command-line entry, plus memory and database storage. Keep deployment as one process.

**Comparison axes, fixed order:** responsibility boundary; source dependency direction; runtime calls; replaceable edge; test seam; added indirection.

**Boundary:** Logical structure is not deployment topology. Layered, ports-and-adapters and clean designs overlap; a monolith can use any of them.

**Visual family:** Dependency diagram with solid arrows for imports, dashed arrows for runtime calls and a dotted deployment enclosure.

**Core terms (EN / KO / JA):** Dependency / 의존성 / 依存関係; Boundary / 경계 / 境界; Adapter / 어댑터 / アダプター.

## Sibling review matrix

All rows use the same case. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                                                                                          | Distinguishing feature                                               | Conditional advantage                                                         | Limitation                                                              | Suitable context                                                   | Combination                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| [Layered architecture / 계층형 아키텍처 / レイヤードアーキテクチャ](../articles/layered-architecture.md)         | Responsibility layers constrain dependencies [layers].               | The team can locate validation and persistence responsibilities consistently. | Pass-through layers add ceremony; bypasses need a documented policy.    | A small application with stable responsibilities.                  | Use dependency inversion at persistence boundaries; deploy the layers inside a modular monolith. |
| [Hexagonal architecture / 헥사고날 아키텍처 / ヘキサゴナルアーキテクチャ](../articles/hexagonal-architecture.md) | Ports isolate application interactions from external adapters [hex]. | A memory adapter can exercise the save behavior without a database.           | Ports and mapping code cost effort if every edge is trivial and stable. | Logic that must support multiple entry points or storage adapters. | Place layered internals inside the application; use clean dependency rules around ports.         |
| [Clean architecture / 클린 아키텍처 / クリーンアーキテクチャ](../articles/clean-architecture.md)                 | Source dependencies point toward policy [clean].                     | Save rules can be reviewed without framework-specific records.                | Boundary models and mapping introduce maintenance cost.                 | Business policy expected to outlive UI and persistence choices.    | Use hexagonal ports at outer edges and deploy as a monolith or services.                         |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[clean]: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
[hex]: https://alistair.cockburn.us/hexagonal-architecture
[layers]: https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier
