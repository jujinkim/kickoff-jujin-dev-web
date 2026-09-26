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
revision: 5
sourceRevision: 5
updated: "2026-09-26"
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

Imagine a recipe app where neighbors save cookbooks and buy extras. One small team needs family tags. Coordinating separate releases adds work; one shared release matters more than independent schedules.

## How: work toward a solution

1. One team ships Catalog, Library and Billing; saved Community Cookbook has no tag.
2. Add Library tags; deploy app v2, including unchanged Billing. The app owns a shared database.
3. Library queries Catalog in-process, then writes `family`. A failed lookup leaves no tag; retry after recovery.

## What: the concept

A monolith deploys its server application as one unit. Replicas of that artifact remain a monolith; internal modules are allowed. [Lewis and Fowler](https://martinfowler.com/articles/microservices.html)

Releases and process failures are shared. Add explicit modules as boundaries matter.
