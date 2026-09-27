# Advertising / 広告 / 광고

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `advertising`; `revenue-sources`. Existing URLs and comment identity retained.
- Definition and selection: Advertisers fund access when audience attention has commercial value.
- Closest options and concrete difference: A cooking blog can keep recipes open while advertisers buy placements. Direct payment suits readers willing to buy access; sponsorship suits support tied to the publication rather than individual ad delivery. Advertising can coexist with either.
- Distinct situation and Why opening: Imagine a free cooking blog where readers follow recipes and view photos. The team needs funding without charging readers or waiting for individual sponsors, and can reserve labeled space for advertisers.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/advertising.md), [KO](../../src/content/articles/ko/advertising.md), [JA](../../src/content/articles/ja/advertising.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Advertiser money reaches the publisher through an ad service. Readers receive recipes without paying in this example. Settlement timing, rate and valid-impression rules depend on the ad agreement; no earnings amount is simulated.
- Visual structure: `Advertising.astro` owns its markup, spacing and state. Caption: Advertisers fund placements around content.
- Initial and changed states: A fictional cooking blog keeps articles open. An advertiser funds a labeled placement through a network; the publisher supplies space and readers see the message. The diagram names each role without promising impressions, clicks or income. Settlement details and fees are omitted.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="advertising"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/advertising.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Advertiser funds placement; advantages: Can support open access; limitations: Attention and trust costs; suitable: Content with suitable placements; combinations: Paid access or sponsorship
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/advertising-320.png`, `artifacts/design-demos/advertising-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Google AdMob: ad formats](https://support.google.com/admob/answer/6128738?hl=en) (checked 2026-09-27): Describes advertising formats; placement alone does not guarantee revenue.

## Strong teaching case — 2026-09-27

Advertiser payment lane differs from reader content/attention lane; no revenue prediction.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
