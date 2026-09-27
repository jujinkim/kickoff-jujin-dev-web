---
articleId: layout
lang: en
sourceRevision: 8
sources:
  - title: "W3C: CSS Grid Layout"
    url: "https://www.w3.org/TR/css-grid-1/"
    claim: Grid places page regions; visual placement must not replace meaningful source order.
    checked: "2026-09-27"
  - title: WAI modal dialog pattern
    url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"
    claim: Modal dialogs require focus management and an accessible close path; the sketch is not a working dialog.
    checked: "2026-09-27"
---

## Selection & comparison

Use a single flow for sequential reading, a sidebar for persistent support, and multiple regions for simultaneous references. Rows help compare repeated text; equal cards align visual peers; masonry preserves varied image heights. Page regions differ from CSS multi-column text flow.

## Applications

The catalog sketch names navigation, filters, results and detail. The narrow version preserves a useful source order while stacking those regions. Empty results retain filters and a recovery path. Each region supports finding an item rather than competing for the main action.

## Implementation & cautions

Test long labels, expanded content, keyboard order and zoom before fixing breakpoints. A real modal needs contained focus, Escape and focus return; a drawn dialog is only a schematic. Do not apply CSS columns to interactive cards without checking visual and keyboard sequence.
