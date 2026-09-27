# Base fee plus overage / 基本料＋超過利用量 / 기본료+초과 사용량

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `base-plus-overage`; `pricing-models`. Existing URLs and comment identity retained.
- Definition and selection: Combine an included allowance with a charge for excess usage.
- Closest options and concrete difference: A podcast tool fits this model when a recurring allowance funds availability but heavy users create extra processing cost. Flat pricing keeps one bundle price; pure usage pricing can start at zero. The base and overage must both be visible before use.
- Distinct situation and Why opening: Imagine a podcast service that transcribes and exports episodes. Quiet months still cost money; busy months add processing.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/base-plus-overage.md), [KO](../../src/content/articles/ko/base-plus-overage.md), [JA](../../src/content/articles/ja/base-plus-overage.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The customer pays 20 monthly including 100 transcript exports, plus 0.10 per excess export. At 120 the total is 22; at zero or 100 it remains 20. Three seats are context, not a multiplier.
- Visual structure: `BasePlusOverage.astro` owns its markup, spacing and state. Caption: Pay a base, then only for excess usage.
- Initial and changed states: A fictional podcast transcript tool has three seats and 120 monthly exports. The monthly base is 20, including 100 exports; each extra export costs 0.10. Total: 20 + 20 × 0.10 = 22. Change usage: zero and 100 both cost 20; 101 costs 20.10. Taxes, fees and refunds are omitted.
- Repetition, empty/failure and constraints: Show remaining allowance, overage rate and spending controls. Define whether unused allowance expires or rolls over; this demo uses a single month without rollover. Validate metering and billing separately from access and seller responsibilities.
- Controls and state selectors: `data-money`, `data-contract-context`, `data-quantity`, `data-less`, `data-more`, `data-total`, `data-formula`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="base-plus-overage"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/base-plus-overage.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Base plus excess units; advantages: Covers baseline service; limitations: Base charged at zero usage; suitable: Fixed and variable costs; combinations: Subscription and usage metering
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/base-plus-overage-320.png`, `artifacts/design-demos/base-plus-overage-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe: usage-based billing](https://docs.stripe.com/billing/usage-based) (checked 2026-09-27): Usage billing can combine fixed and variable charges; the included allowance is this example’s offer.

## Strong teaching case — 2026-09-27

Zero and 100 cost base 20; 101 adds only 0.10.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
