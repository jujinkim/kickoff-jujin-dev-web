# Flat design / フラットデザイン / 플랫 디자인

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `flat-design`; `styles`. Existing URLs and comment identity retained.
- Definition and selection: Solid surfaces and explicit labels establish hierarchy when simulated depth adds little value.
- Closest options and concrete difference: Choose flat surfaces when the form needs distinct roles without a physical metaphor. Minimalism concerns how much competes for attention; flat design concerns visual depth. They may be combined.
- Distinct situation and Why opening: A clinic booking screen lets patients choose a service and a time. Every option matters, but ornamental depth competes with the form. The team wants clear grouping without removing information, unlike a primarily minimalist reduction.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/flat-design.md), [KO](../../src/content/articles/ko/flat-design.md), [JA](../../src/content/articles/ja/flat-design.md); matching revision 11. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Choose a service and time, confirm the fictional booking, repeat confirmation without duplicates, then change a choice to hide the stale receipt.
- Visual structure: `FlatDesign.astro` owns its markup, spacing and state. Caption: Choose a service and time, then review a fictional booking
- Initial and changed states: Choose a service and time, confirm the fictional booking, repeat confirmation without duplicates, then change a choice to hide the stale receipt.
- Repetition, empty/failure and constraints: Use fieldsets and labels. Show selection with aria-pressed and an underline, then invalidate an outdated summary after edits. This demo has no availability server: a real booking must recheck capacity and report conflicts before confirmation.
- Controls and state selectors: `data-service`, `data-slot`, `data-confirm`, `data-receipt`, `data-booking`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="flat-design"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/flat-design.md`, sourceRevision 11; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Simple shapes and explicit states; advantages: Clear service and time choices; limitations: Weak affordances if boundaries disappear; suitable: Low ornament for routine transactions; combinations: Grid, labels and visible focus
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/flat-design-320.png`, `artifacts/design-demos/flat-design-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [NN/g: Flat Design](https://www.nngroup.com/articles/flat-design/) (checked 2026-09-27): Discusses flat surfaces and the loss of clickability cues; the booking policy is an authored example.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (checked 2026-09-27): Keyboard, focus, reflow and contrast requirements; a visual style alone does not establish conformance.

## Strong teaching case — 2026-09-27

Clinic choices use solid geometric blocks with no shadows or material gradients.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
