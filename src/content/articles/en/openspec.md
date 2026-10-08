---
kind: "concept"
articleId: "openspec"
lang: "en"
title: "OpenSpec"
summary: "Keep current specifications alongside reviewed change proposals and deltas when evolving agreed behavior."
category: "agent-workflows"
aliases: ["openspec", "OpenSpec", "오픈스펙", "オープンスペック"]
related: ["no-extra-skills", "spec-kit", "superpowers", "tools", "srs"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-10-08"
checked: "2026-10-08"
comparison:
  {
    "features": "Current specs plus proposed change deltas",
    "advantages": "Changed and preserved rules stay visible",
    "limitations": "Artifacts must stay aligned with code",
    "suitable": "Reviewable changes to agreed behavior",
    "combinations": "Scoped execution skills and existing project rules",
  }
---

## Why: the goal or problem

A pottery workshop site lets members book sessions and receive confirmation. Adding rescheduling must preserve confirmation rules. Its maintainer wants to review exactly what changes and retain that decision; a direct label edit would need less documentation.

## How: work toward a solution

Keep the current confirmation requirement. Propose a rescheduling rule, record its added scenario and tasks, review, implement, and check both behaviors. Reconcile the specification and archive the change.

## What: the concept

OpenSpec organizes specifications and change artifacts for coding agents. Artifacts can be revised as understanding improves. It supports new projects too; maintained deltas and setup cost must justify its use.

[Source](https://github.com/Fission-AI/OpenSpec)
