# Tactile collage / 触感的コラージュ / 촉각적 콜라주

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `tactile-collage`; `styles`. Existing URLs and comment identity retained.
- Definition and selection: Layered paper, tape and fragments create an assembled, handmade visual character.
- Closest options and concrete difference: Choose a collage when independent fragments should retain their own character. Skeuomorphism may represent one coherent object, while a uniform grid privileges equal comparison. These treatments can coexist where reading order stays clear.
- Distinct situation and Why opening: A travel memory board lets friends arrange photos, tickets and notes. Uniform cards lose the character of collected keepsakes. The priority is a handmade collection of fragments, rather than skeuomorphism’s single coherent object metaphor.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/tactile-collage.md), [KO](../../src/content/articles/ko/tactile-collage.md), [JA](../../src/content/articles/ja/tactile-collage.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Select photo, ticket or note; earlier/later buttons move the actual DOM node. Boundary attempts leave order unchanged and announce position.
- Visual structure: `TactileCollage.astro` owns its markup, spacing and state. Caption: Select and reorder photographs, tickets and memories
- Initial and changed states: Select photo, ticket or note; earlier/later buttons move the actual DOM node. Boundary attempts leave order unchanged and announce position.
- Repetition, empty/failure and constraints: Offer buttons for reordering; dragging alone excludes some users. Move actual DOM nodes so keyboard and reading order agree. At the first or last position, a repeated move leaves the order unchanged and announces the position. Tape stays decorative.
- Controls and state selectors: `data-piece`, `data-select`, `data-earlier`, `data-later`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: width<580px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: `public/images/beach-diary.png` See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="tactile-collage"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/tactile-collage.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Layered cutouts, paper and mixed media; advantages: Different memory types retain distinct character; limitations: Overlap can harm order and legibility; suitable: A collected board over one consistent object; combinations: DOM order and explicit reorder buttons
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/tactile-collage-320.png`, `artifacts/design-demos/tactile-collage-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Canva: Design trends 2026](https://www.canva.com/newsroom/news/design-trends-2026/) (checked 2026-09-27): Documents interest in handmade textures and imperfect composition; the category and memory board are editorial applications.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (checked 2026-09-27): Keyboard, focus, reflow and contrast requirements; a visual style alone does not establish conformance.

## Strong teaching case — 2026-09-27

Photo, perforated ticket and folded note retain different physical forms; controls reorder DOM.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
