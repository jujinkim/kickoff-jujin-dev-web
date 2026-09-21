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
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "Trace a concrete change through our code. Show dependency direction and misplaced responsibilities. Explain which SOLID or GRASP principle helps and what extra complexity it introduces. Ask before changing architectural boundaries. Propose the smallest refactor and a behavior-preserving verification plan."
---

## Concept

Architecture defines boundaries and dependency direction. SOLID and GRASP help assign responsibilities; they are not folder templates.

## Example

UI → use case → domain rules. A database adapter implements a storage interface; domain rules do not import database drivers.

## When to choose it

Direct calls are simpler. Interfaces ease replacement and testing but add abstractions to maintain. Keep related rules together. Add boundaries where changes actually hurt, rather than maximizing layers. [Microsoft](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles) · [Craig Larman](https://www.craiglarman.com/wiki/index.php?title=Books_by_Craig_Larman)
