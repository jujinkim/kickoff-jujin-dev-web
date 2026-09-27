---
articleId: monospace
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

Choose monospace for code or space-aligned records. Proportional text can fit running prose more naturally; tabular digits alone may suffice for numeric tables. A sans-serif shape does not imply equal width.

## Applications

The weather log uses fictional Latin readings to make column alignment visible. Logs, code examples and identifiers can use the same technique. A semantic table is preferable when readers need explicit row and column relationships.

## Implementation & cautions

Wait for document.fonts.ready and inspect the loaded font. Range measurements retain shaping in one text node; ligatures, combining marks and fallback glyphs can affect ranges. Keep width experiments separate from the real specimen, and test localized font coverage.
