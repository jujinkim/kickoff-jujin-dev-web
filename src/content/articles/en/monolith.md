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
revision: 4
sourceRevision: 4
updated: "2026-09-23"
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

## Why: the goal or problem

Imagine a community cookbook with recipes, tags, and billing. One small team releases them together; separate pipelines add coordination.

## How: work toward a solution

1. One team ships Catalog, Library and Billing; Community Cookbook has no tag.
2. Add tag support in Library; deploy app v2. Billing behavior stays unchanged, but ships in the same artifact. The app owns a shared database.
3. Library calls Catalog in-process, then writes `family`. A Catalog error before writing leaves no tag; retry after recovery.

## What: the concept

A monolith deploys its server application as one unit. Replicas of that artifact remain a monolith; internal modules are allowed. [Lewis and Fowler](https://martinfowler.com/articles/microservices.html)

Releases and process failures are shared. Add explicit modules as boundaries matter.
