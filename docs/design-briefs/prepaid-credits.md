# Prepaid credits / 前払いクレジット / 선불 크레딧

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `prepaid-credits`; `billing`. Existing URLs and comment identity retained.
- Definition and selection: Collect before consumption and spend a bounded credit balance.
- Closest options and concrete difference: A poster exporter fits prepayment when a classroom wants a bounded allowance before consuming resources. Postpaid usage billing charges after measurement; subscription access usually follows a time period. Credits define a balance, not necessarily a currency or a renewal interval.
- Distinct situation and Why opening: Imagine teachers exporting classroom posters. Before making a large set, one teacher needs a clear spending limit.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/prepaid-credits.md), [KO](../../src/content/articles/ko/prepaid-credits.md), [JA](../../src/content/articles/ja/prepaid-credits.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: A purchased allowance starts at 1,000 credits; each export consumes one. After 100, 300 and 600 exports the balances are 900, 600 and zero. A further export is blocked until top-up; purchase price and expiry are unspecified.
- Visual structure: `PrepaidCredits.astro` owns its markup, spacing and state. Caption: Buy a balance before consuming units.
- Initial and changed states: A fictional classroom poster exporter starts with 1,000 credits, spending one per export. Run the shared months of 100, 300 and 600 exports: balances become 900, 600 and zero. Any further export is blocked until a simulated top-up. Credits here do not expire; purchase price, taxes, fees and refunds are omitted.
- Repetition, empty/failure and constraints: Keep purchase, reservation, consumption and refunds in a durable ledger. Prevent duplicate deduction and negative balances under concurrency. Define expiration and failed-work refunds explicitly. This local example resets on reload and stores no purchased value.
- Controls and state selectors: `data-money`, `data-contract-context`, `data-balance`, `data-progress`, `data-quantity`, `data-consume`, `data-topup`, `data-spend`, `data-spent`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="prepaid-credits"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/prepaid-credits.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Pre-funded usage balance; advantages: Visible spending boundary; limitations: Top-ups and expiry rules; suitable: Budgeted consumption; combinations: Usage metering
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/prepaid-credits-320.png`, `artifacts/design-demos/prepaid-credits-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe: billing credits](https://docs.stripe.com/billing/subscriptions/usage-based/billing-credits) (checked 2026-09-27): Credit grants can offset eligible usage invoices; this demo uses application credits rather than claiming identical provider settlement behavior.

## Strong teaching case — 2026-09-27

Large finite wallet balance exposes spending and insufficient-credit outcomes.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
