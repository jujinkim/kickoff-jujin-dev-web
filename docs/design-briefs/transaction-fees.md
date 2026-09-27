# Transaction fees / 取引仲介手数料 / 거래 중개 수수료

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `transaction-fees`; `revenue-sources`. Existing URLs and comment identity retained.
- Definition and selection: Take a share of completed marketplace transactions.
- Closest options and concrete difference: A craft marketplace can charge when it helps a seller complete a sale. Sponsorship funds the resource independently of sales; affiliate commission rewards an external referral. A marketplace may also charge subscriptions, but each charge needs a clear service.
- Distinct situation and Why opening: Imagine a craft market where makers list goods and buyers order. Fixed charges reach makers even on weeks without a sale.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/transaction-fees.md), [KO](../../src/content/articles/ko/transaction-fees.md), [JA](../../src/content/articles/ja/transaction-fees.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The buyer pays 100; the fictional 10% fee allocates 10 to the platform and 90 to the maker. The buyer receives the craft item. This allocation does not establish which party is the legal seller or who funds refunds.
- Visual structure: `TransactionFees.astro` owns its markup, spacing and state. Caption: A platform takes a share of a mediated sale.
- Initial and changed states: A fictional craft marketplace processes a 100 sale, retains a 10 platform fee and allocates 90 to the maker. Stripe Connect illustrates application-fee flows; this is a simplified allocation, not its transfer sequence. Taxes, processing fees and refunds are omitted, so 10 is not profit.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: max-width:400px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="transaction-fees"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/transaction-fees.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Fee on mediated sale; advantages: Revenue follows transactions; limitations: Disputes and operating costs; suitable: Useful two-sided marketplaces; combinations: Subscription plus seller contract
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/transaction-fees-320.png`, `artifacts/design-demos/transaction-fees-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe Connect: application fees](https://docs.stripe.com/connect/marketplace/tasks/app-fees) (checked 2026-09-27): Application fees allocate funds to a platform; liability depends on the chosen charge configuration.

## Strong teaching case — 2026-09-27

A 100-unit sale splits into unequal 90 and 10 allocations; fee is not profit.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
