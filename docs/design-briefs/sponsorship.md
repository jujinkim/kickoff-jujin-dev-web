# Sponsorship / スポンサー支援 / 후원

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `sponsorship`; `revenue-sources`. Existing URLs and comment identity retained.
- Definition and selection: Fund shared resources through support rather than access sales.
- Closest options and concrete difference: A public garden guide fits support from people who want the resource maintained. Direct payment would sell access; advertising would sell placements. Sponsorship may include acknowledgement, but does not inherently promise ad impressions or exclusive features.
- Distinct situation and Why opening: Volunteers share planting dates and events in a free garden guide. Ongoing upkeep needs funding; the community prefers acknowledging supporters while keeping articles open, without relying on ad impressions.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/sponsorship.md), [KO](../../src/content/articles/ko/sponsorship.md), [JA](../../src/content/articles/ja/sponsorship.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: A supporter contributes 12 toward maintenance; every reader keeps access. This example promises acknowledgement only. One-time or recurring collection and the party issuing receipts must be stated separately.
- Visual structure: `Sponsorship.astro` owns its markup, spacing and state. Caption: Supporters fund continued public work.
- Initial and changed states: A fictional community garden guide keeps articles open. A supporter contributes 12 toward maintenance and receives acknowledgment, not exclusive access. GitHub Sponsors illustrates one-time and recurring support; its conditions are provider-specific. This is a fictional amount; taxes, fees and refunds are omitted.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="sponsorship"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/sponsorship.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Support funds continued work; advantages: Can preserve open access; limitations: Support may vary; suitable: Public work with supporters; combinations: Direct payment or advertising
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/sponsorship-320.png`, `artifacts/design-demos/sponsorship-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [GitHub Sponsors](https://docs.github.com/en/sponsors/getting-started-with-github-sponsors/about-github-sponsors) (checked 2026-09-27): Supports recurring and one-time sponsorship; acknowledgement and benefits depend on the offer.

## Strong teaching case — 2026-09-27

Support contribution and acknowledgement contrast with access for everyone.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
