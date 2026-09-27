# Version-control catalog extension — 2026-09-27

Local implementation: 10 concepts in two comparison groups, 30 localized overviews, 30 supplements, 10 independent static diagrams and localized PNG/WebP thumbnails. English reviewed before Korean/Japanese. The initial catalog scope ended at local verification; the user subsequently requested prompt integration and a push.

Current active inventory: six roots, 74 concepts, nine guides, 249 indexed localized documents and 249 supplements. Retained article sources total 276, including the unchanged 27 reference-only documents. Existing article identities, routes, comment keys and API schemaVersion 1 are preserved. The catalog-only phase preserved prompts and guideline revision 4. The follow-up includes version control systems and repository hosting in generated prompts and planning, recorded as [v1 revision 5](ai-guidance-review.md#v1-revision-5-guidance-review).

## Editorial and source review

[System comparison](catalog-writing/groups/version-control-systems.md), [hosting comparison](catalog-writing/groups/repository-hosting.md), [dated official evidence](catalog-writing/version-control-sources.md). Each concept has an article brief and a complete independent [design brief](design-briefs/git.md).

All overviews follow Why → How → What with a familiar service, ordinary user action, concrete problem and sibling-choice priority. Estimates including the 15-second visual allowance: EN 53–59 seconds, KO 44–46 seconds, JA 48–51 seconds. Supplements retain limits, applications, operating/migration questions and the same evidence URLs across languages.

Git is the local history tool; hosting is a separate combination. Mercurial phases depend on publishing configuration and are not access permissions. P4 locking is conditional on +l, distinct from p4 lock. GitLab MR pipelines require rules/runner and do not automatically test merged results. Azure policies require configuration and can be bypassed by authorized users. Gitea's operator owns recovery; Codeberg is a nonprofit service using Forgejo. Product documentation supports these mechanisms; scenarios, workflow priorities and illustrations are editorial examples. No fixed prices or unsupported unlimited-resource promises.

## Representative review and implementation

Git and GitHub were implemented first. A local first-capture preview exposed only these new representatives while the remaining eight were temporarily drafts; complete publication metadata was then restored. Git's local/remote history and GitHub's contributor/maintainer boundaries were inspected in actual captures before implementing the remaining eight diagrams. Agent-browser confirmed the Korean GitHub page at 390px without horizontal overflow or page errors.

Every component owns its HTML/SVG structure and scoped CSS. Figures use opaque readable surfaces, DOM text, ordered labels and borders; no new script, external image or font is needed. The P4 wireframe is original decorative SVG beside a textual file description. Markdown carries the same operations and conditions. Both leaf categories now participate in the mandatory demo gate. PNG/WebP, translations, captions, component and evidence omissions are regression-tested.

## Verification

Observed local results, 2026-09-27:

- First-time captures used `build:demo-preview` only while new thumbnails were absent. The complete normal sequence then passed: check → build → capture all 10 new IDs → rebuild → unit/output → browser.
- `npm run check`: 214 checked files, zero errors, warnings or hints; all 276 published sources, supplements and formatting pass.
- Normal build and rebuild: 440 pages; Pagefind indexes 249 documents in three languages. Six active roots contain 74 concepts and nine guides; there are 249 supplements. The two new comparison lists contain four and six concepts.
- `npm test`: **51/51 pass**, including missing component/caption/translation, missing PNG/WebP and missing evidence rejection, reading limits, API v1, English Markdown, canonical/hreflang, related guides, sitemap and comment identities.
- Full `npm run test:e2e`: **178/178 pass** in 9.3 minutes. Existing search, prompt, help, guide and demo behaviors remain covered.
- Direct visual review: all 10 English desktop and Korean mobile diagrams, plus Japanese Codeberg mobile and Azure Repos desktop. Two styling issues were corrected: Bitbucket's label inherited the site's numbered-step styling; Git's small heading inherited a pale site accent in dark mode. Both are now scoped within their components.
- After the final Git color correction: normal check → build → three Git thumbnail recaptures → rebuild → **51/51 unit/output tests** → **10/10 focused browser tests** passed. The focused suite covers all 30 new localized pages, 320/390/768/1440px in light/dark (240 combinations), 200% text at 768px, keyboard disclosures, no JavaScript, aliases including SVN/hg/Helix Core/깃허브/깃헙, and the mechanism conditions. It samples rendered text against opaque background colors at a 4.5:1 threshold to catch theme leakage; this is not a complete accessibility certification.
- Final screenshot inspection confirmed the corrected Korean Git heading in dark surroundings. No page errors or horizontal overflow in the covered cases.
- Thumbnails: 30 PNG files (1,792,230 bytes) and 30 WebP files (550,926 bytes). Existing thumbnails were not regenerated. No new third-party images, fonts or runtime scripts.

Browser captures live in `artifacts/version-control/<id>-<lang>-1440-light.png` and `-390-dark.png`; retained thumbnails live in `public/thumbnails/<id>-<lang>.png` and `.webp`. Prior reviews and their earlier results remain unchanged. These checks validate the local site and explanatory figures, not live integrations with the ten external products. No commit, push or deployment was performed during this initial local verification phase.
