# Prompt value explanation and publication

Started 2026-10-01. Status: complete; deployed and verified in production.

## Goal and authorization

Explain why a visitor would prepare a prompt with kickoff instead of writing a long request alone. The user approved implementation and deployment. Implement English first, then equivalent Korean and Japanese. Publish through the existing GitHub Pages workflow after sequential verification.

## Accepted scope and decisions

- Preserve the approved slogan and lead with prompt preparation.
- Replace the homepage's unrelated featured thumbnail with a book-lending prompt composition example. Keep the same service description visible and expose the real generated prompt through native disclosure.
- Explain the added requests: clarify missing requirements, justify choices, agree on a plan, verify work, and report remaining work. Keep learning examples and the existing external-AI handoff available.
- Keep all presentation copy in the existing localized strings. Preserve prompt bodies, v1 revision 7, required reading, routes, identities, API schema 1, and browser-only input behavior.
- Show composition evidence; do not present invented AI conversations, evaluation numbers, testimonials, or improvement claims. External-model evaluation and user research remain future work.
- Record an actionable evaluation protocol so future promotional claims can be supported by actual results.
- Verify built pages, keyboard/no-JavaScript disclosure, responsive light/dark layouts, and equality between the homepage example and builder output. Publish only after checks pass; inspect the matching deployment and production pages.

## Acceptance checklist

- [x] Homepage and metadata explain the prompt's added working guidelines in all three languages.
- [x] Example preserves the same input and displays the real generated prompt, without simulated AI outcomes.
- [x] Main prompt action, external-AI boundary, approved slogan, and learning resources remain clear.
- [x] Help and authoring guidance explain the distinction and boundaries consistently.
- [x] Future evaluation has predefined metrics, balanced scenarios, baselines, and publication rules.
- [x] Sequential check, build, unit/output tests, and relevant browser tests pass. No article demos or thumbnails change.
- [x] Verify prompt/guideline/catalog compatibility and visually inspect desktop/mobile light/dark views.
- [x] Commit, push, observe successful GitHub Pages deployment, verify production HTTP and browser flows, and prove remote/working-tree state.

## Evidence and progress

