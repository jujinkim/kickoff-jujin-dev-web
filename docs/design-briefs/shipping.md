# Delivery and operations: where it runs, how it recovers / 配布と運用：実行環境と復旧基準を決める / 배포·운영: 실행 환경과 복구 기준 정하기

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `shipping`; `deployment`. Existing URLs and comment identity retained.
- Definition and selection: Connect an artifact to its users, checks, recovery path and responsible owner.
- Closest options and concrete difference: Choose a release procedure from artifact type, tolerated interruption, data loss and operator capacity. A small static catalog can use preview and reversible publication. Gradual exposure helps only when traffic and measurements support a meaningful comparison; it can add cost without evidence.
- Distinct situation and Why opening: Imagine finishing a public article catalog that readers will open from a browser. Editors need to release updates, readers need stable links, and someone must restore the site if a release fails. “It works on my computer” does not tell a user how to obtain the product or who restores it after a failure. A browser page, downloadable game and online multiplayer service have different delivery and operating needs. You need to connect the intended user experience to a repeatable release and a recoverable running system.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/shipping.md), [KO](../../src/content/articles/ko/shipping.md), [JA](../../src/content/articles/ja/shipping.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Static artifact/target/verification/recovery/owner runbook; application rollback and data recovery have distinct owners and limits.
- Visual structure: `ShippingGuide.astro` owns its markup, spacing and state. Caption: An artifact, release owner and separate data recovery path
- Initial and changed states: Static artifact/target/verification/recovery/owner runbook; application rollback and data recovery have distinct owners and limits.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: width < 440px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="shipping"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/shipping.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: Guide compares choices in its walkthrough and supplementary selection section.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/shipping-320.png`, `artifacts/design-demos/shipping-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Google SRE: canarying releases](https://sre.google/workbook/canarying-releases/) (checked 2026-09-27): Release evaluation needs representative signals and a rollback decision; staged exposure is not required for every site.

## Strong teaching case — 2026-09-27

Runbook separates artifact, target, checks, code recovery and data recovery.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
