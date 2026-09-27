# Merchant of record model / MoRモデル / MoR 모델

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `merchant-of-record`; `seller-responsibility`. Existing URLs and comment identity retained.
- Definition and selection: Delegate covered seller duties through a seller-of-record contract.
- Closest options and concrete difference: A music practice app can choose a merchant of record to delegate agreed transaction duties across supported markets. Direct selling fits a team that needs the sales contract and can operate it. Compare coverage, fees and control, rather than assuming all intermediaries become sellers.
- Distinct situation and Why opening: Imagine a music-practice app sold in several countries. Buyers need receipts and help, but its small team cannot handle every market's sales duties.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/merchant-of-record.md), [KO](../../src/content/articles/ko/merchant-of-record.md), [JA](../../src/content/articles/ja/merchant-of-record.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The learner buys the practice license from the merchant of record, which later settles with the app business. The diagram assigns receipts, refunds and transaction-tax duties to that seller. The app business continues product delivery and support.
- Visual structure: `MerchantOfRecord.astro` owns its markup, spacing and state. Caption: A contracted seller handles covered transactions.
- Initial and changed states: For a fictional music practice license, the customer pays the MoR, which settles agreed proceeds to the business. The MoR owns the illustrated receipt, refund and transaction-tax workflows. The business still delivers the product and agreed product support. Amounts, exclusions and country-specific tax rules are outside this diagram.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="merchant-of-record"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/merchant-of-record.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Contracted transaction seller; advantages: Delegates covered sales operations; limitations: Contract and coverage limits; suitable: Eligible products and markets; combinations: Subscription plus product support
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/merchant-of-record-320.png`, `artifacts/design-demos/merchant-of-record-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe: merchant of record](https://stripe.com/resources/more/merchant-of-record) (checked 2026-09-27): Merchant-of-record duties concern the customer transaction; product and business duties do not all transfer.

## Strong teaching case — 2026-09-27

MoR sale duties and product-business support have separate table boundaries.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
