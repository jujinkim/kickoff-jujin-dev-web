---
kind: "concept"
articleId: "microservices"
lang: "en"
title: "Microservices"
summary: "Release capability services independently."
category: "service-split"
aliases: ["Microservices"]
related: ["architecture", "monolith", "modular-monolith"]
status: "published"
revision: 5
sourceRevision: 5
updated: "2026-09-26"
checked: "2026-09-22"
comparison:
  {
    "features": "Independently deployable capability services",
    "advantages": "Library can release without rebuilding Billing",
    "limitations": "Network failures and data coordination",
    "suitable": "Stable boundaries and independent release needs",
    "combinations": "Can coexist with a modular monolith",
  }
---

## Why: the goal or problem

Imagine a school app where families save notices and pay fees. Urgent volunteer tags cannot wait for billing releases. One team accepts network coordination for independence; internal modules still release together.

## How: work toward a solution

1. One team runs Catalog, Library and Billing at v1; saved School Events has no tag.
2. Deploy Library v2 with compatible tags; Catalog and Billing stay v1.
3. Library queries Catalog over the network, then writes `volunteer` to its store. Timeout leaves no tag; report failure and retry after recovery.

## What: the concept

Microservices are independently deployable capability services with explicit contracts and owned data. Separate processes alone do not ensure independence. [Lewis and Fowler](https://martinfowler.com/articles/microservices.html)

Network failures and cross-service data require coordination. Remaining capabilities can stay a modular monolith.
