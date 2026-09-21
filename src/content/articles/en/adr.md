---
kind: guide
articleId: "adr"
lang: "en"
title: "Design decisions that leave a paper trail"
summary: "Record why a choice won, and when it should stop winning."
category: "planning"
aliases:
  [
    "ADR",
    "Design Decision",
    "decision record",
    "설계 결정",
    "결정 기록",
    "設計判断",
    "決定記録",
  ]
related: ["srs", "static-sites"]
example: "decision"
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "Draft a proposed ADR for our rendering choice. Read existing decisions first. Include constraints, alternatives, costs, recommendation, owner, and revisit trigger. Ask me to accept, reject, or choose another option. Do not mark it accepted until I decide or explicitly delegate this decision."
---

## Concept

An architectural decision record (ADR) preserves a significant choice, its context, alternatives, and consequences.

## Example

A public catalog chooses pre-rendered HTML. Cost: rebuild to publish. Revisit if private, personalized content becomes necessary.

## When to choose it

Informal notes are quick but easily lost. ADRs preserve reasoning but need maintenance. Record an owner and status: proposed, accepted, rejected, or superseded. A recommendation is not approval. [AWS](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/welcome.html)
