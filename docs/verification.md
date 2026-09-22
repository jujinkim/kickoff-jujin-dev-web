# Verification — 2026-09-21

Current platform release: [implementation and verification](platform-demos-review.md). Earlier counts below are historical.

## One-minute introductions

2026-09-21: all 57 published documents were rewritten into Concept, Example and When to choose it. The source validator caps title, summary and body at an estimated 45 seconds, reserving 15 seconds for visuals. Browser coverage additionally checks default visible article text on every canonical route against the 60-second editorial budget. This is a length constraint, not a timed reader study.

Style pages retain interactive neutral/style comparisons; guide pages retain diagrams. Twenty-one localized PNG previews (about 320 KB total) show real style UI in catalog cards. Recreate them after building and serving `dist` with `node scripts/generate-style-thumbnails.mjs`, then rebuild. Optional comparison, example details, related reading and AI prompts use native disclosures and work without JavaScript.

Validation for this revision: `npm run check` reports zero diagnostics and validates 57 documents; production build indexes 57 articles. `npm test` passes 21 cases. Browser checks cover all 57 short introductions, 21 localized images, search, clipboard, state controls, narrow/dark layouts and no-JavaScript reading. Screenshot inspection used the Korean neobrutalist article and its generated preview. Condensation briefly removed the literal `Map` keyword from two translations; localized examples now retain it and search regression checks pass.

The older full-length release evidence below remains historical. Current content revisions/source revisions are 2; all 51 unpublished candidates remain planned. Native-speaker review, timed comprehension studies, non-Chromium coverage and authenticated comment posting remain unperformed.

## Styles release

This section supersedes the historical baseline below. The source set adds seven concept IDs in English, Korean and Japanese to the existing twelve guides: 19 IDs and 57 language documents. All other 51 candidates remain planned. API schema version remains 1.

Editorial evidence: [group review](catalog-writing/styles-review.md), [source refresh A](catalog-writing/styles-sources-a.md), [source refresh B](catalog-writing/styles-sources-b.md). English group review preceded translation. Fixture labels, six comparison axes, five comparison summaries, source scope, counterexamples and combination conditions are preserved.

The visualization review caught and fixed light focus outlines on fixed-light cards in dark mode, and dark focus outlines around the neobrutalist accent button on a dark card. Local focus colors now follow the surrounding surface. Conservative WCAG luminance calculations gave ordinary text ratios above 11:1 for the tested card fills; the darkest decorative neumorphic shadow still yielded 6.44:1. These bounded calculations do not certify every arbitrary background or full WCAG conformance.

An isolated English preview passed 14 cases (seven styles × two themes) at 320 CSS px: no document overflow, Save/Reset state, and focus retention. Final multilingual gates passed:

- `npm run check`: 51 Astro files, zero errors/warnings/hints; 57 published documents validated; formatting passed.
- `npm run build`: 194 HTML routes; 57 canonical article Markdown documents plus 36 legacy guide aliases; Pagefind indexes 57 documents in three languages.
- `npm test`: 19 passed. Covers all 21 new routes and sibling links, canonical/hreflang, comment IDs, Markdown, AI catalog, sitemap, shared comparison summaries, guide-only scaffold fixtures, overwrite prevention, missing/stale translations and draft exclusion.
- `npm run test:e2e`: 21 passed against built `dist`. All 21 localized style titles resolve to their article; language switches and sibling links work. Studies pass 320/1440px light/dark layouts, Save/Reset/reload, focus retention, keyboard activation and select navigation, live result text, grayscale/shadow removal, and JavaScript-disabled reading. Focus/text contrast regression checks cover fixed-light materials and the neobrutalist accent.
- Agent-browser inspected the built Korean glass study and operated complex background, dark mode and Save. Screenshots inspected: [Korean glass, dark](screenshots/styles-glass-ko-dark.png), [Japanese minimalism, 320px failure case](screenshots/styles-minimal-ja-mobile.png).

