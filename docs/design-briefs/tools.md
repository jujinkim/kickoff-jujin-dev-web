# Language, library, framework, engine / 言語・フレームワーク・ライブラリ・エンジン / 언어·프레임워크·라이브러리·엔진 구분

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `tools`; `development`. Existing URLs and comment identity retained.
- Definition and selection: Compare tools by responsibility, required output and maintenance cost.
- Closest options and concrete difference: Compare alternatives that address the same required outcome. A language is not a substitute for an engine; a library may run inside a framework. Prefer the smallest stack that demonstrates publishing, interaction and maintenance needs. An engine fits an interactive world when its runtime systems earn their cost.
- Distinct situation and Why opening: Imagine planning a public article catalog. Editors need to write in several languages, readers need pages on phones, and the team needs a way to publish updates. During planning, someone asks whether to choose TypeScript, React or a game engine. Those names describe different roles; an engine does not answer this catalog's publishing need. Picking a popular name first can leave the team without the required export target, publishing workflow or maintainable development setup. Describe the result and operating constraints before comparing tools that might contribute to it.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/tools.md), [KO](../../src/content/articles/ko/tools.md), [JA](../../src/content/articles/ja/tools.md); matching revision 5. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Static map: language, library and framework coexist in a catalog; a separate engine path serves a game. No controls or runtime claims.
- Visual structure: `ToolsGuide.astro` owns its markup, spacing and state. Caption: Tool roles that coexist, with a separate game output
- Initial and changed states: Static map: language, library and framework coexist in a catalog; a separate engine path serves a game. No controls or runtime claims.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: width < 480px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="tools"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/tools.md`, sourceRevision 5; selection/comparison, applications and implementation/limits.
- Comparison summaries: Guide compares choices in its walkthrough and supplementary selection section.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/tools-320.png`, `artifacts/design-demos/tools-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Astro: islands architecture](https://docs.astro.build/en/concepts/islands/) (checked 2026-09-27): An Astro page can combine static output with selected interactive islands; a library and framework can coexist.
- [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) (checked 2026-09-27): TypeScript adds static type checking to JavaScript.
- [Godot introduction](https://docs.godotengine.org/en/stable/getting_started/introduction/introduction_to_godot.html) (checked 2026-09-27): Godot combines an editor, scene model and runtime systems; the map is not an engine execution.

## Strong teaching case — 2026-09-27

Language, library and framework coexist in one web output; engine has a separate output branch.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
