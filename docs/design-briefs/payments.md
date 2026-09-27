# Payment channels, PG, and merchant of record / 決済経路とPG・MoR：TossとLemon Squeezy / 결제 채널과 PG·MoR: 토스·Lemon Squeezy

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `payments`; `business`. Existing URLs and comment identity retained.
- Definition and selection: Link trusted payment evidence to repeat-safe access and clear seller duties.
- Closest options and concrete difference: Choose payment arrangements after confirming product, market and seller location. Direct selling retains transaction duties; a merchant of record takes the covered seller role under contract. Store billing matters only for the relevant distribution channel. A checkout provider name does not determine every responsibility.
- Distinct situation and Why opening: Imagine selling access to a digital course. Learners choose a course, pay through a checkout page, and expect access to open only after a confirmed payment. A digital-course buyer can land on a thank-you page while payment is still pending. A customer reaches a success page but never receives access, or repeated notifications grant the same purchase twice. A checkout screen alone cannot establish a trustworthy sale. You need to connect an order, verified payment evidence and exactly the entitlement promised, while making sales and support responsibilities explicit.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/payments.md), [KO](../../src/content/articles/ko/payments.md), [JA](../../src/content/articles/ja/payments.md); matching revision 7. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The digital course links order, provider payment and entitlement records. A pending result does not unlock the course. Duplicate verified events preserve one entitlement; a paid order with failed fulfillment remains recoverable without creating another charge.
- Visual structure: `PaymentsGuide.astro` owns its markup, spacing and state. Caption: Verified payment before access
- Initial and changed states: 1. Define the sale before integrating a button: product, price, currency, customer identity, access duration and refund behavior. Decide who is the contractual seller and who answers support requests. A payment processor and an outsourced seller do not take on identical responsibilities; examine the actual agreement. 2. Create an order on the trusted server using the agreed catalog price. Associate it with the provider's checkout or payment identifier. Browser-provided amounts and a visit to a success URL are not sufficient proof that the expected order was paid. 3. Receive the provider's verified event or query its trusted payment record. Check the order, currency, amount and relevant completion state. Some methods finish later, so show pending rather than granting access merely because the checkout flow returned. Follow the provider's authentication and event-verification procedure. 4. Make processing safe to repeat. Store which payment has produced which entitlement, and ensure concurrent or retried processing cannot grant it again. If recording access fails after payment, retain a recoverable state and retry that operation. Starting another charge is not a substitute for recovering fulfillment. 5. Exercise the difficult paths in a test environment: duplicate event, delayed success, failure, interrupted browser return and refund. Confirm both the payment record and the product's access record. A successful redirect test does not cover missed notifications, and a payment refund does not automatically implement your application's access policy. Keep a support trail linking order, provider reference and entitlement state without exposing secrets. Define how an operator can identify a paid-but-unfulfilled order and recover it. Before release, verify supported products, countries and distribution channels against current agreements and platform rules. Do not infer obligations from the provider's marketing category alone. Agree how long an order may stay pending and what support message customers see while an unresolved payment is investigated.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: max-width:640px; max-width:420px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="payments"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/payments.md`, sourceRevision 7; selection/comparison, applications and implementation/limits.
- Comparison summaries: Guide compares choices in its walkthrough and supplementary selection section.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/payments-320.png`, `artifacts/design-demos/payments-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe: fulfill orders](https://docs.stripe.com/checkout/fulfillment) (checked 2026-09-27): Fulfillment must be safe when invoked more than once and must use trusted payment status rather than redirects.
- [Lemon Squeezy: merchant of record](https://docs.lemonsqueezy.com/help/payments/merchant-of-record) (checked 2026-09-27): Describes its covered seller duties; retained product duties and eligibility require the actual agreement.

## Strong teaching case — 2026-09-27

Verification ends at entitlement grant; duplicate/failure branches stay separate.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
