# Neobrutalism / ネオブルータリズム / 네오브루탈리즘

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `neobrutalism`; `styles`. Existing URLs and comment identity retained.
- Definition and selection: Bright blocks, thick outlines and hard shadows give selected content deliberate graphic emphasis.
- Closest options and concrete difference: Choose graphic emphasis for a small set of expressive, clearly grouped choices. Brutalism exposes a raw structure; this treatment deliberately builds polished graphic blocks. Neither requires broken interaction conventions.
- Distinct situation and Why opening: A school fair program helps families choose food, games and music. Quiet cards make the attractions blend together. The organizers want a playful graphic poster with clear groups, rather than brutalism’s raw noticeboard or minimalism’s restraint.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/neobrutalism.md), [KO](../../src/content/articles/ko/neobrutalism.md), [JA](../../src/content/articles/ja/neobrutalism.md); matching revision 10. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Filter the school festival by activity; interest selections remain counted even when their event is filtered out. Toggle again to remove.
- Visual structure: `Neobrutalism.astro` owns its markup, spacing and state. Caption: Filter fair activities and choose an interest list
- Initial and changed states: Filter the school festival by activity; interest selections remain counted even when their event is filtered out. Toggle again to remove.
- Repetition, empty/failure and constraints: Track selection independently from filtering. Use pressed semantics plus a check mark, and let cards wrap to one column. Shadows need space at narrow widths; they must not be the only boundary or focus signal.
- Controls and state selectors: `data-filter`, `data-event`, `data-kind`, `data-interest`, `data-mark`, `data-count`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: width<620px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="neobrutalism"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/neobrutalism.md`, sourceRevision 10; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Bold outlines, hard shadows and color; advantages: Playful event blocks remain distinct; limitations: Strong contrast can become visual noise; suitable: Lively identity with explicit controls; combinations: Filtering, grids and clear selection marks
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/neobrutalism-320.png`, `artifacts/design-demos/neobrutalism-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [NN/g: Neobrutalism](https://www.nngroup.com/articles/neobrutalism/) (checked 2026-09-27): Describes the visual style and usability cautions; the fair program is an authored application.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (checked 2026-09-27): Keyboard, focus, reflow and contrast requirements; a visual style alone does not establish conformance.

## Strong teaching case — 2026-09-27

Saturated festival posters, thick outlines and hard offset shadows.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
