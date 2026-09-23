---
kind: "concept"
articleId: "hexagonal-architecture"
lang: "en"
title: "Hexagonal architecture"
summary: "Keep application behavior behind technology-independent ports."
category: "boundaries"
aliases: ["Hexagonal architecture"]
related: ["architecture", "layered-architecture", "clean-architecture"]
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "Application ports and external adapters",
    "advantages": "Test saving with an in-memory adapter",
    "limitations": "Ports and adapters add indirection",
    "suitable": "Multiple entry points or storage implementations",
    "combinations": "Can organize internal policy with clean architecture",
  }
---

## Why: the goal or problem

A class schedule save rule is hard to test when every test must start a web server and database.

## How: work toward a solution

1. Fictional single process: Dani, Class Schedule unsaved. HTTP or CLI adapters call SaveArticle through its input port.
2. SaveArticle validates IDs, then calls a memory or embedded-database adapter through SaveRepository. Both storage adapters depend on this application-owned port; the application imports neither implementation.
3. Saved: 0 → 1 entries; repeat → 1. Empty IDs or failure before writing → 0; retry after correction.

## What: the concept

Hexagonal architecture connects an application through ports and technology-specific adapters. Six sides do not mandate six components. [Cockburn](https://alistair.cockburn.us/hexagonal-architecture)

Ports add indirection. Clean dependency rules can organize internal policy.
