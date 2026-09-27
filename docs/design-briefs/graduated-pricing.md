# Graduated pricing / 区分別累進単価 / 구간별 누진 단가

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `graduated-pricing`; `pricing-models`. Existing URLs and comment identity retained.
- Definition and selection: Price each quantity band separately and add the subtotals.
- Closest options and concrete difference: A worksheet maker may discount additional exports while preserving the price of earlier work. Volume pricing changes the rate for all units at a threshold. Base plus overage charges a base with included units; these are different formulas even with similar breakpoints.
- Distinct situation and Why opening: Imagine teachers exporting worksheets from a design tool. A school wants cheaper later exports without repricing earlier ones.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/graduated-pricing.md), [KO](../../src/content/articles/ko/graduated-pricing.md), [JA](../../src/content/articles/ja/graduated-pricing.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The customer pays 0.20 for each of the first 100 monthly exports and 0.10 thereafter. At 120, the bill is 20 + 2 = 22; at 101 it is 20.10. Zero usage costs zero in this offer.
- Visual structure: `GraduatedPricing.astro` owns its markup, spacing and state. Caption: Each slice keeps its own unit price.
- Initial and changed states: A fictional worksheet maker has three seats and 120 monthly exports. The first 100 cost 0.20 each; later exports cost 0.10 each. Thus 100 × 0.20 + 20 × 0.10 = 22. Change usage: 100 costs 20, 101 costs 20.10 and zero costs zero. Taxes, fees, refunds and tier flat fees are omitted.
- Repetition, empty/failure and constraints: State inclusive boundaries and calculate with exact currency units. Test 0, 100, 101 and 120. Flat tier fees, entitlement enforcement, seller duties and payment collection are outside this calculator; do not infer them from the subtotal table.
- Controls and state selectors: `data-money`, `data-contract-context`, `data-quantity`, `data-less`, `data-more`, `data-total`, `data-formula`, `data-peer`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: max-width:450px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="graduated-pricing"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/graduated-pricing.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Sum separately priced slices; advantages: Earlier units keep their rate; limitations: More calculation to explain; suitable: Progressive usage discounts; combinations: Usage metering and subscriptions
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/graduated-pricing-320.png`, `artifacts/design-demos/graduated-pricing-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe: tiered pricing](https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing) (checked 2026-09-27): Graduated pricing sums the units priced in each tier instead of repricing earlier units.

## Strong teaching case — 2026-09-27

100 to 101 adds only the later slice: 20 to 20.10.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
