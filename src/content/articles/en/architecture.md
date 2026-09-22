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
revision: 3
sourceRevision: 3
updated: "2026-09-23"
aiPrompt: "Read our confirmed requirements and constraints. Propose project-wide modules, responsibilities, data and rule ownership, allowed dependencies, public contracts, and failure recovery owners. Explain alternatives and maintenance costs. Ask about unresolved architectural choices; preserve approved decisions. Choose internal classes, methods and data structures yourself within these boundaries. Draw UML only if it clarifies a decision; do not require me to supply it."
---

## Concept

Architecture assigns module responsibilities, ownership and dependency direction. Explicit contracts let internal implementations change without breaking collaborators. [Microsoft](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles)

## Example

UI → use case → domain rules. Order owns confirmation rules; Inventory owns stock. Checkout coordinates them and recovery; a database adapter handles storage.

## When to choose it

Agree on these boundaries when responsibilities cross features. Interfaces improve replaceability but add maintenance. Keep the structure proportional to the project. In this workflow, AI derives classes, methods and any useful UML; users confirm project-wide responsibilities and constraints.
