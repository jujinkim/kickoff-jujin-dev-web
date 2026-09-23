---
kind: concept
articleId: unity
lang: en
title: Unity
summary: Components supply object behavior.
category: game-engines
aliases:
  - Unity
related:
  - tools
  - godot
  - unreal-engine
status: published
revision: 5
sourceRevision: 5
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: GameObjects contain components
  advantages: Behavior responsibilities are visible
  limitations: References and lifecycle need testing
  suitable: Component-oriented game teams
  combinations: Separate score logic and presentation
---

## Why: the goal or problem

Imagine a museum maze where players collect keys. Each pickup should score once; the team wants reusable behavior attached to game objects rather than copying key logic.

## How: work toward a solution

The schematic contains a player, floor, camera, and one key. Move to item triggers authored contact logic: score changes from zero to one and the item disappears. Repeat contact cannot score again. Disable contact before moving to demonstrate a missed collection: score stays zero. Reset or reload restores the player and item. This is a concept simulation.

## What: the concept

Unity GameObjects contain components. Transform, rendering, collision, and authored scripts provide distinct responsibilities; an object name alone does not implement gameplay.

Keep score ownership clear and test component references.

[Source](https://docs.unity3d.com/Manual/GameObjects.html)
