# Usage-based billing / 従量課金 / 사용량 기반 과금

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `usage-based`; `billing`. Existing URLs and comment identity retained.
- Definition and selection: Bill measured consumption when work varies by customer.
- Closest options and concrete difference: A map exporter suits metered billing when processing costs vary with exports. A subscription can provide predictable access; prepaid credits collect before use. Metered pricing may coexist with a subscription base, rather than replacing recurring billing.
- Distinct situation and Why opening: Imagine a map-export tool for reports. Some customers make a few images; others make hundreds, so one price hides usage differences.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/usage-based.md), [KO](../../src/content/articles/ko/usage-based.md), [JA](../../src/content/articles/ja/usage-based.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The customer pays 0.02 per export: 100, 300 and 600 exports cost 2, 6 and 12. Zero exports cost zero here. Payment timing, access limits and seller responsibilities still need contract terms.
- Visual structure: `UsageBased.astro` owns its markup, spacing and state. Caption: Meter units, then calculate the charge.
- Initial and changed states: A fictional map image exporter charges 0.02 per export. Across months with 100, 300 and 600 exports, charges are 2, 6 and 12: total 20. Change month-one usage or add one export to update its charge and the total. Zero usage costs zero here. Taxes, fees and refunds are omitted.
- Repetition, empty/failure and constraints: Meter accepted work once, deduplicate retries and expose usage before the bill. Define failed-job treatment, late events, rounding and spending alerts. The browser calculator is not an authoritative meter or invoice ledger.
- Controls and state selectors: `data-money`, `data-contract-context`, `data-quantity`, `data-less`, `data-more`, `data-month-charge`, `data-total`, `data-formula`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="usage-based"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/usage-based.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Metered billable units; advantages: Charges track consumption; limitations: Bills vary with usage; suitable: Measurable consumption; combinations: Recurring collection or prepaid credits
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/usage-based-320.png`, `artifacts/design-demos/usage-based-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe: usage-based billing](https://docs.stripe.com/billing/usage-based) (checked 2026-09-27): Usage meters feed billing; the example chooses a simple per-export rate and monthly periods.

## Strong teaching case — 2026-09-27

Presets span zero to 10,000; monthly charge and three-month total remain distinct.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
