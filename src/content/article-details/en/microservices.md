---
articleId: microservices
lang: en
sourceRevision: 7
sources:
  - title: "James Lewis and Martin Fowler: Microservices"
    url: "https://martinfowler.com/articles/microservices.html"
    claim: Describes independently deployable services organized around capabilities and decentralized data ownership; isolation is not automatic.
    checked: "2026-09-27"
---

## Selection & comparison

Choose services when independent releases, scaling or ownership provide enough value to pay for network failure and data coordination. A modular monolith retains boundaries with simpler local calls. A system may keep some capabilities together while separating others.

## Applications

The school app releases volunteer tags in Library v2 while Catalog and Billing remain v1. Library queries Catalog before writing its own store. The timeout branch leaves the tag absent in this example; it does not claim that every distributed write fails atomically.

## Implementation & cautions

Version contracts, bound timeouts and make retries safe. Separate processes create potential failure boundaries, but synchronous dependencies can spread an outage. Track which service owns each record and how partial success, recovery and schema compatibility are handled.
