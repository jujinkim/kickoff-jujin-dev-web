# Game engines / 게임 엔진 / ゲームエンジン

Group ID: `game-engines` · Checked: 2026-09-21 · Writing designs, not article bodies.

## Shared case and comparison contract

A tiny 3D scene contains a player, floor, camera and collectible. Touching the collectible changes score 0→1 and removes the collectible. Use placeholder geometry; compare composition and workflow, not image quality.

**Comparison axes, fixed order:** scene/world unit; object composition; behavior authoring; resource reuse; play/test loop; export validation.

**Boundary:** Engine choice does not establish performance, team productivity or platform eligibility. No license fees or supported-console claims; those require dated official checks when later added.

**Visual family:** Object/scene composition diagram beside input→collision→score workflow. Author a schematic, not a fake editor screenshot.

**Core terms (EN / KO / JA):** Scene / 씬 / シーン; Collision / 충돌 / 衝突; Instance / 인스턴스 / インスタンス.

## Sibling review matrix

All rows use the same case. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                                                       | Distinguishing feature                                                              | Conditional advantage                                                                | Limitation                                                                        | Suitable context                                                     | Combination                                                                                                    |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [Godot / Godot / Godot](../articles/godot.md)                                 | Nodes form scenes that can be instanced [godot].                                    | The collectible composition can be reused without rebuilding its node tree manually. | Input, collision behavior and exported builds still need project-specific checks. | A team wanting explicit scene composition for a small prototype.     | Use separate player and collectible scenes; apply modular code boundaries inside gameplay.                     |
| [Unity / Unity / Unity](../articles/unity.md)                                 | Attached components provide GameObject functionality [unity].                       | The example separates visual, collision and score behavior on a shared object.       | Component references and lifecycle behavior still need careful project testing.   | A team comfortable composing objects and custom behavior components. | Separate score state from collectible presentation; group reusable object configurations as appropriate.       |
| [Unreal Engine / Unreal Engine / Unreal Engine](../articles/unreal-engine.md) | Actors hold components; Blueprint graphs can define gameplay [unreal] [blueprints]. | The example exposes event-to-score behavior as an inspectable graph.                 | Growing graphs and cross-object references still require clear ownership.         | A team using visual gameplay scripting and reusable Actor classes.   | Combine Blueprint interaction with separately owned score logic; C++ extension is optional scope context only. |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[blueprints]: https://dev.epicgames.com/documentation/en-us/unreal-engine/introduction-to-blueprints-visual-scripting-in-unreal-engine
[godot]: https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html
[unity]: https://docs.unity3d.com/Manual/GameObjects.html
[unreal]: https://dev.epicgames.com/documentation/en-us/unreal-engine/actors-in-unreal-engine
