# Minimalism / ミニマリズム / 미니멀리즘

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `minimalism`; `styles`. Existing URLs and comment identity retained.
- Definition and selection: Reduce competing elements to focus attention while retaining essential information and controls.
- Closest options and concrete difference: Choose reduction when secondary content competes with the primary task. Flat design removes simulated depth; it need not reduce information. A sparse page still needs clear navigation and recognizable controls.
- Distinct situation and Why opening: A day-hike checklist helps walkers pack before leaving home. Optional comforts crowd out water, clothing and a route map. The priority is fewer competing elements, not the stronger graphic emphasis of neobrutalism or a change in surface depth alone.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/minimalism.md), [KO](../../src/content/articles/ko/minimalism.md), [JA](../../src/content/articles/ja/minimalism.md); matching revision 10. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Check three essentials, show the 0–3 packed count, and open optional native details without hiding essentials.
- Visual structure: `Minimalism.astro` owns its markup, spacing and state. Caption: Pack essentials and reveal optional hiking items
- Initial and changed states: Check three essentials, show the 0–3 packed count, and open optional native details without hiding essentials.
- Repetition, empty/failure and constraints: Use native checkboxes and details so labels and disclosure remain familiar. Do not hide required content merely to reduce page height. Test the unchecked, partly packed and fully packed states, keyboard focus, and the unenhanced page.
- Controls and state selectors: `data-pack`, `data-count`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="minimalism"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/minimalism.md`, sourceRevision 10; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Deliberate reduction and spacing; advantages: Essentials stay easy to scan; limitations: Hidden essentials make the task harder; suitable: Few priorities with optional detail; combinations: Single column and progressive disclosure
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/minimalism-320.png`, `artifacts/design-demos/minimalism-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [NN/g: Characteristics of Minimalism](https://www.nngroup.com/articles/characteristics-minimalism/) (checked 2026-09-27): Describes reduced elements and negative space; it does not prescribe this packing list.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (checked 2026-09-27): Keyboard, focus, reflow and contrast requirements; a visual style alone does not establish conformance.

## Strong teaching case — 2026-09-27

One narrow essentials list, generous empty space, secondary supplies behind disclosure.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
