# Customer direct payment / 顧客の直接支払い / 고객 직접 결제

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `direct-payment`; `revenue-sources`. Existing URLs and comment identity retained.
- Definition and selection: Users fund access when its value supports payment.
- Closest options and concrete difference: Reader payment fits a newspaper whose audience values access enough to fund it. Advertising fits a different priority: keeping reader access open while selling attention. Sponsorship can support public access without selling each reader an entitlement. These sources can coexist.
- Distinct situation and Why opening: Imagine an online neighborhood newspaper where residents read reports and event notices. The small team needs to fund each issue and prefers payment from readers who value it over selling ad space or seeking sponsors.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/direct-payment.md), [KO](../../src/content/articles/ko/direct-payment.md), [JA](../../src/content/articles/ja/direct-payment.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The reader pays 12 for newspaper access. Billing frequency and access duration are unspecified; the publisher supplies reports. The processor handles payment, while the seller contract determines receipts and refunds.
- Visual structure: `DirectPayment.astro` owns its markup, spacing and state. Caption: Customers fund access to the product.
- Initial and changed states: A fictional neighborhood newspaper receives 12 from a reader and grants access. The diagram separates payment from content delivery. A processor may carry the payment without becoming the seller. Amounts are illustrative; taxes, processing fees and refunds are omitted.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="direct-payment"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/direct-payment.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Customer funds access; advantages: Value and payer align; limitations: Payment may limit access; suitable: Products with paid value; combinations: Subscription or one-time billing
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/direct-payment-320.png`, `artifacts/design-demos/direct-payment-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe Checkout](https://docs.stripe.com/payments/checkout) (checked 2026-09-27): Checkout collects customer payments; a payment form does not define entitlement or seller status.

## Strong teaching case — 2026-09-27

Customer money and access return form a two-way exchange; processor role stays separate.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
