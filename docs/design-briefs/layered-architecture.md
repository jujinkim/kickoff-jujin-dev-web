# Layered architecture / レイヤードアーキテクチャ / 계층형 아키텍처

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `layered-architecture`; `boundaries`. Existing URLs and comment identity retained.
- Definition and selection: Separate stable responsibilities along a simple dependency path.
- Closest options and concrete difference: Choose layers when presentation, application coordination and persistence have stable responsibilities. Hexagonal ports help when external adapters must vary independently; clean architecture emphasizes inward policy dependencies. Layers may use either technique rather than excluding them.
- Distinct situation and Why opening: Imagine a library guide where readers save borrowing rules from web or CLI. Page-owned validation duplicates rules; the team wants a simple presentation–application–storage path.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/layered-architecture.md), [KO](../../src/content/articles/ko/layered-architecture.md), [JA](../../src/content/articles/ja/layered-architecture.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The library guide sends HTTP and CLI saves through the same application validation. Changing an entry point does not duplicate the saving rule. The static arrows explain dependencies, calls and returned results separately; they do not execute requests.
- Visual structure: `LayeredArchitecture.astro` owns its markup, spacing and state. Caption: Logical layers can share one deployment
- Initial and changed states: 1. One process: reader Jun, Borrowing Rules unsaved; memory or embedded database. 2. HTTP or CLI presentation imports and calls application validation, which imports and calls persistence. No layer skipping. 3. Saved returns upward: 0 → 1 entries; repeat → 1. Empty IDs or failure before writing → 0; retry after correction. Switching HTTP to CLI leaves validation in place.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: max-width: 430px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="layered-architecture"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/layered-architecture.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Responsibility layers with downward dependencies; advantages: Validation has a clear home; limitations: Pass-through layers add ceremony; suitable: Stable presentation, application and storage roles; combinations: Can add ports and dependency inversion
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/layered-architecture-320.png`, `artifacts/design-demos/layered-architecture-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Microsoft: N-tier architecture](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier) (checked 2026-09-27): Distinguishes logical layers from physical tiers and open from closed layering; this diagram uses one process and closed layers.

## Strong teaching case — 2026-09-27

Responsibility bands stack vertically; imports and calls retain distinct line styles.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
