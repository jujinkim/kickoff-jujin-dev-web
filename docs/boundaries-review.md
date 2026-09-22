# Architecture boundary catalog review

Scope: layered, hexagonal and clean architecture; nine English/Korean/Japanese documents, three independent static article-body diagrams and nine localized thumbnails.

## Editorial review

English originals reviewed together on 2026-09-22 before Korean/Japanese translations. [Source refresh](catalog-writing/boundaries-sources.md) records the inspected primary passages. Revisions start at 1; no native-speaker certification claimed.

- Layered: the example chooses closed layers with downward source dependencies and calls; returns travel upward. Logical responsibilities share one process, not three required machines. HTTP/CLI replacement leaves validation in the application.
- Hexagonal: input adapters drive SaveArticle; memory and embedded-database adapters implement an application-owned SaveRepository port. The application imports neither concrete implementation. Six sides do not prescribe a component count.
- Clean: frameworks, adapters, application contracts and domain policy are nested without prescribing folders. Source references point inward; storage calls go outward through an inward-owned interface. SavedArticle validates IDs; ORM rows stay outside.
- All figures use R1/A17, an empty initial store and the same authored outcomes: successful save and repeat 0 → 1 → 1; empty IDs or failure before writing leave zero. Correct the cause before retry. These policies are not automatic architecture guarantees or claims about ambiguous persistence failures.
- Static composition makes source dependencies and runtime calls readable together. Patterned lines, labels, numbered reading order and full Markdown equivalents keep the meaning without JavaScript or color. Adapter alternatives do not imply migrating stored data.

## Verification

All nine overviews satisfy the editorial one-minute limit, including the existing 15-second visual allowance: English 51s, Korean 49s, Japanese 56–57s. These are estimates, not measured reading times.

The first local capture used `npm run build:demo-preview` only to create missing thumbnails. The normal sequence then ran check → build → final thumbnails → rebuild → unit/output tests → browser tests.

| Gate                                                | Observed result                                                                                             |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `npm run check`                                     | PASS; 160 files, zero errors/warnings/hints; 237 published documents; formatting valid.                     |
| `npm run build`                                     | PASS; 389 pages, 237 Pagefind articles across three languages.                                              |
| `npm run thumbnails -- --id <id>` for all three IDs | PASS; nine final localized PNGs from built pages.                                                           |
| Rebuild after capture                               | PASS; final images included in output.                                                                      |
| `npm test`                                          | PASS; all 32 unit/output tests, including draft-exclusion builds and publication mutation checks.           |
| `npm run test:e2e`                                  | PASS; all 86 browser tests in one run (6.2 minutes), including all three new localized architecture checks. |

The first output-test run found a historical assertion that the architecture-boundary group must remain pending. The test now verifies pending counts, page existence and links for every candidate category against current publication state. All 32 tests passed after that correction. The browser category-list expectation and registry-wide label-contrast checks now include `boundaries`.

Visual review inspected desktop captures for all three compositions and 320px English layered, Korean hexagonal and Japanese clean diagrams in the dark surrounding theme. Korean clean architecture was also inspected in forced colors. Labels wrap without clipping; nested policy, adapter alternatives and solid/dashed/dotted distinctions remain readable. An `agent-browser` snapshot confirmed Korean clean-architecture reading order. Initial visual review corrected storage dependency arrows to point toward their inner port.

Dedicated browser evidence contains 54 language/width/theme captures and nine forced-color captures under ignored `artifacts/boundaries-demos/`. The three localized tests disable JavaScript and check shared fixtures/outcomes, port ownership, layered return direction, nested policy, zero artificial controls, reflow, reload and forced-color text preservation. Registry-wide checks additionally cover JavaScript-enabled pages, label contrast, search, no-JavaScript reading and existing interactions.

Retained assets: `public/thumbnails/{layered-architecture,hexagonal-architecture,clean-architecture}-{en,ko,ja}.png`. Output tests preserve schema v1, stable IDs/comment keys, canonical/hreflang links, English Markdown aliases, Pagefind and sitemaps.

Catalog after this release: 67 published concepts, 201 localized concept documents and 36 guide documents; 11 candidates remain planned. Next group: service decomposition (monolith, modular monolith, microservices). Git publication and remote deployment status are reported separately from these local checks.
