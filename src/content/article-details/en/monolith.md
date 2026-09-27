---
articleId: monolith
lang: en
sourceRevision: 7
sources:
  - title: "James Lewis and Martin Fowler: Microservices"
    url: "https://martinfowler.com/articles/microservices.html"
    claim: Contrasts one deployment unit with independently deployable services; internal modularity and replica count are separate.
    checked: "2026-09-27"
---

## Selection & comparison

Choose one release unit when one team can coordinate related capabilities cheaply. A modular monolith adds enforceable internal ownership without changing deployment count. Microservices become relevant when independent releases justify network and operations costs.

## Applications

The recipe app adds a family tag to Library while releasing Catalog and Billing in the same artifact. Their unchanged code still travels with the release. One deployment may run as several replicas; that does not turn it into several services.

## Implementation & cautions

Separate source structure from the release boundary. Local calls avoid network hops, but a process crash can affect all capabilities in that instance. Database ownership, backup and schema compatibility still need explicit decisions; redeploying an older artifact does not reverse writes.
