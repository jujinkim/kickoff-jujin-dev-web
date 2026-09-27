# Hugo / Hugo / Hugo

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `hugo`; `static-generators`. Existing URLs and comment identity retained.
- Definition and selection: Generate content through Go templates for file-centered publishing.
- Closest options and concrete difference: Choose Hugo when editors favor Markdown, Go templates and file-based publishing. Astro offers component-oriented islands; Jekyll may preserve an established Ruby ecosystem. Familiarity and content structure matter more than an unmeasured claim that one generator is faster.
- Distinct situation and Why opening: Imagine a town guide where visitors read walks and landmark articles. Editors repeat layout fixes across pages. They know Go templates and want shared Markdown publishing; page-specific interactive components are a lower priority.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/hugo.md), [KO](../../src/content/articles/ko/hugo.md), [JA](../../src/content/articles/ja/hugo.md); matching revision 7. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The town guide shares a layout across history, market and walking articles. Generation happens before readers request the files. A separate browser widget may call a Save API; the static generator is not the request handler.
- Visual structure: `HugoGenerator.astro` owns its markup, spacing and state. Caption: Build a town visitor guide
- Initial and changed states: Start the town guide with three Markdown articles and one layout. Next builds an index and three article pages, then delivers them through hosting. Missing layout stops output. A browser widget can call a separate Save API; Hugo never handles reader requests. Previous, Reset, or reload restores earlier states.
- Repetition, empty/failure and constraints: Keep source content, templates and built output separate. The missing-layout stop is this example’s validation policy, not a guarantee about every Hugo configuration. The publishing owner maintains build inputs and deployment; personal storage needs its own owner and backup policy.
- Controls and state selectors: `data-platform`, `data-runtime-facts`, `data-previous`, `data-next`, `data-reset`, `data-missing`, `data-stage`, `data-build-state`, `data-output-count`, `data-current`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: max-width:560px; width<480px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="hugo"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/hugo.md`, sourceRevision 7; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Content plus Go templates; advantages: No request-time article renderer; limitations: Templates and widgets need work; suitable: File-centered documentation; combinations: Static hosting plus a Save API
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/hugo-320.png`, `artifacts/design-demos/hugo-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Hugo: Introduction](https://gohugo.io/about/introduction/) (checked 2026-09-27): Describes Hugo’s static generation and template model; no relative speed benchmark is claimed.

## Strong teaching case — 2026-09-27

Directory/template inputs feed a bounded build and output set.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
