# Two columns visualization brief

Based on [the planning template](../templates/design-demo-brief.md). Current article and visual reviewed 2026-09-23.

- Stable ID, leaf category, English/Korean/Japanese titles: `two-columns`; `columns`; Two columns / 2열 / 2カラム.
- Definition (one sentence): Two adjacent regions separate filters from resources.
- Closest concept and concrete difference: Single column stacks everything; two columns keeps filters beside results while width permits.
- Distinguishing visual features (structure, material, typography): Filters sit beside the recipe results on wide screens, then precede them on narrow screens.
- Comparison category: `columns`; comparison dimensions are shared, but this article uses its own situation.
- Distinct familiar situation, dataset, labels, actions, and initial state for this article: recipe index; Six labeled visual references, collection order, all topics and notes closed.
- Visual decisions and controls that demonstrate this concept: Filters sit beside the recipe results on wide screens, then precede them on narrow screens. Topic filter, collection order, study-note disclosure, preview width and Reset.
- Fictional scenario and why it demonstrates the definition: For a recipe index, a recipe index needs filters beside a long list of dishes.
- Representative action and observable result: Narrow the preview: the filter moves above results without hiding either.
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
- Capture selector and initial content: `[data-demo="two-columns"]`; three localized PNGs at `public/thumbnails/two-columns-{en,ko,ja}.png`.
- Source URLs, inspected date, claims each source supports: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html; checked 2026-09-22. Source supports reflow and accessibility constraints; the specific arrangement is an authored example.
- Comparison summaries: features `Two adjacent regions separate filters from resources.`; advantages `Filters stay available beside the resource list.`; limitations `Sidebars reduce reading width, so stack regions before they become cramped.`; suitable `Choose it for documentation with persistent navigation.`; combinations `The main column can contain lists or a resource grid.`.
- Verification commands and evidence paths: [Sequential gates](../design-demos.md); `tests/browser/styles.spec.ts`, `tests/browser/visual-audit.spec.ts`, and three localized thumbnails.
