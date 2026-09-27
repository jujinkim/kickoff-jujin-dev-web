---
articleId: script
lang: en
sourceRevision: 8
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

Choose script for a short greeting or expressive title, not because it is decorative enough to replace body text. Serif or sans-serif can carry longer reading. Script fonts vary in joining behavior and language coverage.

## Applications

The invitation separates its Latin greeting from practical event details. A personal card or small editorial title can use similar emphasis. This specimen does not demonstrate Korean or Japanese handwriting.

## Implementation & cautions

Wait for document.fonts.ready and inspect the loaded font. Range measurements retain shaping in one text node; ligatures, combining marks and fallback glyphs can affect ranges. Keep width experiments separate from the real specimen, and test localized font coverage.
