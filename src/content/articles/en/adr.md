---
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
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "Draft a proposed ADR for our rendering choice. Read existing decisions first. Include constraints, alternatives, costs, recommendation, owner, and revisit trigger. Ask me to accept, reject, or choose another option. Do not mark it accepted until I decide or explicitly delegate this decision."
---

## Concept

A design decision chooses behavior or structure. An architectural decision record (ADR) preserves a significant choice with context, alternatives, and consequences. A commit says what changed; it rarely explains why the losing options lost.

## When you need it

Write a record when a choice affects multiple components, adds a durable dependency, or is expensive to reverse. Button color does not need a constitutional convention. Authentication strategy probably does.

## Example

For a public catalog with no accounts, pre-rendered HTML is a candidate. Record freshness requirements, alternatives such as request-time rendering, and the cost of rebuilding. The example is an accepted decision only after its owner agrees; a generated recommendation is still proposed.

```text
ADR-001: Static catalog
Status: accepted
Context: public articles; no per-user data
Decision: pre-render HTML
Cost: publish requires a build
Revisit: private personalized content becomes required
```

## Options and tradeoffs

An informal note is fast but easy to lose. An ADR makes status and consequences visible but needs maintenance. Keeping rejected options prevents repeated debates. Keeping every trivial option turns the log into landfill.

## When to choose it

Use proposed, accepted, rejected, and superseded states. Assign a stable number and link successor records. Preserve old reasoning instead of rewriting history to pretend you knew everything. Set a revisit trigger based on a changed constraint.

## AI instructions

Draft a proposed ADR for our rendering choice. Read existing decisions first. Include constraints, alternatives, costs, recommendation, owner, and revisit trigger. Ask me to accept, reject, or choose another option. Do not mark it accepted until I decide or explicitly delegate this decision.

## Related reading and sources

- [SRS: make ‘done’ mean something](/en/catalog/srs/)
- [Astro, Hugo, Jekyll: three ways to ship HTML](/en/catalog/static-sites/)

- [AWS — Architectural decision records](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/welcome.html)
