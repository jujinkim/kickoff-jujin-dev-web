# Consumable purchase / 消耗型購入 / 소모성 구매

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `consumable-purchase`; `purchase-types`. Existing URLs and comment identity retained.
- Definition and selection: Sell units that are spent when used and can be bought again.
- Closest options and concrete difference: A crossword fits consumables when each hint has a separate use. A non-consumable purchase unlocks a lasting feature, while a subscription grants time-based access. Consumable units can exist beside either without making permanent unlocks consumable.
- Distinct situation and Why opening: Imagine a crossword app offering hints while players solve clues. Each hint is spent; a permanent unlock misrepresents that choice.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/consumable-purchase.md), [KO](../../src/content/articles/ko/consumable-purchase.md), [JA](../../src/content/articles/ja/consumable-purchase.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: A player buys a pack of three hints and spends one per use. At zero, use is blocked; another purchase adds three. Pack price and storefront seller terms are unspecified; all purchases here are local simulations.
- Visual structure: `ConsumablePurchase.astro` owns its markup, spacing and state. Caption: Purchased units decrease when used.
- Initial and changed states: A fictional crossword app starts with zero hints. Buy three, then use hints repeatedly: the balance falls to zero and further use is blocked. Buying another pack adds three again. This is a local simulation; no purchase is processed. Prices, taxes, fees and refunds are omitted. Reset or reload clears the example.
- Repetition, empty/failure and constraints: Validate receipts and grant each transaction once before allowing spend. Decide cross-device balance, refunds and offline behavior. Local duplicate-click protection is useful but does not replace a server ledger or platform transaction processing.
- Controls and state selectors: `data-money`, `data-contract-context`, `data-inventory`, `data-purchases`, `data-buy`, `data-use`, `data-uses`, `data-reset`, `data-applied`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: max-width:450px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="consumable-purchase"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/consumable-purchase.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Units consumed through use; advantages: Repeatable purchases; limitations: Balance and spending need clarity; suitable: Optional consumable items; combinations: Freemium access
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/consumable-purchase-320.png`, `artifacts/design-demos/consumable-purchase-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Apple: in-app purchase types](https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types) (checked 2026-09-27): Consumables deplete with use; store receipts and fulfillment are outside this browser model.

## Strong teaching case — 2026-09-27

Inventory is spent down; further use requires an available balance.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
