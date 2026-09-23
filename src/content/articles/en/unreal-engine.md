---
kind: concept
articleId: unreal-engine
lang: en
title: Unreal Engine
summary: Actors combine components and events.
category: game-engines
aliases:
  - Unreal Engine
related:
  - tools
  - godot
  - unity
status: published
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: "Actors, components and Blueprint events"
  advantages: Gameplay paths can be inspected
  limitations: Large graphs need clear ownership
  suitable: Visual gameplay scripting
  combinations: Blueprint interaction plus score logic
---

## Why: the goal or problem

Imagine a village game with coins scattered around. Each pickup should add a point and remove the touched coin.

## How: work toward a solution

The schematic contains a player, floor, camera, and one coin Actor. Move to item triggers an authored overlap guard: score changes from zero to one and the Actor disappears. Repeat contact cannot score again. Disable contact before moving to demonstrate a missed collection: score stays zero. Reset or reload restores everything. This is a concept simulation.

## What: the concept

Unreal Engine places Actors in levels. Components supply capabilities, while Blueprint graphs can define gameplay events and actions in reusable classes.

Keep graph responsibilities and score ownership explicit.

[Source](https://dev.epicgames.com/documentation/en-us/unreal-engine/actors-in-unreal-engine) · [Source 2](https://dev.epicgames.com/documentation/en-us/unreal-engine/introduction-to-blueprints-visual-scripting-in-unreal-engine)
