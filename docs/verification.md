# Verification — 2026-09-21

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
