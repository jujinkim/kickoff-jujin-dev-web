# Git: static diagram brief

Based on [the planning template](../templates/design-demo-brief.md). Reviewed 2026-09-27; first article revision 1. Scope: local catalog addition and verification.

- Stable ID / leaf: `git` / `version-control-systems`. EN/KO/JA title: Git (proper name retained).
- Definition: Distributed history and branches for local work with a separate choice of hosting.
- Closest alternatives and deciding priority: Compare history location, offline work, collaboration, file types and existing tools. Git keeps a local repository for commits and branches. Mercurial also supports distributed work; preserving an established hg workflow can outweigh migration. SVN retains central commits; P4 may fit a team already managing exclusive edits of binary assets.
- Strong teaching case and distinguishing visual structure: Double-bordered local computer with a branch trace; a labeled push crosses to the remote before a teammate fetches.
- Amplification: emphasize the documented boundary with enclosure, line, placement and explicit text. The colors, illustrative names, file and test results are authored examples, not product requirements or vendor interface reproductions. No performance or cost promise.

## Scenario and text equivalent

- English Why: A travel website lets friends arrange daily stops. Its developers need separate experiments while offline. They want local history and Git-compatible hosting; keeping existing SVN tooling would favor Subversion instead.
- Korean Why: 여행 일정 웹사이트에서 친구들이 날짜별 방문지를 정합니다. 개발자는 오프라인에서도 실험을 나누고 싶습니다. 로컬 이력과 Git 호환 호스팅이 우선이며, 기존 SVN 도구 유지가 우선이라면 Subversion이 맞습니다.
- Japanese Why: 旅行サイトで友人が日ごとの訪問先を決めます。開発者はオフラインでも別々の実験を進めたいと考えています。ローカル履歴とGit対応ホスティングを優先し、既存のSVNツール維持を優先するならSubversionが合います。
- Representative action and observable result: Commit a new stop on a local branch. The remote still lacks it. Push that branch when connected, then a teammate fetches it. Check both histories; a rejected push needs reconciliation.
- Caption: A travel stop moves from local history to a shared branch
- Initial state and dataset: The travel site tries a museum stop on its own branch. A local commit survives closing the editor but is absent from the shared repository until a successful push. A teammate fetches it before reviewing or integrating it. Git hosting is a separate choice: these catalog hosts work with Git, not as interchangeable servers for every version control system.
- Changed state, repeat, empty input and reset: not applicable; all numbered stages are simultaneously visible in a static explanation. Reload preserves the same authored diagram. No action is simulated or sent to a server.
- Text equivalent: the overview explains the action/result and the supplement supplies conditions. Markdown includes both. Git is a distributed version control system. Commit records locally; push shares with another repository. GitHub and other hosts add collaboration around Git. Conflicts still need judgment.

## Rendering and accessibility

- Independent component: `src/components/demos/Git.astro`; no shared screen template or page-wide theme.
- Controls: none. Mode: `static`; no scripts, reset controls or mount wait. Capture: `[data-demo="git"]`.
- Mobile: container queries collapse parallel regions into DOM order. Test 320, 390, 768 and 1440px and 200% text at 768px; no fixed text heights or horizontal diagram scrolling.
- Keyboard: diagram is readable DOM text with headings/lists; no invented tab stops. Shared supplement disclosures retain native keyboard behavior and visible focus. No live region needed for static content.
- Light/dark: authored opaque surfaces remain readable in either surrounding theme. Meaning uses labels and borders, not color alone. No animation or shadows are required; reduced motion leaves content intact.
- JavaScript disabled: every stage and limit stays visible; native evidence disclosures still open.
- Fonts/assets: system UI and monospace stacks with OS CJK fallback; no added downloaded font or raster asset. P4 wireframe is original inline SVG, decorative beside the textual file description. No external product logo or screenshot.
- Localization: English reviewed before faithful KO/JA; product/command identifiers stay literal. All narrative labels use the existing `local` helper.
- Supplement: Selection & comparison, Applications, Implementation & cautions, dated Evidence. All sourceRevision values equal article revision 1.
- Comparison: features — Local commits and branches; advantages — Work before sharing; limitations — Conflicts require review; suitable — Local history with Git-compatible tools; combinations — Git plus repository hosting.

## Evidence and verification

Official product documentation, inspected 2026-09-27; scenario and suitability are editorial judgments:

- [Pro Git: About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control): Local and distributed history models.
- [Pro Git: Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes): Fetching and pushing exchange repository data; pushing requires access and compatible history.

First capture: preview build only when new thumbnails are absent. Normal gates: check → build → selected thumbnails → rebuild → unit/output → browser. Actual results and screenshot locations: [version-control review](../version-control-review.md). No commit, push or deployment.
