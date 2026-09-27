---
articleId: theme
lang: en
sourceRevision: 7
sources:
  - title: "W3C: CSS custom properties"
    url: "https://www.w3.org/TR/css-variables-1/"
    claim: Custom properties cascade and inherit; semantic roles and accessible value pairs remain design responsibilities.
    checked: "2026-09-27"
  - title: WCAG 2.2 contrast
    url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
    claim: "Normal text requires 4.5:1 contrast, with stated exceptions; palette names alone establish no conformance."
    checked: "2026-09-27"
---

## Selection & comparison

Semantic tokens fit decisions reused across cards, forms and states. Component-specific values still suit unique structure. A theme changes coordinated values; it need not impose one layout or material on every example. Font classification, glyph width and letter spacing remain separate choices.

## Applications

The workshop card and session form consume surface, text, action, focus and error roles. Switching the local theme changes both together. An empty submission exposes a text error; keyboard focus and the selected theme remain identifiable in either palette.

## Implementation & cautions

Measure contrast on rendered pairs, including focus and error states. Check fallback fonts, translation, zoom and forced colors. This demo stores no preference and resets to light; production persistence or system-preference rules require their own explicit design.
