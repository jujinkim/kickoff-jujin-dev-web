# Unreal Engine / Unreal Engine / Unreal Engine

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `unreal-engine`; `game-engines`. Existing URLs and comment identity retained.
- Definition and selection: Combine actors, Blueprints and C++ for world-centered development.
- Closest options and concrete difference: Choose Unreal when reusable visual event graphs and Actor composition fit the game and team. Godot’s node scenes and Unity’s component workflow are peers to evaluate. Rendering ambition alone is insufficient; test authoring, deployment and operational constraints.
- Distinct situation and Why opening: Imagine a village game where players collect coins. Each coin scores once, then disappears; the team wants one visual behavior graph reused across coin actors.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/unreal-engine.md), [KO](../../src/content/articles/ko/unreal-engine.md), [JA](../../src/content/articles/ja/unreal-engine.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The village game’s coin Actor receives an overlap event, checks whether it was consumed, updates score and disappears. Repeated contact leaves the score at one. The diagram separates Actor capability from the gameplay rule authored in the event path.
- Visual structure: `UnrealScene.astro` owns its markup, spacing and state. Caption: Explore a village game scene
- Initial and changed states: The schematic contains a player, floor, camera, and one coin Actor. Move to item triggers an authored overlap guard: score changes from zero to one and the Actor disappears. Repeat contact cannot score again. Disable contact before moving to demonstrate a missed collection: score stays zero. Reset or reload restores everything. This is a concept simulation.
- Repetition, empty/failure and constraints: Give score and consumed state clear owners; avoid giant graphs that hide responsibility. Verify overlap settings, duplicate events and object destruction in Unreal itself. This browser model neither loads Unreal nor proves native performance, packaging or saved-game behavior.
- Controls and state selectors: `data-platform`, `data-runtime-facts`, `data-touch`, `data-reset`, `data-contact-off`, `data-player`, `data-item`, `data-score`, `data-item-state`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: width<480px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="unreal-engine"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/unreal-engine.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Actors, components and Blueprint events; advantages: Gameplay paths can be inspected; limitations: Large graphs need clear ownership; suitable: Visual gameplay scripting; combinations: Blueprint interaction plus score logic
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/unreal-engine-320.png`, `artifacts/design-demos/unreal-engine-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Epic: Blueprint Visual Scripting](https://dev.epicgames.com/documentation/en-us/unreal-engine/introduction-to-blueprints-visual-scripting-in-unreal-engine) (checked 2026-09-27): Describes visual gameplay scripting in Blueprint classes; the coin flow is an authored browser explanation.

## Strong teaching case — 2026-09-27

Event, guard and action form flow nodes; guard has its own shape.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
