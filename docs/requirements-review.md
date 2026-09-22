# Requirements catalog review

Scope: `user-story`, `use-case`, `job-story`; nine English/Korean/Japanese documents, three independent static article-body diagrams and nine localized thumbnails. Remote publication is outside this local verification record.

## Editorial review

English originals reviewed together on 2026-09-22 before Korean/Japanese translations. [Source refresh](catalog-writing/requirements-sources.md) records primary passages and claim boundaries. All revisions start at 1. No native-speaker review is claimed.

- User story: role, goal and value start a conversation; the acceptance examples make a small increment reviewable. It does not mandate Scrum or treat a sentence as a complete specification.
- Use case: actor goal, precondition, four main steps and two extensions. Failure occurs before writing, so zero saved entries is an explicit fixture outcome; retry returns to step 1. Repeating success retains one entry. This does not claim all persistence failures have a known outcome.
- Job story: situation, motivation and outcome appear before two candidate solutions. A saved link and a reminder containing the link remain options. Assumed motivation needs research, and delivery/failure details remain separate.
- Every example starts with a signed-in commuter and unsaved A17. Link saving never promises offline reading. The numbered English Markdown preserves the figure's meaning without requiring a running demo.
- Three static diagrams suit comparison of requirements descriptions: story card plus acceptance criteria, main path plus extensions, and context sequence plus solution candidates. No simulated Save button suggests that writing a requirement implements persistence.

## Verification

English bodies contain 90–98 words. Estimated overview budgets, including the existing 15-second visual allowance: English 52–54s, Korean 43–47s, Japanese 47–52s. These are editorial estimates, not measured reading times.

The first local capture used `npm run build:demo-preview` to bypass only absent thumbnails. The normal sequence then ran check → build → final thumbnails → rebuild → unit/output tests → browser tests.

| Gate                                                             | Observed result                                                                                                                                   |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run check`                                                  | PASS; 155 files, no errors, warnings or hints; 228 published documents; formatting valid.                                                         |
| `npm run build`                                                  | PASS; 380 pages, 228 Pagefind articles in three languages.                                                                                        |
| `npm run thumbnails -- --id <id>` for the three requirements IDs | PASS; nine final PNGs from the built pages.                                                                                                       |
| `npm run build` after capture                                    | PASS; final thumbnails included in output.                                                                                                        |
| `npm test`                                                       | PASS; 32 unit/output tests, including real draft-exclusion builds and the requirements publication gate.                                          |
| `npm run test:e2e`                                               | All 83 cases pass across the full run and focused rerun: 80 passed in 5.9 minutes; the three corrected category-list cases passed in 4.7 seconds. |

Initial visual inspection caught the global dark-theme eyebrow color inheriting onto the light diagram surface. Each component now declares its own dark label color; registry-wide contrast checks include this group. Initial browser checks also caught the existing category-list assertion omitting the newly published `requirements` group; its expected list now includes that group.

The three dedicated requirements tests passed in English, Korean and Japanese, covering 320/768/1440px, both surrounding themes, complete readable branches, no overflow or artificial controls, forced colors, reduced motion and page errors. They produced 54 theme/width captures plus nine forced-color captures. Desktop and narrow captures were visually inspected for the story card, main/extension paths and situation/solution separation. An `agent-browser` inspection confirmed the Korean use-case reading order and corrected dark-theme label color.

Evidence paths: `public/thumbnails/{user-story,use-case,job-story}-{en,ko,ja}.png`; browser captures in ignored `artifacts/requirements-demos/`. Publication gate covers the `requirements` category, including registration, translation revision, static-mode contract and thumbnails. Existing output tests check stable IDs, comments, canonical/hreflang links, English Markdown aliases, Pagefind, sitemaps and API v1.

After the category assertion correction, `npm run test:e2e -- tests/browser/catalog.spec.ts --grep "design groups, parent filters and search labels"` passed all three languages. The other 80 cases had passed on the same application build, including all new requirements tests, registry-wide reflow/contrast, search, JavaScript-disabled reading and existing interactive regressions. The final test correction changed only an expected category list.

All nine requirements documents retain local `published` status. The catalog now contains 64 concepts in three languages and 14 planned candidates; next is the architecture-boundary group. These checks establish local readiness; Git publication and remote deployment are tracked separately.
