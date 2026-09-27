---
articleId: sans-serif
lang: en
sourceRevision: 9
sources:
  - title: "W3C: CSS Fonts Level 3"
    url: "https://www.w3.org/TR/css-fonts-3/"
    claim: Defines generic font families and numeric features. Actual advance widths depend on the loaded font and shaping.
    checked: "2026-09-27"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: "Supports narrow-screen and zoom checks, not the definition of a layout or typeface."
    checked: "2026-09-27"
---

## Selection & comparison

Choose a plain sans-serif voice when it fits the information hierarchy. Serif can support an editorial tone, while script supplies short expressive lettering. None is universally more readable; compare actual glyphs, size, weight and language.

## Applications

The fictional transit board keeps time, destination and service status distinct through size and weight. Signage and interfaces can apply the same hierarchy. The typography example is not live transport information.

## Implementation & cautions

Wait for document.fonts.ready and inspect the loaded font. Range measurements retain shaping in one text node; ligatures, combining marks and fallback glyphs can affect ranges. Keep width experiments separate from the real specimen, and test localized font coverage.
