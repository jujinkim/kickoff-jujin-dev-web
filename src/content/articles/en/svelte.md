---
kind: concept
articleId: svelte
lang: en
title: Svelte
summary: Compile components; update at runtime.
category: web-ui
aliases:
  - Svelte
related:
  - tools
  - react
  - vue
status: published
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: Compiled declarative components
  advantages: UI and behavior authored together
  limitations: Build and services need design
  suitable: Compiler-based UI workflows
  combinations: Astro island or an app framework
---

## Why: the goal or problem

Imagine a trip planner with bus and hiking cards. A click should update the chosen card without hand-editing both.

## How: work toward a solution

Two cards in a trip planner start unsaved. Save on Bus Timetable changes only its label to Saved; Hiking Route stays unsaved. Saving Hiking Route changes the shared count from one to two. Repeating Save leaves two records: each card counts once. The diagram separates compilation from runtime updates. Reset or reload clears both cards. There is no persistent storage here.

## What: the concept

Svelte compiles declarative components into browser code. Compilation prepares the UI; later clicks still run state updates. SvelteKit has a broader application scope.

Add routing and persistence as separate decisions.

[Source](https://svelte.dev/docs/svelte/overview)
