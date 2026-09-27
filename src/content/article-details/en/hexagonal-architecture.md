---
articleId: hexagonal-architecture
lang: en
sourceRevision: 6
sources:
  - title: "Alistair Cockburn: Hexagonal architecture"
    url: "https://alistair.cockburn.us/hexagonal-architecture"
    claim: >-
      Original ports-and-adapters account explains application isolation and
      substitutable external connections.
    checked: "2026-09-26"
---

## Selection & comparison

Choose ports and adapters when the same application behavior must work through different entry points or storage technologies. A test can call the application with a memory adapter before a web server or database exists. Layered architecture may suffice for responsibility separation; clean architecture can add internal policy boundaries. These approaches can coexist. Do not create an interface for every function without a replacement or testing need.

## Applications

The class-guide example has an application-owned SaveRepository contract. An HTTP controller and a command-line adapter invoke the same saving operation. A memory adapter supports a fast behavior test; a database adapter supports deployment. Both must honor the same duplicate, invalid-input and failure rules. Replacing an adapter does not migrate existing records or guarantee that a test double matches a database’s behavior.

## Implementation & cautions

Read the solid dependency labels separately from the dashed runtime path. A call can travel outward while source dependencies point toward a port owned by the application. Define error and transaction behavior at that boundary, then run contract checks against the real adapter too. Keep domain decisions out of controllers and drivers. Six sides are a drawing convention, not a prescribed count of modules, services or deployments.
