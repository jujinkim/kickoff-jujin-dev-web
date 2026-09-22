# Service decomposition catalog review

Scope: monolith, modular monolith and microservices; nine English/Korean/Japanese articles, three independent static article-body diagrams and nine localized thumbnails.

## Editorial review

English originals reviewed together on 2026-09-22 before translations. [Source refresh](catalog-writing/service-split-sources.md) records primary passages and the authored scenario. Revisions start at 1; no native-speaker review claimed.

- Monolith means one server release unit, not unstructured code or one machine. The example leaves internal modularity unspecified, uses one app-owned database and releases the whole artifact for a Library change.
- Modular monolith is a monolith subtype. APIs and owned tables make boundaries explicit while calls, process failures and releases remain shared. Code rules and tests must enforce boundaries; directories alone do not.
- Microservices release only Library v2 under a compatible contract, while Catalog/Billing remain v1. Separate service-owned stores indicate access ownership, not machine counts. Independent deployment is not automatic failure isolation.
- All examples start with one team and no tag on A17, then add Library tag support without changing Billing behavior. Library reads Catalog before writing the literal `travel`. The failure case is a read failure/timeout before any write, with failure feedback and retry after recovery; it does not describe an ambiguous write timeout or a universal retry policy.
- Static diagrams keep release units, versions, ownership and success/failure branches visible together. Local calls and network requests are named separately, and full Markdown equivalents preserve the example without JavaScript.

## Verification

All overviews satisfy the one-minute editorial limit with the existing 15-second visual allowance: English 54–55s, Korean 46–48s, Japanese 51–54s. These are estimates, not measured reading times.

The initial local build used `npm run build:demo-preview` only to obtain first thumbnails. The normal sequence then ran check → build → final thumbnails → rebuild → unit/output tests → browser tests.

| Gate                                                | Observed result                                                                                                                            |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `npm run check`                                     | PASS; 165 files, no errors/warnings/hints; 246 published documents; formatting valid.                                                      |
| `npm run build`                                     | PASS; 398 pages and 246 Pagefind articles across three languages.                                                                          |
| `npm run thumbnails -- --id <id>` for all three IDs | PASS; nine localized final PNGs from built output.                                                                                         |
| Rebuild after capture                               | PASS; final images included in output.                                                                                                     |
| `npm test`                                          | PASS; all 32 tests, including real draft-exclusion builds, publication mutation cases and every candidate category's page/link visibility. |
| `npm run test:e2e`                                  | PASS; all 89 browser cases in one run (6.5 minutes), including all three localized service-decomposition cases.                            |

Desktop visual review inspected all three compositions: one artifact with capabilities, API-gated module rows and separate service releases with a read-timeout branch. An `agent-browser` snapshot confirmed Korean microservices reading order and the separate unchanged/updated version labels. Narrow visual review inspected English monolith, Korean modular monolith and Japanese microservices at 320px in the dark surrounding theme, plus Korean microservices in forced colors. Labels wrap without clipping; API gates, release boundaries and the timeout branch remain distinct. The three dedicated localized browser cases passed and produced 54 language/width/theme captures plus nine forced-color captures.

The new `service-split` category joins publication validation, category-list expectations and registry-wide label-contrast checks. Dedicated browser coverage disables JavaScript and checks shared inputs/change/success/failure text, one versus three deployment units, unchanged Catalog/Billing versions, Library v2, owned stores, API boundaries, no artificial controls, reload, 320/768/1440px reflow and forced colors. The remaining tests cover search, keyboard flows and existing interactive demos.

Retained assets: `public/thumbnails/{monolith,modular-monolith,microservices}-{en,ko,ja}.png`. Browser evidence goes to ignored `artifacts/service-split-demos/`. Output tests preserve stable IDs/comment keys, canonical/hreflang links, English Markdown aliases, Pagefind, sitemaps and API schema v1.

Catalog after this release: 70 concepts, 210 localized concept documents and 36 guide documents; 8 planned candidates remain. Next group: abstract collections (list, set, map), followed by sequential storage and processing order. Git publication and remote deployment are tracked separately from local checks.
