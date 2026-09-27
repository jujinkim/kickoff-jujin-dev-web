# Brutalism / ブルータリズム / 브루탈리즘

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `brutalism`; `styles`. Existing URLs and comment identity retained.
- Definition and selection: Raw typography and exposed structure suit an intentionally utilitarian visual voice.
- Closest options and concrete difference: Choose exposed structure when the product voice should feel direct and improvised. Minimalism reduces competing elements; neobrutalism adds deliberate graphic blocks and hard shadows. These directions can share clear hierarchy.
- Distinct situation and Why opening: A neighborhood repair notice helps visitors find a booth and its opening time. The organizers want a direct, improvised noticeboard, rather than the quiet polish of minimalism; decorative panels hide the schedule.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/brutalism.md), [KO](../../src/content/articles/ko/brutalism.md), [JA](../../src/content/articles/ja/brutalism.md); matching revision 11. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Filter all three repair booths to bicycles (two), cloth (one), or electrical (zero). Empty state keeps the filter available.
- Visual structure: `Brutalism.astro` owns its markup, spacing and state. Caption: Filter repair booths and their opening times
- Initial and changed states: Filter all three repair booths to bicycles (two), cloth (one), or electrical (zero). Empty state keeps the filter available.
- Repetition, empty/failure and constraints: Keep semantic headings and a labeled select. Filtering must not move focus or remove its control. An empty result explains the absence; reset restores every row. Check reading order without CSS as well as contrast and keyboard focus.
- Controls and state selectors: `data-filter`, `data-booth`, `data-kind`, `data-empty`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="brutalism"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/brutalism.md`, sourceRevision 11; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Exposed structure and raw typography; advantages: Direct hierarchy for utilitarian notices; limitations: A rough tone can reduce comfort; suitable: Information priority over polished decoration; combinations: Lists and strong typographic hierarchy
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/brutalism-320.png`, `artifacts/design-demos/brutalism-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [NN/g: Brutalism and Antidesign](https://www.nngroup.com/articles/brutalism-antidesign/) (checked 2026-09-27): Distinguishes raw visual treatment from deliberately confusing interaction. The repair schedule is authored.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (checked 2026-09-27): Keyboard, focus, reflow and contrast requirements; a visual style alone does not establish conformance.

## Strong teaching case — 2026-09-27

Oversized monochrome repair notice, raw rules and square controls.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
