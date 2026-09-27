---
articleId: retro-digital
lang: en
sourceRevision: 7
sources:
  - title: "Canva: Design trends 2026"
    url: "https://www.canva.com/newsroom/news/design-trends-2026/"
    claim: Reports renewed interest in early-computing visual cues; not the invention date or a formal specification.
    checked: "2026-09-27"
  - title: WCAG 2.2
    url: "https://www.w3.org/TR/WCAG22/"
    claim: "Keyboard, focus, reflow and contrast requirements; a visual style alone does not establish conformance."
    checked: "2026-09-27"
---

## Selection & comparison

Choose retro digital when a specific computing-era mood supports the content. Skeuomorphism can imitate other physical objects, and brutalism may look raw without desktop window metaphors. Avoid presenting every old interface as one style.

## Applications

The arcade invitation uses a game selector and a single nonmodal information window. Music releases or game community pages may use related cues. The window stays in the page flow rather than requiring desktop-style dragging.

## Implementation & cautions

Expose expanded state and provide a labeled close button. Escape closes only the open local window. Keep its content in DOM order and return focus to the opener when closing. Pixel ornaments must not reduce body text size.
