# Representative quality review — 2026-09-26

Status: full approved expansion implemented and verified locally on 2026-09-27.
The subsequent all-field example and image-delivery review is in
[Distinguishing examples and image delivery](strong-examples-review.md).
The user approved the common screens and glassmorphism revision 12 on 2026-09-27.
The following representative results are historical; current full-scope evidence
is recorded at the end of this document.
No commit, push or deployment is included.

The approved full scope remains 64 active concepts and 9 active guides. This
checkpoint implements the shared shell, home, prompt builder, catalog and design
listing, plus glassmorphism, sidebar layout, serif, hexagonal architecture, React,
always-on server, subscription and requirements/completion criteria. Help, about
and AI pages inherit the neutral shared frame. The two neighboring page-composition
names change together; their broader content refresh remains in the next phase.

## Review routes

Run `npm run preview -- --host 0.0.0.0 --port 4322` after a normal build.
The verification run used `http://127.0.0.1:4322`. Replace `ko` with `en`
or `ja` to compare languages. Existing URLs and comment terms are preserved.

- `/ko/` — prompt first, actual learning examples, external-AI handoff.
- `/ko/start/` — desktop input and preview side by side; mobile input then copy.
- `/ko/catalog/` — compact category navigation, full-text search and examples.
- `/ko/catalog/categories/design/` — optional taxonomy, existing scoped search.
- `/ko/catalog/glassmorphism/` — photograph, route choice, opaque fallback.
- `/ko/catalog/two-columns/` — sidebar recipe filtering, legacy alias `2열`.
- `/ko/catalog/serif/` — magazine specimen, letter terminals and measured widths.
- `/ko/catalog/hexagonal-architecture/` — ports, dependencies and runtime calls.
- `/ko/catalog/react/` — shared state and independent saved-card labels.
- `/ko/catalog/always-on-server/` — process restart, data lifetime, ownership.
- `/ko/catalog/subscription/` — renewal, failure and entitlement policy.
- `/ko/guides/srs/` — deliberate addition, request retry and stock failure.

## Editorial review

English overview and supplemental prose reviewed before Korean/Japanese drafting.
Representative summaries describe their concepts; scenarios and operations stay
in bodies and captions. New supplementary Markdown contains selection/comparison,
applications, implementation/cautions, and claim-specific dated evidence. It is
excluded from overview reading budgets but included in English Markdown and
Pagefind. Revisions match each translation and supplement. AI instructions,
startup prompts, guide reusable prompt strings and guideline revision stay intact.

W3C specifications support CSS mechanisms. W3C Design System supports the sidebar
pattern; it is not the catalog taxonomy. Reflow supports accessibility checks,
not layout definitions. Source records distinguish specifications, drafts, field
research and authored example policies.

## Assets and implementation

[Asset provenance](../public/images/README.md). Local font sources, hashes, licenses
and subset coverage remain in `public/fonts/manifest.json`. Font subsets regenerated
for the new localized specimen. Demos own scoped markup and styles. No site AI
service, input persistence or external generation call is added to the product.

Native disclosures render without JavaScript. The API v1 catalog shape is unchanged.
New content lives in `src/content/article-details/`; its validator rejects missing
translations, stale revisions, missing evidence and mismatched source ledgers.

## Verification record

Checks ran sequentially: check → build → 228 thumbnail captures → rebuild →
unit/output → browser. Corrections found during browser verification were followed
by check → build → unit/output → affected browser tests. The final correction only
changed home category wrapping, empty category disclosures, source-ledger text
and bold-link markup;
it did not change a demo's captured appearance.

| Check                         | Result                                                                                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `npm run check`               | 190 files; zero errors, warnings or hints; 246 published translations validated; formatting passes                                                                 |
| `npm run build`               | Pass; Pagefind indexes 219 pages in three languages                                                                                                                |
| `npm run thumbnails`          | 76 registered demos × three languages = 228 actual browser captures                                                                                                |
| `npm test`                    | 47/47 pass, including supplement joins, evidence, translations and English Markdown                                                                                |
| `npm run test:e2e`            | 144 tests exercised: initial full run 137 pass, seven fail; six old catalog assertions updated and one real 200% English home overflow fixed                       |
| Affected browser rerun        | 30/30 pass across catalog, catalog-scope and quality-review specs; resolves all seven initial failures                                                             |
| Final article-rendering rerun | 10/10 quality-review browser tests pass after bold-link correction; all nine built design pages render strong links without literal delimiters                     |
| Stable-contract audit         | Changed articles retain IDs, kind, category, related links, example keys and reusable prompts; startup/AI instruction sources unchanged; `git diff --check` passes |