The initial browser run found a Japanese exact-title search failure. Pagefind 1.5.2's browser query split `ブルータリズム` into `ブル / ータ / リズム`, while the index retained the full title; the intended article was missing even though its body was indexed. Exact title matches from the already-published, language/kind/category-scoped cards now precede Pagefind full-text matches, with URL deduplication. Tests retain exact-title assertions and check category/kind isolation. This bounded supplement does not replace general CJK full-text segmentation. See [Pagefind multilingual search](https://pagefind.app/docs/multilingual/) for the indexing/query model.

English and both translations received mutual group review. Native-speaker editorial review, non-Chromium browser coverage, screen-reader listening, and authenticated comment posting were not performed. Automated semantics and contrast checks are bounded evidence, not a full accessibility certification.

Production release commit [`82c8247`](https://github.com/jujinkim/jujin-dev-web/commit/82c824787d92d5b30d898ed07a082300f68f350b) was pushed to `main`. [Pages run 35587516744](https://github.com/jujinkim/jujin-dev-web/actions/runs/35587516744) passed all CI gates and deployment (build 1m41s, deploy 48s).

After that deployment, `npm run verify:live` passed all 63 HTTP checks on `https://jujin.dev`, including the 21 style HTML and Markdown paths, category comparisons, canonical/hreflang, sibling links, stable comment identities, AI catalog, sitemaps and search assets. The production browser command below passed all five tests: 21 localized title searches followed through to their articles, language and sibling links, style modes/Reset, and Japanese exact-title category/kind isolation.

```sh
PLAYWRIGHT_BASE_URL=https://jujin.dev npx playwright test tests/browser/styles.spec.ts --grep 'searchable|style-specific|exact Japanese'
```

Published collections: [English](https://jujin.dev/en/catalog/categories/styles/), [Korean](https://jujin.dev/ko/catalog/categories/styles/), [Japanese](https://jujin.dev/ja/catalog/categories/styles/). This record distinguishes the completed runtime release from the subsequent documentation-only commit recording its evidence.

Public baseline was refreshed before the release: all 18 existing live checks passed. Pages certificate is approved; `https_enforced` remains false. The old redirect and missing-certificate sections below are historical, not current blockers. See [deployment](deployment.md).

## Historical catalog/guide baseline

The remaining sections retain earlier evidence and limitations for context; their document counts and domain failures predate this release.

## Catalog / guide split — local verification

- `npm run check`: Astro/TypeScript, 36 source documents, taxonomy/candidate relationships and formatting pass.
- `npm run build`: 173 HTML pages; 36 canonical guide Markdown files plus 36 legacy Markdown aliases; Pagefind indexes only 36 published documents.
- `npm test`: 17 pass. Covers duplicate/cyclic/missing categories, candidate collisions, leaf membership, invalid peers/related guides, translation metadata drift, draft scaffolds and overwrite refusal.
- Isolated real-build fixture publishes one concept and checks catalog listing, shared comparison summaries, Markdown, AI kind, llms.txt, real browser search and incoming guide links. Draft title/body sentinel stays out of public output and search. Temporary files are removed in `finally`; source collection retains only the original 36 documents.
- All 36 existing HTML aliases target their guide canonicals. Legacy Markdown equals canonical Markdown. Canonical pages retain comment IDs, language alternates and sitemap entries. Existing source bytes differ only by `kind: guide` and migrated internal links.
- `npm run test:e2e`: 11 pass against built `dist`. Three-language search, category filters, language/theme/view persistence, copy/failure paths, comments, redirects, pending candidate names, and responsive layouts at 375/768/1440 px.
- Agent-browser visual check: Korean catalog renders separated navigation and taxonomy cards; no browser errors reported.
- Candidates: 58 across six roots / 27 total categories. Seven style candidates lead the writing queue. No concept bodies were added or published.

Local changes only. No commit, push, deployment or public-origin verification in this task. Historical public-domain findings below were not refreshed.

## Original site baseline

The sections below record the earlier site baseline. Current catalog/guide split verification appears above.

## Scope

Reader flow: localized home → catalog example → full article and tradeoffs → copied AI instructions. Assistant flow: llms.txt → behavior rules → alias lookup → published Markdown. Static artifact verification uses the same `dist` served by GitHub Pages.

## Passed

| Check                      | Evidence                                                                                                                                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Types and formatting       | `npm run check`: 0 errors, 0 warnings, 0 hints; 36 articles validated; Prettier passed                                                                                                               |
| Production build           | `npm run build`: 53 HTML pages; 36 Markdown articles; Pagefind indexed 36 articles across en/ko/ja                                                                                                   |
| Content and artifact tests | `npm test`: 11 passed, including an isolated real build with draft, missing-translation and stale-translation fixtures                                                                               |
| Browser tests              | `npm run test:e2e`: 8 passed in Chromium                                                                                                                                                             |
| Search                     | Actual `requirements`, `요구사항`, `要件` queries returned their language’s SRS article; `Map` plus the data category returned the collections article                                               |
| Settings                   | Three views persist after reload; dark theme persists through reload and article language switching                                                                                                  |
| Accessibility and sizing   | Keyboard skip link moves focus to main; 375, 768 and 1440 px viewports have no horizontal document overflow across three languages and four route types                                              |
| Clipboard                  | Successful article/project copy reads back expected text; denied clipboard displays a selectable-text fallback                                                                                       |
| Search failure             | Blocked Pagefind requests display an error and retain the browse catalog                                                                                                                             |
| SEO and links              | All article canonicals, reciprocal hreflang, x-default, sitemap membership and internal output links checked                                                                                         |
| Publication boundaries     | Draft absent from HTML, Markdown, catalog, llms.txt and sitemap; fixture Pagefind count excludes draft; missing translation has no cloned route and links to English; stale translation has a notice |
| AI lookup                  | SRS, 요구사항 and 要件 aliases resolve to the same ID; all catalog Markdown URLs exist and contain the matching title and instructions                                                               |
| Comments                   | All three widget configurations use term `srs`, mapping `specific`, strict `1`, and their page language; actual Korean giscus iframe rendered zero comments and GitHub sign-in                       |
| Local HTTP smoke           | `SITE_ORIGIN=http://127.0.0.1:4321 npm run verify:live`: 18 checks passed                                                                                                                            |
| Dependency review          | `npm audit --omit=dev`: 0 vulnerabilities                                                                                                                                                            |

Screenshots: [desktop home](screenshots/home-en.png), [Korean mobile home](screenshots/mobile-ko.png), [dark catalog](screenshots/catalog-dark.png).

The browser runner initially needed `--no-sandbox` in this Linux environment. This was a local browser-launch issue, not a site error. Browser testing then exposed a Vite preload token left in the bundled dynamic import; the search loader now ships as a native static module. It also found a saved-view selector accidentally matching the HTML root; only view buttons are now selected. All listed checks were rerun after these fixes.

## AI instruction review

This is a review of the published rule contract, not a claim that arbitrary external models obey it.

| Scenario                          | Required behavior in the published instructions                                                                             |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| “Build me an app”                 | Read existing context; ask every remaining audience, output, runtime, scope and success question; no automatic stack choice |
| One clear recommendation          | Explain tradeoffs and evidence; ask accept, reject, or another choice                                                       |
| Explicit typography delegation    | Decide typography within the approved theme; report rationale and assumptions; ask about choices outside that scope         |
| Uncovered topic                   | Identify the catalog gap; provide official external sources and search keywords                                             |
| Failed catalog or Markdown access | Name the failed URL and missing evidence; never pretend it was read                                                         |

## Not completed on the public domain

`npm run verify:live` against `https://jujin.dev` failed all 18 requests because the existing Cloudflare configuration redirects them to `https://dev.jujin.kim`. The destination article route returns 404. This is not a successful public deployment.

Pages is configured for Actions, Discussions and the giscus category are ready, but GitHub HTTPS enforcement failed with **“The certificate does not exist yet”**. See [deployment readiness](deployment.md).

No commit, push, Actions run, production deep-link/search verification, or authenticated comment posting was performed. The actual giscus integration was read-only; its expected missing-thread API response is 404 until someone intentionally posts the first comment. Account login/posting remains manual. Native speaker editorial review and non-Chromium browser coverage remain separate review work, not inferred from build or structural tests.
