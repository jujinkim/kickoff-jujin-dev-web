# Mercurial: static diagram brief

Based on [the planning template](../templates/design-demo-brief.md). Reviewed 2026-09-27; first article revision 1. Scope: local catalog addition and verification.

- Stable ID / leaf: `mercurial` / `version-control-systems`. EN/KO/JA title: Mercurial (proper name retained).
- Definition: Distributed version control with sharing phases, suited to an established hg workflow.
- Closest alternatives and deciding priority: Both Mercurial and Git support local commits and distributed collaboration. Prefer retaining Mercurial when existing hg automation and team knowledge have value. If required review services accept only Git, compare migration effort explicitly. SVN instead records commits centrally; P4 may fit established binary-asset workflows.
- Strong teaching case and distinguishing visual structure: Draft and public stamps separated by a publishing boundary; a separate non-publishing configuration note.
- Amplification: emphasize the documented boundary with enclosure, line, placement and explicit text. The colors, illustrative names, file and test results are authored examples, not product requirements or vendor interface reproductions. No performance or cost promise.

## Scenario and text equivalent

- English Why: A translation tool helps volunteers revise interface strings. Its maintainers already use hg scripts. They need to distinguish revisable work from shared history without migrating that workflow to Git.
- Korean Why: 번역 도구에서 자원봉사자가 화면 문구를 고칩니다. 유지보수 팀은 이미 hg 스크립트를 씁니다. Git으로 이전하지 않고 수정 가능한 작업과 공유된 이력을 구분하고 싶습니다.
- Japanese Why: 翻訳ツールでボランティアが画面の文言を直します。保守チームはすでにhgスクリプトを使っています。Gitへ移行せず、修正可能な作業と共有済みの履歴を区別したいと考えています。
- Representative action and observable result: Commit a wording fix locally as draft. Push to the team’s publishing repository: that change becomes public on both sides. Check its phase before rewriting history.
- Caption: A wording fix crosses a publishing boundary from draft to public
- Initial state and dataset: The translation tool records a wording fix in a local repository. With default draft commits and a publishing remote, pushing advances its phase to public. A non-publishing collaboration repository can retain draft changes. Public records sharing status; private access controls remain a separate concern.
- Changed state, repeat, empty input and reset: not applicable; all numbered stages are simultaneously visible in a static explanation. Reload preserves the same authored diagram. No action is simulated or sent to a server.
- Text equivalent: the overview explains the action/result and the supplement supplies conditions. Markdown includes both. Mercurial is distributed version control. Phases track sharing, not access permissions: public does not mean an internet-visible repository. Non-publishing remotes can exchange drafts. Git may fit better when required integrations expect Git.

## Rendering and accessibility

- Independent component: `src/components/demos/Mercurial.astro`; no shared screen template or page-wide theme.
- Controls: none. Mode: `static`; no scripts, reset controls or mount wait. Capture: `[data-demo="mercurial"]`.
- Mobile: container queries collapse parallel regions into DOM order. Test 320, 390, 768 and 1440px and 200% text at 768px; no fixed text heights or horizontal diagram scrolling.
- Keyboard: diagram is readable DOM text with headings/lists; no invented tab stops. Shared supplement disclosures retain native keyboard behavior and visible focus. No live region needed for static content.
- Light/dark: authored opaque surfaces remain readable in either surrounding theme. Meaning uses labels and borders, not color alone. No animation or shadows are required; reduced motion leaves content intact.
- JavaScript disabled: every stage and limit stays visible; native evidence disclosures still open.
- Fonts/assets: system UI and monospace stacks with OS CJK fallback; no added downloaded font or raster asset. P4 wireframe is original inline SVG, decorative beside the textual file description. No external product logo or screenshot.
- Localization: English reviewed before faithful KO/JA; product/command identifiers stay literal. All narrative labels use the existing `local` helper.
- Supplement: Selection & comparison, Applications, Implementation & cautions, dated Evidence. All sourceRevision values equal article revision 1.
- Comparison: features — Distributed history with phases; advantages — Keep existing hg automation; limitations — Host and extension compatibility need checking; suitable — Teams already using Mercurial; combinations — hg clients plus compatible repositories.

## Evidence and verification

Official product documentation, inspected 2026-09-27; scenario and suitability are editorial judgments:

- [Mercurial: Working with Phases](https://www.mercurial-scm.org/help/topics/phases): Draft changes become public on a publishing remote; non-publishing repositories can exchange drafts.
- [Mercurial Guide](https://www.mercurial-scm.org/guide): Local commits and exchange through push and pull.

First capture: preview build only when new thumbnails are absent. Normal gates: check → build → selected thumbnails → rebuild → unit/output → browser. Actual results and screenshot locations: [version-control review](../version-control-review.md). No commit, push or deployment.
