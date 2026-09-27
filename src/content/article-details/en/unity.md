---
articleId: unity
lang: en
sourceRevision: 7
sources:
  - title: "Unity: GameObjects"
    url: "https://docs.unity3d.com/Manual/GameObjects.html"
    claim: Defines GameObjects and component-provided capabilities; the maze model does not run Unity.
    checked: "2026-09-27"
---

## Selection & comparison

Choose Unity when GameObject/component composition and the team’s authoring tools fit the game. Godot organizes reusable node scenes; Unreal includes Actor and Blueprint composition. Validate required platforms, lifecycle and asset workflow in the real tool.

## Applications

The museum maze uses a key with visual, collision and authored behavior responsibilities. Contact increases the score once and removes the key. The schematic’s missed-contact state demonstrates a rule to test, not a physical simulation.

## Implementation & cautions

Keep score in one owner and guard each pickup from duplicate processing. Check component references and lifecycle behavior in the engine. The page model resets on reload and does not establish game-save durability or export compatibility.
