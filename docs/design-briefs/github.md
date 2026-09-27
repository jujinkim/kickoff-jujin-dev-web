# GitHub: static diagram brief

Based on [the planning template](../templates/design-demo-brief.md). Reviewed 2026-09-27; first article revision 1. Scope: local catalog addition and verification.

- Stable ID / leaf: `github` / `repository-hosting`. EN/KO/JA title: GitHub (proper name retained).
- Definition: Git hosting and pull-request collaboration where contributors already work on GitHub.
- Closest alternatives and deciding priority: Compare the operator, review flow, integrations, costs and migration path. This example chooses GitHub because contributors already collaborate there, not because pull requests are unique to it. Codeberg emphasizes a nonprofit free-software community; Gitea supports operating your own service. GitLab, Bitbucket and Azure Repos may fit existing work systems.
- Strong teaching case and distinguishing visual structure: Contributor fork beside a maintainer-owned review area; proposed change crosses the boundary, authorized merge reaches main.
- Amplification: emphasize the documented boundary with enclosure, line, placement and explicit text. The colors, illustrative names, file and test results are authored examples, not product requirements or vendor interface reproductions. No performance or cost promise.

## Scenario and text equivalent

- English Why: A public weather widget shows rain forecasts on community websites. Volunteers propose display fixes. Its contributors already use GitHub; accepting their work without giving everyone write access matters more than operating a server.
- Korean Why: 공개 날씨 위젯이 지역 사이트에 비 예보를 보여 줍니다. 자원봉사자가 표시 수정을 제안합니다. 기여자는 이미 GitHub를 쓰며 서버 운영보다 모두에게 쓰기 권한을 주지 않고 기여를 받는 일이 중요합니다.
- Japanese Why: 公開の天気ウィジェットが地域サイトに雨予報を表示します。ボランティアが表示修正を提案します。貢献者はすでにGitHubを利用し、サーバー運用より、全員に書き込み権限を与えず提案を受け取ることを重視します。
- Representative action and observable result: A volunteer pushes a branch to their fork and opens a pull request. A maintainer reviews the difference, requests a correction, then merges. The contribution does not enter the main branch merely by being proposed.
- Caption: A volunteer proposes; a maintainer reviews and merges the weather fix
- Initial state and dataset: A fork lets a weather-widget volunteer publish a proposed branch without direct write permission to the upstream repository. A pull request collects discussion and revisions. Someone with suitable permission decides whether to merge. Review alone does not deploy the widget or prove the change is correct.
- Changed state, repeat, empty input and reset: not applicable; all numbered stages are simultaneously visible in a static explanation. Reload preserves the same authored diagram. No action is simulated or sent to a server.
- Text equivalent: the overview explains the action/result and the supplement supplies conditions. Markdown includes both. GitHub hosts Git repositories and collaboration. Git records history; GitHub adds review and access tools. Other hosts also offer pull requests. Codeberg may fit nonprofit community priorities; Gitea may fit self-operation.

## Rendering and accessibility

- Independent component: `src/components/demos/GitHub.astro`; no shared screen template or page-wide theme.
- Controls: none. Mode: `static`; no scripts, reset controls or mount wait. Capture: `[data-demo="github"]`.
- Mobile: container queries collapse parallel regions into DOM order. Test 320, 390, 768 and 1440px and 200% text at 768px; no fixed text heights or horizontal diagram scrolling.
- Keyboard: diagram is readable DOM text with headings/lists; no invented tab stops. Shared supplement disclosures retain native keyboard behavior and visible focus. No live region needed for static content.
- Light/dark: authored opaque surfaces remain readable in either surrounding theme. Meaning uses labels and borders, not color alone. No animation or shadows are required; reduced motion leaves content intact.
- JavaScript disabled: every stage and limit stays visible; native evidence disclosures still open.
- Fonts/assets: system UI and monospace stacks with OS CJK fallback; no added downloaded font or raster asset. P4 wireframe is original inline SVG, decorative beside the textual file description. No external product logo or screenshot.
- Localization: English reviewed before faithful KO/JA; product/command identifiers stay literal. All narrative labels use the existing `local` helper.
- Supplement: Selection & comparison, Applications, Implementation & cautions, dated Evidence. All sourceRevision values equal article revision 1.
- Comparison: features — Git hosting and pull requests; advantages — Review outside contributions; limitations — Plans and permissions need checking; suitable — Contributors already on GitHub; combinations — Local Git plus hosted review.

## Evidence and verification

Official product documentation, inspected 2026-09-27; scenario and suitability are editorial judgments:

- [GitHub: What is GitHub?](https://docs.github.com/en/get-started/start-your-journey/what-is-github): Git hosting and collaboration around repositories.
- [GitHub: Pull requests](https://docs.github.com/en/pull-requests/reference/pull-requests): Proposed branch changes can be discussed, reviewed and merged.

First capture: preview build only when new thumbnails are absent. Normal gates: check → build → selected thumbnails → rebuild → unit/output → browser. Actual results and screenshot locations: [version-control review](../version-control-review.md). No commit, push or deployment.
