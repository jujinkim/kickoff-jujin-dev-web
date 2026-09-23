---
kind: concept
articleId: vue
lang: en
title: Vue
summary: Reactive state updates templates.
category: web-ui
aliases:
  - Vue
related:
  - tools
  - react
  - svelte
status: published
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: Templates bound to reactive state
  advantages: Logic and markup stay together
  limitations: Shared state needs ownership
  suitable: Template-oriented UI teams
  combinations: Astro island with props and events
---

## Why: the goal or problem

A reading shelf shows Library Book and Garden Article; manually changing every label after a save risks contradictory counts.

## How: work toward a solution

Two cards in a reading shelf start unsaved. Save on Library Book changes only its label to Saved; Garden Article stays unsaved. Saving Garden Article changes the shared count from one to two. Repeating Save leaves two records: each card counts once. The diagram connects reactive state to the template. Reset or reload clears both cards. There is no persistent storage here.

## What: the concept

Vue binds templates to reactive state. A single-file component can colocate logic, template, and styles; it is an authoring format, not a network-file guarantee.

Define shared ownership and external persistence separately.

[Source](https://vuejs.org/guide/introduction.html)
