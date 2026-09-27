# Affiliate commissions / アフィリエイト手数料 / 제휴 수수료

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `affiliate-marketing`; `revenue-sources`. Existing URLs and comment identity retained.
- Definition and selection: Earn a referral commission when an external purchase qualifies.
- Closest options and concrete difference: A hiking book guide fits affiliate links when readers leave to buy relevant books. Advertising pays under placement contracts; a transaction fee fits a marketplace involved in its own sellers’ transactions. A referral site need not become the retailer.
- Distinct situation and Why opening: Imagine a hiking-book guide with reviews and shop links. Readers can buy elsewhere, but those referrals do not automatically fund the guide.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/affiliate-marketing.md), [KO](../../src/content/articles/ko/affiliate-marketing.md), [JA](../../src/content/articles/ja/affiliate-marketing.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The reader pays the external shop; a qualifying purchase may produce commission for the guide. Clicks alone do not create payment or an access entitlement. The shop handles the book sale under its own terms.
- Visual structure: `AffiliateMarketing.astro` owns its markup, spacing and state. Caption: Qualifying referrals can earn a commission.
- Initial and changed states: A fictional hiking book guide labels a referral link to a bookshop. A reader buys there; the shop pays the publisher a commission if its conditions are met. Amazon Associates provides one contractual example, not universal rates or rules. The diagram excludes settlement timing, fees and refunds.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="affiliate-marketing"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/affiliate-marketing.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Commission on qualifying referrals; advantages: No need to sell referred item; limitations: Program eligibility dependency; suitable: Relevant disclosed recommendations; combinations: Customer direct payment
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/affiliate-marketing-320.png`, `artifacts/design-demos/affiliate-marketing-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Amazon Associates: operating agreement](https://affiliate-program.amazon.com/help/operating/agreement) (checked 2026-09-27): Commissions depend on qualifying activity and program terms, including disclosure obligations.

## Strong teaching case — 2026-09-27

Referral, external purchase and conditional commission form three steps.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
