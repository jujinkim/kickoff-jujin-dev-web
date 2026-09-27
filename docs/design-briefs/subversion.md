# Apache Subversion: static diagram brief

Based on [the planning template](../templates/design-demo-brief.md). Reviewed 2026-09-27; first article revision 1. Scope: local catalog addition and verification.

- Stable ID / leaf: `subversion` / `version-control-systems`. EN/KO/JA title: Apache Subversion (proper name retained).
- Definition: Centralized version control for teams retaining an established SVN repository and workflow.
- Closest alternatives and deciding priority: History lives in the central repository; a working copy is not a complete history clone. Local edits and some comparisons work offline, but recording a repository revision needs access. Compare Git or Mercurial when independent local commits matter. Retaining existing SVN scripts and permissions is this example’s reason to stay.
- Strong teaching case and distinguishing visual structure: A central revision store above two working copies; update travels outward and commit returns to the store.
- Amplification: emphasize the documented boundary with enclosure, line, placement and explicit text. The colors, illustrative names, file and test results are authored examples, not product requirements or vendor interface reproductions. No performance or cost promise.

## Scenario and text equivalent

- English Why: An internal manual tells staff how to request equipment. Editors revise its pages through an existing SVN repository. Preserving that central workflow matters more than making local commits while disconnected.
- Korean Why: 사내 업무 매뉴얼은 직원에게 장비 신청 방법을 안내합니다. 편집자는 기존 SVN 저장소로 문서를 수정합니다. 연결 없이 로컬 커밋하기보다 중앙 작업 흐름 유지가 중요합니다.
- Japanese Why: 社内マニュアルが社員に機材の申請方法を案内します。編集者は既存のSVNリポジトリでページを更新します。接続なしのローカルコミットより、中央での作業手順の維持が重要です。
- Representative action and observable result: Update a working copy, edit the request page, and inspect the difference. Commit sends it to the central repository; another editor updates to receive it. Resolve conflicting edits before retrying.
- Caption: Manual edits become a central revision before other copies update
- Initial state and dataset: An editor updates the equipment manual, changes the request instructions and commits. The second editor must update their working copy to see that revision. A conflict means reviewing competing changes, not silently replacing a colleague’s page. SVN also supports branching and optional file locks; centralization does not mean every file is locked.
- Changed state, repeat, empty input and reset: not applicable; all numbered stages are simultaneously visible in a static explanation. Reload preserves the same authored diagram. No action is simulated or sent to a server.
- Text equivalent: the overview explains the action/result and the supplement supplies conditions. Markdown includes both. Apache Subversion, or SVN, is centralized version control. Files can be edited offline, but committing history needs repository access. Git or Mercurial fits local commits; changing systems also means migrating tools and history.

## Rendering and accessibility

- Independent component: `src/components/demos/Subversion.astro`; no shared screen template or page-wide theme.
- Controls: none. Mode: `static`; no scripts, reset controls or mount wait. Capture: `[data-demo="subversion"]`.
- Mobile: container queries collapse parallel regions into DOM order. Test 320, 390, 768 and 1440px and 200% text at 768px; no fixed text heights or horizontal diagram scrolling.
- Keyboard: diagram is readable DOM text with headings/lists; no invented tab stops. Shared supplement disclosures retain native keyboard behavior and visible focus. No live region needed for static content.
- Light/dark: authored opaque surfaces remain readable in either surrounding theme. Meaning uses labels and borders, not color alone. No animation or shadows are required; reduced motion leaves content intact.
- JavaScript disabled: every stage and limit stays visible; native evidence disclosures still open.
- Fonts/assets: system UI and monospace stacks with OS CJK fallback; no added downloaded font or raster asset. P4 wireframe is original inline SVG, decorative beside the textual file description. No external product logo or screenshot.
- Localization: English reviewed before faithful KO/JA; product/command identifiers stay literal. All narrative labels use the existing `local` helper.
- Supplement: Selection & comparison, Applications, Implementation & cautions, dated Evidence. All sourceRevision values equal article revision 1.
- Comparison: features — Working copies and central history; advantages — Retain established SVN tooling; limitations — Central commit needs repository access; suitable — Existing centralized collaboration; combinations — SVN clients plus an SVN server.

## Evidence and verification

Official product documentation, inspected 2026-09-27; scenario and suitability are editorial judgments:

- [Apache Subversion](https://subversion.apache.org/): Subversion is a centralized version control system.
- [Apache Subversion: Quick Start](https://subversion.apache.org/quick-start): Working copies, update, commit, conflicts and optional locking.

First capture: preview build only when new thumbnails are absent. Normal gates: check → build → selected thumbnails → rebuild → unit/output → browser. Actual results and screenshot locations: [version-control review](../version-control-review.md). No commit, push or deployment.
