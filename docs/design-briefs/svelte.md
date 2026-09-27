# Svelte / Svelte / Svelte

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `svelte`; `web-ui`. Existing URLs and comment identity retained.
- Definition and selection: Compile declarative components when concise reactive authoring matters.
- Closest options and concrete difference: Choose Svelte when compiler-assisted component authoring fits the build and maintenance workflow. Vue emphasizes reactive templates and React JavaScript composition. Avoid claiming that compilation removes all runtime work or makes every application faster.
- Distinct situation and Why opening: Travelers save bus and hiking cards in a trip planner. Labels and totals must agree; its team prefers declarative components compiled before runtime.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/svelte.md), [KO](../../src/content/articles/ko/svelte.md), [JA](../../src/content/articles/ja/svelte.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The trip planner saves a bus timetable and a hiking route. Compilation prepares update code; clicking later changes the record set and displayed labels at runtime. The browser diagram illustrates those stages without loading Svelte itself.
- Visual structure: `SvelteState.astro` owns its markup, spacing and state. Caption: Svelte: concept simulation
- Initial and changed states: Two cards in a trip planner start unsaved. Save on Bus Timetable changes only its label to Saved; Hiking Route stays unsaved. Saving Hiking Route changes the shared count from one to two. Repeating Save leaves two records: each card counts once. The diagram separates compilation from runtime updates. Reset or reload clears them. Nothing is persisted.
- Repetition, empty/failure and constraints: Keep the compile step separate from runtime state ownership. Deduplicate by a stable record key and derive the total. Routing, server rendering and durable storage require project-level choices; SvelteKit’s application scope is broader than Svelte alone.
- Controls and state selectors: `data-platform`, `data-update-path`, `data-runtime-facts`, `data-save`, `data-label`, `data-count`, `data-state`, `data-path-state`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: max-width:560px; width<480px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="svelte"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/svelte.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Compiled declarative components; advantages: UI and behavior authored together; limitations: Build and services need design; suitable: Compiler-based UI workflows; combinations: Astro island or an app framework
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/svelte-320.png`, `artifacts/design-demos/svelte-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Svelte: Overview](https://svelte.dev/docs/svelte/overview) (checked 2026-09-27): Describes compilation of declarative components; runtime interaction remains necessary after compilation.

## Strong teaching case — 2026-09-27

Compiler and later browser execution occupy separate enclosures joined by an arrow.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
