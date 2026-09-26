---
kind: concept
articleId: godot
lang: en
title: Godot
summary: Nodes compose reusable scenes.
category: game-engines
aliases:
  - Godot
related:
  - tools
  - unity
  - unreal-engine
status: published
revision: 6
sourceRevision: 6
updated: "2026-09-26"
checked: "2026-09-22"
comparison:
  features: Reusable scenes made of nodes
  advantages: Collectible composition can be reused
  limitations: Contact logic still needs testing
  suitable: Scene-based prototypes
  combinations: Separate player and collectible scenes
---

## Why: the goal or problem

Imagine an orchard game where players collect apples for points. Copying each apple’s appearance and contact logic makes fixes drift. The team prioritizes reusable trees of visual and contact parts over visual behavior graphs.

## How: work toward a solution

The diagram has a player, floor, camera, and apple instance. Move to item runs contact logic: score becomes one and the apple disappears. Repeated contact cannot score again. Disable contact before moving: score stays zero. Reset or reload restores the scene. This simulates the concept, not the engine.

## What: the concept

Godot organizes nodes into scenes that can be instantiated inside other scenes. A scene can be a reusable collectible or the game entry point.

Test gameplay and exports separately.

[Source](https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html)
