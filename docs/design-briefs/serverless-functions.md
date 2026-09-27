# Serverless functions / サーバーレス関数 / 서버리스 함수

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `serverless-functions`; `hosting-models`. Existing URLs and comment identity retained.
- Definition and selection: Run event-triggered work without owning long-lived compute processes.
- Closest options and concrete difference: Choose functions when event-triggered work fits execution limits and platform ownership is useful. Static hosting avoids application execution for file reads; an always-on process may fit persistent connections or long-running work. Managed infrastructure does not remove application operations.
- Distinct situation and Why opening: Imagine a festival site with schedules and occasional saves. An always-running app would sit idle through most of this read-heavy day.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/serverless-functions.md), [KO](../../src/content/articles/ko/serverless-functions.md), [JA](../../src/content/articles/ja/serverless-functions.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The festival schedule invokes a handler for a read and a separate save. A stable reader/article key prevents duplicate records in the example. Restart removes modeled execution state but preserves the illustrated external store; page reload clears the whole simulation.
- Visual structure: `ServerlessFunctions.astro` owns its markup, spacing and state. Caption: Invocation lifetime and duplicate handling
- Initial and changed states: Read article invokes a handler. Save Festival Schedule invokes another handler and writes an external store. Repeat Save keeps one record under the example’s reader/article key. Fail next save returns failure without changing storage. Restart handler discards execution state but retains that record. Reset or reload clears this page-memory simulation, including its illustrated store.
- Repetition, empty/failure and constraints: Treat instance reuse as an optimization, never a durability contract. Bound execution time, make retries safe and own authentication, schema changes, monitoring and recovery. Verify the selected platform’s current limits and billing separately; this example includes no cost benchmark.
- Controls and state selectors: `data-platform`, `data-record-label`, `data-read-path`, `data-save-path`, `data-runtime-facts`, `data-read`, `data-save`, `data-restart`, `data-reset`, `data-fail-save`, `data-generation`, `data-calls`, `data-count`, `data-records`, `data-path-state`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: max-width:560px; width<480px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="serverless-functions"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/serverless-functions.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Event-triggered managed handlers; advantages: Platform handles server provisioning; limitations: Retries and lifecycle need design; suitable: Event-oriented APIs; combinations: Static frontend plus external storage
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/serverless-functions-320.png`, `artifacts/design-demos/serverless-functions-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [AWS: What is Lambda?](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) (checked 2026-09-27): Documents managed event-driven compute; it does not guarantee application correctness or durable instance memory.

## Strong teaching case — 2026-09-27

Separate invocation bubbles inside managed execution; counters expose generation and calls.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
