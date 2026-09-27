---
articleId: srs
lang: en
sourceRevision: 8
sources:
  - title: "NASA: How to Write a Good Requirement"
    url: "https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/"
    claim: >-
      Supports clear, verifiable requirements; the cart outcomes are authored
      examples rather than NASA requirements.
    checked: "2026-09-26"
  - title: "AWS: Architectural decision record process"
    url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html"
    claim: >-
      Defines the decision, context, consequences and lifecycle of architectural decision records; it does not define the example cart policy or promise AI output quality.
    checked: "2026-09-26"
---

## Selection & comparison

Use a behavior walkthrough when people agree on a feature name but predict different outcomes. A user story can establish value, and a use case can enumerate success and failure paths. Neither replaces agreement on observable results. A short requirement can be enough if its assumptions and checks are clear; document length is not a measure of readiness.

## Applications

The bookshop begins with one copy of Book A. A deliberate new addition produces quantity two. Retrying the same already-applied request leaves quantity one. An unavailable-stock response preserves the cart and explains the problem. Review these cases independently: the same button can produce different delivery scenarios. Give each accepted rule a stable identifier so tasks and verification can refer to it.

## Implementation & cautions

Write each check as initial conditions, action and expected result. Include relevant feedback and data preservation. Record unresolved behavior as an open question rather than coding a guess. Agree on a measurable threshold only when performance matters to the project. On scope changes, update the requirement, affected tasks and checks together. AI may choose arrays, maps and document formats; the user retains decisions about product behavior.
