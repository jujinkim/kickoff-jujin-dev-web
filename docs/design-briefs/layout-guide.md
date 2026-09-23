# Layout guide infographic

- Stable ID: `layout`; guide in English, Korean and Japanese.
- Definition: layout orders navigation, controls, results and details around the reader's task.
- Nearest neighbor: the single-column concept names one possible arrangement; this guide shows how to assign region roles before choosing columns.
- Distinguishing visual features: four named regions, two familiar catalog results, and an explicit mobile reading order.
- Situation: a visitor finds and compares a trail guide and a recipe index. Filters must stay available without hiding results.
- Mode: `static`; no fake filter button or scripted rearrangement.
- Observable result: navigation, filter, result and detail roles remain legible at narrow and wide widths; narrow layout preserves all content.
- Mobile order: navigation, filters, results, details. Text and DOM order match; CSS only changes spatial arrangement.
- Accessibility: semantic list for results, named regions and text rule; no artificial tab stops; complete without JavaScript.
- Capture: `[data-demo="layout"]` in `src/data/design-demos.json`; localized thumbnails.
- Source checked 2026-09-23: [W3C reflow guidance](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) supports preserving content and function when a layout reflows. The catalog task is an authored example.
- Comparison summary: guide has no comparison metadata; its existing AI prompt asks for screens, tasks and layout alternatives.
- Verification: normal sequential repository gates, three localized thumbnails, mobile/desktop themes and JavaScript-off browser review.
