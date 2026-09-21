# Repository instructions

Read `/home/jujin/.codex/RTK.md` for shell command conventions.

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
