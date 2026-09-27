# Skeuomorphism / スキューモーフィズム / 스큐어모피즘

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `skeuomorphism`; `styles`. Existing URLs and comment identity retained.
- Definition and selection: Familiar object and material cues explain digital content through a recognizable physical metaphor.
- Closest options and concrete difference: Choose an object metaphor when people already understand its organization. A notebook supports recipes and tabs; a decorative leather surface alone does not teach navigation. Flat surfaces suit tasks where the metaphor would add little.
- Distinct situation and Why opening: A recipe app helps cooks choose a dish and adjust ingredients for guests. People used to paper notebooks find anonymous panels unfamiliar. A recognizable notebook metaphor matters more than neumorphism’s abstract soft controls.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/skeuomorphism.md), [KO](../../src/content/articles/ko/skeuomorphism.md), [JA](../../src/content/articles/ja/skeuomorphism.md); matching revision 10. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Choose pasta or salad and 1, 2 or 4 servings. Ingredient quantities multiply the per-serving values; repetition does not compound quantities.
- Visual structure: `Skeuomorphism.astro` owns its markup, spacing and state. Caption: Choose a recipe and recalculate its ingredients by servings
- Initial and changed states: Choose pasta or salad and 1, 2 or 4 servings. Ingredient quantities multiply the per-serving values; repetition does not compound quantities.
- Repetition, empty/failure and constraints: Keep per-serving quantities separate from the display and recompute from the chosen serving count. Preserve units, readable page contrast and a single mobile reading order. The generated food image and recipe quantities are illustrative, not a tested recipe.
- Controls and state selectors: `data-recipe`, `data-servings`, `data-recipe-panel`, `data-amount`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: width<560px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: `public/images/tomato-pasta.png` See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="skeuomorphism"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/skeuomorphism.md`, sourceRevision 10; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Familiar physical object references; advantages: A notebook metaphor explains recipe structure; limitations: Imitation must not restrict interaction; suitable: Recognizable object roles over abstract surfaces; combinations: Real text and direct serving controls
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/skeuomorphism-320.png`, `artifacts/design-demos/skeuomorphism-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [IxDF: Skeuomorphism](https://ixdf.org/literature/topics/skeuomorphism) (checked 2026-09-27): Describes familiar real-world references in interface design; ingredient quantities are illustrative.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (checked 2026-09-27): Keyboard, focus, reflow and contrast requirements; a visual style alone does not establish conformance.

## Strong teaching case — 2026-09-27

Recipe binding, layered pages and ruled paper on wood; servings change ingredient quantities.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
