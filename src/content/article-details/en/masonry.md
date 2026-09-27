---
articleId: masonry
lang: en
sourceRevision: 7
sources:
  - title: "Masonry: Layout"
    url: "https://masonry.desandro.com/layout.html"
    claim: "Original library documentation explains image-aware packing. This site uses its own small layout routine, not the library."
    checked: "2026-09-27"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: "Supports narrow-screen and zoom checks, not the definition of a layout or typeface."
    checked: "2026-09-27"
---

## Selection & comparison

Choose varied-height packing for image-led browsing. Use a uniform grid when matching attributes across rows matters more, or a list when a strict reading sequence dominates. Visual and focus order need explicit review in masonry.

## Applications

The album mixes landscape and portrait assets with different caption lengths. A portfolio can use the same relationship. This example repeats one photograph with another memory to show that text height matters too.

## Implementation & cautions

Keep source order, measure actual card height, and observe image, font and disclosure changes. The no-JavaScript fallback is an ordinary grid. Test every pair for overlap after expansion and verify that Tab follows the unchanged DOM sequence.
