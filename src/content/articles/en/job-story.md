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
revision: 4
sourceRevision: 4
updated: "2026-09-23"
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

## Why: the goal or problem

Imagine a gardening guide with planting steps. A reader asks for Save before leaving, but really needs to resume at home.

## How: work toward a solution

Gardener, Garden Notes unsaved:

1. When I leave before finishing the planting guide,
2. I want a way back to Garden Notes,
3. so I can finish the planting plan at home.

Evaluate a saved link or a reminder containing it. Neither promises offline reading. Saving needs duplicate and failure rules.

## What: the concept

A job story connects a situation, motivation and desired outcome before selecting a solution. It starts discovery; it is not an acceptance test. [Source](https://www.intercom.com/blog/using-job-stories-design-features-ui-ux/)

Check assumed motivation with research; add user-story delivery slices and use-case paths.
