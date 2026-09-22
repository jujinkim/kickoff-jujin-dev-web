---
kind: "concept"
articleId: "job-story"
lang: "en"
title: "Job story"
summary: "Explain the situation and desired progress before choosing a solution."
category: "requirements"
aliases: ["Job story"]
related: ["srs", "user-story", "use-case"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "Situation, motivation and desired outcome",
    "advantages": "Leaves room for different solutions",
    "limitations": "Assumed motivation needs research",
    "suitable": "Exploring needs before choosing a UI",
    "combinations": "User story delivery and use case failures",
  }
---

## Concept

A job story connects a situation, motivation and desired outcome before selecting a solution. It starts discovery; it is not an acceptance test. [Source](https://www.intercom.com/blog/using-job-stories-design-features-ui-ux/)

## Example

Fictional signed-in commuter, A17 unsaved:

1. When my journey interrupts reading,
2. I want a way back to A17,
3. so I can finish later.

Evaluate a saved link or a reminder containing the link. Neither promises offline reading. If choosing saving, discuss duplicate saves and persistence failures separately.

## When to choose it

Use when context changes someone’s needs. Check assumed motivation with research; add user-story delivery slices and use-case paths.
