# Azure Repos: static diagram brief

Based on [the planning template](../templates/design-demo-brief.md). Reviewed 2026-09-27; first article revision 1. Scope: local catalog addition and verification.

- Stable ID / leaf: `azure-repos` / `repository-hosting`. EN/KO/JA title: Azure Repos (proper name retained).
- Definition: Repository collaboration with branch policies inside an existing Azure DevOps workflow.
- Closest alternatives and deciding priority: Choose Azure Repos when existing Azure DevOps projects, permissions and review practices reduce coordination work. Bitbucket may fit an established Jira workflow; other hosts also offer protected-branch checks. Compare operator, integrations, plan constraints and migration needs rather than assuming repository hosting determines runtime hosting.
- Strong teaching case and distinguishing visual structure: A thick policy gate encloses reviewer approval and build validation; failed booking test precedes completion into main.
- Amplification: emphasize the documented boundary with enclosure, line, placement and explicit text. The colors, illustrative names, file and test results are authored examples, not product requirements or vendor interface reproductions. No performance or cost promise.

## Scenario and text equivalent

- English Why: A facilities app lets employees reserve meeting rooms. Its team already uses Azure DevOps and wants room-conflict fixes reviewed before entering main. Keeping that project’s permissions and checks together favors its repository service.
- Korean Why: 시설 예약 앱에서 직원이 회의실을 예약합니다. 팀은 이미 Azure DevOps를 쓰며 예약 충돌 수정을 main 반영 전에 검토하고 싶습니다. 프로젝트의 권한과 검사를 함께 유지하는 점이 선택 이유입니다.
- Japanese Why: 施設予約アプリで社員が会議室を予約します。チームはAzure DevOpsを使い、予約競合の修正をmainに入れる前に確認したいと考えています。既存プロジェクトの権限と検査をまとめられる点で選びます。
- Representative action and observable result: Push a Git branch and open a pull request. In this example, main requires reviewer approval and build validation. A failed booking test holds up completion; after a fix, required checks and review permit merging.
- Caption: A room-booking fix passes the configured gate before reaching main
- Initial state and dataset: The facilities team configures a minimum reviewer count and required build validation for main. The example PR waits while a room-conflict test fails. After a fix, the reviewer checks the new result before completing the PR. This walkthrough uses Git, not the separate TFVC model.
- Changed state, repeat, empty input and reset: not applicable; all numbered stages are simultaneously visible in a static explanation. Reload preserves the same authored diagram. No action is simulated or sent to a server.
- Text equivalent: the overview explains the action/result and the supplement supplies conditions. Markdown includes both. Azure Repos provides repositories in Azure DevOps. These are configured Git branch policies, not automatic guarantees. Bypass permissions matter. Azure Repos also supports TFVC; hosting code here does not require running the app on Azure.

## Rendering and accessibility

- Independent component: `src/components/demos/AzureRepos.astro`; no shared screen template or page-wide theme.
- Controls: none. Mode: `static`; no scripts, reset controls or mount wait. Capture: `[data-demo="azure-repos"]`.
- Mobile: container queries collapse parallel regions into DOM order. Test 320, 390, 768 and 1440px and 200% text at 768px; no fixed text heights or horizontal diagram scrolling.
- Keyboard: diagram is readable DOM text with headings/lists; no invented tab stops. Shared supplement disclosures retain native keyboard behavior and visible focus. No live region needed for static content.
- Light/dark: authored opaque surfaces remain readable in either surrounding theme. Meaning uses labels and borders, not color alone. No animation or shadows are required; reduced motion leaves content intact.
- JavaScript disabled: every stage and limit stays visible; native evidence disclosures still open.
- Fonts/assets: system UI and monospace stacks with OS CJK fallback; no added downloaded font or raster asset. P4 wireframe is original inline SVG, decorative beside the textual file description. No external product logo or screenshot.
- Localization: English reviewed before faithful KO/JA; product/command identifiers stay literal. All narrative labels use the existing `local` helper.
- Supplement: Selection & comparison, Applications, Implementation & cautions, dated Evidence. All sourceRevision values equal article revision 1.
- Comparison: features — Git PRs and configured branch policies; advantages — Keep Azure DevOps collaboration together; limitations — Policies and bypass permissions need review; suitable — Existing Azure DevOps teams; combinations — Git plus review and build validation.

## Evidence and verification

Official product documentation, inspected 2026-09-27; scenario and suitability are editorial judgments:

- [Microsoft: What is Azure Repos?](https://learn.microsoft.com/en-us/azure/devops/repos/get-started/what-is-repos?view=azure-devops): Azure Repos supports Git and TFVC; Git repositories support PRs.
- [Microsoft: Branch policies](https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops): Configured branch policies can require reviewers and build validation; bypass permissions matter.

First capture: preview build only when new thumbnails are absent. Normal gates: check → build → selected thumbnails → rebuild → unit/output → browser. Actual results and screenshot locations: [version-control review](../version-control-review.md). No commit, push or deployment.
