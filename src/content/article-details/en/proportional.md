---
articleId: proportional
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

Choose proportional letters when running text should reflect different glyph proportions. Use monospace when spaces must align Latin columns. Both serif and sans-serif families may be proportional, and proportional text may use tabular numerals.

## Applications

The garden newsletter pairs flowing Latin paragraphs with localized supporting text. Editorial pages and everyday interface copy can use the same width model. Inspect the actual font and script rather than assuming every glyph is proportional.

## Implementation & cautions

Wait for document.fonts.ready and inspect the loaded font. Range measurements retain shaping in one text node; ligatures, combining marks and fallback glyphs can affect ranges. Keep width experiments separate from the real specimen, and test localized font coverage.
