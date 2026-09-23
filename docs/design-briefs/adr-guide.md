# ADR guide infographic

- Stable ID: `adr`; guide in English, Korean and Japanese.
- Definition: an architecture decision record preserves a choice, its context and consequences.
- Nearest neighbor: the architecture guide assigns responsibilities; this record explains why a project-wide choice was accepted.
- Distinguishing visual features: decision heading, reason, chosen approach, cost and revisit trigger.
- Situation: a public article catalog with infrequent edits chooses generated pages over a request-time server to simplify hosting.
- Mode: `static`; no fake approval control or implied automatic enforcement.
- Observable result: a new contributor can state the accepted choice, why it was made, and what would prompt reconsideration.
- Mobile order: reason, choice, cost and revisit trigger; cards stack below 600px.
- Accessibility: semantic definition list, explicit status text and complete explanation without JavaScript or color reliance.
- Capture: `[data-demo="adr"]` in `src/data/design-demos.json`; localized thumbnails.
- Source checked 2026-09-23: [Michael Nygard's ADR article](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) describes context, decision and consequences. The catalog choice is an authored example.
- Comparison summary: guide has no comparison metadata; existing AI prompt retains alternatives, cost and revisit questions.
- Verification: normal sequential repository gates, three localized thumbnails, mobile/desktop themes and JavaScript-off browser review.
