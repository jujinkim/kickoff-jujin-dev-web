# Sans serif / サンセリフ / 산세리프

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `sans-serif`; `type-shapes`. Existing URLs and comment identity retained.
- Definition and selection: Letterforms without serifs suit a plain visual voice; readability still depends on the chosen face and context.
- Closest options and concrete difference: Choose a plain sans-serif voice when it fits the information hierarchy. Serif can support an editorial tone, while script supplies short expressive lettering. None is universally more readable; compare actual glyphs, size, weight and language.
- Distinct situation and Why opening: Imagine a transit screen where travelers scan routes and times. Editors favor plain letterforms over a printed tone for quick reading, while still checking whether similar labels remain distinct.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/sans-serif.md), [KO](../../src/content/articles/ko/sans-serif.md), [JA](../../src/content/articles/ja/sans-serif.md); matching revision 8. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Read transport directions, then compare font weight and glyph guides in a separate optional laboratory using loaded local fonts.
- Visual structure: `SansSerif.astro` owns its markup, spacing and state. Caption: Read a transit board, then inspect glyphs and weight
- Initial and changed states: Read transport directions, then compare font weight and glyph guides in a separate optional laboratory using loaded local fonts.
- Repetition, empty/failure and constraints: Wait for document.fonts.ready and inspect the loaded font. Range measurements retain shaping in one text node; ligatures, combining marks and fallback glyphs can affect ranges. Keep width experiments separate from the real specimen, and test localized font coverage.
- Controls and state selectors: `data-comparison`, `data-text`, `data-sample`, `data-measure`, `data-size`, `data-size-value`, `data-guides`, `data-tabular`, `data-weight`, `data-weight-value`, `data-reset`, `data-terminals`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: width<490px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Locally hosted, licensed subsets in public/fonts; manifest and font-loading tests establish the actual face. Measurement laboratory is separate from the product example.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="sans-serif"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/sans-serif.md`, sourceRevision 8; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Letterforms without serifs suit a plain visual voice; readability still depends on the chosen face and context.; advantages: Size and weight establish hierarchy in the same specimen.; limitations: Check ambiguous glyphs and localized CJK subsets instead of assuming universal readability.; suitable: Choose it for a sign or interface whose hierarchy is clear.; combinations: Pair with flat controls or serif editorial headings.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/sans-serif-320.png`, `artifacts/design-demos/sans-serif-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [W3C: CSS Fonts Level 3](https://www.w3.org/TR/css-fonts-3/) (checked 2026-09-27): Defines generic font families and numeric features. Actual advance widths depend on the loaded font and shaping.
- [WCAG 2.2: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) (checked 2026-09-27): Supports narrow-screen and zoom checks, not the definition of a layout or typeface.

## Strong teaching case — 2026-09-27

Transit sign has large blunt terminals and tabular departure times.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
