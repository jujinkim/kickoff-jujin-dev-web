# Godot / Godot / Godot

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `godot`; `game-engines`. Existing URLs and comment identity retained.
- Definition and selection: Build scene-based games with an open-source engine.
- Closest options and concrete difference: Choose Godot when reusable node hierarchies match the team’s mental model and target platforms. Unity offers GameObjects and components; Unreal offers Actors and Blueprint workflows. Prototype the actual export and input requirements rather than selecting from a diagram alone.
- Distinct situation and Why opening: Imagine an orchard game where players collect apples for points. Copying each apple’s appearance and contact logic makes fixes drift. The team prioritizes reusable trees of visual and contact parts over visual behavior graphs.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/godot.md), [KO](../../src/content/articles/ko/godot.md), [JA](../../src/content/articles/ja/godot.md); matching revision 7. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The orchard composes an apple from visual and contact parts. Collecting it changes score once and removes the instance. The repeated-contact case illustrates an authored guard, not behavior guaranteed merely by using scenes.
- Visual structure: `GodotScene.astro` owns its markup, spacing and state. Caption: Explore a orchard scene
- Initial and changed states: The diagram has a player, floor, camera, and apple instance. Move to item runs contact logic: score becomes one and the apple disappears. Repeated contact cannot score again. Disable contact before moving: score stays zero. Reset or reload restores the scene. This simulates the concept, not the engine.
- Repetition, empty/failure and constraints: Name the owner of score and the collectible’s consumed state. Connect signals once and test contact-disabled and repeated events. This model lives in page memory; game saves, physics behavior, native input and exports need real-engine verification.
- Controls and state selectors: `data-platform`, `data-runtime-facts`, `data-touch`, `data-reset`, `data-contact-off`, `data-player`, `data-item`, `data-score`, `data-item-state`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: width<480px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="godot"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/godot.md`, sourceRevision 7; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Reusable scenes made of nodes; advantages: Collectible composition can be reused; limitations: Contact logic still needs testing; suitable: Scene-based prototypes; combinations: Separate player and collectible scenes
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/godot-320.png`, `artifacts/design-demos/godot-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Godot: Nodes and Scenes](https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html) (checked 2026-09-27): Defines node composition, scenes and instancing; the orchard is a browser schematic, not an engine export.

## Strong teaching case — 2026-09-27

Nested node-tree connectors foreground reusable scene composition.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