- Initial checkout: clean `main`, tracking `origin/main`, HEAD `5dffeaa`.
- Deployment: `.github/workflows/pages.yml` validates, builds, runs unit/output and browser tests, then publishes to GitHub Pages on a push to `main`.
- Inspected current v1 revision 7 and prompt composition, shared identity strings, help walkthrough, and startup browser coverage.
- `scripts/verify-live.mjs` contains an obsolete assistant-rule assertion. Refresh it against the current rules as part of verifying this release.
- Implemented and reviewed English composition/benefit copy before equivalent Korean/Japanese. The three benefits ask for clarification, justified choices, and verification/reporting; they make no measured outcome claim.
- The new static `PromptExample.astro` calls the existing generator with the visible description and blank optional fields. Native disclosure exposes its full output. No article design registry or thumbnail is involved.
- Updated the help's book-lending scenario to show a missing decision even with a detailed feature request. Added durable composition/evidence rules to authoring guidance.
- Added `docs/prompt-evaluation.md` with three conditions, a predefined outcome rubric, ten balanced pilot scenarios, isolated trials, a separate human-effort study, and evidence-limited publication rules. No trial results are represented as collected.
- Extended existing browser flows to compare the example with actual builder output and check keyboard/no-JavaScript disclosure. Refreshed live validation for current assistant rules and the changed public screens.
- Initial check/build passed. Initial unit/output run passed 48/51; three locale metadata checks caught a missing explicit learning role. Restored that role in all three descriptions and reran sequential verification; no test criteria were weakened.
- Prompt composition sources, all three startup sources, design registry, and built required AI documents/catalog matched their initial SHA-256 values. Required English Markdown hashes: startup `d6e4aff7f650e54627364bd29e1089efebb81154a51e94c665cea7c458268567`, rules `fb9a6c252589a110a6eeec39cc0e84793c47f4ea2b9aab9115a5f631350a816b`; catalog `ea42c0be62ae1b012c8ec24a5dd4a4b50462cfe2a798b038cce6da624353f508`.
- Final sequential local verification passed: `npm run check` (216 files, no diagnostics; 276 articles); `npm run build` (440 pages, 249 indexed documents); `npm test` (51/51); startup, product-alignment, and entry-language browser tests (41/41, 34.3 seconds).
- Browser tests cover EN/KO/JA equality between the actual homepage prompt and the editable builder, keyboard/no-JavaScript disclosure, copy success/failure, input privacy, reset, entry language routing, and 320/768/1440px light/dark core screens.
- Agent-browser visually inspected Korean desktop and 320px mobile light/dark screens. Meaningful content, navigation, and main action were present; no page errors, console errors, overlay, or horizontal overflow. An initial host Chromium sandbox launch failure was resolved without product changes.
- Local verification logs: `/tmp/kickoff-prompt-value-build.log`, `/tmp/kickoff-prompt-value-unit.log`, `/tmp/kickoff-prompt-value-e2e.log`. Browser artifacts: `/tmp/kickoff-prompt-value-e2e`; inspected screenshots: `/tmp/kickoff-prompt-value-desktop.png`, `/tmp/kickoff-prompt-value-mobile.png`, `/tmp/kickoff-prompt-value-mobile-example.png`, `/tmp/kickoff-prompt-value-mobile-dark.png`.
- Saved and pushed presentation commit `ede9a19d090bffea6f766a625b42d69fa8e35ec3`; initial Pages run `36774747411` entered the full 179-test browser suite.
- Release audit found the two preceding workflows had failed before deployment. Prior run `36761786103` passed 176/179 browser tests but retained obsolete success-status selectors after the snackbar change and an implicit mouse-focus assumption in the snackbar lifecycle test. Its complete build log was retrieved through the completed job's logs API into `/tmp/kickoff-prompt-value-previous-ci-build.log`.
- Cancelled this task's initial workflow to correct those known deployment blockers. Updated catalog success assertions to inspect the actual snackbar (including the Plan mode hint), scoped failure feedback to the prompt section, and asserted that no success snackbar appears on failure. Made the lifecycle test activate its explicitly focused button with the keyboard so it verifies focus preservation without assuming platform mouse-focus behavior. No application behavior, test expectations, prompt body, or workflow gates were weakened.
- Catalog/startup/product-alignment/entry-language tests then passed 58/58 locally. A dedicated delayed-clipboard reproduction exposed the underlying focus bug: disabling the native copy button during an unresolved clipboard promise moves focus away. The failure is preserved in `/tmp/kickoff-prompt-value-focus-repro.log` and `/tmp/kickoff-prompt-value-focus-repro`.
- Replaced the transient native disabled state with a guarded in-flight copy and `aria-busy` feedback, preserving focus while still preventing duplicate writes. Input edits/reset clear that state; revision checks still suppress stale completion. Extended the existing deferred-clipboard test to verify focus, busy state, one write per attempt, and stale feedback suppression.
- Final blocker-fix rerun passed sequentially: check (216 files, no diagnostics), build (440 pages, 249 indexed documents), unit/output tests (51/51), and the expanded catalog/startup/product-alignment/entry-language browser subset (58/58, 1.1 minutes). The delayed-copy reproduction now passes within that subset. Built AI documents and catalog still match the recorded hashes. Final logs use `/tmp/kickoff-prompt-value-*-final.log`; browser artifacts use `/tmp/kickoff-prompt-value-e2e-final`.
- Published application commit `cd8455de370e736fe0d910cefbe427527d9b5163` through successful [Actions run 36777832007](https://github.com/jujinkim/kickoff-jujin-dev-web/actions/runs/36777832007). CI passed 51/51 unit/output tests and all 179 browser tests (13.5 minutes); build and Pages deployment jobs both succeeded. Pages reports `built`, workflow publishing, and CNAME `kickoff.jujin.dev`.
- Initial live validation passed the changed screens and concept checks but found 30 obsolete guide-path/sitemap assertions: the script treated registered guide demos as catalog concepts. Updated verification to derive `guides`/`catalog` paths from actual article kind while retaining comment identity, demo, canonical, hreflang, Markdown, and sitemap checks. No published route or application artifact changed.
- Verification-script change passed `npm run check` (216 files, no diagnostics; 276 articles; formatting passed). Production `npm run verify:live` passed all 525 HTTP checks with zero failures. Log: `/tmp/kickoff-prompt-value-live-final.log`.
- Production browser verification passed 19/19 tests (13.5 seconds): EN/KO/JA prompt/version documents, actual homepage-to-builder equality and edits/reset/help, no-JavaScript use, search/recovery, keyboard copy/AI lookup, clipboard-failure fallback, input privacy, and delayed-copy focus/stale feedback. Log: `/tmp/kickoff-prompt-value-production-e2e.log`; artifacts: `/tmp/kickoff-prompt-value-production-e2e`.
- Agent-browser inspected the published Korean desktop (1440px) and mobile (320px) pages, including the actual prompt disclosure in dark mode. No horizontal overflow, page errors, console errors, or error overlay. Screenshots: `/tmp/kickoff-prompt-value-production-desktop.png`, `/tmp/kickoff-prompt-value-production-mobile.png`, `/tmp/kickoff-prompt-value-production-mobile-dark-example.png`. Closed the owned browser session and confirmed local preview port 4322 was stopped.
- Retrieved published startup guidance, assistant rules, and AI catalog directly: HTTP 200 and byte equality with the verified build, retaining the recorded SHA-256 values.
- Final maintenance commit contains only this release record and the corrected live-verification script. Use `[skip ci]` for that commit because it does not change published application artifacts; the deployed application remains `cd8455de370e736fe0d910cefbe427527d9b5163`, whose complete workflow and production checks passed. Verify local/remote commit equality and a clean working tree after pushing; report that proof in the handoff.

## Remaining work

No implementation or publication work remains. No external-model comparison or user study has been run for this change. Future work starts with exact evaluation fixtures and reviewer calibration in `docs/prompt-evaluation.md`, followed by real trials and a separate human-effort study. Publish improvement numbers or testimonials only when matching evidence exists.
