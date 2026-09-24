# Repository instructions

Read `/home/jujin/.codex/RTK.md` for shell command conventions.

Present Kickoff as an information site for learning project planning, design,
and technology choices. Keep prompt creation as the main action. Distinguish
the site's learning resources and prompt preparation from conversations and
development in the user's external AI tool, including copy/fallback guidance
and metadata. Write English first, then preserve meaning in Korean/Japanese.
See [site identity and handoff copy](docs/content-authoring.md#site-identity-and-handoff-copy).

All article work follows [the shared authoring guide](docs/content-authoring.md).
Guides are practical walkthroughs taking about 2–3 minutes to read; catalog
concepts stay concise. Every article, in every language, follows Why → How →
What: first establish what the example app, page, or service does, who uses it,
and their ordinary actions; then show a concrete problem without the technique.
Carry that same situation through How's solution and result, then name and
explain the concept and its limits. Never introduce an unexplained person or app
in the opening. Do not merely reorder
definition-first paragraphs or introduce a tool and tell readers to try it.
For catalog concepts, Why must also make the scenario's selection criterion
clear against relevant siblings in its leaf category. Show which priority makes
this option fit and what competing priority would favor a peer. Comparisons
may be implicit, but generic problems shared by every sibling are insufficient.
Do not invent mutual exclusion where options can coexist.

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

AI guidance stays in pre-release v1. Record reviewed workflow changes as v1
revisions; keep v1/latest routes and API schemaVersion 1. Required site reading
is startup guidance plus assistant rules only; the catalog is optional learning
material. Derive decisions from service requirements and constraints, including
options outside this site. Keep the two built English documents within 3,000
o200k_base tokens. Follow [contribution rules](CONTRIBUTING.md) for translation,
scenario review, and version history.
