# Script visualization brief

Based on [the planning template](../templates/design-demo-brief.md). Current article and visual reviewed 2026-09-23.

- Stable ID, leaf category, English/Korean/Japanese titles: `script`; `type-shapes`; Script / 스크립트 / スクリプト.
- Definition (one sentence): Script type borrows handwritten strokes and possible joins.
- Closest concept and concrete difference: Serif is an editorial stroke style; script evokes connected handwriting in supported Latin text.
- Distinguishing visual features (structure, material, typography): A handwriting-like Latin specimen appears beside honest Korean/Japanese fallback.
- Comparison category: `type-shapes`; comparison dimensions are shared, but this article uses its own situation.
- Distinct familiar situation, dataset, labels, actions, and initial state for this article: dinner invitation; Localized specimen, 48px size, guides hidden and number alignment at its default.
- Visual decisions and controls that demonstrate this concept: A handwriting-like Latin specimen appears beside honest Korean/Japanese fallback. Specimen input, size, measured width guides, number alignment and Reset.
- Fictional scenario and why it demonstrates the definition: For a dinner invitation, a short heading needs the personal impression of handwriting.
- Representative action and observable result: Edit the invitation: connected Latin forms remain one string and fallback stays readable.
- Initial state: Localized specimen, 48px size, guides hidden and number alignment at its default.
- Changed state, repeated action, empty input/no results: Editing the specimen, size, guides or number alignment changes only the local preview. Empty input is handled visibly; no external font-performance claim is made.
- Reset and reload behavior: Reset returns authored content and controls to initial state; reload starts fresh with no persistence.
- Mobile order and width thresholds: Specimen and controls wrap at 320px; do not shrink text or sever script joins. Inspect at 768/1440px too.
- Keyboard order, focus, accessible names, live feedback: Native controls follow source order, keep visible focus and announce changes; Reset remains keyboard reachable.
- Light/dark surrounding themes, opaque fallback, no shadows, reduced motion: Explicit local contrast in both site themes; meaning stays in text and geometry when effects or motion are unavailable.
- JavaScript-disabled initial screen and explanation: Initial labeled comparison and concept description remain readable; dynamic controls are disabled with surrounding explanation.
- Font families, supported characters, fallback and measurement method: System CJK fallback; authored typography uses actual browser measurements only where width is taught, never simulated font metrics.
- Localized visible strings, input constraints, original/translation review: English first, then Korean/Japanese; preserve this situation, result and stated limitation. No native-speaker certification claimed.
- Mode: `interactive`; controls change the local article-body example only.
- Capture selector and initial content: `[data-demo="script"]`; three localized PNGs at `public/thumbnails/script-{en,ko,ja}.png`.
- Source URLs, inspected date, claims each source supports: https://www.w3.org/TR/css-fonts-3/; checked 2026-09-22. Source supports the named mechanism; the scenario is illustrative.
- Comparison summaries: features `Script type borrows handwritten strokes and possible joins.`; advantages `Handwritten strokes give short text expression.`; limitations `Long passages and unsupported characters need a plain fallback; this specimen demonstrates Latin lettering only.`; suitable `Choose it for short expressive headings.`; combinations `Use ordinary sans-serif for interface labels and longer explanations.`.
- Verification commands and evidence paths: [Sequential gates](../design-demos.md); `tests/browser/styles.spec.ts`, `tests/browser/visual-audit.spec.ts`, and three localized thumbnails.
