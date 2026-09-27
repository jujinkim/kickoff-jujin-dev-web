# Material 3 Expressive / Material 3 Expressive / Material 3 Expressive

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `material-3-expressive`; `styles`. Existing URLs and comment identity retained.
- Definition and selection: Color, shape, size and motion emphasize key actions within the Material design system.
- Closest options and concrete difference: Use expressive emphasis when one action should attract attention and the product voice permits it. Flat design can coexist with this approach; a restrained interface may need less shape variation and motion.
- Distinct situation and Why opening: A picnic page lets residents reserve places. A quiet row of equal buttons makes joining easy to miss. The team wants a strong primary action and lively feedback; understated flat grouping alone is not the priority.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/material-3-expressive.md), [KO](../../src/content/articles/ko/material-3-expressive.md), [JA](../../src/content/articles/ja/material-3-expressive.md); matching revision 7. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Choose 1–6 people, join, adjust the party while joined, and cancel. The place count follows participation, not clicks.
- Visual structure: `Material3Expressive.astro` owns its markup, spacing and state. Caption: Choose a group size and change picnic participation
- Initial and changed states: Choose 1–6 people, join, adjust the party while joined, and cancel. The place count follows participation, not clicks.
- Repetition, empty/failure and constraints: Keep state text and pressed semantics independent of animation. Reduced motion removes the reaction. A real event needs server capacity checks; this local example accepts one to six places without making a reservation.
- Controls and state selectors: `data-reactive-shape`, `data-people`, `data-join`, `data-off`, `data-on`, `data-state`, `data-places`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: width<540px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="material-3-expressive"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/material-3-expressive.md`, sourceRevision 7; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Expressive shape, scale and motion; advantages: Strong emphasis on a primary action; limitations: Emphasis can compete with dense content; suitable: A welcoming, prominent participation action; combinations: Clear states and reduced-motion support
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/material-3-expressive-320.png`, `artifacts/design-demos/material-3-expressive-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Google Design: Expressive Material research](https://design.google/library/expressive-material-design-google-research) (checked 2026-09-27): Google describes research into expressive emphasis; it does not establish that this picnic demo improves task performance.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (checked 2026-09-27): Keyboard, focus, reflow and contrast requirements; a visual style alone does not establish conformance.

## Strong teaching case — 2026-09-27

Large organic picnic shape, asymmetric containers and shape-changing participation button.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
