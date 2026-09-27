---
articleId: flat-design
lang: en
sourceRevision: 12
sources:
  - title: "NN/g: Flat Design"
    url: "https://www.nngroup.com/articles/flat-design/"
    claim: Discusses flat surfaces and the loss of clickability cues; the booking policy is an authored example.
    checked: "2026-09-27"
  - title: WCAG 2.2
    url: "https://www.w3.org/TR/WCAG22/"
    claim: "Keyboard, focus, reflow and contrast requirements; a visual style alone does not establish conformance."
    checked: "2026-09-27"
---

## Selection & comparison

Choose flat surfaces when the form needs distinct roles without a physical metaphor. Minimalism concerns how much competes for attention; flat design concerns visual depth. They may be combined.

## Applications

The clinic example groups the service, available times and review result. Similar grouping works for delivery slots and appointment requests. Visible text identifies every action even when color is unavailable.

## Implementation & cautions

Use fieldsets and labels. Show selection with aria-pressed and an underline, then invalidate an outdated summary after edits. This demo has no availability server: a real booking must recheck capacity and report conflicts before confirmation.
