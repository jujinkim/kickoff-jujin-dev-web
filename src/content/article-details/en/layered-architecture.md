---
articleId: layered-architecture
lang: en
sourceRevision: 7
sources:
  - title: "Microsoft: N-tier architecture"
    url: "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier"
    claim: Distinguishes logical layers from physical tiers and open from closed layering; this diagram uses one process and closed layers.
    checked: "2026-09-27"
---

## Selection & comparison

Choose layers when presentation, application coordination and persistence have stable responsibilities. Hexagonal ports help when external adapters must vary independently; clean architecture emphasizes inward policy dependencies. Layers may use either technique rather than excluding them.

## Applications

The library guide sends HTTP and CLI saves through the same application validation. Changing an entry point does not duplicate the saving rule. The static arrows explain dependencies, calls and returned results separately; they do not execute requests.

## Implementation & cautions

Declare whether skipping a layer is allowed. Here both imports and calls go downward, and the result returns upward. One process means shared process failure; logical separation is not a deployment boundary. Add boundary checks where they protect a real change, not empty forwarding layers.
