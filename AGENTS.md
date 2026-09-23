# Repository instructions

Read `/home/jujin/.codex/RTK.md` for shell command conventions.

All article work follows [the shared authoring guide](docs/content-authoring.md).
Guides are practical walkthroughs taking about 2–3 minutes to read; catalog
concepts stay concise. Every article, in every language, follows Why → How →
What: first establish what the example app, page, or service does, who uses it,
and their ordinary actions; then show a concrete problem without the technique.
Carry that same situation through How's solution and result, then name and
explain the concept and its limits. Never introduce an unexplained person or app
in the opening. Do not merely reorder
definition-first paragraphs or introduce a tool and tell readers to try it.

Design work must follow [docs/design-demos.md](docs/design-demos.md) and use
[the planning template](docs/templates/design-demo-brief.md). Each design lives
inside the article body, owns its visual structure and interactions, and joins
through `src/data/design-demos.json`. Do not add page-wide themes or force all
examples through one visual template.

Run checks sequentially: check → build → thumbnails → rebuild → unit/output
tests → browser tests. Do not run builds and tests concurrently; they share
`.astro` state. Keep IDs, URLs, comment keys, and API schema v1 stable.

Use `npm run build:demo-preview` only for local first-time thumbnail capture.
Regular `npm run check` and `npm run build` must pass before handoff.
