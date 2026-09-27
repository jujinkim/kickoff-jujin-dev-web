# Multi-region layout / 複数領域レイアウト / 다중 영역 레이아웃

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `multiple-columns`; `columns`. Existing URLs and comment identity retained.
- Definition and selection: Coordinate navigation, active content and context in distinct regions when they must be seen together.
- Closest options and concrete difference: Choose multiple regions when selection, active work and independent context must coexist. A sidebar is simpler when there is one main task and one supporting control area. Region count alone does not prove usability.
- Distinct situation and Why opening: A botanical museum page helps visitors choose a plant exhibit and examine its features. Switching between the exhibit list, specimen and explanation interrupts comparison. A simple sidebar is insufficient when commentary also needs its own visible region.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/multiple-columns.md), [KO](../../src/content/articles/ko/multiple-columns.md), [JA](../../src/content/articles/ja/multiple-columns.md); matching revision 7. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Choose fern or rosemary; exhibit image, title and context update together. Reset returns to fern and closes observation details.
- Visual structure: `MultipleColumns.astro` owns its markup, spacing and state. Caption: Select a museum exhibit and update its image and commentary
- Initial and changed states: Choose fern or rosemary; exhibit image, title and context update together. Reset returns to fern and closes observation details.
- Repetition, empty/failure and constraints: CSS Grid places distinct regions; CSS multi-column fragments one content flow. Keep the DOM order navigation → exhibit → explanation and collapse that order on small screens. Update image and context from one selection state.
- Controls and state selectors: `data-exhibit`, `data-display`, `data-context`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: width<680px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: `public/images/fern-plant.png`, `public/images/rosemary-plant.png` See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="multiple-columns"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/multiple-columns.md`, sourceRevision 7; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Coordinate navigation, active content and context in distinct regions when they must be seen together.; advantages: References remain visible beside active work.; limitations: More regions divide attention and need an explicit small-screen order.; suitable: Choose it when context must remain visible beside work.; combinations: Use flat controls within regions and a single column on mobile.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/multiple-columns-320.png`, `artifacts/design-demos/multiple-columns-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [W3C: CSS Grid Level 1](https://www.w3.org/TR/css-grid-1/) (checked 2026-09-27): Candidate Recommendation Draft defines two-dimensional grid placement, not this editorial page taxonomy.
- [WCAG 2.2: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) (checked 2026-09-27): Supports narrow-screen and zoom checks, not the definition of a layout or typeface.
- [W3C: CSS Multi-column Level 1](https://www.w3.org/TR/css-multicol-1/) (checked 2026-09-27): Defines text fragmentation into columns, a separate mechanism from page regions.

## Strong teaching case — 2026-09-27

Three distinct museum regions: navigation, artifact, interpretation.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
