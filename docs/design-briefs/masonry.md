# Masonry / メイソンリー / 메이슨리

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `masonry`; `content-arrangement`. Existing URLs and comment identity retained.
- Definition and selection: Pack varied-height items into short columns when preserving image proportions matters more than shared rows.
- Closest options and concrete difference: Choose varied-height packing for image-led browsing. Use a uniform grid when matching attributes across rows matters more, or a list when a strict reading sequence dominates. Visual and focus order need explicit review in masonry.
- Distinct situation and Why opening: A travel album lets friends browse landscape and portrait photographs with memories. Uniform rows either leave large gaps or crop the harbor’s tall composition. Preserving each image matters more than aligning matching metadata fields.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/masonry.md), [KO](../../src/content/articles/ko/masonry.md), [JA](../../src/content/articles/ja/masonry.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Expand captions under varied-ratio photographs. Repack after image decoding, font loading and resize; no tile overlap or DOM reordering.
- Visual structure: `Masonry.astro` owns its markup, spacing and state. Caption: Browse uncropped travel photographs and expand memories
- Initial and changed states: Expand captions under varied-ratio photographs. Repack after image decoding, font loading and resize; no tile overlap or DOM reordering.
- Repetition, empty/failure and constraints: Keep source order, measure actual card height, and observe image, font and disclosure changes. The no-JavaScript fallback is an ordinary grid. Test every pair for overlap after expansion and verify that Tab follows the unchanged DOM sequence.
- Controls and state selectors: `data-tile`, `data-reset`, `data-positioned`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: width<450px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: `public/images/beach-diary.png`, `public/images/harbor-diary.png`, `public/images/lake-walk.png` See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="masonry"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/masonry.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Pack varied-height items into short columns when preserving image proportions matters more than shared rows.; advantages: Short columns absorb cards without uniform row gaps.; limitations: Test keyboard order and overlap after expansion; on narrow screens use one column.; suitable: Choose it for visual collections.; combinations: Minimal card styling can keep varied images prominent.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/masonry-320.png`, `artifacts/design-demos/masonry-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Masonry: Layout](https://masonry.desandro.com/layout.html) (checked 2026-09-27): Original library documentation explains image-aware packing. This site uses its own small layout routine, not the library.
- [WCAG 2.2: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) (checked 2026-09-27): Supports narrow-screen and zoom checks, not the definition of a layout or typeface.

## Strong teaching case — 2026-09-27

Panoramic, square and tall photos produce unequal card heights; DOM order remains fixed.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
