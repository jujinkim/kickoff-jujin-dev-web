---
kind: "concept"
articleId: "no-extra-skills"
lang: "en"
title: "No additional skills"
summary: "Use existing agent instructions and checks when extra workflow setup adds little value."
category: "agent-workflows"
aliases:
  [
    "no-extra-skills",
    "No additional skills",
    "추가 스킬 없이 시작하기",
    "追加スキルなしで始める",
  ]
related: ["spec-kit", "superpowers", "openspec", "tools", "srs"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-10-08"
checked: "2026-10-08"
comparison:
  {
    "features": "Existing instructions and checks",
    "advantages": "No extra installation",
    "limitations": "You must keep decisions and checks explicit",
    "suitable": "Clear scope with adequate existing practices",
    "combinations": "Existing project rules and ordinary agent tools",
  }
---

## Why: the goal or problem

Visitors check meeting times and venues on a school club website. One venue label is wrong; its developer already has page checks and a clear correction. Direct work avoids extra setup. Shared, interdependent requirements would favor a recorded workflow instead.

## How: work toward a solution

Read the project rules, agree on the correct venue, edit the label, and run existing checks. Inspect the page and report the result. Install nothing extra; keep any required decision and work records.

## What: the concept

Starting without additional skills uses the agent’s existing capabilities. It still requires planning and verification. Reconsider when uncertainty, risk, collaboration, or handoff outgrow existing practices.

[Source](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
