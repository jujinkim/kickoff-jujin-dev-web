# GitLab: static diagram brief

Based on [the planning template](../templates/design-demo-brief.md). Reviewed 2026-09-27; first article revision 1. Scope: local catalog addition and verification.

- Stable ID / leaf: `gitlab` / `repository-hosting`. EN/KO/JA title: GitLab (proper name retained).
- Definition: Git collaboration connecting merge requests and configured CI in one workflow.
- Closest alternatives and deciding priority: Choose this workflow when the team values keeping repository review and configured CI together. GitHub and other hosts also connect checks to reviews. GitLab.com is operated by GitLab; with Self-Managed, your team takes responsibility for the instance. Gitea may fit a smaller self-operated service when its features meet requirements.
- Strong teaching case and distinguishing visual structure: An MR header feeds configured CI; failed run, corrective branch update and passing run form a review evidence sequence.
- Amplification: emphasize the documented boundary with enclosure, line, placement and explicit text. The colors, illustrative names, file and test results are authored examples, not product requirements or vendor interface reproductions. No performance or cost promise.

## Scenario and text equivalent

- English Why: An internal leave app lets staff request days off. Its developers must review a balance-rule change alongside automated checks. Keeping discussion and CI in an existing GitLab workflow matters more than adopting another host.
- Korean Why: 사내 휴가 앱에서 직원이 휴가를 신청합니다. 개발자는 잔여 일수 규칙 변경을 자동 검사와 함께 검토해야 합니다. 다른 호스팅 도입보다 기존 GitLab에서 논의와 CI를 함께 유지하는 일이 중요합니다.
- Japanese Why: 社内の休暇アプリで社員が休みを申請します。開発者は残日数ルールの変更を自動チェックと一緒に確認します。別のホストを採用するより、既存のGitLabで議論とCIを保つことが重要です。
- Representative action and observable result: Open a merge request. Configured CI rules run the balance test on a runner. A failure prompts a fix and another run; a reviewer then considers merging.
- Caption: A leave-balance change reaches review with a failed test, fix and rerun
- Initial state and dataset: The leave app’s example test rejects a request exceeding the employee’s balance. The MR shows the failed run and a later passing run after a fix. Passing that test supplies evidence for review, not proof of every leave rule or automatic approval to deploy.
- Changed state, repeat, empty input and reset: not applicable; all numbered stages are simultaneously visible in a static explanation. Reload preserves the same authored diagram. No action is simulated or sent to a server.
- Text equivalent: the overview explains the action/result and the supplement supplies conditions. Markdown includes both. GitLab combines Git hosting, merge requests and CI. Checks need configuration and runner capacity. A merge-request pipeline tests the source branch, not automatically the merged result. Hosted use and self-operation carry different responsibilities.

## Rendering and accessibility

- Independent component: `src/components/demos/GitLab.astro`; no shared screen template or page-wide theme.
- Controls: none. Mode: `static`; no scripts, reset controls or mount wait. Capture: `[data-demo="gitlab"]`.
- Mobile: container queries collapse parallel regions into DOM order. Test 320, 390, 768 and 1440px and 200% text at 768px; no fixed text heights or horizontal diagram scrolling.
- Keyboard: diagram is readable DOM text with headings/lists; no invented tab stops. Shared supplement disclosures retain native keyboard behavior and visible focus. No live region needed for static content.
- Light/dark: authored opaque surfaces remain readable in either surrounding theme. Meaning uses labels and borders, not color alone. No animation or shadows are required; reduced motion leaves content intact.
- JavaScript disabled: every stage and limit stays visible; native evidence disclosures still open.
- Fonts/assets: system UI and monospace stacks with OS CJK fallback; no added downloaded font or raster asset. P4 wireframe is original inline SVG, decorative beside the textual file description. No external product logo or screenshot.
- Localization: English reviewed before faithful KO/JA; product/command identifiers stay literal. All narrative labels use the existing `local` helper.
- Supplement: Selection & comparison, Applications, Implementation & cautions, dated Evidence. All sourceRevision values equal article revision 1.
- Comparison: features — Merge requests linked to configured CI; advantages — Discuss changes beside test results; limitations — Runner capacity and rules need setup; suitable — Teams keeping GitLab review and CI; combinations — Git plus hosted or self-managed GitLab.

## Evidence and verification

Official product documentation, inspected 2026-09-27; scenario and suitability are editorial judgments:

- [GitLab: Merge request pipelines](https://docs.gitlab.com/ci/pipelines/merge_request_pipelines/): MR pipelines require matching CI rules and test source-branch content.
- [GitLab plans](https://docs.gitlab.com/subscriptions/choosing_subscription/): GitLab.com and Self-Managed have different hosting responsibilities and plan choices.

First capture: preview build only when new thumbnails are absent. Normal gates: check → build → selected thumbnails → rebuild → unit/output → browser. Actual results and screenshot locations: [version-control review](../version-control-review.md). No commit, push or deployment.
