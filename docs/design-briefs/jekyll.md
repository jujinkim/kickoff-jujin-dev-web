# Jekyll / Jekyll / Jekyll

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `jekyll`; `static-generators`. Existing URLs and comment identity retained.
- Definition and selection: Publish Markdown through a Ruby-based layout workflow.
- Closest options and concrete difference: Choose Jekyll when an existing Ruby/Liquid publishing setup and its maintainers are a good fit. Hugo uses a different template ecosystem; Astro adds a component-oriented path to selective client interaction. Compare migration cost and team skills, not just generator labels.
- Distinct situation and Why opening: Imagine a family recipe site where relatives add Markdown dishes. Its team uses Ruby templates so layout changes reach every page without copying recipes.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/jekyll.md), [KO](../../src/content/articles/ko/jekyll.md), [JA](../../src/content/articles/ja/jekyll.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The family recipe archive builds dishes, pantry tips and kitchen notes through one layout. Hosting serves the resulting HTML without running Ruby for each reader. A private Save feature remains a separate service decision.
- Visual structure: `JekyllGenerator.astro` owns its markup, spacing and state. Caption: Build a family recipe archive
- Initial and changed states: Start a family recipe archive with three Markdown articles and one layout. Next runs the Ruby build, creates an index and three article pages, then sends files through hosting to the browser. Missing layout stops this example before output. Reading these files needs no Ruby request handler. Personal Save records need a separate API. Previous, Reset, or reload restores earlier states.
- Repetition, empty/failure and constraints: Pin and maintain build dependencies, review plugin support in the chosen host, and deploy only checked output. The example rejects a missing layout deliberately. A file host does not automatically back up editorial sources or personal records.
- Controls and state selectors: `data-platform`, `data-runtime-facts`, `data-previous`, `data-next`, `data-reset`, `data-missing`, `data-stage`, `data-build-state`, `data-output-count`, `data-current`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: max-width:560px; width<480px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="jekyll"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/jekyll.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Ruby build with reusable layouts; advantages: One layout serves many articles; limitations: Build dependencies need maintenance; suitable: Existing Jekyll publishing workflows; combinations: CI build plus static hosting
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/jekyll-320.png`, `artifacts/design-demos/jekyll-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Jekyll: Documentation](https://jekyllrb.com/docs/) (checked 2026-09-27): Documents the Ruby build workflow; build dependencies are distinct from serving the resulting files.

## Strong teaching case — 2026-09-27

Ruby build boundary contains the source pipeline; generated pages remain a distinct output.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
