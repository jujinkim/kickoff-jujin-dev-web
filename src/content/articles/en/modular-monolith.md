---
kind: "concept"
articleId: "modular-monolith"
lang: "en"
title: "Modular monolith"
summary: "Keep module ownership inside one release unit."
category: "service-split"
aliases: ["Modular monolith"]
related: ["architecture", "monolith", "microservices"]
status: "published"
revision: 5
sourceRevision: 5
updated: "2026-09-26"
checked: "2026-09-22"
comparison:
  {
    "features": "Explicit module APIs within one deployment",
    "advantages": "Library changes stay behind its API",
    "limitations": "Boundaries need enforcement; releases stay shared",
    "suitable": "Clear ownership without remote calls",
    "combinations": "Can use clean or hexagonal module internals",
  }
---

## Why: the goal or problem

Imagine a hiking app where walkers save guides and buy extras. Weekend tags risk changing billing code. The team wants clear ownership within one release, without separate services.

## How: work toward a solution

1. One team ships Catalog, Library and Billing together; saved Hiking Guide has no tag.
2. Add tags to Library-owned tables; deploy app v2 with unchanged Billing. One database; cross-module table access is forbidden.
3. Library calls Catalog's API in-process, then writes `weekend`. Failed lookup leaves no tag; retry after recovery.

## What: the concept

A modular monolith combines one deployment with deliberate internal boundaries. Module APIs protect owned internals. It is still a monolith. [Fowler](https://martinfowler.com/bliki/MonolithFirst.html)

Enforce boundaries beyond folders; releases and process failures remain shared. Modules can use hexagonal ports.