Browser coverage uses Chromium. The representative matrix covers EN/KO/JA,
320/390/768/1440px and both themes across seven shared routes and eight articles.
It checks document overflow, loaded images, keyboard opening of four supplementary
sections, 200% text at 768px and page errors. Additional suites verify individual
demo states, reset/repetition/reload, no-JavaScript reading, reduced motion,
transparency fallbacks, search/legacy aliases, font measurements, prompt copy
failure, keyboard entry and lack of input network/URL/persistent-storage effects.

The English home overflow came from intrinsic minimum widths in its category
links. Flexible zero-minimum tracks and wrapping names resolve it without hiding
content. Empty taxonomy disclosures are omitted on leaf pages. Visual inspection
also caught literal bold-link delimiters before Korean/Japanese suffixes; emphasis
now sits inside the link labels. The final built HTML was checked for their absence.

### Visual review and accessibility evidence

Directly inspected home, prompt, design listing and all eight representative
articles, using desktop and mobile captures. The prompt retains visible required
input and copy controls; mobile follows input then preview. Article examples have
different purposes and structure: a scenic route chooser, recipe filters, an
editorial type specimen, a dependency diagram, shared-state cards, a process and
storage model, recurring entitlement, and three acceptance outcomes. Remaining
legacy examples are deliberately deferred to the post-review phase.

Computed text contrast was sampled in both themes for the three representative
design demos. Glass text was checked against its translucent panel composited
over black and white backdrops; the lower result was used. Minimum sampled ratios:
glass 4.82:1, sidebar recipes 6.18:1, serif 10.57:1. All 128 samples meet the applicable
normal/large-text threshold. Details: [contrast samples](../artifacts/quality-review/contrast-samples.json).
Existing suites also check concept-label contrast in planning, platform and
monetization demos. These targeted checks support WCAG 2.2 criteria for contrast,
text resizing, reflow and keyboard/focus; they are not a complete AA conformance
audit. Safari/WebKit, Firefox and assistive-technology sessions remain unverified.

Screens below show initial article state with optional reading collapsed. Browser
matrix captures with all supplementary sections expanded are also retained under
`artifacts/quality-review/`. Generated artifacts are ignored by Git.

| Screen                 | Desktop, 1440px light                                                                   | Mobile, 390px dark                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Home                   | [Capture](../artifacts/quality-review/homeko-1440-light.png)                            | [Capture](../artifacts/quality-review/homeko-390-dark.png)                            |
| Prompt                 | [Capture](../artifacts/quality-review/start-ko-1440-light.png)                          | [Capture](../artifacts/quality-review/start-ko-390-dark.png)                          |
| Catalog                | [Capture](../artifacts/quality-review/catalog-ko-1440-light.png)                        | [Capture](../artifacts/quality-review/catalog-ko-390-dark.png)                        |
| Design listing         | [Capture](../artifacts/quality-review/catalog-categories-design-ko-1440-light.png)      | [Capture](../artifacts/quality-review/catalog-categories-design-ko-390-dark.png)      |
| Glassmorphism          | [Capture](../artifacts/quality-review/glassmorphism-initial-ko-1440-light.png)          | [Capture](../artifacts/quality-review/glassmorphism-initial-ko-390-dark.png)          |
| Sidebar layout         | [Capture](../artifacts/quality-review/two-columns-initial-ko-1440-light.png)            | [Capture](../artifacts/quality-review/two-columns-initial-ko-390-dark.png)            |
| Serif                  | [Capture](../artifacts/quality-review/serif-initial-ko-1440-light.png)                  | [Capture](../artifacts/quality-review/serif-initial-ko-390-dark.png)                  |
| Hexagonal architecture | [Capture](../artifacts/quality-review/hexagonal-architecture-initial-ko-1440-light.png) | [Capture](../artifacts/quality-review/hexagonal-architecture-initial-ko-390-dark.png) |
| React                  | [Capture](../artifacts/quality-review/react-initial-ko-1440-light.png)                  | [Capture](../artifacts/quality-review/react-initial-ko-390-dark.png)                  |
| Always-on server       | [Capture](../artifacts/quality-review/always-on-server-initial-ko-1440-light.png)       | [Capture](../artifacts/quality-review/always-on-server-initial-ko-390-dark.png)       |
| Subscription           | [Capture](../artifacts/quality-review/subscription-initial-ko-1440-light.png)           | [Capture](../artifacts/quality-review/subscription-initial-ko-390-dark.png)           |
| Requirements           | [Capture](../artifacts/quality-review/srs-initial-ko-1440-light.png)                    | [Capture](../artifacts/quality-review/srs-initial-ko-390-dark.png)                    |

