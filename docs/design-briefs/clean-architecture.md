# Clean architecture / クリーンアーキテクチャ / 클린 아키텍처

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `clean-architecture`; `boundaries`. Existing URLs and comment identity retained.
- Definition and selection: Point source dependencies inward to protect application policy.
- Closest options and concrete difference: Choose inward policy dependencies when business rules must survive UI and database changes. Simple layers can suffice for stable roles; hexagonal ports emphasize the inside/outside interaction boundary. These views can describe the same system at different levels.
- Distinct situation and Why opening: Readers save budget guides from web and CLI. Screen or database changes must spare the saving rule; use cases cannot import either.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/clean-architecture.md), [KO](../../src/content/articles/ko/clean-architecture.md), [JA](../../src/content/articles/ja/clean-architecture.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The budget guide maps HTTP or CLI input into SaveArticle and keeps database rows outside the policy. The example separates the caller’s runtime path from what each source module imports. Saving twice still has one record because the application defines that identity.
- Visual structure: `CleanArchitecture.astro` owns its markup, spacing and state. Caption: Dependency direction is not call direction
- Initial and changed states: 1. Fictional single process: Hana, Budget Guide unsaved. HTTP/CLI controller maps IDs into SaveArticle; SavedArticle validates them. 2. SaveArticle calls SaveRepository, implemented by memory/embedded-database adapters. Imports point inward: adapters → use-case contracts → domain; calls reach outward to storage. Only plain data crosses; ORM rows stay outside. 3. Saved: 0 → 1 entries; repeat → 1. Empty IDs or failure before writing → 0; retry after correction.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: max-width: 430px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="clean-architecture"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/clean-architecture.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Source dependencies point inward; advantages: Policy stays independent of framework data; limitations: Boundary mapping adds maintenance; suitable: Policy must outlive UI and database choices; combinations: Can use hexagonal ports at the edges
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/clean-architecture-320.png`, `artifacts/design-demos/clean-architecture-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Robert C. Martin: The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) (checked 2026-09-27): Original description of inward source dependencies and boundary data; concentric circles do not require four folders.

## Strong teaching case — 2026-09-27

Nested boundaries enclose policy; inward imports differ from outward storage calls.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
