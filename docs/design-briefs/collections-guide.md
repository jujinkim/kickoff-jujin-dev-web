# Collections guide infographic

- Stable ID: `collections`; guide in English, Korean and Japanese.
- Definition: sequence, keyed lookup and uniqueness answer different saved-list requirements.
- Nearest neighbor: the data-structure catalog is reference-only; this guide starts from user-visible behavior.
- Distinguishing visual features: ordered book list, descriptive link keys mapped to titles, and a repeat-save outcome.
- Situation: save Soup Cookbook, then Train Travel Guide, then Soup Cookbook again; the agreed list keeps two entries in first-save order.
- Mode: `static`; the figure explains one agreed policy, not a working storage system.
- Observable result: a repeated save leaves two entries; a title change need not alter the stable link key.
- Mobile order: sequence, key-to-title lookup, unique membership, caveat. Cards stack below 600px.
- Accessibility: semantic ordered list and complete textual labels; no color-only meaning or artificial tab stops; JavaScript off works.
- Capture: `[data-demo="collections"]` in `src/data/design-demos.json`; localized thumbnails.
- Source checked 2026-09-23: [MDN keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections) supports Map/Set behavior in JavaScript. First-save ordering and book identity are authored product rules, not universal collection behavior.
- Comparison summary: guide has no comparison metadata; existing AI prompt keeps ordering and duplicate-handling decisions explicit.
- Verification: normal sequential repository gates, three localized thumbnails, mobile/desktop themes and JavaScript-off browser review.
