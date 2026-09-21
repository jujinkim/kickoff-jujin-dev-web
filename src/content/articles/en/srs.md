---
kind: guide
articleId: "srs"
lang: "en"
title: "SRS: make ‘done’ mean something"
summary: "Turn a wish into requirements someone can actually test."
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
related: ["adr", "ooad"]
example: "spec"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "For the bookshop cart, first read our agreed requirements. List unresolved questions about stock, guest checkout, and failure behavior. Ask me to choose before implementing. Produce numbered requirements, exclusions, acceptance examples, and a small task list. Do not decide unresolved product behavior without explicit delegation."
---

## Concept

A software requirements specification (SRS) describes observable behavior and constraints. Acceptance criteria make a requirement checkable. ‘Make it intuitive’ is a mood, not a test. Keep goals, scope, exclusions, behavior, and quality constraints separate.

## When you need it

Use this before asking AI to build a checkout, booking flow, or anything with failure states. A small project can start with one page. The point is shared meaning, not document weight.

## Example

For a bookshop, ‘users can buy books’ hides stock, quantities, guest checkout, and payment failures. Start with the cart case below. Then define what happens when stock changes while a customer is paying. State who owns that decision.

```text
Given: a visitor with an empty cart
When: they add the same book twice
Then: one cart row has quantity 2
Failure: unavailable stock leaves the cart unchanged
```

## Options and tradeoffs

A checklist is cheap to maintain but can omit interactions. User stories explain motivation but still need acceptance criteria. A detailed SRS helps multiple teams coordinate, at the cost of review and maintenance. Choose detail according to ambiguity and consequences.

## When to choose it

For a small, single-team feature, use numbered requirements with one success case and one failure case each. Add measurable limits only when justified: name the device, workload, and measurement method. Do not invent a 100 ms target because it looks scientific.

## AI instructions

For the bookshop cart, first read our agreed requirements. List unresolved questions about stock, guest checkout, and failure behavior. Ask me to choose before implementing. Produce numbered requirements, exclusions, acceptance examples, and a small task list. Do not decide unresolved product behavior without explicit delegation.

## Related reading and sources

- [Design decisions that leave a paper trail](/en/guides/adr/)
- [OOAD: give each object a job](/en/guides/ooad/)

- [NASA — Software requirements](https://swehb.nasa.gov/display/SWEHBVD/SWE-050+-+Software+Requirements)
