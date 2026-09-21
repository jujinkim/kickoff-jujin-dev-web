---
kind: guide
articleId: "architecture"
lang: "en"
title: "Architecture without acronym worship"
summary: "Use SOLID and GRASP to reason about change, not to win acronym bingo."
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
related: ["ooad", "adr"]
example: "layers"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "Trace a concrete change through our code. Show dependency direction and misplaced responsibilities. Explain which SOLID or GRASP principle helps and what extra complexity it introduces. Ask before changing architectural boundaries. Propose the smallest refactor and a behavior-preserving verification plan."
---

## Concept

Architecture sets boundaries and dependency direction. SOLID describes single responsibility, open/closed design, substitutability, focused interfaces, and dependency inversion. GRASP offers responsibility heuristics including information expert, creator, controller, low coupling, and high cohesion. These are questions to ask, not folders to create.

## When you need it

Use these ideas when storage changes break business rules, a UI owns pricing, or every test needs a database. Locate the change that hurts before introducing a new layer.

## Example

A pricing function depends on a tax policy interface, while the application supplies its implementation. A database adapter implements a storage port. This allows a calculation test without a database. Dependency inversion concerns source dependencies, not reversing the order in which users click buttons.

```text
UI -> use case -> domain rules
         |
         v
     storage port <- database adapter
Domain rules do not import the UI or database driver.
```

## Options and tradeoffs

Direct calls cost less code but couple the caller to implementation details. A port makes replacement and testing easier but adds an abstraction to maintain. SRP means one coherent reason to change, not one method per file. Liskov substitution requires compatible behavior, not merely matching method names.

## When to choose it

Keep cohesive rules together; split interfaces when clients need different capabilities. Introduce ports at real external boundaries. Use GRASP expert to place a rule near the data needed to enforce it, and a controller to coordinate a use case. Prefer a measured improvement over a diagram with nineteen boxes.

## AI instructions

Trace a concrete change through our code. Show dependency direction and misplaced responsibilities. Explain which SOLID or GRASP principle helps and what extra complexity it introduces. Ask before changing architectural boundaries. Propose the smallest refactor and a behavior-preserving verification plan.

## Related reading and sources

- [OOAD: give each object a job](/en/guides/ooad/)
- [Design decisions that leave a paper trail](/en/guides/adr/)

- [Microsoft — Architecture principles](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles)
- [Craig Larman — Applying UML and Patterns](https://www.craiglarman.com/wiki/index.php?title=Books_by_Craig_Larman)
