# Platform concepts — implementation and verification

Release scope: 15 concepts, 45 English/Korean/Japanese articles, 15 independent
article-body concept simulations and 45 captured thumbnails. Existing IDs,
taxonomy, URLs, comment terms and API schema v1 remain stable. Total publication:
147 documents (111 concept documents plus 36 guides), 37 registered demos,
25 remaining candidates. User subsequently authorized commit and push.

## Editorial review

English originals were drafted and cross-read in group order before translation:
static generators, web UI, engines, hosting, releases. The concise body has
Concept / Example / When to choose it; original source briefs retain the broader
comparison argument. English bodies contain 89–93 words excluding headings
and source labels. The reading-budget ranges, including title, summary and the
15-second visual allowance, are 49–52 seconds in English, 41–44 in Korean and
44–48 in Japanese. All translated arguments and five comparison fields were
reviewed against that original. Revision/sourceRevision are 1 throughout.

- Generators: identical A17/B04/C99 input and layout, index plus three article
  HTML outputs; build and hosting separate. Astro adds an optional island;
  Hugo shows templates; Jekyll isolates Ruby to build time. A missing required
  layout is an authored failure, not a universal vendor behavior claim.
- UI: A17/B04 have independent saved IDs and a shared derived count. React
  exposes setter/render ownership; Vue separates SFC compartments and reactive
  template updates; Svelte separates compilation from later browser events.
- Engines: identical player/floor/camera/item schematic and one-point contact
  result. Godot exposes instanced scenes, Unity component roles, Unreal an
  Actor/Blueprint guard. Score behavior is authored and repeat collection cannot
  score. The schematic is not an engine screenshot or a real physics runtime.
- Hosting: identical read/save/repeat/fail/restart actions. Static delivery has
  a separate API; the listening process and invocation models have explicit
  execution boundaries. The page-memory store models durable state across
  handler restart only. Reset/reload clears it; deduplication is application logic.
- Releases: rolling exposes add/check/remove with one spare slot, blue-green
  separates routing reversal from stored writes, and canary compares matched
  synthetic samples with an exercise-only stop rule. No samples never passes.
  Version labels v1/v2 describe fictional deployed binaries, not catalog schema.

Sources: [dated source refresh](catalog-writing/platform-sources.md). Mechanism
claims, conditional advice and authored fixture outputs are distinguished.
The 15 [component briefs](design-briefs/) resolve initial/changed/reset, keyboard,
mobile, no-JavaScript, localization and capture requirements before publication.

## Screen review and corrections

Compared all 45 initial thumbnail captures across groups and languages, plus
mobile, forced-color and changed-state evidence. The generator initially joined
all source filenames into its current-stage announcement; it now uses a concise,
localized stage description and avoids duplicate list numbering. The engine
composition panels explicitly describe the initial setup, while the scene and
score show the current instance after collection.

Dark surrounding themes exposed a site-level eyebrow color on the fixed-light
demo surface. Each component now inherits its own text color for this label;
native controls use the demo's light color scheme. Browser tests calculate label
contrast against the actual surface in both themes and require at least 4.5:1.
Forced-color captures retain outlines, version names, counts and readable SVG
legends. Capture-only styles hide the fixed off-screen skip link, following the
existing thumbnail capture contract.

Changed-state captures show four generated HTML files, independent saved cards,
one removed collectible, a retained record after restart, a pending v2 stopped
without removing v1, blue traffic with the post-switch A17 write still present,
and both the canary stop and zero-sample unknown results. The existing catalog
test's three-group assumption was updated to eight published groups; selecting
the design parent still asserts only its three groups and 22 concepts.

## Verification record

Completed locally on 2026-09-22. The initial `build:demo-preview` was used only
to obtain the first thumbnails. After screen-review fixes, the regular sequence
ran in order without concurrent builds or tests:

| Gate                              | Result                                                                                 |
| --------------------------------- | -------------------------------------------------------------------------------------- |
| `npm run check`                   | PASS: 118 files, zero errors/warnings/hints; 147 published documents; formatting clean |
| `npm run build`                   | PASS: 287 HTML pages; Pagefind indexes 147 articles across three languages             |
| `npm run thumbnails -- --id <id>` | PASS for all 15 IDs: 45 localized full-component PNGs                                  |
| `npm run build`                   | PASS: refreshed thumbnails included in the normal artifact                             |
| `npm test`                        | PASS: 26 unit/publication/output cases, including isolated draft exclusion             |
| `npm run test:e2e`                | PASS: 62 Chromium cases in 4.0 minutes                                                 |

The final matrix contains 270 platform captures (15 IDs × 3 languages × 3 widths
× 2 themes), plus 45 forced-color/reduced-motion captures. Thirty additional
captures record representative changed, failed and empty-sample states.
`git diff --check` and local documentation links pass. Taxonomy, candidates,
content schema and thumbnail card rules have no changes.

Tests: `tests/platforms.test.mjs` checks publication completeness and mutates all
five groups for absent registration, component, caption, thumbnail and translation.
`tests/browser/platforms.spec.ts` exercises normal, repeated, failed, reversed,
reset and reload transitions in three languages, including forced colors and
reduced motion. Registry-wide tests cover search, 320/768/1440px, both surrounding
themes, keyboard focus and JavaScript-disabled initial reading. Existing output
tests cover English Markdown aliases, canonical/hreflang, comments, sitemap,
AI schema, local links and isolated draft exclusion.

Capture paths: `public/thumbnails/<id>-<lang>.png`; complete viewport/theme matrix
in `artifacts/platform-demos/<id>-<lang>-<width>-<theme>.png`; forced-color images
in the same directory. Capture files are evidence of the real built components.

Native-speaker review, screen-reader listening and non-Chromium coverage are not
claimed. Simulations demonstrate the documented fixture contracts, not a deployed
cloud service, engine export or vendor performance.
