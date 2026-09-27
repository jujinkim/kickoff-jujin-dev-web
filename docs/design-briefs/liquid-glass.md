# Liquid Glass / Liquid Glass / Liquid Glass

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `liquid-glass`; `styles`. Existing URLs and comment identity retained.
- Definition and selection: An adaptive, floating control material preserves rich content beneath a distinct navigation layer.
- Closest options and concrete difference: Use this direction for a compact control layer over photographs or other rich content. Glassmorphism can describe stable frosted panels more broadly. Apple’s material includes adaptive optical behavior that this web study does not implement.
- Distinct situation and Why opening: Imagine a coastal photo diary where readers browse large images and entries. Navigation must stay over the photos and respond as they move; fixed frosted cards would occupy space better left to the images.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/liquid-glass.md), [KO](../../src/content/articles/ko/liquid-glass.md), [JA](../../src/content/articles/ja/liquid-glass.md); matching revision 7. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Browse three decoded photos with previous/next wraparound; expand tools in normal flow and enable an opaque control surface.
- Visual structure: `LiquidGlass.astro` owns its markup, spacing and state. Caption: Browse a photo diary and expand its floating tools
- Initial and changed states: Browse three decoded photos with previous/next wraparound; expand tools in normal flow and enable an opaque control surface.
- Repetition, empty/failure and constraints: Begin with an opaque readable surface, enhance with backdrop filtering, and test each image. Honor reduced transparency and forced colors. The opaque switch affects this demo only. Do not claim Apple platform behavior or automatic contrast adaptation from CSS styling.
- Controls and state selectors: `data-photo`, `data-prev`, `data-position`, `data-next`, `data-tools-toggle`, `data-tools`, `data-opaque`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Opaque manual, unsupported-filter and reduced-transparency alternatives are part of the material contract.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: `public/images/beach-diary.png`, `public/images/harbor-diary.png`, `public/images/lake-walk.png` See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="liquid-glass"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/liquid-glass.md`, sourceRevision 7; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Translucent floating control surfaces; advantages: Content remains visually primary; limitations: Native optical behavior is not reproduced; suitable: Content-focused navigation over photography; combinations: Opaque fallback and stable text surfaces
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/liquid-glass-320.png`, `artifacts/design-demos/liquid-glass-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Apple: Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219/) (checked 2026-09-27): Describes a dynamic material for a separate control/navigation layer. CSS blur does not reproduce native lensing.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (checked 2026-09-27): Keyboard, focus, reflow and contrast requirements; a visual style alone does not establish conformance.
- [CSSWG: Filter Effects Level 2](https://drafts.csswg.org/filter-effects-2/#BackdropFilterProperty) (checked 2026-09-27): Draft specification for backdrop filtering; CSS blur is not Apple’s native optical system and needs fallback testing.

## Strong teaching case — 2026-09-27

Compact lens displaces the selected image and expands with its tools; native Apple optics are not claimed.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
