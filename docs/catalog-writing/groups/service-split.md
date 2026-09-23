# Service decomposition / 서비스 분할 / サービス分割

Group ID: `service-split` · Checked: 2026-09-22. Published concise articles and independent static diagrams implement this research brief. See [source refresh](../service-split-sources.md), [visualization briefs](../../design-briefs/) and [release review](../../service-split-review.md).

## Shared case and comparison contract

A reading application has catalog, saved-library and billing capabilities. A change adds a library tag without changing billing behavior. Use one team initially, then consider independent ownership.

**Comparison axes, fixed order:** deployment unit; module boundaries; communication; data ownership; failure boundary; operational effort.

**Boundary:** Monolith describes deployment coupling, not necessarily tangled code. A modular monolith is a monolith subtype. Service boundaries can contain layers or ports.

**Visual family:** Boxes for capabilities inside deployment enclosures; annotate in-process versus network calls and who owns each store.

**Core terms (EN / KO / JA):** Deployment unit / 배포 단위 / デプロイ単位; Module / 모듈 / モジュール; Data ownership / 데이터 소유권 / データ所有権.

## Sibling review matrix

Rows share comparison dimensions and assumptions; published articles use distinct situations. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                                                                    | Distinguishing feature                                        | Conditional advantage                                                                     | Limitation                                                                           | Suitable context                                                                | Combination                                                                                               |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [Monolith / 모놀리스 / モノリス](../articles/monolith.md)                                  | One server-side deployment unit [micro].                      | The proposed team can ship the tag change through one release pipeline.                   | Unrelated capabilities share a deployment and need coordinated compatibility checks. | A small team with closely related capabilities and modest operational capacity. | Use layers, clean boundaries or explicit modules inside the deployment.                                   |
| [Modular monolith / 모듈러 모놀리스 / モジュラーモノリス](../articles/modular-monolith.md) | One deployment with deliberate internal modularity [modular]. | The tag change can stay inside library-owned logic while calls remain local.              | One artifact still couples release timing; boundary discipline must be checked.      | A team wanting clear ownership before accepting network complexity.             | Use clean or hexagonal structure inside modules; extract a service only for a demonstrated boundary need. |
| [Microservices / 마이크로서비스 / マイクロサービス](../articles/microservices.md)          | Capability services can release independently [micro].        | Library can release a compatible tag feature without rebuilding billing in this scenario. | Remote failures and cross-service data changes require explicit handling.            | Teams with stable capability boundaries and a reason for independent releases.  | Use a modular monolith for remaining capabilities and ports inside individual services.                   |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[micro]: https://martinfowler.com/articles/microservices.html
[modular]: https://martinfowler.com/bliki/MonolithFirst.html
