# Requirements expression / 요구사항 표현 / 要件の表現

Group ID: `requirements` · Checked: 2026-09-21 · Writing designs, not article bodies.

## Shared case and comparison contract

A commuter wants to save article A17 before losing connectivity and find it later. Saving a link does not promise offline content; duplicate saves and failed persistence must be discussed.

**Comparison axes, fixed order:** focus of description; unit of work; preconditions; failure coverage; acceptance evidence; complementary artifacts.

**Boundary:** Stories, use cases and job stories can describe the same need at different levels. None alone supplies all quality, data and security requirements.

**Visual family:** Three annotated textual panels with role/context/goal or main/alternate flows highlighted; no decorative UML required.

**Core terms (EN / KO / JA):** Actor / 행위자 / アクター; Acceptance criterion / 인수 기준 / 受け入れ基準; Preconditions / 사전 조건 / 事前条件.

## Sibling review matrix

All rows use the same case. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                                                      | Distinguishing feature                                            | Conditional advantage                                                | Limitation                                                                           | Suitable context                                                                 | Combination                                                                      |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [User story / 사용자 스토리 / ユーザーストーリー](../articles/user-story.md) | User-valued increment with supporting conversation [stories].     | The team can negotiate a small deliverable around a visible outcome. | The short statement leaves failure and quality conditions unstated unless discussed. | Planning one reviewable saved-link increment.                                    | Use a use case to expose failure branches and a job story to explain motivation. |
| [Use case / 유스케이스 / ユースケース](../articles/use-case.md)              | Goal-based interaction paths with failure extensions [use-cases]. | The example exposes persistence failure before implementation.       | Long narratives need slicing to become small delivery increments.                    | A save flow involving identity, storage and retries.                             | Slice the successful path into user stories; retain job context as rationale.    |
| [Job story / 잡 스토리 / ジョブストーリー](../articles/job-story.md)         | Situation and motivation precede the proposed solution [jobs].    | The team can consider reminders or saving before selecting a UI.     | The statement alone does not settle permissions or failure handling.                 | Discovery when the same person needs different behavior in different situations. | Pair with user-story delivery slices and a use-case failure narrative.           |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[jobs]: https://www.intercom.com/blog/using-job-stories-design-features-ui-ux/
[stories]: https://agilealliance.org/glossary/user-stories/
[use-cases]: https://alistaircockburn.com/Unifying%20us%20uc%20sm.pdf
