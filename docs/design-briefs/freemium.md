# Freemium / フリーミアム / 프리미엄 무료 모델

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `freemium`; `access-strategies`. Existing URLs and comment identity retained.
- Definition and selection: Keep a useful free tier while selling additional capabilities.
- Closest options and concrete difference: A personal notebook fits freemium when ordinary editing remains valuable without payment. A free trial instead ends or limits access after a defined evaluation period. Freemium can also offer a time-limited trial of its paid tier.
- Distinct situation and Why opening: Imagine a personal notebook for saving and finding notes. Everyone needs useful basics, while PDF export costs extra to provide.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/freemium.md), [KO](../../src/content/articles/ko/freemium.md), [JA](../../src/content/articles/ja/freemium.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The user edits for free after day three, while PDF export requires paid access. The paid button changes entitlement locally; price, billing interval and seller terms are unspecified. No payment is processed.
- Visual structure: `Freemium.astro` owns its markup, spacing and state. Caption: A lasting free tier with optional paid features.
- Initial and changed states: A fictional personal notebook starts with free editing and locked PDF export. Try each feature, advance the shared three-day clock, then explicitly upgrade: editing stays free, while upgrading unlocks export. Unlike the trial, passing day three does not remove free editing. No money moves; prices, taxes, fees and refunds are omitted.
- Repetition, empty/failure and constraints: Make the free promise clear and enforce paid features consistently. Explain downgrade and data access without surprising loss. This demo resets on reload; production needs server-side entitlements and an explicit failed-payment policy.
- Controls and state selectors: `data-money`, `data-contract-context`, `data-plan`, `data-edit-access`, `data-export-access`, `data-day`, `data-day-next`, `data-edit`, `data-export`, `data-actions`, `data-upgrade`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: max-width:350px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="freemium"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/freemium.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Ongoing free feature scope; advantages: Users can stay free; limitations: Free tier needs funding; suitable: Useful optional enhancements; combinations: Subscriptions or non-consumables
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/freemium-320.png`, `artifacts/design-demos/freemium-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Apple: business models](https://developer.apple.com/app-store/business-models/) (checked 2026-09-27): Describes free access with paid additions; specific features and duration depend on the product offer.

## Strong teaching case — 2026-09-27

Free editing persists as days advance; paid export is a separate feature boundary.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
