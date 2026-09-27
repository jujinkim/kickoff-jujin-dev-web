# Gitea: static diagram brief

Based on [the planning template](../templates/design-demo-brief.md). Reviewed 2026-09-27; first article revision 1. Scope: local catalog addition and verification.

- Stable ID / leaf: `gitea` / `repository-hosting`. EN/KO/JA title: Gitea (proper name retained).
- Definition: Self-hostable Git collaboration for teams willing to own service operations.
- Closest alternatives and deciding priority: Compare who operates the service before comparing review screens. The club chooses Gitea because it wants its own instance and can maintain it. GitLab is another self-managed option when its broader workflow fits. GitHub or an eligible Codeberg project can reduce instance operations; pull-request review exists across these choices.
- Strong teaching case and distinguishing visual structure: An operator responsibility enclosure contains the server, three data responsibilities and a separate backup copy.
- Amplification: emphasize the documented boundary with enclosure, line, placement and explicit text. The colors, illustrative names, file and test results are authored examples, not product requirements or vendor interface reproductions. No performance or cost promise.

## Scenario and text equivalent

- English Why: A club’s equipment-loan app records who borrowed cameras. Its developers want the code repository on their own server and have an operator. Control of that service matters more than avoiding maintenance work.
- Korean Why: 동아리 장비 대여 앱이 카메라 대여자를 기록합니다. 개발자는 자체 서버에 코드 저장소를 두고 싶고 운영 담당자도 있습니다. 관리 작업을 줄이기보다 서비스 통제가 중요합니다.
- Japanese Why: サークルの機材貸出アプリがカメラの借り手を記録します。開発者は自分たちのサーバーにコードを置きたく、運用担当者もいます。保守の削減よりサービスの管理権を重視します。
- Representative action and observable result: Members push to the club’s Gitea server and review changes there. The operator manages access, updates and backups. A restore exercise checks repositories, database and configuration together.
- Caption: Members review code; the club operator owns the server and recovery
- Initial state and dataset: Members develop the equipment-loan app using local Git and review proposed changes on the club server. The operating boundary includes repositories, database and configuration. A separate backup copy and a restore rehearsal make recovery ownership visible. These are proposed responsibilities, not proof of a configured production service.
- Changed state, repeat, empty input and reset: not applicable; all numbered stages are simultaneously visible in a static explanation. Reload preserves the same authored diagram. No action is simulated or sent to a server.
- Text equivalent: the overview explains the action/result and the supplement supplies conditions. Markdown includes both. Gitea is self-hostable Git collaboration software. The club operates this instance; hosting software does not remove server costs or recovery work. GitLab can also be self-operated. A managed host fits when nobody can own maintenance.

## Rendering and accessibility

- Independent component: `src/components/demos/Gitea.astro`; no shared screen template or page-wide theme.
- Controls: none. Mode: `static`; no scripts, reset controls or mount wait. Capture: `[data-demo="gitea"]`.
- Mobile: container queries collapse parallel regions into DOM order. Test 320, 390, 768 and 1440px and 200% text at 768px; no fixed text heights or horizontal diagram scrolling.
- Keyboard: diagram is readable DOM text with headings/lists; no invented tab stops. Shared supplement disclosures retain native keyboard behavior and visible focus. No live region needed for static content.
- Light/dark: authored opaque surfaces remain readable in either surrounding theme. Meaning uses labels and borders, not color alone. No animation or shadows are required; reduced motion leaves content intact.
- JavaScript disabled: every stage and limit stays visible; native evidence disclosures still open.
- Fonts/assets: system UI and monospace stacks with OS CJK fallback; no added downloaded font or raster asset. P4 wireframe is original inline SVG, decorative beside the textual file description. No external product logo or screenshot.
- Localization: English reviewed before faithful KO/JA; product/command identifiers stay literal. All narrative labels use the existing `local` helper.
- Supplement: Selection & comparison, Applications, Implementation & cautions, dated Evidence. All sourceRevision values equal article revision 1.
- Comparison: features — Self-hostable Git and review; advantages — Control the service instance; limitations — Updates, recovery and server costs; suitable — Teams with a named operator; combinations — Git plus your server and backup process.

## Evidence and verification

Official product documentation, inspected 2026-09-27; scenario and suitability are editorial judgments:

- [Gitea: What is Gitea?](https://docs.gitea.com/): Self-hostable Git service with code review and collaboration.
- [Gitea: Backup and Restore](https://docs.gitea.com/administration/backup-and-restore/): Restoration involves repositories, database and configuration, with consistent backups.

First capture: preview build only when new thumbnails are absent. Normal gates: check → build → selected thumbnails → rebuild → unit/output → browser. Actual results and screenshot locations: [version-control review](../version-control-review.md). No commit, push or deployment.
