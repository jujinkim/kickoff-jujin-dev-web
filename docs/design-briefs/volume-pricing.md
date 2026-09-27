# Volume pricing / 全数量段階単価 / 전체 수량 구간 단가

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `volume-pricing`; `pricing-models`. Existing URLs and comment identity retained.
- Definition and selection: Apply the reached quantity tier’s rate to every unit.
- Closest options and concrete difference: A print shop may want a large order to receive one lower rate across the whole batch. Graduated pricing discounts only later units, avoiding this model’s possible total-price drop. Base plus overage includes an allowance before charging excess units.
- Distinct situation and Why opening: Imagine a print-shop tool that exports poster designs. Shops need to know whether a bulk discount covers every export or only later ones.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/volume-pricing.md), [KO](../../src/content/articles/ko/volume-pricing.md), [JA](../../src/content/articles/ja/volume-pricing.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The customer’s monthly rate is 0.20 up to 100 exports, then 0.10 for every export. Thus 100 costs 20, 101 costs 10.10, and 120 costs 12. Access capacity and the seller’s delivery promise are separate from this price formula.
- Visual structure: `VolumePricing.astro` owns its markup, spacing and state. Caption: The final quantity selects one rate for all units.
- Initial and changed states: A fictional print shop design tool has three seats and 120 monthly exports. The rate is 0.20 through 100 exports, then 0.10 for all exports. Thus 120 costs 12. Change usage: 100 costs 20, but 101 costs 10.10; zero costs zero. Taxes, fees, refunds and tier flat fees are omitted.
- Repetition, empty/failure and constraints: Test zero and both sides of every threshold. Explain the downward price jump openly; do not substitute a graduated calculation. No flat fees, taxes, refunds or minimum charge are included in this fictional model.
- Controls and state selectors: `data-money`, `data-contract-context`, `data-quantity`, `data-less`, `data-more`, `data-total`, `data-formula`, `data-peer`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="volume-pricing"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/volume-pricing.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: One rate applies to all units; advantages: Whole-quantity discount; limitations: Total can drop at threshold; suitable: Intentional volume discounts; combinations: Usage metering and subscriptions
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/volume-pricing-320.png`, `artifacts/design-demos/volume-pricing-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe: tiered pricing](https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing) (checked 2026-09-27): Volume pricing applies the selected tier to all units and can lower totals at a boundary.

## Strong teaching case — 2026-09-27

100 to 101 changes every unit's rate: 20 to 10.10; discontinuity is explicit.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
