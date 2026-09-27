---
articleId: architecture
lang: en
sourceRevision: 8
sources:
  - title: "Microsoft: architectural principles"
    url: "https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles"
    claim: Encapsulation and explicit dependencies let responsibilities change behind contracts; no diagram proves runtime isolation.
    checked: "2026-09-27"
---

## Selection & comparison

Choose boundaries around rules, data ownership and likely change. Layers describe organization, ports describe external contracts, and services add deployment boundaries. These decisions can coexist. Use a modular monolith when independent deployment does not justify distributed coordination.

## Applications

The shop’s coordinator sequences order checks, inventory reservation and payment. Order owns confirmation; Inventory owns stock; the integration translates provider results. A timeout stays unresolved until evidence supports retry or release. The arrows show calls, not necessarily source-code imports.

## Implementation & cautions

Record allowed imports separately from runtime calls, deployment units and failure scope. Test duplicate requests, unknown payment outcomes and recovery ownership. A fake provider tests the contract; it does not prove the real network, provider or database will recover atomically.
