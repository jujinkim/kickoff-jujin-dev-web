---
kind: concept
articleId: hexagonal-architecture
lang: en
title: Hexagonal architecture
summary: >-
  Separate application rules from input and storage technologies through ports
  and replaceable adapters.
category: boundaries
aliases:
  - Hexagonal architecture
related:
  - architecture
  - layered-architecture
  - clean-architecture
status: published
revision: 6
sourceRevision: 6
updated: "2026-09-27"
checked: "2026-09-26"
comparison:
  features: Application ports and external adapters
  advantages: Test saving with an in-memory adapter
  limitations: Ports and adapters add indirection
  suitable: Multiple entry points or storage implementations
  combinations: Can organize internal policy with clean architecture
---

## Why: the goal or problem

Imagine a class guide where teachers save schedule pages. Testing its save rule should not require a running web server and database. Replaceable edges matter more than layers alone.

## How: work toward a solution

1. One process: Class Schedule starts unsaved. HTTP or CLI adapters call SaveArticle through its input port.
2. SaveArticle validates IDs, then calls a memory or embedded-database adapter through SaveRepository. Both storage adapters depend on this application-owned port; the application imports neither implementation.
3. Saved: 0 → 1; repeat → 1. Invalid IDs or pre-write failure → 0.

## What: the concept

Hexagonal architecture connects an application through ports and technology-specific adapters. Six sides do not mandate six components. [Cockburn](https://alistair.cockburn.us/hexagonal-architecture)

Ports add indirection; clean rules can organize policy.
