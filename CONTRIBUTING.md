# Contributing to Kickoff

Help improve the development startup guidelines through [an issue](https://github.com/jujinkim/kickoff-jujin-dev-web/issues) or a pull request. Suggestions, counterexamples, accessibility reviews, translations, and first-time contributions are welcome. No need to implement a change before discussing it.

## Propose a change

Include the guideline version/revision, the problem, a realistic anonymized scenario, proposed wording, expected assistant behavior, tradeoffs, and relevant primary sources. Separate evidence from opinion. Never submit private project data, credentials, or unlicensed copied material. Maintainers review behavior and translation consistency before merging.

## Source and responsibility

- `src/startup/v1/en.md` owns service intake and the planning procedure. Korean and Japanese translations live beside it. HTML uses each localized source; public Markdown uses the English source. Edit English first, then review equivalent obligations in both translations.
- `src/lib/ai.ts` owns shared judgment, authority, and evidence rules. Keep examples and review scenarios here in contributor documentation instead of duplicating them in required AI input.
- `src/lib/startup.ts` owns entry labels, latest/pinned prompts, and revision history. Also review the prompt builder, Instructions for AI page, help, and llms.txt when changing behavior.
- The only required site input is the startup document plus assistant rules. Keep their built English Markdown total at **3,000 tokens or fewer with o200k_base**. Optional reference documents are outside that initial input budget.
- The catalog remains learning material for people and optional reference for assistants. Derive project decisions from requirements and constraints, including choices absent from this site. Do not reintroduce mandatory taxonomy coverage, catalog fetches, or article inventories.

These are workflow instructions, not catalog articles. Article work still follows [the authoring guide](docs/content-authoring.md).

## Examples and scenario review

Review expected behavior in all three startup sources and the shared rules. Record outcomes and gaps in the PR; do not claim to have tested external assistant compliance.

| Scenario                                   | Expected behavior                                                                                                                                                                                                                          |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Only the startup prompt; “Build me an app” | Read the two required documents, report version/revision, reuse existing context, and ask for missing service inputs. Do not start development or choose a stack.                                                                          |
| Description supplied; name/notes blank     | Reuse the description. Keep the name undecided and ask about missing constraints. Blank notes do not mean no constraints.                                                                                                                  |
| Uncatalogued option                        | An offline field notebook needs local work and later synchronization. Compare suitable architectures, tools, visual designs, and operations even if absent from the catalog. Do not force a catalog match or inspect every category first. |
| Specific article requested                 | “Use the static-hosting article in this comparison.” Read that article before citing its claims; other articles remain optional. Verify volatile product support or pricing with relevant official sources.                                |
| Optional source unavailable                | Name the failed URL and evidence gap. Continue planning from known requirements; use another official source if needed. Defer only a decision dependent on missing evidence. Never claim the fetch succeeded.                              |
| Required guideline unavailable             | Request its text or retry and continue collecting context. Do not claim unread rules were applied.                                                                                                                                         |
| Confirmed choice                           | “Hosting is already decided.” Preserve it; ask only genuinely unresolved product/project choices.                                                                                                                                          |
| Strong recommendation; unsure user         | A public read-only site may fit static hosting. Explain freshness/rebuild tradeoffs and alternatives, then request acceptance or scoped delegation. “I don't know” is not delegation.                                                      |
| Limited delegation                         | “Choose typography within the approved light theme.” Choose and explain within that scope; keep unresolved payments/hosting choices with the user.                                                                                         |
| Internal implementation                    | “Keep each saved link once, in insertion order.” Choose a representation yourself. Ask only if identity or duplicate behavior is unclear; write requirements and documents yourself.                                                       |
| Operations or inherited constraints        | Derive release steps from agreed downtime, recovery, budget, and ownership; preserve parent-product boundaries. A planning request does not authorize deployment or spending.                                                              |
| Approved development                       | With a plan already approved and an explicit development request, execute its authorized scope without asking for the same permission again.                                                                                               |
| General explanation versus uncertain fact  | Explain stable concepts using model knowledge. Verify changing or uncertain facts with relevant official sources; separate evidence from inference.                                                                                        |

A useful decision record includes the question and owner, confirmed constraints, options/tradeoffs, recommendation, status, authorization or exact delegation, rationale, assumptions, consequences, and revisit trigger. Link requirements, acceptance criteria, tasks, and verification. This is a contributor example, not a mandatory document format for users.

For software review, consider cohesive responsibilities, low coupling, substitution, explicit contracts, and replaceable infrastructure where appropriate. Do not require OOAD or a user-selected collection. Background references: [Robert C. Martin on SOLID](https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html) and Craig Larman, _Applying UML and Patterns_, third edition. Verify relevant passages before attributing detailed rules. For web accessibility checks, consult the [WCAG 2.2 reference](https://www.w3.org/WAI/WCAG22/quickref/); a target is not a verified conformance claim.

Automated checks verify documents, links, generated output, and copy controls. They do not prove that external assistants obey the documents. See [revision 3 review and token measurement](docs/ai-guidance-review.md).

## Version policy

User-approved pre-release policy, 2026-09-24: **remain in guideline v1**. This is an improvement before formal release, not a new major version. Record the lighter workflow as **v1 revision 3**, including its changed reading obligations. Keep v1/latest URLs, API `schemaVersion: 1`, and the catalog JSON structure unchanged; API reduction or splitting is outside this change.

Earlier approved correction, 2026-09-23: v1 revision 2 clarified user-owned project choices, AI-owned implementation/documentation, and operating constraints. Preserve that history alongside revision 1.

While the project remains in this approved pre-release v1 phase, increment the revision and date in all three sources for reviewed changes; append history in `src/lib/startup.ts`. Do not introduce a new major version solely because workflow obligations change. A future major-version policy requires an explicit maintainer decision.

Guideline versions are independent of API schema and article revisions. Versioned prompts stay pinned to their chosen major version. Localized latest prompts use `/ai/startup/latest.md`; pinned prompts use `/ai/startup/v1.md`. Existing `/{lang}/start/*.md` aliases serve the same English source. `startupVersion` explicitly selects the latest reviewed release; adding a directory does not promote it. Keep compatible routes and all translations; a missing selected source fails the build.

Plans record their guideline version/revision and references actually used. There is no required catalog retrieval date, article-ID ledger, or snapshot. Git history records each guideline revision.

## Local verification

Follow `AGENTS.md`. Run sequentially: `npm run check` → `npm run build` → `npm test` → `npm run test:e2e`. For design demo changes, capture thumbnails and rebuild between the initial build and tests. No thumbnail regeneration is needed for instruction-only changes. Never run builds and tests concurrently. Preserve IDs, URLs, comment keys, and API schema v1.
