# Monospace / 等幅 / 고정폭

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `monospace`; `character-width`. Existing URLs and comment identity retained.
- Definition and selection: Equal character advances suit aligned text data; shape and fallback coverage remain separate concerns.
- Closest options and concrete difference: Choose monospace for code or space-aligned records. Proportional text can fit running prose more naturally; tabular digits alone may suffice for numeric tables. A sans-serif shape does not imply equal width.
- Distinct situation and Why opening: Imagine a weather log with readings aligned in text tables. Variable Latin letter widths make its columns drift.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/monospace.md), [KO](../../src/content/articles/ko/monospace.md), [JA](../../src/content/articles/ja/monospace.md); matching revision 7. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Read aligned weather records, then measure iiiWWW glyph advances using the loaded Demo Mono font. Repeated i and W widths match.
- Visual structure: `Monospace.astro` owns its markup, spacing and state. Caption: Read a weather log, then measure fixed advances
- Initial and changed states: Read aligned weather records, then measure iiiWWW glyph advances using the loaded Demo Mono font. Repeated i and W widths match.
- Repetition, empty/failure and constraints: Wait for document.fonts.ready and inspect the loaded font. Range measurements retain shaping in one text node; ligatures, combining marks and fallback glyphs can affect ranges. Keep width experiments separate from the real specimen, and test localized font coverage.
- Controls and state selectors: `data-comparison`, `data-text`, `data-sample`, `data-measure`, `data-size`, `data-size-value`, `data-guides`, `data-tabular`, `data-reset`, `data-terminals`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: width<490px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Locally hosted, licensed subsets in public/fonts; manifest and font-loading tests establish the actual face. Measurement laboratory is separate from the product example.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="monospace"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/monospace.md`, sourceRevision 7; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Equal character advances suit aligned text data; shape and fallback coverage remain separate concerns.; advantages: Equal Latin advances preserve code and data column alignment.; limitations: CJK, emoji, combining marks, and fallback faces can break that model; inspect the supported character set.; suitable: Choose it for code or aligned Latin data.; combinations: Use fixed-width code beside proportional explanatory text.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/monospace-320.png`, `artifacts/design-demos/monospace-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [W3C: CSS Fonts Level 3](https://www.w3.org/TR/css-fonts-3/) (checked 2026-09-27): Defines generic font families and numeric features. Actual advance widths depend on the loaded font and shaping.
- [WCAG 2.2: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) (checked 2026-09-27): Supports narrow-screen and zoom checks, not the definition of a layout or typeface.

## Strong teaching case — 2026-09-27

Weather columns align through actual equal advances, not letter spacing.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
