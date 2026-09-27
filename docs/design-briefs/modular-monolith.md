# Modular monolith / モジュラーモノリス / 모듈러 모놀리스

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `modular-monolith`; `service-split`. Existing URLs and comment identity retained.
- Definition and selection: Enforce module ownership while retaining one deployment unit.
- Closest options and concrete difference: Choose explicit modules when ownership matters but shared releases remain acceptable. It is a disciplined form of monolith, not a third deployment topology. Microservices add independent deployment and network contracts; modules can prepare boundaries without promising an eventual split.
- Distinct situation and Why opening: Imagine a hiking app where walkers save guides and buy extras. Weekend tags risk changing billing code. The team wants clear ownership within one release, without separate services.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/modular-monolith.md), [KO](../../src/content/articles/ko/modular-monolith.md), [JA](../../src/content/articles/ja/modular-monolith.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The hiking app lets Library own weekend tags and call Catalog through an internal API. Billing remains unchanged. The shared database contains separately owned tables; the drawing is about permitted access, not the number of database machines.
- Visual structure: `ModularMonolith.astro` owns its markup, spacing and state. Caption: Internal contracts, shared release
- Initial and changed states: 1. One team ships Catalog, Library and Billing together; saved Hiking Guide has no tag. 2. Add tags to Library-owned tables; deploy app v2 with unchanged Billing. One database; cross-module table access is forbidden. 3. Library calls Catalog's API in-process, then writes `weekend`. Failed lookup leaves no tag; retry after recovery.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: max-width: 430px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="modular-monolith"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/modular-monolith.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Explicit module APIs within one deployment; advantages: Library changes stay behind its API; limitations: Boundaries need enforcement; releases stay shared; suitable: Clear ownership without remote calls; combinations: Can use clean or hexagonal module internals
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/modular-monolith-320.png`, `artifacts/design-demos/modular-monolith-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Martin Fowler: Monolith First](https://martinfowler.com/bliki/MonolithFirst.html) (checked 2026-09-27): Discusses learning service boundaries within a monolith; this example’s table-access rules are authored enforcement choices.

## Strong teaching case — 2026-09-27

One release enclosure contains separate API gates and owned internals; failure scope stays shared.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
