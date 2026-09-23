---
kind: "concept"
articleId: "user-story"
lang: "en"
title: "User story"
summary: "Turn user value into a small, reviewable increment."
category: "requirements"
aliases: ["User story"]
related: ["srs", "use-case", "job-story"]
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "User value and acceptance conversation",
    "advantages": "Keeps a deliverable small",
    "limitations": "A sentence leaves details unresolved",
    "suitable": "Planning an incremental delivery",
    "combinations": "Use case paths and job story context",
  }
---

## Why: the goal or problem

A commuter wants to find Morning Walk again, but a broad reading-list feature is too large to review in one change.

## How: work toward a solution

1. Fictional setup: a signed-in commuter, Morning Walk unsaved.
2. Role → goal → benefit: “As a reader, I want to save Morning Walk’s link so I can return later.”
3. Acceptance: saving creates one entry; repeating keeps one. Failure before writing leaves it unsaved, with retry feedback.

Saving a link does not promise offline reading.

## What: the concept

A user story describes a small increment of user value, refined through conversation and acceptance criteria. The role–goal–benefit sentence starts discussion; it is not a complete specification. [Source](https://agilealliance.org/glossary/user-stories/)

Add use-case failure paths and job-story context.
