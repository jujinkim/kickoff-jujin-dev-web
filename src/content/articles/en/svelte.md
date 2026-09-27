---
kind: concept
articleId: svelte
lang: en
title: Svelte
summary: Compile declarative components when concise reactive authoring matters.
category: web-ui
aliases:
  - Svelte
related:
  - tools
  - react
  - vue
status: published
revision: 7
sourceRevision: 7
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Compiled declarative components
  advantages: UI and behavior authored together
  limitations: Build and services need design
  suitable: Compiler-based UI workflows
  combinations: Astro island or an app framework
---

## Why: the goal or problem

Travelers save bus and hiking cards in a trip planner. Labels and totals must agree; its team prefers declarative components compiled before runtime.

## How: work toward a solution

Two cards in a trip planner start unsaved. Save on Bus Timetable changes only its label to Saved; Hiking Route stays unsaved. Saving Hiking Route changes the shared count from one to two. Repeating Save leaves two records: each card counts once. The diagram separates compilation from runtime updates. Reset or reload clears them. Nothing is persisted.

## What: the concept

Svelte compiles declarative components into browser code. Compilation prepares the UI; later clicks still run state updates. SvelteKit has a broader application scope.

Add routing and persistence as separate decisions.

[Source](https://svelte.dev/docs/svelte/overview)
