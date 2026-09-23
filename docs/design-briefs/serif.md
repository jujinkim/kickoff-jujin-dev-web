# Serif visualization brief

Based on [the planning template](../templates/design-demo-brief.md). Current article and visual reviewed 2026-09-23.

- Stable ID, leaf category, English/Korean/Japanese titles: `serif`; `type-shapes`; Serif / 세리프 / セリフ.
- Definition (one sentence): Serifs add finishing strokes at letter terminals.
- Closest concept and concrete difference: Sans serif omits terminal strokes; this specimen shows them where the font supports them.
- Distinguishing visual features (structure, material, typography): A specimen shows Latin finishing strokes and a localized phrase without claiming every script has serifs.
- Comparison category: `type-shapes`; comparison dimensions are shared, but this article uses its own situation.
- Distinct familiar situation, dataset, labels, actions, and initial state for this article: local history magazine; Localized specimen, 48px size, guides hidden and number alignment at its default.
- Visual decisions and controls that demonstrate this concept: A specimen shows Latin finishing strokes and a localized phrase without claiming every script has serifs. Specimen input, size, measured width guides, number alignment and Reset.
- Fictional scenario and why it demonstrates the definition: For a local history magazine, an editorial page needs a deliberate printed tone.
- Representative action and observable result: Edit the specimen and change size: inspect stroke endings and measured width.
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
- Capture selector and initial content: `[data-demo="serif"]`; three localized PNGs at `public/thumbnails/serif-{en,ko,ja}.png`.
- Source URLs, inspected date, claims each source supports: https://www.w3.org/TR/css-fonts-3/; checked 2026-09-22. Source supports the named mechanism; the scenario is illustrative.
- Comparison summaries: features `Serifs add finishing strokes at letter terminals.`; advantages `Terminal details give the same specimen a distinct texture.`; limitations `Korean and Japanese use Noto Serif CJK subsets; unsupported characters fall back, so inspect actual glyphs.`; suitable `Choose it when an editorial tone fits.`; combinations `Pair serif reading text with sans-serif interface labels.`.
- Verification commands and evidence paths: [Sequential gates](../design-demos.md); `tests/browser/styles.spec.ts`, `tests/browser/visual-audit.spec.ts`, and three localized thumbnails.
