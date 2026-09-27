# Rewarded ads / リワード広告 / 보상형 광고

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `rewarded-ads`; `ad-formats`. Existing URLs and comment identity retained.
- Definition and selection: Offer an optional ad for a clearly stated in-product reward.
- Closest options and concrete difference: A language quiz fits a rewarded ad when the player can choose one extra hint and continue normally without it. Interstitial ads do not require this reward exchange. The choice must stay voluntary and the promised benefit understandable before viewing.
- Distinct situation and Why opening: Imagine a language quiz where players request hints. Some want one without paying or watching an ad they did not choose.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/rewarded-ads.md), [KO](../../src/content/articles/ko/rewarded-ads.md), [JA](../../src/content/articles/ja/rewarded-ads.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The player opts in for one non-transferable hint. Completing the simulated viewing grants it once; interruption grants zero. Advertiser payment and platform settlement are separate, and no real ad or cash reward exists here.
- Visual structure: `RewardedAds.astro` owns its markup, spacing and state. Caption: Optional participation with a stated completion reward.
- Initial and changed states: A fictional language quiz app offers one non-transferable hint for completing one simulated ad. Choose participation, then complete or interrupt it. Completion adds one hint once; interruption adds none, and normal play remains available. Repeated completion cannot duplicate that reward. No ad request or money transfer occurs; revenue and network charges are omitted.
- Repetition, empty/failure and constraints: Deduplicate reward events and validate completion with the supported provider mechanism. Handle no-fill, interruption and retries without blocking ordinary play. The local state machine cannot establish real ad completion or validate production policy compliance.
- Controls and state selectors: `data-money`, `data-contract-context`, `data-opt-in`, `data-skip`, `data-ad-state`, `data-complete`, `data-rewards`, `data-play`, `data-plays`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="rewarded-ads"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/rewarded-ads.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Opt-in completion reward; advantages: User chooses participation; limitations: Completion must grant reward once; suitable: Optional in-app benefits; combinations: Freemium and advertising revenue
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/rewarded-ads-320.png`, `artifacts/design-demos/rewarded-ads-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Google AdMob: rewarded ad policies](https://support.google.com/admob/answer/7313578?hl=en) (checked 2026-09-27): Requires clear opt-in and reward terms; allowed rewards and implementation depend on current provider policy.

## Strong teaching case — 2026-09-27

Opt-in, completion and reward occupy separate stages; skipping grants nothing.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
