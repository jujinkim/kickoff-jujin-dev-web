---
articleId: two-columns
lang: en
sourceRevision: 7
sources:
  - title: "W3C Design System: Sidebar"
    url: "https://design-system.w3.org/layouts/sidebar.html"
    claim: >-
      Pattern example with narrower support panel and stacking based on
      available width; not a catalog-wide official taxonomy.
    checked: "2026-09-26"
  - title: CSS Grid Layout Level 1
    url: "https://www.w3.org/TR/css-grid-1/"
    claim: Defines tracks and placement of separate grid items.
    checked: "2026-09-26"
  - title: CSS Multi-column Layout Level 1
    url: "https://www.w3.org/TR/css-multicol-1/"
    claim: Distinguishes fragmented content flow from independent layout regions.
    checked: "2026-09-26"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: >-
      Supports checking narrow-width reading without losing information or
      functionality; does not define sidebar layout.
    checked: "2026-09-26"
---

## Selection & comparison

A sidebar is useful when one region supports another: filters beside results, chapter navigation beside a document, or metadata beside an editor. The two regions do not need equal width. Choose a single column for a linear reading task; choose multiple regions when several work areas need sustained attention. A list or grid can sit inside the main region, so these choices can coexist.

## Applications

In the recipe index, cooks filter ingredients and time while retaining the result list. Tomato plus 20 minutes produces one recipe; 10 minutes produces none and offers recovery. On a narrow screen the same filters come before the recipes. A documentation sidebar can follow the same structural principle, but needs navigation links rather than pretending to be a recipe filter.

## Implementation & cautions

CSS Grid can use `grid-template-columns: minmax(150px, .7fr) minmax(0, 2fr)` with a content-width breakpoint. Flexbox can also wrap the pair according to available width. Keep DOM order meaningful when the regions stack. A sidebar need not be sticky: check zoom, long labels and content height before adding sticky positioning. CSS `column-count` instead flows one body of content between columns; it does not create independent page areas.
