---
kind: concept
articleId: react
lang: en
title: React
summary: >-
  Build interfaces from components and state, suited to teams that want
  JavaScript-driven rendering and explicit state ownership.
category: web-ui
aliases:
  - React
related:
  - tools
  - vue
  - svelte
status: published
revision: 7
sourceRevision: 7
updated: "2026-09-27"
checked: "2026-09-26"
comparison:
  features: "Props, events and state-driven rendering"
  advantages: Reusable card behavior
  limitations: Shared ownership needs design
  suitable: Component-based interfaces
  combinations: Astro island plus external storage
---

## Why: the goal or problem

Imagine a home planner where families save shopping and menu items. Cards and totals must update together; its team prefers JavaScript functions that render from state.

## How: work toward a solution

Two cards in a home planner start unsaved. Save on Shopping List changes only its label to Saved; Weekly Menu stays unsaved. Save Weekly Menu: the shared count becomes two. Repeated saves keep two records. The diagram traces event → state → render. Reset or reload clears both cards. Storage is not persistent.

## What: the concept

React components receive props and describe UI from state. A state setter requests rendering; changing an ordinary variable does not provide that mechanism.

Add persistence separately.

[Source](https://react.dev/learn)
