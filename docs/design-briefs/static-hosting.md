# Static hosting / 静的ホスティング / 정적 호스팅

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `static-hosting`; `hosting-models`. Existing URLs and comment identity retained.
- Definition and selection: Serve prebuilt public files with minimal application operations.
- Closest options and concrete difference: Choose file delivery for public content that can be generated ahead of requests. An always-on server or function is useful when each request needs trusted computation. Browser interaction can still coexist with static files; write operations need a separate trusted path.
- Distinct situation and Why opening: Imagine a community newsletter with articles and a Save button. Reads return identical files; running code per read adds work.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/static-hosting.md), [KO](../../src/content/articles/ko/static-hosting.md), [JA](../../src/content/articles/ja/static-hosting.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The newsletter reads HTML from a public host and saves a reader/article pair through an API. Restarting the modeled handler retains the illustrated external record. Reloading this demo clears it because the entire model lives in page memory.
- Visual structure: `StaticHosting.astro` owns its markup, spacing and state. Caption: Static files and a separate API
- Initial and changed states: Read article follows the file path. Save Community Newsletter follows a separate API path into an external store. Repeat Save keeps one record under the example’s reader/article key. Fail next save returns failure without changing storage. Restart handler keeps the record because storage is outside the handler. Reset or reload clears this page-memory simulation, including its illustrated store.
- Repetition, empty/failure and constraints: The publisher owns build freshness, artifact deployment and file-cache policy. The API owner handles authentication, deduplication and durable data recovery. Do not infer private persistence from a working Save button or treat a code rollback as a database restore.
- Controls and state selectors: `data-platform`, `data-record-label`, `data-read-path`, `data-save-path`, `data-runtime-facts`, `data-read`, `data-save`, `data-restart`, `data-reset`, `data-fail-save`, `data-generation`, `data-calls`, `data-count`, `data-records`, `data-path-state`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: max-width:560px; width<480px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="static-hosting"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/static-hosting.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Prebuilt file delivery; advantages: Reading needs no app renderer; limitations: Personal writes need an API; suitable: Public articles and documentation; combinations: Static generator plus server or function
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/static-hosting-320.png`, `artifacts/design-demos/static-hosting-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [GitHub: About Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) (checked 2026-09-27): Describes a static file hosting example; separate APIs and private storage are application decisions, not file-host features.

## Strong teaching case — 2026-09-27

Generated-file reads separate from the API/write route and external store.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
