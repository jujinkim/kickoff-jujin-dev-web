---
kind: concept
articleId: react
lang: en
title: React
summary: State changes drive rendered labels.
category: web-ui
aliases:
  - React
related:
  - tools
  - vue
  - svelte
status: published
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: "Props, events and state-driven rendering"
  advantages: Reusable card behavior
  limitations: Shared ownership needs design
  suitable: Component-based interfaces
  combinations: Astro island plus external storage
---

## Why: the goal or problem

A home planner shows Shopping List and Weekly Menu side by side; saving one must update its label and total without changing the other.

## How: work toward a solution

Two cards in a home planner start unsaved. Save on Shopping List changes only its label to Saved; Weekly Menu stays unsaved. Saving Weekly Menu changes the shared count from one to two. Repeating Save leaves two records: each card counts once. The diagram traces event, state update, and rendering. Reset or reload clears both cards. There is no persistent storage here.

## What: the concept

React components receive props and describe UI from state. A state setter requests rendering; changing an ordinary variable does not provide that mechanism.

Add persistence separately.

[Source](https://react.dev/learn)
