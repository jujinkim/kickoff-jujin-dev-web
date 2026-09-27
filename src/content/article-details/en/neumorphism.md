---
articleId: neumorphism
lang: en
sourceRevision: 11
sources:
  - title: "Hype4: Shadows and Blurs"
    url: "https://hype4.academy/articles/design/ui-design-shapes-objects-basics-shadows-and-blurs"
    claim: Explains shadow techniques and soft dimensional surfaces; a lighting direction is not a universal definition.
    checked: "2026-09-27"
  - title: WCAG 2.2
    url: "https://www.w3.org/TR/WCAG22/"
    claim: "Keyboard, focus, reflow and contrast requirements; a visual style alone does not establish conformance."
    checked: "2026-09-27"
  - title: "W3C: CSS backgrounds and borders"
    url: "https://www.w3.org/TR/css-backgrounds-3/#box-shadow"
    claim: Defines outer and inset box shadows; lighting direction in this illustration is an artistic choice.
    checked: "2026-09-27"
---

## Selection & comparison

Choose soft surface depth for a small, calm control panel. Skeuomorphism borrows recognizable objects more broadly; flat design avoids this depth. Material impression must never replace a visible state label.

## Applications

The timer has a raised dial and inset active buttons. It is a visual interaction example, not exercise or health advice. A short local countdown demonstrates start, pause and restart without storing a routine.

## Implementation & cautions

Compute remaining time from a deadline, rather than assuming each interval fires on time. Repeated Start must not create another timer. Keep state text, pressed semantics, focus outlines and forced-color boundaries when box shadows are removed.
