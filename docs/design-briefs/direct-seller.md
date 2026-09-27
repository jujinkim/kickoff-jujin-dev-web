# Direct seller model / 直接販売者モデル / 직접 판매자 모델

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `direct-seller`; `seller-responsibility`. Existing URLs and comment identity retained.
- Definition and selection: Own the sales contract and its seller duties.
- Closest options and concrete difference: A language lesson business may retain the customer sales contract to control its offer and relationship. A merchant of record can take agreed seller duties for supported products and markets. Direct selling preserves control while requiring operational capacity.
- Distinct situation and Why opening: Imagine selling language lessons on your site. Buyers may request refunds; the business wants to remain the seller and accepts receipt, refund, and tax work.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/direct-seller.md), [KO](../../src/content/articles/ko/direct-seller.md), [JA](../../src/content/articles/ja/direct-seller.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The learner pays for a lesson license from the business. The business is the seller for receipts, refunds and transaction-tax duties in this diagram; a processor handles payment. Price, renewal and entitlement duration are independent choices.
- Visual structure: `DirectSeller.astro` owns its markup, spacing and state. Caption: The product business remains the seller.
- Initial and changed states: A fictional language lesson license names the business on the sale. The processor handles payment; the business owns the illustrated receipt, refund and transaction-tax workflows and delivers the product. The responsibility map describes this assumed contract, not every provider arrangement. Amounts and country-specific tax rules are intentionally absent.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="direct-seller"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/direct-seller.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Business is contractual seller; advantages: Control over sales relationship; limitations: Seller obligations remain; suitable: Capacity to operate sales; combinations: Processor plus billing method
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/direct-seller-320.png`, `artifacts/design-demos/direct-seller-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe: merchant of record](https://stripe.com/resources/more/merchant-of-record) (checked 2026-09-27): Distinguishes the merchant responsible for the transaction from payment processing.

## Strong teaching case — 2026-09-27

One seller owns receipt, refund/tax workflow and product support under the example agreement.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
