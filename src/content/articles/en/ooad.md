---
kind: guide
articleId: "ooad"
lang: "en"
title: "OOAD: give each object a job"
summary: "Model behavior and ownership before drawing a forest of classes."
category: "planning"
aliases:
  [
    "OOAD",
    "responsibility",
    "객체지향",
    "책임 분리",
    "オブジェクト指向",
    "責務",
  ]
related: ["architecture", "srs"]
example: "objects"
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "Review our checkout use case. Identify domain concepts, invariants, and responsibility owners. Compare a transaction script with a small domain model using our actual complexity. Ask about unresolved boundaries; do not add an inheritance tree by default. Return a responsibility table, call sequence, failure ownership, and tests."
---

## Concept

Object-oriented analysis identifies domain concepts and rules. Design assigns those rules to collaborating objects.

## Example

Order owns confirmation rules; Inventory owns stock; checkout coordinates them; payment infrastructure contacts the provider.

## When to choose it

A transaction script is simple. A domain model centralizes rules but adds concepts and indirection. Start with one use case and a responsibility table. Name who handles failure and rollback. [Microsoft](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/microservice-domain-model)
