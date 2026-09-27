# One-time payment / 買い切り / 일회성 결제

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `one-time-payment`; `billing`. Existing URLs and comment identity retained.
- Definition and selection: Collect once when a bounded purchase can fund its promise.
- Closest options and concrete difference: A slide exporter can sell a bounded license once. Subscription better matches continuing service funded each period; usage billing links charges to measured exports. One payment does not inherently promise unlimited future hosting or updates.
- Distinct situation and Why opening: Imagine a tool that exports a slide package for download. Once delivered, a recurring charge is hard to justify.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/one-time-payment.md), [KO](../../src/content/articles/ko/one-time-payment.md), [JA](../../src/content/articles/ja/one-time-payment.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The customer pays 30 in month one and zero in months two and three despite 100, 300 and 600 exports. Access follows the example’s license; the product seller still owes whatever support the offer promises.
- Visual structure: `OneTimePayment.astro` owns its markup, spacing and state. Caption: One charge for a defined entitlement.
- Initial and changed states: A fictional slide exporter charges 30 in month one and zero in months two and three: total 30. The shared usage is 100, 300 and 600 exports. Here the license covers that example; taxes, fees and refunds are omitted. The timeline separates charges from usage.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: max-width:420px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="one-time-payment"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/one-time-payment.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: One charge; advantages: Clear purchase amount; limitations: Future service terms needed; suitable: Bounded deliverables; combinations: Non-consumable entitlement
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/one-time-payment-320.png`, `artifacts/design-demos/one-time-payment-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe Checkout](https://docs.stripe.com/payments/checkout) (checked 2026-09-27): Checkout supports one-time payment; entitlement duration is a separate product rule.

## Strong teaching case — 2026-09-27

Timeline emphasizes purchase charge 30 followed by 0 and 0 despite rising use.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
