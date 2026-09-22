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
revision: 2
sourceRevision: 2
updated: "2026-09-23"
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

Features interfere, but separate services add unwanted operating work. You need boundaries within one deployment.

## How: work toward a solution

1. Fictional app v1: one team deploys Catalog, Library and Billing together; A17 has no tag.
2. Library adds tag storage in its owned tables. Deploy app v2; Billing behavior stays unchanged. One database holds module-owned tables; direct cross-module access is forbidden.
3. Library calls Catalog's API in-process, then writes `travel`. A lookup error leaves no tag; retry after recovery.

## What: the concept

A modular monolith combines one deployment with deliberate internal boundaries. Module APIs protect owned internals. It is still a monolith. [Fowler](https://martinfowler.com/bliki/MonolithFirst.html)

Enforce boundaries beyond folders; releases and process failures remain shared. Modules can use hexagonal ports.
