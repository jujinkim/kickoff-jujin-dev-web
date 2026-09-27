# Codeberg: static diagram brief

Based on [the planning template](../templates/design-demo-brief.md). Reviewed 2026-09-27; first article revision 1. Scope: local catalog addition and verification.

- Stable ID / leaf: `codeberg` / `repository-hosting`. EN/KO/JA title: Codeberg (proper name retained).
- Definition: Community-operated Git hosting for projects aligned with a nonprofit free-software mission.
- Closest alternatives and deciding priority: The deciding priority is a nonprofit free-software community operating the service. GitHub may fit an existing contributor network; Gitea fits owning your instance. Codeberg uses Forgejo, a separate software project. Compare review workflow, integrations, service policies and migration needs; nonprofit operation does not guarantee every requested feature.
- Strong teaching case and distinguishing visual structure: A nonprofit service enclosure surrounds a project with contributor and maintainer roles; service operation stays separate from merge decisions.
- Amplification: emphasize the documented boundary with enclosure, line, placement and explicit text. The colors, illustrative names, file and test results are authored examples, not product requirements or vendor interface reproductions. No performance or cost promise.

## Scenario and text equivalent

- English Why: A public cycling tool helps riders find quieter routes. Volunteers improve its openly licensed code. They want a nonprofit free-software community to operate collaboration instead of maintaining their own server.
- Korean Why: 공개 자전거 경로 도구가 조용한 길을 찾도록 돕습니다. 자원봉사자가 자유 라이선스 코드를 개선합니다. 자체 서버 관리보다 비영리 자유 소프트웨어 공동체에 협업 운영을 맡기고 싶습니다.
- Japanese Why: 公開の自転車ルートツールが静かな道探しを助けます。ボランティアは自由なライセンスのコードを改善します。自前サーバーを保守するより、非営利の自由ソフトウェア共同体に協業の運営を任せたいと考えています。
- Representative action and observable result: Publish an eligible project on Codeberg. A contributor forks it, proposes a route-display fix and opens a pull request. Project maintainers review and merge; Codeberg’s operators maintain the hosting service.
- Caption: Route-tool contributors and maintainers share a community-operated service
- Initial state and dataset: Cycling volunteers collaborate on the route tool’s code through forks and PRs. Project maintainers decide which changes to merge; service operators keep the collaboration platform running. The example concerns code, not uploading private ride traces. Its public license and purpose must fit the service’s rules.
- Changed state, repeat, empty input and reset: not applicable; all numbered stages are simultaneously visible in a static explanation. Reload preserves the same authored diagram. No action is simulated or sent to a server.
- Text equivalent: the overview explains the action/result and the supplement supplies conditions. Markdown includes both. Codeberg is a nonprofit community service powered by Forgejo and built around Git. Gitea is software you can operate yourself. Check project eligibility and resource policies; community hosting is not a promise of unlimited resources.

## Rendering and accessibility

- Independent component: `src/components/demos/Codeberg.astro`; no shared screen template or page-wide theme.
- Controls: none. Mode: `static`; no scripts, reset controls or mount wait. Capture: `[data-demo="codeberg"]`.
- Mobile: container queries collapse parallel regions into DOM order. Test 320, 390, 768 and 1440px and 200% text at 768px; no fixed text heights or horizontal diagram scrolling.
- Keyboard: diagram is readable DOM text with headings/lists; no invented tab stops. Shared supplement disclosures retain native keyboard behavior and visible focus. No live region needed for static content.
- Light/dark: authored opaque surfaces remain readable in either surrounding theme. Meaning uses labels and borders, not color alone. No animation or shadows are required; reduced motion leaves content intact.
- JavaScript disabled: every stage and limit stays visible; native evidence disclosures still open.
- Fonts/assets: system UI and monospace stacks with OS CJK fallback; no added downloaded font or raster asset. P4 wireframe is original inline SVG, decorative beside the textual file description. No external product logo or screenshot.
- Localization: English reviewed before faithful KO/JA; product/command identifiers stay literal. All narrative labels use the existing `local` helper.
- Supplement: Selection & comparison, Applications, Implementation & cautions, dated Evidence. All sourceRevision values equal article revision 1.
- Comparison: features — Community-operated Git forge; advantages — Align with nonprofit free-software collaboration; limitations — Eligibility and resource policies apply; suitable — Public free-software projects; combinations — Local Git plus Forgejo-based hosting.

## Evidence and verification

Official product documentation, inspected 2026-09-27; scenario and suitability are editorial judgments:

- [Codeberg: What is Codeberg?](https://docs.codeberg.org/getting-started/what-is-codeberg/): Nonprofit community-operated service, free-software mission and Forgejo distinction.
- [Codeberg FAQ](https://docs.codeberg.org/getting-started/faq/): Project suitability and service-use constraints.
- [Codeberg: Pull requests and Git flow](https://docs.codeberg.org/collaborating/pull-requests-and-git-flow/): Branch, fork and pull-request collaboration.

First capture: preview build only when new thumbnails are absent. Normal gates: check → build → selected thumbnails → rebuild → unit/output → browser. Actual results and screenshot locations: [version-control review](../version-control-review.md). No commit, push or deployment.
