---
articleId: non-consumable-purchase
lang: en
sourceRevision: 6
sources:
  - title: "Apple: in-app purchase types"
    url: "https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types"
    claim: Non-consumables do not expire or decrease through use; restoration requires platform entitlement handling.
    checked: "2026-09-27"
---

## Selection & comparison

A night puzzle theme fits a lasting unlock because playing does not use up the theme. Consumable hints decrease with use; subscriptions depend on their access period. A non-consumable describes entitlement behavior, not every obligation associated with a one-time sale.

## Applications

The player buys the theme once; using it or pressing purchase again does not increase the purchase count beyond one. The theme stays available within this demo session. Price and actual store restoration are not modeled.

## Implementation & cautions

Production must verify transactions, support restoration and handle revocations. Reload resets this educational example, not the definition of a non-consumable. Account changes and refunds need explicit entitlement rules rather than browser-only storage.
