---
articleId: consumable-purchase
lang: en
sourceRevision: 6
sources:
  - title: "Apple: in-app purchase types"
    url: "https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types"
    claim: Consumables deplete with use; store receipts and fulfillment are outside this browser model.
    checked: "2026-09-27"
---

## Selection & comparison

A crossword fits consumables when each hint has a separate use. A non-consumable purchase unlocks a lasting feature, while a subscription grants time-based access. Consumable units can exist beside either without making permanent unlocks consumable.

## Applications

A player buys a pack of three hints and spends one per use. At zero, use is blocked; another purchase adds three. Pack price and storefront seller terms are unspecified; all purchases here are local simulations.

## Implementation & cautions

Validate receipts and grant each transaction once before allowing spend. Decide cross-device balance, refunds and offline behavior. Local duplicate-click protection is useful but does not replace a server ledger or platform transaction processing.
