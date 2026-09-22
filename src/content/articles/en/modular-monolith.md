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
revision: 1
sourceRevision: 1
updated: "2026-09-22"
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

## Concept

A modular monolith combines one deployment with deliberate internal boundaries. Module APIs protect owned internals. It is still a monolith. [Fowler](https://martinfowler.com/bliki/MonolithFirst.html)

## Example

1. Fictional reading app: one team; Catalog, Library and Billing in app v1. A17 has no tag.
2. Library adds tag storage in its owned tables. Deploy app v2; Billing behavior stays unchanged. One database hosts module-owned tables, with no direct cross-module table access.
3. Library calls Catalog's API in-process, then writes `travel`. A lookup error leaves no tag; retry after recovery.

## When to choose it

Useful for clear ownership without remote calls. Enforce boundaries beyond folders; releases and process failures remain shared. Modules can use hexagonal ports.
