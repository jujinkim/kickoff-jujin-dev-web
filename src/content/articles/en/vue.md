---
kind: concept
articleId: vue
lang: en
title: Vue
summary: Bind templates to reactive state for template-oriented authoring.
category: web-ui
aliases:
  - Vue
related:
  - tools
  - react
  - svelte
status: published
revision: 7
sourceRevision: 7
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Templates bound to reactive state
  advantages: Logic and markup stay together
  limitations: Shared state needs ownership
  suitable: Template-oriented UI teams
  combinations: Astro island with props and events
---

## Why: the goal or problem

Readers save books and articles on a shelf. Labels and counts must agree; its team prefers reactive HTML-like templates over manual edits.

## How: work toward a solution

Two cards in a reading shelf start unsaved. Save on Library Book changes only its label to Saved; Garden Article stays unsaved. Saving Garden Article changes the shared count from one to two. Repeating Save leaves two records: each card counts once. The diagram connects reactive state to the template. Reset or reload clears both cards. Nothing is persisted.

## What: the concept

Vue binds templates to reactive state. A single-file component can colocate logic, template, and styles; it is an authoring format, not a network-file guarantee.

Define shared ownership and external persistence separately.

[Source](https://vuejs.org/guide/introduction.html)
