# Astro / Astro / Astro

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `astro`; `static-generators`. Existing URLs and comment identity retained.
- Definition and selection: Build content-first HTML with selective interactive islands.
- Closest options and concrete difference: Choose Astro when content pages benefit from reusable components and selected interactive islands. Hugo may fit Go-template publishing; Jekyll may fit an existing Ruby/Liquid workflow. Astro can also render on demand, so static output is a project choice rather than its only mode.
- Distinct situation and Why opening: Imagine a neighborhood journal where residents read and save articles. Its team wants component-built pages and one interactive Save control without sending a full app.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/astro.md), [KO](../../src/content/articles/ko/astro.md), [JA](../../src/content/articles/ja/astro.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The neighborhood journal builds three articles and an index. The diagram separates source, build, artifact, hosting and browser. Its optional Save island leaves article HTML readable; personal records still require a separately designed storage path.
- Visual structure: `AstroGenerator.astro` owns its markup, spacing and state. Caption: Build a neighborhood journal
- Initial and changed states: Start a neighborhood journal with three Markdown articles and one layout. Next builds an index and three article pages, then sends files through hosting to the browser. Enable the optional Save island: article text stays readable. Missing layout stops the build; static files alone cannot retain personal saves. Previous, Reset, or reload restores earlier states.
- Repetition, empty/failure and constraints: Assign hydration only to controls that need it. Publish a verified artifact after a successful build; a failed new build must not replace the last good site. Browser memory is not durable storage. Test real output and client behavior separately from this explanatory model.
- Controls and state selectors: `data-platform`, `data-runtime-facts`, `data-previous`, `data-next`, `data-reset`, `data-missing`, `data-stage`, `data-build-state`, `data-output-count`, `data-island`, `data-island-state`, `data-current`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: max-width:560px; width<480px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="astro"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/astro.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Selective client islands; advantages: Article text stays static; limitations: Personal saves need a service; suitable: Content with small interactive areas; combinations: UI islands plus static hosting
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/astro-320.png`, `artifacts/design-demos/astro-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Astro: Why Astro?](https://docs.astro.build/en/concepts/why-astro/) (checked 2026-09-27): Documents content-first rendering and islands; this demo models a static build rather than running another Astro build in the browser.

## Strong teaching case — 2026-09-27

Generated document output dominates; one optional client island remains separate.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
