---
kind: "concept"
articleId: "layered-architecture"
lang: "en"
title: "Layered architecture"
summary: "Separate responsibilities with explicit dependency rules."
category: "boundaries"
aliases: ["Layered architecture"]
related: ["architecture", "hexagonal-architecture", "clean-architecture"]
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "Responsibility layers with downward dependencies",
    "advantages": "Validation has a clear home",
    "limitations": "Pass-through layers add ceremony",
    "suitable": "Stable presentation, application and storage roles",
    "combinations": "Can add ports and dependency inversion",
  }
---

## Why: the goal or problem

Jun saves Borrowing Rules on a library page. If that page validates and writes storage directly, adding CLI access duplicates checks and changing storage touches the screen.

## How: work toward a solution

1. Fictional single process: reader Jun, Borrowing Rules unsaved; memory or embedded database.
2. HTTP or CLI presentation imports and calls application validation, which imports and calls persistence. This closed-layer example forbids skipping layers.
3. Saved returns upward: 0 → 1 entries; repeat → 1. Empty IDs or failure before writing → 0; retry after correction.

Switching HTTP to CLI leaves validation in place.

## What: the concept

Layered architecture separates responsibilities and constrains dependencies. Logical layers need not be separate machines. [Microsoft](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier)

Pass-through layers add ceremony. Ports can invert storage dependencies. Folder names alone enforce nothing.
