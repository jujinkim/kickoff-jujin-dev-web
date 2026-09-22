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
revision: 2
sourceRevision: 2
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

Several controls reflect the same changing data. Updating each label separately risks showing contradictory states.

## How: work toward a solution

Two Field notes cards start unsaved. Save on A17 changes only its label to Saved; B04 stays unsaved. Saving B04 changes the shared count from one to two. Repeating Save leaves two records: each ID counts once. The diagram traces event, state update, and rendering. Reset or reload clears both cards. There is no persistent storage here.

## What: the concept

React components receive props and describe UI from state. A state setter requests rendering; changing an ordinary variable does not provide that mechanism.

Add persistence separately.

[Source](https://react.dev/learn)
