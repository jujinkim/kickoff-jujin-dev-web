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
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "Review our checkout use case. Identify domain concepts, invariants, and responsibility owners. Compare a transaction script with a small domain model using our actual complexity. Ask about unresolved boundaries; do not add an inheritance tree by default. Return a responsibility table, call sequence, failure ownership, and tests."
---

## Concept

Object-oriented analysis identifies domain concepts and rules. Design assigns those rules to collaborators. A class named Manager does not magically manage complexity. Ask who knows the facts, who owns the invariant, and who coordinates the use case.

## When you need it

Use responsibility modeling when validation is duplicated across screens, or changing one rule forces unrelated changes. It is useful even in a functional codebase: ownership still matters without classes.

## Example

An Order owns whether it can be confirmed. Inventory owns available stock. A checkout application service coordinates them. Payment infrastructure talks to a provider; it should not decide which books are sellable. The arrows below represent calls, not inheritance.

```text
Checkout -> Order.place()
Order -> Inventory.reserve(items)
Order -> Payment.authorize(total)
Receipt <- Order.confirm()
```

## Options and tradeoffs

One transaction script is easy to follow for a small workflow, but repeated rules drift. A domain model concentrates rules but adds concepts and indirection. Inheritance shares behavior tightly; composition permits replacing collaborators at the cost of explicit wiring.

## When to choose it

Start with a responsibility table and one concrete use case. Extract domain objects when rules repeat or invariants need protection. Avoid an abstract factory for a feature that only prints a receipt. Record failure and rollback responsibilities, too.

## AI instructions

Review our checkout use case. Identify domain concepts, invariants, and responsibility owners. Compare a transaction script with a small domain model using our actual complexity. Ask about unresolved boundaries; do not add an inheritance tree by default. Return a responsibility table, call sequence, failure ownership, and tests.

## Related reading and sources

- [Architecture without acronym worship](/en/guides/architecture/)
- [SRS: make ‘done’ mean something](/en/guides/srs/)

- [Microsoft — Domain model design](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/microservice-domain-model)
