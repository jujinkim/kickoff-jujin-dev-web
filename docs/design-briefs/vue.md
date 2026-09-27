# Vue / Vue / Vue

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `vue`; `web-ui`. Existing URLs and comment identity retained.
- Definition and selection: Bind templates to reactive state for template-oriented authoring.
- Closest options and concrete difference: Choose Vue when HTML-like templates and colocated component logic fit the team. React favors a JavaScript-centered composition model; Svelte emphasizes compilation. All can manage shared state, so a synchronized counter alone does not distinguish them.
- Distinct situation and Why opening: Readers save books and articles on a shelf. Labels and counts must agree; its team prefers reactive HTML-like templates over manual edits.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/vue.md), [KO](../../src/content/articles/ko/vue.md), [JA](../../src/content/articles/ja/vue.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The reading shelf saves a library book and a garden article. Each card owns its label while a shared record set supplies the total. A repeat save leaves the total unchanged under this example’s identity rule.
- Visual structure: `VueState.astro` owns its markup, spacing and state. Caption: Vue: concept simulation
- Initial and changed states: Two cards in a reading shelf start unsaved. Save on Library Book changes only its label to Saved; Garden Article stays unsaved. Saving Garden Article changes the shared count from one to two. Repeating Save leaves two records: each card counts once. The diagram connects reactive state to the template. Reset or reload clears both cards. Nothing is persisted.
- Repetition, empty/failure and constraints: Decide where state is owned before connecting templates. Derive counts from records rather than updating separate counters. This page resets all model state on reload; a real cross-device shelf needs authenticated persistence and failure handling outside the component.
- Controls and state selectors: `data-platform`, `data-update-path`, `data-runtime-facts`, `data-save`, `data-label`, `data-count`, `data-state`, `data-path-state`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: max-width:560px; width<480px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="vue"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/vue.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Templates bound to reactive state; advantages: Logic and markup stay together; limitations: Shared state needs ownership; suitable: Template-oriented UI teams; combinations: Astro island with props and events
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/vue-320.png`, `artifacts/design-demos/vue-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Vue: Introduction](https://vuejs.org/guide/introduction.html) (checked 2026-09-27): Defines declarative templates and reactivity. The browser diagram is authored JavaScript, not a Vue runtime benchmark.

## Strong teaching case — 2026-09-27

Logic, template and style occupy three bands within one authoring-file enclosure.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
