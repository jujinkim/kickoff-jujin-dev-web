# Feature-tiered pricing / 機能別料金プラン / 기능별 요금제

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `feature-tiered-pricing`; `pricing-models`. Existing URLs and comment identity retained.
- Definition and selection: Price distinct capabilities when customers need different feature sets.
- Closest options and concrete difference: A photo editor fits feature plans when some teams need approval workflows and others only export. Per-seat pricing tracks people; graduated and volume pricing track quantity. Feature plans can use either quantity model, but their defining difference is capability.
- Distinct situation and Why opening: Imagine a photo editor for individuals and studios. Both export images, but only studios need approval before publication.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/feature-tiered-pricing.md), [KO](../../src/content/articles/ko/feature-tiered-pricing.md), [JA](../../src/content/articles/ja/feature-tiered-pricing.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The team pays 20 for Basic exports or 35 for Pro with approvals each month. Both include up to five seats and 200 exports. Three seats and 120 exports therefore isolate the price difference caused by features.
- Visual structure: `FeatureTieredPricing.astro` owns its markup, spacing and state. Caption: Packages differ by included capabilities.
- Initial and changed states: A fictional photo editor has three seats and 120 monthly exports. Basic costs 20 and includes exporting; Pro costs 35 and adds approval workflows. Both cover this baseline, up to five seats and 200 exports. The static table contrasts features, not per-unit discounts. All prices are fictional; taxes, fees and refunds are omitted.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="feature-tiered-pricing"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/feature-tiered-pricing.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Different feature packages; advantages: Matches distinct needs; limitations: Package boundaries can confuse; suitable: Products with optional capabilities; combinations: Subscription or seat pricing
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/feature-tiered-pricing-320.png`, `artifacts/design-demos/feature-tiered-pricing-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe: pricing models](https://docs.stripe.com/products-prices/pricing-models) (checked 2026-09-27): Pricing models distinguish package offers from quantity-based tiers; this example changes capabilities at fixed capacity.

## Strong teaching case — 2026-09-27

Same quantity allowance; the approvals row exposes the feature-entitlement difference.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
