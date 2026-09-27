# Subscription, one-time payment, or ads? / サブスク・買い切り・広告：価値に合わせる / 구독·일회 결제·광고: 가치에 맞춰 청구하기

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `revenue`; `business`. Existing URLs and comment identity retained.
- Definition and selection: Connect payer, billing and access to explicit revenue and cost assumptions.
- Closest options and concrete difference: Subscription can fund continuing service, a one-time sale a bounded promise, and usage pricing variable consumption. Advertising changes who pays and what they buy. Compare the axes separately: payer, collection timing, formula, entitlement and seller responsibility. Several can coexist.
- Distinct situation and Why opening: Imagine running a small map-export tool. People make maps and share the results, while the team pays for processing and support each month. A product may have enthusiastic users and still run out of money. A monthly price chosen by copying a competitor says little about what customers receive or what it costs to deliver. You need to connect continuing value, willingness to pay and operating costs before selecting a billing label.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/revenue.md), [KO](../../src/content/articles/ko/revenue.md), [JA](../../src/content/articles/ja/revenue.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Change paid users, exports/user and fixed cost. Initial 500 revenue − 140 cost = 360; zero users leaves −100. Invalid input preserves the last valid estimate.
- Visual structure: `RevenueGuide.astro` owns its markup, spacing and state. Caption: Change fictional paying users, usage and costs to inspect the remainder
- Initial and changed states: Change paid users, exports/user and fixed cost. Initial 500 revenue − 140 cost = 360; zero users leaves −100. Invalid input preserves the last valid estimate.
- Repetition, empty/failure and constraints: These are fictional currency units and arithmetic, not demand forecasts or net profit. Taxes, payment fees, refunds, free-user usage and unlisted labor are omitted. Invalid inputs preserve the last valid estimate with an error; zero and negative remaining amounts stay visible. Nothing is saved or charged.
- Controls and state selectors: `data-valid`, `data-invalid`, `data-users`, `data-usage`, `data-fixed`, `data-gross`, `data-gross-formula`, `data-cost`, `data-cost-formula`, `data-remaining`, `data-reset`, `data-invalid-state`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: width < 540px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="revenue"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/revenue.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: Guide compares choices in its walkthrough and supplementary selection section.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/revenue-320.png`, `artifacts/design-demos/revenue-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Apple: business models](https://developer.apple.com/app-store/business-models/) (checked 2026-09-27): Product value and access can use different business models; no model guarantees profit.

## Strong teaching case — 2026-09-27

One-click assumptions produce -100, +360 and -1600 at the same per-user price.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
