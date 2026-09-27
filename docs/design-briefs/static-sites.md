# Astro, Hugo, Jekyll: three ways to ship HTML / Astro・Hugo・Jekyll：HTMLを届ける三つの方法 / Astro·Hugo·Jekyll: HTML을 보내는 세 방법

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `static-sites`; `development`. Existing URLs and comment identity retained.
- Definition and selection: Generate public files ahead of requests when publishing can follow a build.
- Closest options and concrete difference: Static generation suits public articles whose updates can wait for publishing. Request rendering suits data that must vary at request time; the two may coexist. Compare Astro, Hugo and Jekyll through the same multilingual publishing task, including editor workflow and host build support.
- Distinct situation and Why opening: Imagine publishing a public guide with dozens of articles. Each article needs a stable address, language links, and the same navigation, while editors keep adding new pages. A public site needs many consistent articles, but copying complete HTML pages makes shared changes slow and error-prone. Running a server for every read may add operating work even though most visitors receive identical content. You need a repeatable publishing process that prepares those pages and keeps necessary interaction separate.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/static-sites.md), [KO](../../src/content/articles/ko/static-sites.md), [JA](../../src/content/articles/ja/static-sites.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Static edit → candidate build → file host flow, with failed build keeping the prior release. Private state is outside public file hosting.
- Visual structure: `StaticSitesGuide.astro` owns its markup, spacing and state. Caption: Edit, build, publish; a failed build keeps the old release
- Initial and changed states: Static edit → candidate build → file host flow, with failed build keeping the prior release. Private state is outside public file hosting.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: width < 600px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="static-sites"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/static-sites.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: Guide compares choices in its walkthrough and supplementary selection section.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/static-sites-320.png`, `artifacts/design-demos/static-sites-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Astro: islands architecture](https://docs.astro.build/en/concepts/islands/) (checked 2026-09-27): Prebuilt content can coexist with browser interaction; authenticated server data needs a separate design.
- [Hugo introduction](https://gohugo.io/about/introduction/) (checked 2026-09-27): Hugo generates sites from content and templates; the release policy is separate.
- [Jekyll documentation](https://jekyllrb.com/docs/) (checked 2026-09-27): Jekyll builds static output from text and layouts; hosting support depends on the environment.

## Strong teaching case — 2026-09-27

Pre-request build differs from file service; a failed candidate cannot replace the previous artifact.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
