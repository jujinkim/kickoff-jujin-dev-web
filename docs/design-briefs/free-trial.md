# Free trial / 無料トライアル / 무료 체험

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `free-trial`; `access-strategies`. Existing URLs and comment identity retained.
- Definition and selection: Offer time-limited evaluation before paid access is required.
- Closest options and concrete difference: A team planner fits a trial when teams need to evaluate editing and export together before deciding to pay. Freemium keeps a useful free tier indefinitely. A product can combine a free tier with a trial of paid capabilities.
- Distinct situation and Why opening: Imagine a team planner for tasks and schedules. Teams need to test its full paid workflow for days; a limited free tier cannot show whether it fits their week.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/free-trial.md), [KO](../../src/content/articles/ko/free-trial.md), [JA](../../src/content/articles/ja/free-trial.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Editing and PDF export work before day three, then lock. An explicit simulated paid choice restores both. This three-day policy does not auto-charge; price, paid period and the seller contract are outside the example.
- Visual structure: `FreeTrial.astro` owns its markup, spacing and state. Caption: Evaluate paid features for a limited period.
- Initial and changed states: A fictional team planner starts a three-day trial with editing and PDF export. Advance days manually: at day three both lock. Explicitly choose the simulated paid plan to restore access. No payment method is collected, and expiry never charges automatically in this example. Prices, taxes, fees and refunds are omitted.
- Repetition, empty/failure and constraints: Disclose end time, conversion terms, cancellation and data retention before signup. Use authoritative time and deduplicated payment events in production. A browser day counter demonstrates policy only; repeated upgrade clicks do not represent repeated charges.
- Controls and state selectors: `data-money`, `data-contract-context`, `data-day`, `data-day-next`, `data-plan`, `data-edit-access`, `data-export-access`, `data-edit`, `data-export`, `data-actions`, `data-upgrade`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: max-width:350px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="free-trial"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/free-trial.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Time-limited evaluation; advantages: Try paid capabilities; limitations: Expiry and conversion decisions; suitable: Value visible during trial; combinations: Subscription after explicit choice
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/free-trial-320.png`, `artifacts/design-demos/free-trial-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Stripe: subscription trials](https://docs.stripe.com/billing/subscriptions/trials) (checked 2026-09-27): Trial end behavior is configurable; automatic billing is not inherent to every trial.

## Strong teaching case — 2026-09-27

Large day counter and explicit expiry expose the time boundary for trial access.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
