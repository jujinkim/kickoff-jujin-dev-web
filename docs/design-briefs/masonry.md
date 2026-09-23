# Masonry visualization brief

Based on [the planning template](../templates/design-demo-brief.md). Current article and visual reviewed 2026-09-23.

- Stable ID, leaf category, English/Korean/Japanese titles: `masonry`; `content-arrangement`; Masonry / 메이슨리 / メイソンリー.
- Definition (one sentence): Cards of different heights enter the shortest available column.
- Closest concept and concrete difference: Uniform grid preserves regular rows; masonry packs varied card heights into shorter columns.
- Distinguishing visual features (structure, material, typography): Different-height photo references fill columns without cropping their content.
- Comparison category: `content-arrangement`; comparison dimensions are shared, but this article uses its own situation.
- Distinct familiar situation, dataset, labels, actions, and initial state for this article: travel album; Six labeled visual references, collection order, all topics and notes closed.
- Visual decisions and controls that demonstrate this concept: Different-height photo references fill columns without cropping their content. Topic filter, collection order, study-note disclosure, preview width and Reset.
- Fictional scenario and why it demonstrates the definition: For a travel album, a travel album contains portrait and landscape photos with different heights.
- Representative action and observable result: Open a note: cards repack visually while source order remains stable.
- Initial state: Six labeled visual references, collection order, all topics and notes closed.
- Changed state, repeated action, empty input/no results: Repeated filter or guide changes update the same local preview; empty filters explain that no references match. The visual makes no external data or performance claim.
- Reset and reload behavior: Reset returns authored content and controls to initial state; reload starts fresh with no persistence.
- Mobile order and width thresholds: At 320px keep filter, results and notes in source order; at 768/1440px show the authored arrangement. No clipped card or page overflow.
- Keyboard order, focus, accessible names, live feedback: Native controls follow source order, keep visible focus and announce changes; Reset remains keyboard reachable.
- Light/dark surrounding themes, opaque fallback, no shadows, reduced motion: Explicit local contrast in both site themes; meaning stays in text and geometry when effects or motion are unavailable.
- JavaScript-disabled initial screen and explanation: Initial labeled comparison and concept description remain readable; dynamic controls are disabled with surrounding explanation.
- Font families, supported characters, fallback and measurement method: System CJK fallback; authored typography uses actual browser measurements only where width is taught, never simulated font metrics.
- Localized visible strings, input constraints, original/translation review: English first, then Korean/Japanese; preserve this situation, result and stated limitation. No native-speaker certification claimed.
- Mode: `interactive`; controls change the local article-body example only.
- Capture selector and initial content: `[data-demo="masonry"]`; three localized PNGs at `public/thumbnails/masonry-{en,ko,ja}.png`.
- Source URLs, inspected date, claims each source supports: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html; checked 2026-09-22. Source supports reflow and accessibility constraints; the specific arrangement is an authored example.
- Comparison summaries: features `Cards of different heights enter the shortest available column.`; advantages `Short columns absorb cards without uniform row gaps.`; limitations `Test keyboard order and overlap after expansion; on narrow screens use one column.`; suitable `Choose it for visual collections.`; combinations `Minimal card styling can keep varied images prominent.`.
- Verification commands and evidence paths: [Sequential gates](../design-demos.md); `tests/browser/styles.spec.ts`, `tests/browser/visual-audit.spec.ts`, and three localized thumbnails.