## Review feedback: stronger glass material

The user accepted the other representative screens and found the translucent
panel treatment too weak. Glassmorphism revision 12 lowers the white fill from
87.45% to 58%, reduces blur from 16px to 10px, adds 1.35 backdrop saturation and
strengthens the reflective edge and inset highlights. The photograph's colors
and shapes remain visible behind the content. These are example choices, not
requirements for the style.

Opaque mode, reduced-transparency handling and unsupported-filter fallback remain
readable. All three article revisions, translations and supplementary examples
match. The three thumbnails were recaptured and included in the rebuilt home and
catalog cards. Desktop and 390px mobile demo captures were inspected directly.

Validation: check → build → three thumbnails → rebuild → 47/47 unit/output tests →
11/11 focused browser tests. The browser matrix covers all three languages,
320/390/768/1440px, both themes, text enlargement, route/reset behavior and
JavaScript-disabled reading; the glass fallback test also passes. Refreshed glass
text contrast: 26 samples, minimum 4.82:1 against black/white composited backdrops.
LAN preview verified at `http://192.168.1.111:4322/ko/catalog/glassmorphism/`.

## Approved expansion: 2026-09-27

The approved scope is 64 active concepts and 9 active guides, 219 localized
articles. The remaining 57 concepts and 8 guides have revised summaries,
article-specific supplementary reading and synchronized revisions. There are now
219 supplementary files, including the 195 added during expansion. Retired
reference routes remain available.

Ten styles now use repair booths, appointments, photo browsing, picnic
participation, hiking essentials, festival interests, a timer, arcade sessions,
recipe quantities and a keepsake board. Layouts use a sequential trail, botanical
museum, real book metadata, plant cards and varied-ratio photographs. Typography
has weather records, a garden newsletter, transport information and an invitation,
with a separate measurement area. Five new guide demos cover tool roles, static
publishing, recovery ownership, semantic themes and fictional revenue/costs.

Planning diagrams distinguish source dependencies, calls, deployment and failure
scope. Platform demos state execution and persistence boundaries. Monetization
diagrams retain their arithmetic and repeat-safe behavior while documenting
payer, charge timing, price, entitlement and seller scope. Fictional calculations
do not execute payments, ads or persistence.

Primary-source claim records live in each supplementary document. CSS mechanisms
use W3C/CSSWG specifications, accessibility uses WCAG 2.2, architecture and platform
claims use original/official documentation. RHS plant guidance and Project
Gutenberg bibliographic records support example data. Asset provenance and
generation prompts are in `public/images/README.md`; font subsets were regenerated
against their pinned source hashes.

Automated verification: all sequential gates pass; 243 thumbnails, 48/48 unit/output tests and 161/161 browser tests. All 219 active localized articles pass the responsive/evidence matrix.

Direct desktop/mobile visual review: all 73 active demos inspected; corrected desktop/mobile captures rechecked.

Full scope and capture index: [2026-09-27 review](quality-review-2026-09-27.md).

No commit, push or deployment belongs to this scope. The local LAN preview is the
review surface; a local build is not evidence of live deployment.
