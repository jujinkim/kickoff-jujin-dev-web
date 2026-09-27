# Perforce P4: static diagram brief

Based on [the planning template](../templates/design-demo-brief.md). Reviewed 2026-09-27; first article revision 1. Scope: local catalog addition and verification.

- Stable ID / leaf: `perforce-p4` / `version-control-systems`. EN/KO/JA title: Perforce P4 (proper name retained).
- Definition: Version control suited to asset workflows that need configured exclusive file editing.
- Closest alternatives and deciding priority: Compare asset characteristics before choosing a system. The example uses a binary model for which merging competing edits is impractical; configured exclusive access serializes work. Git and Mercurial favor distributed local history, while SVN can also use locks. P4 is not the only locking option: existing asset tools and team workflow decide the fit.
- Strong teaching case and distinguishing visual structure: An authored SVG vehicle model with explicit binary+l type; one open editor, one refused open, then submit and sync.
- Amplification: emphasize the documented boundary with enclosure, line, placement and explicit text. The colors, illustrative names, file and test results are authored examples, not product requirements or vendor interface reproductions. No performance or cost promise.

## Scenario and text equivalent

- English Why: A racing game team edits 3D vehicle models. Two artists’ changes to one binary model cannot be usefully merged. Coordinating exclusive edits matters more here than parallel text branches.
- Korean Why: 레이싱 게임 팀이 3D 차량 모델을 만듭니다. 같은 바이너리 모델에 두 제작자가 가한 변경은 유용하게 병합하기 어렵습니다. 텍스트 브랜치 병렬 작업보다 배타적 편집 조율이 중요합니다.
- Japanese Why: レースゲームのチームが3D車両モデルを制作します。同じバイナリモデルを二人が変更すると、有用なマージが困難です。テキストの並行ブランチより排他的編集の調整を優先します。
- Representative action and observable result: Set the model’s file type to binary+l. One artist opens it for editing; another open is refused. Submit the finished changelist, then the next artist syncs and edits.
- Caption: One vehicle model has one editor until successful submission
- Initial state and dataset: The vehicle model is explicitly assigned binary+l. An artist opens it, edits and submits a changelist to the depot; the next artist syncs the submitted version. This models a central P4 workflow, not every available topology. A failed submission does not prove the next artist can proceed.
- Changed state, repeat, empty input and reset: not applicable; all numbered stages are simultaneously visible in a static explanation. Reload preserves the same authored diagram. No action is simulated or sent to a server.
- Text equivalent: the overview explains the action/result and the supplement supplies conditions. Markdown includes both. Perforce P4, formerly Helix Core, manages versioned files through a server and workspaces. Exclusive opening requires +l configuration; p4 lock alone does not prevent another open. Locks can cause waits, and server operation and licensing need planning.

## Rendering and accessibility

- Independent component: `src/components/demos/PerforceP4.astro`; no shared screen template or page-wide theme.
- Controls: none. Mode: `static`; no scripts, reset controls or mount wait. Capture: `[data-demo="perforce-p4"]`.
- Mobile: container queries collapse parallel regions into DOM order. Test 320, 390, 768 and 1440px and 200% text at 768px; no fixed text heights or horizontal diagram scrolling.
- Keyboard: diagram is readable DOM text with headings/lists; no invented tab stops. Shared supplement disclosures retain native keyboard behavior and visible focus. No live region needed for static content.
- Light/dark: authored opaque surfaces remain readable in either surrounding theme. Meaning uses labels and borders, not color alone. No animation or shadows are required; reduced motion leaves content intact.
- JavaScript disabled: every stage and limit stays visible; native evidence disclosures still open.
- Fonts/assets: system UI and monospace stacks with OS CJK fallback; no added downloaded font or raster asset. P4 wireframe is original inline SVG, decorative beside the textual file description. No external product logo or screenshot.
- Localization: English reviewed before faithful KO/JA; product/command identifiers stay literal. All narrative labels use the existing `local` helper.
- Supplement: Selection & comparison, Applications, Implementation & cautions, dated Evidence. All sourceRevision values equal article revision 1.
- Comparison: features — Server, workspaces and changelists; advantages — Coordinate hard-to-merge assets; limitations — Lock waits and server operations; suitable — Teams sharing binary models; combinations — Asset tools plus configured file types.

## Evidence and verification

Official product documentation, inspected 2026-09-27; scenario and suitability are editorial judgments:

- [P4: Preventing multiple checkouts](https://help.perforce.com/helix-core/server-apps/cmdref/current/Content/P4Guide/resolve.lock.exclusive.html): The +l file type prevents concurrent opens; p4 lock only restricts submission.
- [P4: p4 submit](https://help.perforce.com/helix-core/server-apps/cmdref/current/Content/CmdRef/p4_submit.html): Changelist submission and failure behavior.

First capture: preview build only when new thumbnails are absent. Normal gates: check → build → selected thumbnails → rebuild → unit/output → browser. Actual results and screenshot locations: [version-control review](../version-control-review.md). No commit, push or deployment.
