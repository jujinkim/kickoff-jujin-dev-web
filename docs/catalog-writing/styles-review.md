# Styles group editorial review — 2026-09-21

## Scope and sequence

Seven English originals were created with the existing single-candidate scaffold and written as practical introductions, approximately 1,000–1,130 words each. All seven remained drafts during English review. Two writing groups cross-read each other's complete English drafts before translation began. The integration reviewer checked the body arguments, comparison contract and visual implementation together. Korean and Japanese follow the approved English arguments, including conditions, counterexamples, source boundaries and reset behavior.

The source refresh is recorded separately: [first four styles](styles-sources-a.md), [remaining three and accessibility](styles-sources-b.md). Publication dates belong to the cited authors; the check date records our inspection. Living pages and undated passages are identified explicitly. No source supports a universal ranking, performance gain or conversion claim.

## English review findings

- Brutalism keeps conventional links and native controls. It does not require antidesign, broken navigation or a particular font. Neobrutalism adds deliberately graphic framing; 3px borders and 4px hard shadows are illustration choices.
- Glass uses 88% white fill and 12px backdrop blur while text remains opaque. Simple and complex backgrounds illustrate dependence, not exhaustive contrast proof. Opaque mode preserves the task.
- Neumorphism uses paired ±6px/12px shadows on the frame; a 2px outlined control and Saved wording survive inset and shadowless modes. A depression does not stand in for persistent state.
- Skeuomorphism refers to a paper card and bookmark; the metaphor supplements Save. Realistic texture and physical constraints are unnecessary.
- Flat design changes surface treatment. Minimalism changes information selection. Their combinations remain conditional and explicit, following NN/g's distinction.
- Flat failure removes action cues; minimalist failure removes the action itself. The latter's two badges and duplicate Save are explicitly redundant only within this small fixture. Unique title, summary and reading time survive successful reduction.
- Every article compares all six peers. Axes stay in the declared order: surface/depth, ornament, retained information, action signifiers, background dependence, state visibility. Articles use either six peer paragraphs with this sequence or six axis paragraphs covering the peers.
- Five frontmatter comparison fields summarize the same argument. Shared rendering supplies both article and category tables; there is no separate manually maintained public summary.

Minor alignment fixes during review: flat baseline description was matched to the actual glossy frame; the CSS focus example was aligned to the component's dashed outline; bookmark wording was matched to the unmarked/marked state. These were explanatory fixes, not changes to the approved scope.

## Shared translation and visualization contract

| Role    | English                       | Korean                     | Japanese                |
| ------- | ----------------------------- | -------------------------- | ----------------------- |
| Title   | Field notes                   | 현장 노트                  | フィールドノート        |
| Summary | Three ways to save an article | 글을 저장하는 세 가지 방법 | 記事を保存する3つの方法 |
| Time    | 5 min                         | 5분                        | 5分                     |
| Action  | Save                          | 저장                       | 保存                    |
| Result  | Saved                         | 저장됨                     | 保存済み                |

All examples describe local, nonpersistent state. Save updates both studies for comparison; Reset restores unsaved state and the initial mode. Refresh clears state. Native controls and polite status announcements preserve focus. Without JavaScript the controls remain disabled while cards, state specimens, captions and visible descriptions remain readable. Each Markdown article contains the complete numbered input → initial state → action → result sequence plus code or text tokens, including failure outcomes.

The common component is selected by `articleId`; no new API version or frontmatter fields were introduced. `articleId`, `kind`, `category`, `related`, `revision: 1` and `sourceRevision: 1` remain aligned across all three languages. Related IDs contain the theme guide and six siblings. Other 51 candidates remain planned.

## Publication and verification record

Both groups cross-read the complete Korean and Japanese translations. Numerical tokens, ordered peer comparisons, conditional advice, sources and failure cases match the English originals. One Korean bookmark phrase was clarified to mean the silhouette is visible but not yet checked; one literal recipe translation was changed to specification. All 21 documents were then switched together to `published`, with `checked: 2026-09-21`.

Translation review and runtime results are recorded in [project verification](../verification.md). Publication occurs for the full 21-document group after review, followed by the existing check/build/test/browser gates and Pages deployment. Editorial review here is agent review, not a native-speaker or user-study certification. Authenticated comment posting and non-Chromium behavior remain outside the automated checks.
