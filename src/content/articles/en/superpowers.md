---
kind: "concept"
articleId: "superpowers"
lang: "en"
title: "Superpowers"
summary: "Use composable development skills when repeatable design, testing, debugging, and review steps are the priority."
category: "agent-workflows"
aliases: ["superpowers", "Superpowers", "슈퍼파워스", "スーパーパワーズ"]
related: ["no-extra-skills", "spec-kit", "openspec", "tools", "srs"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-10-08"
checked: "2026-10-08"
comparison:
  {
    "features": "Composable design, test, debug, and review skills",
    "advantages": "Explicit development and verification habits",
    "limitations": "Workflow and harness setup add overhead",
    "suitable": "Repeatable execution and regression checks",
    "combinations": "Existing requirements or a clearly owned specification workflow",
  }
---

## Why: the goal or problem

A recipe app lets cooks scale ingredient quantities. Halving servings produces the wrong flour amount. Its developer needs a repeatable test-and-review repair process; preserving a product specification alone does not establish that habit.

## How: work toward a solution

Agree on the scaling rule, write a test for 200 g becoming 100 g, observe failure, fix the calculation, and rerun checks. Review the change against the agreed plan.

## What: the concept

Superpowers packages development workflows as composable agent skills. Installation and activation depend on the harness. Its procedures add work; prefer existing checks when sufficient, and a specification workflow when durable requirement tracking is the priority.

[Source](https://github.com/obra/superpowers)
