# Single-column layout / 単一カラムレイアウト / 단일 열 레이아웃

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `single-column`; `columns`. Existing URLs and comment identity retained.
- Definition and selection: One vertical reading stream suits content whose next step should be unambiguous.
- Closest options and concrete difference: Choose one stream for instructions, journeys and sustained reading. A sidebar helps when filters must remain available; multiple regions help when independent context must be compared. A single column can still contain small local grids.
- Distinct situation and Why opening: A walking guide helps visitors follow lakeside stops in order. On a phone, competing side panels make the next stop unclear. Sequential reading matters more than keeping filters or commentary alongside the route.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/single-column.md), [KO](../../src/content/articles/ko/single-column.md), [JA](../../src/content/articles/ja/single-column.md); matching revision 7. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Read three trail stops in order and expand native section details. Reset closes details; no unrelated filter or width laboratory.
- Visual structure: `SingleColumn.astro` owns its markup, spacing and state. Caption: Read a lakeside route and expand each section
- Initial and changed states: Read three trail stops in order and expand native section details. Reset closes details; no unrelated filter or width laboratory.
- Repetition, empty/failure and constraints: Use normal document flow, meaningful headings and native details. Limit line length without imposing a fixed viewport width. The initial route remains readable without JavaScript; reset only closes disclosures.
- Controls and state selectors: `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: `public/images/lake-walk.png` See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="single-column"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/single-column.md`, sourceRevision 7; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: One vertical reading stream suits content whose next step should be unambiguous.; advantages: One stream makes the next reading step predictable.; limitations: Long pages require scrolling; a restrained line length helps keep the text manageable.; suitable: Choose it for sequential reading.; combinations: Combine with minimal styling and a restrained text line length.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/single-column-320.png`, `artifacts/design-demos/single-column-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Every Layout: The Stack](https://every-layout.dev/layouts/stack/) (checked 2026-09-27): Original pattern reference for vertical flow and spacing; the fictional trail is an authored application.
- [WCAG 2.2: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) (checked 2026-09-27): Supports narrow-screen and zoom checks, not the definition of a layout or typeface.

## Strong teaching case — 2026-09-27

Continuous narrow reading path with vertical route markers and no secondary region.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
