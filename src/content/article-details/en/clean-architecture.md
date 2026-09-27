---
articleId: clean-architecture
lang: en
sourceRevision: 7
sources:
  - title: "Robert C. Martin: The Clean Architecture"
    url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
    claim: Original description of inward source dependencies and boundary data; concentric circles do not require four folders.
    checked: "2026-09-27"
---

## Selection & comparison

Choose inward policy dependencies when business rules must survive UI and database changes. Simple layers can suffice for stable roles; hexagonal ports emphasize the inside/outside interaction boundary. These views can describe the same system at different levels.

## Applications

The budget guide maps HTTP or CLI input into SaveArticle and keeps database rows outside the policy. The example separates the caller’s runtime path from what each source module imports. Saving twice still has one record because the application defines that identity.

## Implementation & cautions

Own the storage interface on the inner side, implement it outside, and inject an adapter at composition time. A runtime call may reach outward while its source dependency points inward. Mapping and tests cost maintenance; neither circular artwork nor folder names enforce the rule.
