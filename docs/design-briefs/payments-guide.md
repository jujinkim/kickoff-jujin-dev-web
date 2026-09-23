# Payments guide infographic

- Stable ID: `payments`; guide in English, Korean and Japanese.
- Definition: Verified payment evidence must be reconciled with one purchase and its promised entitlement before access is granted.
- Nearest neighbor: seller responsibility decides the contractual seller; this guide follows the payment-to-access path.
- Distinguishing visual features: four-step server verification path and two separate duplicate/failure branches.
- Situation: a customer buys one digital course; a return to the browser can occur before final payment evidence.
- Mode: `static`; no checkout button, real provider call or simulated fulfillment.
- Observable result: the access record appears only after a trusted, verified completion state; duplicate delivery does not grant twice; failed payment grants nothing.
- Mobile order: buyer, provider, server, access record, branches. Path uses one column below 420px of figure width.
- Accessibility: semantic ordered list, named branches and complete text without JavaScript; no false interactive controls.
- Capture: `[data-demo="payments"]` in `src/data/design-demos.json`; localized thumbnails.
- Sources checked 2026-09-23: [Stripe post-payment events](https://docs.stripe.com/payments/existing-customers?platform=web&ui=stripe-hosted) says fulfillment from landing page alone is unreliable; [Stripe fulfillment](https://docs.stripe.com/checkout/fulfillment) documents verified events and repeated delivery handling. The exact event and entitlement policy depend on provider and product.
- Comparison summary: guide has no comparison metadata. Existing AI prompt retains seller, product, access and recovery decisions.
- Verification: normal sequential repository gates, three localized thumbnails, mobile/desktop themes and JavaScript-off browser review.
