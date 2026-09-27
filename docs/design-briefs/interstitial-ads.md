# Interstitial ads / インタースティシャル広告 / 전면 광고

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `interstitial-ads`; `ad-formats`. Existing URLs and comment identity retained.
- Definition and selection: Show full-screen ads at natural task breaks.
- Closest options and concrete difference: A level puzzle has a clear break after completion and before the next stage. A banner preserves the task alongside the ad; rewarded ads offer a voluntary benefit. An interstitial should not interrupt an unfinished move or be mistaken for required game input.
- Distinct situation and Why opening: Imagine a puzzle game where players finish short levels. A sponsor needs a full-screen message between levels; showing it during play breaks focus, while a permanent banner competes with the controls.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/interstitial-ads.md), [KO](../../src/content/articles/ko/interstitial-ads.md), [JA](../../src/content/articles/ja/interstitial-ads.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The sequence shows stage completion, a labeled full-screen ad, then the next stage. An advertiser would pay under separate delivery terms; the player receives no reward. The close label is explanatory, not a live ad control.
- Visual structure: `InterstitialAds.astro` owns its markup, spacing and state. Caption: A full-screen ad at a natural transition.
- Initial and changed states: A fictional level puzzle app shows a numbered sequence: level complete, labeled full-screen ad, next level. The closing action is drawn as a label in this static diagram, not a working ad control. No ad is requested and no reward is promised. Timing, revenue and network charges are omitted.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: max-width:520px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="interstitial-ads"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/interstitial-ads.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Full-screen transition placement; advantages: Uses a natural break; limitations: Interrupts app flow; suitable: Clear level or task boundaries; combinations: Advertising revenue
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/interstitial-ads-320.png`, `artifacts/design-demos/interstitial-ads-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Google AdMob: ad formats](https://support.google.com/admob/answer/6128738?hl=en) (checked 2026-09-27): Interstitials cover the interface and are intended for natural transition points.

## Strong teaching case — 2026-09-27

Full-screen ad dominates a before/ad/after sequence.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
