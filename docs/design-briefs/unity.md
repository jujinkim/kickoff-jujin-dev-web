# Unity / Unity / Unity

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `unity`; `game-engines`. Existing URLs and comment identity retained.
- Definition and selection: Compose cross-platform games from reusable GameObjects and components.
- Closest options and concrete difference: Choose Unity when GameObject/component composition and the team’s authoring tools fit the game. Godot organizes reusable node scenes; Unreal includes Actor and Blueprint composition. Validate required platforms, lifecycle and asset workflow in the real tool.
- Distinct situation and Why opening: Players collect keys in a museum maze. Each pickup should score once; the team wants reusable behavior attached to game objects rather than copying key logic.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/unity.md), [KO](../../src/content/articles/ko/unity.md), [JA](../../src/content/articles/ja/unity.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The museum maze uses a key with visual, collision and authored behavior responsibilities. Contact increases the score once and removes the key. The schematic’s missed-contact state demonstrates a rule to test, not a physical simulation.
- Visual structure: `UnityScene.astro` owns its markup, spacing and state. Caption: Explore a museum maze scene
- Initial and changed states: The schematic contains a player, floor, camera, and one key. Move to item triggers authored contact logic: score changes from zero to one and the item disappears. Repeat contact cannot score again. Disable contact before moving to demonstrate a missed collection: score stays zero. Reset or reload restores the player and item. This is a concept simulation.
- Repetition, empty/failure and constraints: Keep score in one owner and guard each pickup from duplicate processing. Check component references and lifecycle behavior in the engine. The page model resets on reload and does not establish game-save durability or export compatibility.
- Controls and state selectors: `data-platform`, `data-runtime-facts`, `data-touch`, `data-reset`, `data-contact-off`, `data-player`, `data-item`, `data-score`, `data-item-state`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: max-width:560px; width<480px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="unity"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/unity.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: GameObjects contain components; advantages: Behavior responsibilities are visible; limitations: References and lifecycle need testing; suitable: Component-oriented game teams; combinations: Separate score logic and presentation
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/unity-320.png`, `artifacts/design-demos/unity-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Unity: GameObjects](https://docs.unity3d.com/Manual/GameObjects.html) (checked 2026-09-27): Defines GameObjects and component-provided capabilities; the maze model does not run Unity.

## Strong teaching case — 2026-09-27

Component attachments sit inside an object boundary, distinct from a scene tree.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
