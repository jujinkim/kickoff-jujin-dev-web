---
kind: "concept"
articleId: "monolith"
lang: "en"
title: "Monolith"
summary: "Release the server application as one unit."
category: "service-split"
aliases: ["Monolith"]
related: ["architecture", "modular-monolith", "microservices"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "One server-side release unit",
    "advantages": "One release pipeline for a small team",
    "limitations": "Shared release and process failure boundaries",
    "suitable": "Closely related capabilities with one team",
    "combinations": "Can contain layers and explicit modules",
  }
---

## Concept

A monolith deploys its server application as one unit. Replicas of that artifact remain a monolith; internal modules are allowed. [Lewis and Fowler](https://martinfowler.com/articles/microservices.html)

## Example

1. Fictional reading app: one team; Catalog, Library and Billing in app v1. A17 has no tag.
2. Add tag support in Library; deploy app v2. Billing behavior stays unchanged, but ships in the same artifact. The app owns a shared database.
3. Library calls Catalog inside the process, then writes `travel`. A Catalog error before writing leaves no tag; retry after recovery.

## When to choose it

Useful for one release pipeline. Releases and process failures are shared. Add explicit modules as boundaries matter.
