# Per-seat pricing / 席数課金 / 좌석 과금

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `per-seat-pricing`; `pricing-models`. Existing URLs and comment identity retained.
- Definition and selection: Scale price with licensed people when access per person drives value.
- Closest options and concrete difference: A clinic scheduler fits seats when each licensed staff member receives access. Flat pricing suits a fixed team bundle; metered usage suits processing cost independent of headcount. A seat plan can include usage limits without charging per export.
- Distinct situation and Why opening: Imagine a clinic scheduler with accounts for staff. One price for a two-person clinic and a large office ignores team size.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/per-seat-pricing.md), [KO](../../src/content/articles/ko/per-seat-pricing.md), [JA](../../src/content/articles/ja/per-seat-pricing.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The clinic pays 8 per licensed seat each month: three seats cost 24 and four cost 32. Export count does not change this formula. Zero seats quote zero here; activation requirements remain outside the model.
- Visual structure: `PerSeatPricing.astro` owns its markup, spacing and state. Caption: Charge for each licensed seat.
- Initial and changed states: A fictional clinic scheduler begins with three licensed seats and 120 monthly exports. At 8 per seat monthly, the total is 24. Change the seat count: four costs 32; zero costs zero in this example. Exports do not change this calculation. Proration, taxes, fees and refunds are omitted.
- Repetition, empty/failure and constraints: Define invited, active and billable users, and how seat removal affects access. Set billing snapshots and proration before implementation. This calculator accepts whole seats and excludes minimum charges, taxes, refunds and real invoices.
- Controls and state selectors: `data-money`, `data-contract-context`, `data-quantity`, `data-less`, `data-more`, `data-total`, `data-formula`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: max-width:480px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="per-seat-pricing"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/per-seat-pricing.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Count times seat price; advantages: Scales with licensed access; limitations: Billable seat definition needed; suitable: Team access products; combinations: Subscription or feature packages
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/per-seat-pricing-320.png`, `artifacts/design-demos/per-seat-pricing-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe: pricing models](https://docs.stripe.com/products-prices/pricing-models) (checked 2026-09-27): Per-seat pricing multiplies a unit rate by seat quantity; the seat definition is product-specific.

## Strong teaching case — 2026-09-27

One, three and thirty seats produce charges of 8, 24 and 240.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
