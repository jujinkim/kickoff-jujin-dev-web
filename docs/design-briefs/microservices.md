# Microservices / マイクロサービス / 마이크로서비스

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `microservices`; `service-split`. Existing URLs and comment identity retained.
- Definition and selection: Deploy capabilities independently when operational independence justifies coordination.
- Closest options and concrete difference: Choose services when independent releases, scaling or ownership provide enough value to pay for network failure and data coordination. A modular monolith retains boundaries with simpler local calls. A system may keep some capabilities together while separating others.
- Distinct situation and Why opening: Families save notices and pay fees in a school app. Urgent volunteer tags cannot wait for billing releases. The team accepts network coordination; internal modules still release together.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/microservices.md), [KO](../../src/content/articles/ko/microservices.md), [JA](../../src/content/articles/ja/microservices.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The school app releases volunteer tags in Library v2 while Catalog and Billing remain v1. Library queries Catalog before writing its own store. The timeout branch leaves the tag absent in this example; it does not claim that every distributed write fails atomically.
- Visual structure: `Microservices.astro` owns its markup, spacing and state. Caption: Independent releases introduce remote failure cases
- Initial and changed states: 1. One team runs Catalog, Library and Billing at v1; saved School Events has no tag. 2. Deploy Library v2 with compatible tags; Catalog and Billing stay v1. 3. Library queries Catalog over the network, then writes `volunteer` to its store. Timeout leaves no tag; report failure and retry after recovery.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: max-width: 520px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="microservices"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/microservices.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Independently deployable capability services; advantages: Library can release without rebuilding Billing; limitations: Network failures and data coordination; suitable: Stable boundaries and independent release needs; combinations: Can coexist with a modular monolith
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/microservices-320.png`, `artifacts/design-demos/microservices-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [James Lewis and Martin Fowler: Microservices](https://martinfowler.com/articles/microservices.html) (checked 2026-09-27): Describes independently deployable services organized around capabilities and decentralized data ownership; isolation is not automatic.

## Strong teaching case — 2026-09-27

Separate release enclosures and stores expose versions and a network-timeout boundary.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
