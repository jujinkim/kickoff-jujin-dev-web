# Uniform grid / 均等グリッド / 균등 그리드

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `uniform-grid`; `content-arrangement`. Existing URLs and comment identity retained.
- Definition and selection: Equal-width cards and shared rows support fair comparison of similarly structured items.
- Closest options and concrete difference: Choose a uniform grid for comparable products, people or options with matching fields. Lists suit text-heavy scanning; masonry accommodates varied image heights. Do not force unequal content into fixed heights that clip information.
- Distinct situation and Why opening: A plant catalog helps new gardeners compare pictures, light and watering notes. Unequal card sizes give some plants more prominence and make facts drift. Equal treatment matters more than preserving every image’s original proportions.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/uniform-grid.md), [KO](../../src/content/articles/ko/uniform-grid.md), [JA](../../src/content/articles/ja/uniform-grid.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Compare three square plant images with the same light/water fields. Sun selects rosemary; reset restores three cards with equal wide-screen tracks.
- Visual structure: `UniformGrid.astro` owns its markup, spacing and state. Caption: Compare plant images and the same care fields
- Initial and changed states: Compare three square plant images with the same light/water fields. Sun selects rosemary; reset restores three cards with equal wide-screen tracks.
- Repetition, empty/failure and constraints: Use equal grid tracks, consistent image ratios and content-sized rows. Preserve all labels when the grid collapses. Filtering should remove hidden cards from layout while keeping the relative order of the remaining items.
- Controls and state selectors: `data-light`, `data-plant`, `data-light-kind`, `data-count`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: width<610px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: `public/images/fern-plant.png`, `public/images/monstera-plant.png`, `public/images/rosemary-plant.png` See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="uniform-grid"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/uniform-grid.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Equal-width cards and shared rows support fair comparison of similarly structured items.; advantages: Shared rows make similarly structured resources comparable.; limitations: Uneven content can leave empty space inside taller rows.; suitable: Choose it for comparable resources with similar information.; combinations: Flat surfaces preserve card boundaries without extra depth.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/uniform-grid-320.png`, `artifacts/design-demos/uniform-grid-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [W3C: CSS Grid Level 1](https://www.w3.org/TR/css-grid-1/) (checked 2026-09-27): Candidate Recommendation Draft defines shared grid tracks and sizing; equal cards are an authored pattern.
- [WCAG 2.2: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) (checked 2026-09-27): Supports narrow-screen and zoom checks, not the definition of a layout or typeface.
- [RHS: Boston fern](https://www.rhs.org.uk/plants/11508/nephrolepis-exaltata/details) (checked 2026-09-27): Filtered light and moist, drained growing conditions; care varies by season and environment.
- [RHS: Swiss cheese plants](https://www.rhs.org.uk/plants/swiss-cheese-plants/how-to-grow-swiss-cheese-plants) (checked 2026-09-27): Indirect light and allowing surface compost to dry between watering; not a fixed watering calendar.
- [RHS: rosemary](https://www.rhs.org.uk/herbs/rosemary/grow-your-own) (checked 2026-09-27): Sun and free drainage suit rosemary; a brief comparison card does not cover full plant care.

## Strong teaching case — 2026-09-27

Equal plant slots share image proportions, card edges and field positions.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
