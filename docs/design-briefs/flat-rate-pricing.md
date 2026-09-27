# Flat-rate pricing / 定額料金 / 정액 요금

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `flat-rate-pricing`; `pricing-models`. Existing URLs and comment identity retained.
- Definition and selection: Charge one package price when a predictable bundle matters most.
- Closest options and concrete difference: A meal planner fits a single bundle when households prefer predictable cost. Per-seat pricing scales with licensed people; feature tiers separate capabilities. Flat pricing can include limits and does not mean unlimited consumption.
- Distinct situation and Why opening: Imagine a meal planner where families try recipes and arrange dinners. They need a predictable bill as they use it.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/flat-rate-pricing.md), [KO](../../src/content/articles/ko/flat-rate-pricing.md), [JA](../../src/content/articles/ja/flat-rate-pricing.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The customer pays 20 per month for up to five seats and 200 exports. The baseline of three seats and 120 exports stays inside that bundle. The seller must explain what happens beyond either cap.
- Visual structure: `FlatRatePricing.astro` owns its markup, spacing and state. Caption: A fixed price for a defined package.
- Initial and changed states: A fictional meal planner has three seats and 120 monthly exports. Its package costs 20 per month, covering up to five seats and 200 exports. At this shared baseline, the amount stays 20. The diagram lists the package boundaries; behavior beyond them needs separate terms. Taxes, fees and refunds are omitted.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: max-width:400px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="flat-rate-pricing"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/flat-rate-pricing.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Fixed package amount; advantages: Predictable within limits; limitations: Package boundaries matter; suitable: Stable service bundles; combinations: Subscription billing
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/flat-rate-pricing-320.png`, `artifacts/design-demos/flat-rate-pricing-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe: pricing models](https://docs.stripe.com/products-prices/pricing-models) (checked 2026-09-27): Flat-rate pricing charges a package amount; usage caps and billing interval remain offer terms.

## Strong teaching case — 2026-09-27

One dominant fixed amount contains explicit seat/export allowances.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
