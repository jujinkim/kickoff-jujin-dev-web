# Bitbucket: static diagram brief

Based on [the planning template](../templates/design-demo-brief.md). Reviewed 2026-09-27; first article revision 1. Scope: local catalog addition and verification.

- Stable ID / leaf: `bitbucket` / `repository-hosting`. EN/KO/JA title: Bitbucket (proper name retained).
- Definition: Git hosting with Jira-linked development work for teams using Bitbucket Cloud.
- Closest alternatives and deciding priority: This entry covers Bitbucket Cloud. Compare service operation, PR workflow, Jira integration, plan constraints and export needs. Jira is not exclusive to Bitbucket, so compare integration depth with the team’s actual tasks. GitHub may fit contributors already there; Azure Repos may fit an existing Azure DevOps project.
- Strong teaching case and distinguishing visual structure: A Jira work item, Git branch and PR share a highlighted ORDER-12 key; shapes differ to show each artifact.
- Amplification: emphasize the documented boundary with enclosure, line, placement and explicit text. The colors, illustrative names, file and test results are authored examples, not product requirements or vendor interface reproductions. No performance or cost promise.

## Scenario and text equivalent

- English Why: An order app lets shop staff correct delivery addresses. Its team already tracks changes in Jira but loses the connection between a request and code review. Preserving that work trail matters more than switching task systems.
- Korean Why: 주문 앱에서 상점 직원이 배송 주소를 고칩니다. 팀은 Jira로 변경 요청을 관리하지만 요청과 코드 검토의 연결을 놓칩니다. 작업 체계 교체보다 그 연결 유지가 중요합니다.
- Japanese Why: 注文アプリで店員が配送先住所を直します。チームはJiraで変更依頼を管理しますが、依頼とコードレビューの関係を見失います。作業管理の置き換えより、そのつながりの維持が重要です。
- Representative action and observable result: Connect Jira and Bitbucket Cloud. Use the address-fix work item’s key in the branch and pull request. Reviewers follow that link from the request to the proposed change, then check the merged result.
- Caption: The address request, code branch and review carry the same Jira key
- Initial state and dataset: The order app’s Jira work item describes an address correction. A branch and PR reference its key so a reviewer can recover the requirement without searching chat. The example key ORDER-12 is a readable link identifier, not a real ticket. Linking work does not prove that the implementation satisfies it.
- Changed state, repeat, empty input and reset: not applicable; all numbered stages are simultaneously visible in a static explanation. Reload preserves the same authored diagram. No action is simulated or sent to a server.
- Text equivalent: the overview explains the action/result and the supplement supplies conditions. Markdown includes both. Bitbucket Cloud hosts Git repositories with pull-request review and Jira integration. Linking needs setup and consistent keys. Other hosts also integrate with Jira; existing workflow, plan limits and migration effort decide the fit.

## Rendering and accessibility

- Independent component: `src/components/demos/Bitbucket.astro`; no shared screen template or page-wide theme.
- Controls: none. Mode: `static`; no scripts, reset controls or mount wait. Capture: `[data-demo="bitbucket"]`.
- Mobile: container queries collapse parallel regions into DOM order. Test 320, 390, 768 and 1440px and 200% text at 768px; no fixed text heights or horizontal diagram scrolling.
- Keyboard: diagram is readable DOM text with headings/lists; no invented tab stops. Shared supplement disclosures retain native keyboard behavior and visible focus. No live region needed for static content.
- Light/dark: authored opaque surfaces remain readable in either surrounding theme. Meaning uses labels and borders, not color alone. No animation or shadows are required; reduced motion leaves content intact.
- JavaScript disabled: every stage and limit stays visible; native evidence disclosures still open.
- Fonts/assets: system UI and monospace stacks with OS CJK fallback; no added downloaded font or raster asset. P4 wireframe is original inline SVG, decorative beside the textual file description. No external product logo or screenshot.
- Localization: English reviewed before faithful KO/JA; product/command identifiers stay literal. All narrative labels use the existing `local` helper.
- Supplement: Selection & comparison, Applications, Implementation & cautions, dated Evidence. All sourceRevision values equal article revision 1.
- Comparison: features — Git review linked with Jira work; advantages — Trace a request to proposed code; limitations — Connection and work-item keys need setup; suitable — Teams already using Jira and Bitbucket Cloud; combinations — Git plus Jira integration.

## Evidence and verification

Official product documentation, inspected 2026-09-27; scenario and suitability are editorial judgments:

- [Atlassian: Integrate Bitbucket and Jira](https://support.atlassian.com/bitbucket-cloud/docs/use-bitbucket-cloud-and-jira-together/): Jira integration connects work items with Bitbucket Cloud development work.

First capture: preview build only when new thumbnails are absent. Normal gates: check → build → selected thumbnails → rebuild → unit/output → browser. Actual results and screenshot locations: [version-control review](../version-control-review.md). No commit, push or deployment.
