---
kind: "concept"
articleId: "use-case"
lang: "en"
title: "Use case"
summary: "Describe a goal through success and failure paths."
category: "requirements"
aliases: ["Use case"]
related: ["srs", "user-story", "job-story"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "Actor goal, main path and extensions",
    "advantages": "Exposes failures before implementation",
    "limitations": "Needs slicing for incremental delivery",
    "suitable": "Coordinating saving and retries",
    "combinations": "User story slices and job story context",
  }
---

## Concept

A use case describes interactions toward an actor’s goal, including success and failure paths. A diagram alone is not that narrative. [Source](https://alistaircockburn.com/Unifying%20us%20uc%20sm.pdf)

## Example

Fictional preconditions: signed-in commuter, A17 unsaved, storage initially available.

1. Reader requests saving A17’s link.
2. System validates A17.
3. System persists one entry.
4. System confirms success.

If persistence fails before writing: report unsaved, then retry from step 1. Repeating a successful save keeps one entry. A saved link does not promise offline reading.

## When to choose it

Use to expose failure branches. Split delivery into user stories; record motivation with a job story. Quality requirements still need separate treatment.
