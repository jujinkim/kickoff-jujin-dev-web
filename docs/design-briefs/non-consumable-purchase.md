# Non-consumable purchase / 非消耗型購入 / 비소모성 구매

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `non-consumable-purchase`; `purchase-types`. Existing URLs and comment identity retained.
- Definition and selection: Unlock a lasting capability without spending it on each use.
- Closest options and concrete difference: A night puzzle theme fits a lasting unlock because playing does not use up the theme. Consumable hints decrease with use; subscriptions depend on their access period. A non-consumable describes entitlement behavior, not every obligation associated with a one-time sale.
- Distinct situation and Why opening: Imagine a night puzzle selling a dark theme. A player buys it once and expects it in later sessions.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/non-consumable-purchase.md), [KO](../../src/content/articles/ko/non-consumable-purchase.md), [JA](../../src/content/articles/ja/non-consumable-purchase.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The player buys the theme once; using it or pressing purchase again does not increase the purchase count beyond one. The theme stays available within this demo session. Price and actual store restoration are not modeled.
- Visual structure: `NonConsumablePurchase.astro` owns its markup, spacing and state. Caption: A purchased entitlement survives repeated use.
- Initial and changed states: A fictional night puzzle app begins with its night theme locked. Buy it once, then apply it repeatedly: ownership stays unlocked and the purchase count remains one. Repeat purchase attempts do not charge again here. Real purchase restoration is outside this local simulation. Prices, taxes, fees and refunds are omitted; reset clears only the example.
- Repetition, empty/failure and constraints: Production must verify transactions, support restoration and handle revocations. Reload resets this educational example, not the definition of a non-consumable. Account changes and refunds need explicit entitlement rules rather than browser-only storage.
- Controls and state selectors: `data-money`, `data-contract-context`, `data-inventory`, `data-purchases`, `data-buy`, `data-use`, `data-uses`, `data-reset`, `data-applied`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: max-width:450px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="non-consumable-purchase"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/non-consumable-purchase.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Persistent purchased entitlement; advantages: Repeated use without depletion; limitations: Restoration needs implementation; suitable: Durable optional features; combinations: Freemium and one-time payment
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/non-consumable-purchase-320.png`, `artifacts/design-demos/non-consumable-purchase-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Apple: in-app purchase types](https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types) (checked 2026-09-27): Non-consumables do not expire or decrease through use; restoration requires platform entitlement handling.

## Strong teaching case — 2026-09-27

Entitlement persists across uses; repeated purchase remains idempotent.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
