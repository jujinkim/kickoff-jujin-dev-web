---
articleId: godot
lang: en
sourceRevision: 8
sources:
  - title: "Godot: Nodes and Scenes"
    url: "https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html"
    claim: "Defines node composition, scenes and instancing; the orchard is a browser schematic, not an engine export."
    checked: "2026-09-27"
---

## Selection & comparison

Choose Godot when reusable node hierarchies match the team’s mental model and target platforms. Unity offers GameObjects and components; Unreal offers Actors and Blueprint workflows. Prototype the actual export and input requirements rather than selecting from a diagram alone.

## Applications

The orchard composes an apple from visual and contact parts. Collecting it changes score once and removes the instance. The repeated-contact case illustrates an authored guard, not behavior guaranteed merely by using scenes.

## Implementation & cautions

Name the owner of score and the collectible’s consumed state. Connect signals once and test contact-disabled and repeated events. This model lives in page memory; game saves, physics behavior, native input and exports need real-engine verification.
