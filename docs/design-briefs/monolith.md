# Monolith / モノリス / 모놀리스

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `monolith`; `service-split`. Existing URLs and comment identity retained.
- Definition and selection: Deploy together when simple operations outweigh independent releases.
- Closest options and concrete difference: Choose one release unit when one team can coordinate related capabilities cheaply. A modular monolith adds enforceable internal ownership without changing deployment count. Microservices become relevant when independent releases justify network and operations costs.
- Distinct situation and Why opening: Imagine a recipe app where neighbors save cookbooks and buy extras. One small team needs family tags. Coordinating separate releases adds work; one shared release matters more than independent schedules.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/monolith.md), [KO](../../src/content/articles/ko/monolith.md), [JA](../../src/content/articles/ja/monolith.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The recipe app adds a family tag to Library while releasing Catalog and Billing in the same artifact. Their unchanged code still travels with the release. One deployment may run as several replicas; that does not turn it into several services.
- Visual structure: `Monolith.astro` owns its markup, spacing and state. Caption: One release unit can contain many capabilities
- Initial and changed states: 1. One team ships Catalog, Library and Billing; saved Community Cookbook has no tag. 2. Add Library tags; deploy app v2, including unchanged Billing. The app owns a shared database. 3. Library queries Catalog in-process, then writes `family`. A failed lookup leaves no tag; retry after recovery.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: max-width: 520px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="monolith"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/monolith.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: One server-side release unit; advantages: One release pipeline for a small team; limitations: Shared release and process failure boundaries; suitable: Closely related capabilities with one team; combinations: Can contain layers and explicit modules
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/monolith-320.png`, `artifacts/design-demos/monolith-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [James Lewis and Martin Fowler: Microservices](https://martinfowler.com/articles/microservices.html) (checked 2026-09-27): Contrasts one deployment unit with independently deployable services; internal modularity and replica count are separate.

## Strong teaching case — 2026-09-27

One heavy release enclosure contains every capability and application-owned storage.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
