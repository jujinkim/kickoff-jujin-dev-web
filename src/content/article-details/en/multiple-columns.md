---
articleId: multiple-columns
lang: en
sourceRevision: 8
sources:
  - title: "W3C: CSS Grid Level 1"
    url: "https://www.w3.org/TR/css-grid-1/"
    claim: "Candidate Recommendation Draft defines two-dimensional grid placement, not this editorial page taxonomy."
    checked: "2026-09-27"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: "Supports narrow-screen and zoom checks, not the definition of a layout or typeface."
    checked: "2026-09-27"
  - title: "W3C: CSS Multi-column Level 1"
    url: "https://www.w3.org/TR/css-multicol-1/"
    claim: "Defines text fragmentation into columns, a separate mechanism from page regions."
    checked: "2026-09-27"
---

## Selection & comparison

Choose multiple regions when selection, active work and independent context must coexist. A sidebar is simpler when there is one main task and one supporting control area. Region count alone does not prove usability.

## Applications

The museum links each exhibit with its image and observation question. Editors and reference tools can use similar coordination. The generated botanical images illustrate the page structure rather than documenting museum collections.

## Implementation & cautions

CSS Grid places distinct regions; CSS multi-column fragments one content flow. Keep the DOM order navigation → exhibit → explanation and collapse that order on small screens. Update image and context from one selection state.
