# Release replacement / 릴리스 교체 방식 / リリース切り替え方式

Group ID: `release-replacement` · Checked: 2026-09-22 · Original comparison contract; [implemented release review](../../platform-demos-review.md).

## Shared case and comparison contract

Replace v1 of a stateless reading API with v2. Illustrative pool has four v1 replicas. Both versions can read the same backward-compatible data. Readiness and error metrics are explicitly defined before release.

**Comparison axes, fixed order:** replacement unit; simultaneous versions; traffic routing; evaluation gate; rollback action; data compatibility.

**Boundary:** These strategies can combine. Canary is evaluation through limited exposure; rolling is replacement sequencing; blue-green is environment switching. Rollback of binaries does not roll back data.

**Visual family:** Step timeline with version labels, traffic fractions and a separate shared-data lane; arrows identify checks and stop paths.

**Core terms (EN / KO / JA):** Readiness / 준비 상태 / 準備状態; Rollback / 롤백 / ロールバック; Exposure / 노출 범위 / 公開範囲.

## Sibling review matrix

All rows use the same case. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                                              | Distinguishing feature                                             | Conditional advantage                                                  | Limitation                                                                                 | Suitable context                                                       | Combination                                                                             |
| -------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [Rolling / 롤링 / ローリング](../articles/rolling.md)                | Replicas update progressively under rollout constraints [rolling]. | The example can reuse a pool while keeping ready old replicas serving. | Mixed versions require compatible contracts; readiness is not complete correctness.        | A replicated service supporting v1/v2 coexistence.                     | Run a canary gate before broader rolling replacement; use expand/contract data changes. |
| [Blue-green / 블루·그린 / ブルーグリーン](../articles/blue-green.md) | Prepared environments exchange the live traffic role [blue-green]. | The example keeps an old environment available for a routing reversal. | Duplicated capacity and data compatibility need planning; writes made after switch remain. | A service with a controlled routing switch and compatible shared data. | Canary traffic can evaluate green before full switch; manage data changes separately.   |
| [Canary / 카나리 / カナリア](../articles/canary.md)                  | Limited exposure is evaluated against a control [canary].          | A bad v2 can be stopped before the authored rollout reaches everyone.  | Small or biased samples can miss defects; signals and sampling require domain judgment.    | A service with measurable outcomes and controlled traffic assignment.  | Use canary evaluation ahead of rolling or blue-green completion.                        |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[blue-green]: https://martinfowler.com/bliki/BlueGreenDeployment.html
[canary]: https://sre.google/workbook/canarying-releases/
[rolling]: https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
