# Contributing to jujin.dev

Help improve the development startup guidelines through [an issue](https://github.com/jujinkim/jujin-dev-web/issues) or a pull request. Suggestions, counterexamples, accessibility reviews, translations, and first-time contributions are welcome. No need to implement a change before discussing it.

## Propose a change

Include the guideline version/revision, the problem, a realistic anonymized scenario, proposed wording, expected assistant behavior, tradeoffs, and primary sources. Separate evidence from opinion. Never submit private project data, credentials, or unlicensed copied material. Keep contributions focused; maintainers review evidence, behavior, and translation consistency before merging.

For example: a user says “I do not know which architecture to pick.” The assistant should explain a recommended bundle and request acceptance or scoped delegation, rather than silently recording an accepted decision.

## Source and review

The source is `src/startup/v1/en.md`. Korean and Japanese translations live beside it. HTML uses each localized source; public Markdown always uses the English source. Do not maintain separate export copies. Update English first, then review translations for equivalent obligations and examples. `src/lib/startup.ts` supplies localized entry labels, latest and pinned prompts, and the release history. Startup guidelines are long-form instructions, separate from the one-minute catalog articles.

Review these scenarios with expected responses in the PR:

- Only the startup prompt: read sources, report version, ask for the three missing service inputs; do not start development.
- Description already supplied: reuse it; ask only for missing name/context and necessary follow-ups.
- Unsure or tired user: explain a recommendation; uncertainty is not delegation.
- Scoped delegation: choose inside scope, record reasons, ask about choices outside scope.
- Full catalog: all categories and published entries offered; pending names labeled, no fabricated bodies; unrelated groups have a reason.
- Parent service or sensitive constraint: preserve inherited constraints in architecture and design.
- Inaccessible catalog or stale translation: disclose missing evidence or use the available original.
- Approved plan and development request: execute authorized scope without repeating permission questions.

Automated checks verify publication and UI wiring; they do not prove that external assistants obey the document. Include manual scenario review when changing behavior.

## Version policy

Guideline major versions (`v1`, `v2`, …) are independent of API `schemaVersion: 1` and article revisions. Keep old major HTML and Markdown URLs available. Versioned prompts remain pinned to their chosen major version. Localized startup prompts all use `/ai/startup/latest.md`; pinned prompts use `/ai/startup/v1.md`. Public Markdown is English-only. Existing `/{lang}/start/*.md` URLs serve the same English source for compatibility. Tell users to write their own requests and project descriptions in their preferred language. These endpoints return Markdown directly, generated at build time, with the actual version in the document. There is no separate latest body to edit.

For wording corrections that preserve behavior, increment the revision and date in all three sources; append a dated history entry in `src/lib/startup.ts`. Keep previous history entries. For changed obligations, authority, required inputs, or workflow, create a new version directory and routes, retain older versions, and add a version-history entry. Maintainers review the complete English source, translation parity, migration impact, and scenario outcomes before promoting the new prompt. Promote a reviewed release by changing `startupVersion` in `src/lib/startup.ts`, then build and deploy. Only this explicit pointer selects latest; adding a draft version directory does not promote it. Supply all three HTML translations, English Markdown, and compatible versioned routes before promotion; a missing selected source fails the build. Old version pages keep their pinned prompts. A latest URL follows future releases when fetched again; existing project plans keep their recorded version until explicitly upgraded.

The live catalog can grow independently. Plans must record retrieval date and the IDs/revisions consulted; preserve a snapshot when exact reproduction matters. Git history records the exact text of each guideline revision.

## Local verification

Follow `AGENTS.md`. Run checks sequentially: `npm run check`, `npm run build`, then `npm test` and `npm run test:e2e`. For design demo changes, capture thumbnails and rebuild between the initial build and tests as documented in `docs/design-demos.md`. Never run builds and tests concurrently. Preserve IDs, URLs, comment keys, and API schema v1.
