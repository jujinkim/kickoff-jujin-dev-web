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
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "For the bookshop cart, first read our agreed requirements. List unresolved questions about stock, guest checkout, and failure behavior. Ask me to choose before implementing. Produce numbered requirements, exclusions, acceptance examples, and a small task list. Do not decide unresolved product behavior without explicit delegation."
---

## Concept

A software requirements specification (SRS) describes observable behavior and constraints. Acceptance criteria make requirements checkable.

## Example

Given an empty cart, adding the same book twice creates one row with quantity 2. Unavailable stock leaves it unchanged.

## When to choose it

Checklists are lightweight; user stories explain motivation; detailed specifications coordinate teams but need more maintenance. Write numbered requirements with success and failure cases. Add measurable limits only with a justified measurement method. [NASA](https://swehb.nasa.gov/display/SWEHBVD/SWE-050+-+Software+Requirements)
