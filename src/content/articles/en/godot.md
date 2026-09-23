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
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: Reusable scenes made of nodes
  advantages: Collectible composition can be reused
  limitations: Contact logic still needs testing
  suitable: Scene-based prototypes
  combinations: Separate player and collectible scenes
---

## Why: the goal or problem

An orchard game has several apples that all award one point; copying separate contact code into each apple makes changes error-prone.

## How: work toward a solution

The schematic contains a player, floor, camera, and one apple instance. Move to item triggers authored contact logic: score changes from zero to one and the item disappears. Repeat contact cannot score again. Disable contact before moving to demonstrate a missed collection: score stays zero. Reset or reload restores the player and item. This is a concept simulation.

## What: the concept

Godot organizes nodes into scenes that can be instantiated inside other scenes. A scene can be a reusable collectible or the game entry point.

Test gameplay and exports separately.

[Source](https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html)
