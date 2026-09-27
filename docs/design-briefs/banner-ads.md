# Banner ads / バナー広告 / 배너 광고

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `banner-ads`; `ad-formats`. Existing URLs and comment identity retained.
- Definition and selection: Reserve a persistent ad slot when the task should remain visible.
- Closest options and concrete difference: A number puzzle can keep play visible above a reserved ad slot. Interstitials suit genuine transition points; rewarded ads require an optional exchange for a benefit. A banner should not masquerade as a puzzle control.
- Distinct situation and Why opening: Imagine a phone number puzzle with a board and controls. Sponsor messages must remain visible without covering play.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/banner-ads.md), [KO](../../src/content/articles/ko/banner-ads.md), [JA](../../src/content/articles/ja/banner-ads.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The reader plays for free while an advertiser would fund the labeled bottom placement. The example has no network, rate or reward. The publisher remains responsible for positioning and the product experience under the ad agreement.
- Visual structure: `BannerAds.astro` owns its markup, spacing and state. Caption: A labeled ad region beside the main content.
- Initial and changed states: A fictional number puzzle app shows its board above a labeled bottom banner, separated from game controls. The static diagram preserves the play area instead of covering it. No ad is requested and no reward is granted. Ad size, fill, revenue and network charges are intentionally outside this example.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="banner-ads"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/banner-ads.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Bounded on-screen placement; advantages: Content stays visible; limitations: Uses limited screen space; suitable: Screens with reserved space; combinations: Advertising revenue
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/banner-ads-320.png`, `artifacts/design-demos/banner-ads-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Google AdMob: ad formats](https://support.google.com/admob/answer/6128738?hl=en) (checked 2026-09-27): Banner ads occupy a portion of a screen; reserved space and accessible separation are implementation concerns.

## Strong teaching case — 2026-09-27

Small labeled bottom placement leaves the game board visible.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
