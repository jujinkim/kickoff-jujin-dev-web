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
revision: 4
sourceRevision: 4
updated: "2026-09-23"
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

## Why: the goal or problem

Imagine a cooking app for browsing and saving recipes. A failed write might show Saved even though the recipe cannot be found later.

## How: work toward a solution

Weekend Recipes is unsaved; storage is available.

1. Cook requests saving the Weekend Recipes link.
2. System validates the link.
3. System persists one entry.
4. System confirms success.

If persistence fails before writing: report unsaved, then retry from step 1. Repeating a successful save keeps one entry. A saved link does not promise offline reading.

## What: the concept

A use case describes interactions toward an actor’s goal, including success and failure paths. A diagram alone is not that narrative. [Source](https://alistaircockburn.com/Unifying%20us%20uc%20sm.pdf)

User stories split delivery; job stories explain motivation. Quality needs separate treatment.
