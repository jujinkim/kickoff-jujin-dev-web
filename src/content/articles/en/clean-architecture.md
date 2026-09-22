---
kind: "concept"
articleId: "clean-architecture"
lang: "en"
title: "Clean architecture"
summary: "Point source dependencies toward policy."
category: "boundaries"
aliases: ["Clean architecture"]
related: ["architecture", "layered-architecture", "hexagonal-architecture"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "Source dependencies point inward",
    "advantages": "Policy stays independent of framework data",
    "limitations": "Boundary mapping adds maintenance",
    "suitable": "Policy must outlive UI and database choices",
    "combinations": "Can use hexagonal ports at the edges",
  }
---

## Concept

Clean architecture directs source dependencies toward policy. Runtime calls can travel outward through inward-owned interfaces. [Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

## Example

1. Fictional single process: R1, A17 unsaved. HTTP/CLI controller maps IDs into SaveArticle; SavedArticle validates them.
2. SaveArticle calls SaveRepository, implemented by memory/embedded-database adapters. Imports point inward: adapters → use-case contracts → domain; calls reach outward to storage. Only plain data crosses; ORM rows stay outside.
3. Saved: 0 → 1 entries; repeat → 1. Empty IDs or failure before writing → 0; retry after correction.

## When to choose it

Useful for lasting policy; mapping costs maintenance. Combine with hexagonal ports. Four folders are not mandatory.
