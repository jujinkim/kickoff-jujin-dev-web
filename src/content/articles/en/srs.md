---
kind: guide
articleId: "srs"
lang: "en"
title: "Requirements: agree on what done means"
summary: "Describe the behavior; AI writes requirements and decision records."
category: "planning"
aliases:
  [
    "SRS",
    "requirements",
    "acceptance criteria",
    "요구사항",
    "완료 조건",
    "要件",
    "受け入れ条件",
  ]
related: ["architecture", "shipping"]
example: "spec"
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
aiPrompt: "Read our agreed requirements. Ask only about unresolved product behavior and constraints, including duplicate handling, order, stock, guest checkout and recovery. Turn the answers into numbered requirements, acceptance criteria and tasks. Write useful user stories, use cases or job stories yourself, without asking me to choose a document format. Record significant decisions, alternatives, status and revisit conditions. Choose internal data structures yourself; do not infer missing product rules."
---

## Concept

Requirements describe observable behavior and constraints; acceptance criteria make them checkable. [NASA](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695421/SWE-050%2B-%2BSoftware%2BRequirements)

## Example

An empty cart receives the same book twice: one row, quantity two. Unavailable stock leaves it unchanged. The user confirms this behavior; AI chooses storage structures.

## When to choose it

Use before development to settle scope, motivation, success and failure. AI writes suitable stories or scenarios; users need not select document formats. Keep records proportional: decision records preserve important choices, context and consequences, but need maintenance. AI records these alongside acceptance criteria. [AWS](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
