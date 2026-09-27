---
articleId: modular-monolith
lang: en
sourceRevision: 7
sources:
  - title: "Martin Fowler: Monolith First"
    url: "https://martinfowler.com/bliki/MonolithFirst.html"
    claim: Discusses learning service boundaries within a monolith; this example’s table-access rules are authored enforcement choices.
    checked: "2026-09-27"
---

## Selection & comparison

Choose explicit modules when ownership matters but shared releases remain acceptable. It is a disciplined form of monolith, not a third deployment topology. Microservices add independent deployment and network contracts; modules can prepare boundaries without promising an eventual split.

## Applications

The hiking app lets Library own weekend tags and call Catalog through an internal API. Billing remains unchanged. The shared database contains separately owned tables; the drawing is about permitted access, not the number of database machines.

## Implementation & cautions

Enforce imports and table access with tests or tooling. Avoid reaching into another module’s private data even inside one process. Shared deployment and process failure remain; module APIs do not provide network isolation or independent rollback.
