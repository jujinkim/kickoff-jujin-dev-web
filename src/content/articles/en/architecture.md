---
kind: guide
articleId: "architecture"
lang: "en"
title: "Architecture: boundaries and responsibilities"
summary: "Agree on module roles and ownership; let AI work out the internal code."
category: "planning"
aliases:
  [
    "SOLID",
    "GRASP",
    "architecture",
    "아키텍처",
    "응집도",
    "アーキテクチャ",
    "凝集度",
  ]
related: ["srs", "tools"]
example: "layers"
status: "published"
revision: 6
sourceRevision: 6
updated: "2026-09-23"
aiPrompt: "Read our confirmed requirements and constraints. Propose project-wide modules, responsibilities, data and rule ownership, allowed dependencies, public contracts, and failure recovery owners. Explain alternatives and maintenance costs. Ask about unresolved architectural choices; preserve approved decisions. Choose internal classes, methods and data structures yourself within these boundaries. Draw UML only if it clarifies a decision; do not require me to supply it."
---

## Why: the goal or problem

Imagine building an online shop where customers choose goods, place orders, and pay. Stock, order status, and payment results must stay consistent even when the payment provider changes.

Changing a payment provider should not require rewriting order rules and every screen. Yet that happens when features reach directly into each other's storage and responsibilities have no clear owner. Before drawing boxes or picking a fashionable pattern, you need to decide where a change belongs and what other parts may rely on.

## How: work toward a solution

1. Trace one real operation, such as confirming an order. List the steps in ordinary language: check the order, reserve stock, request payment and report the outcome. Include a failure after stock is reserved. This exposes coordination work that a success-only diagram misses.
2. Assign ownership. Order owns confirmation rules; Inventory owns stock; a payment integration contacts the provider. A checkout coordinator owns the sequence and recovery. Avoid two modules independently deciding whether the same order is confirmed.
3. Describe what crosses each boundary: identifiers, requested operation, result, and possible failure. Keep the contract small enough that callers need not know private tables or framework objects. Decide which component may change data and which must request a change through its owner.
4. Ask what may reasonably change. If the provider might change, isolate its translation and error handling. If two pieces always change together and have the same owner, an extra interface may add ceremony without solving a problem. A small app need not copy the organization chart of a large company.
5. Check the boundary with one substitute. Can the order rule run against a fake payment result? Can a provider timeout leave the order in a known state with an owner for retry or recovery? These checks expose coupling more reliably than counting folders.

Have AI produce a short responsibility table and dependency sketch, then derive local classes and methods. Users confirm project-wide roles, operating constraints and behavior. They need not approve every object name. Keep the sketch alongside the scenarios and revise it when ownership changes, rather than treating an old diagram as proof that the code still follows it.

Ask a teammate to trace the same failure using only the contract; clarify any step that appears to have two owners.

## What: the concept

This is software architecture: responsibility, ownership, contracts and dependencies across the system. [Separation of concerns and encapsulation](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles) let implementations change behind explicit agreements. Layers, ports and services are possible ways to express those agreements. Their maintenance cost is justified by actual change or coordination needs, not by the number of boxes in a diagram.
