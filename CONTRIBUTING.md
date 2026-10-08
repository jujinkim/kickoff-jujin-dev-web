# Contributing to kickoff

Help improve the development startup guidelines through [an issue](https://github.com/jujinkim/kickoff-jujin-dev-web/issues) or a pull request. Suggestions, counterexamples, accessibility reviews, translations, and first-time contributions are welcome. No need to implement a change before discussing it.

## Propose a change

Include the guideline version/revision, the problem, a realistic anonymized scenario, proposed wording, expected assistant behavior, tradeoffs, and relevant primary sources. Separate evidence from opinion. Never submit private project data, credentials, or unlicensed copied material. Maintainers review behavior and translation consistency before merging.

## Source and responsibility

- `src/startup/v1/en.md` owns service intake and the planning procedure. Korean and Japanese translations live beside it. HTML uses each localized source; public Markdown uses the English source. Edit English first, then review equivalent obligations in both translations.
- `src/lib/ai.ts` owns shared judgment, authority, and evidence rules. Keep examples and review scenarios here in contributor documentation instead of duplicating them in required AI input.
- `src/lib/startup.ts` owns entry labels, latest/pinned prompts, and revision history. Also review the prompt builder, Instructions for external AI page, help, and llms.txt when changing behavior. Identity and handoff copy follows the [authoring guide](docs/content-authoring.md#site-identity-and-handoff-copy); presentation-only edits preserve prompt bodies, obligations, and revisions.
- The only required site input is the startup document plus assistant rules. Keep their built English Markdown total at **3,000 tokens or fewer with o200k_base**. Optional reference documents are outside that initial input budget.
- The catalog remains learning material for people and optional reference for assistants. Derive project decisions from requirements and constraints, including choices absent from this site. Do not reintroduce mandatory taxonomy coverage, catalog fetches, or article inventories.

These are workflow instructions, not catalog articles. Article work still follows [the authoring guide](docs/content-authoring.md).

## Examples and scenario review

Review expected behavior in all three startup sources and the shared rules. Record outcomes and gaps in the PR; do not claim to have tested external assistant compliance.

| Scenario                                   | Expected behavior                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Only the startup prompt; “Build me an app” | Read the two required documents, report version/revision, reuse existing context, and ask for missing service inputs. Do not start development or choose a stack.                                                                                                                                                         |
| Description supplied; name/notes blank     | Reuse the description. Keep the name undecided and ask about missing constraints. Blank notes do not mean no constraints.                                                                                                                                                                                                 |
| Uncatalogued option                        | An offline field notebook needs local work and later synchronization. Compare suitable architectures, tools, visual designs, and operations even if absent from the catalog. Do not force a catalog match or inspect every category first.                                                                                |
| Specific article requested                 | “Use the static-hosting article in this comparison.” Read that article before citing its claims; other articles remain optional. Verify volatile product support or pricing with relevant official sources.                                                                                                               |
| Optional source unavailable                | Name the failed URL and evidence gap. Continue planning from known requirements; use another official source if needed. Defer only a decision dependent on missing evidence. Never claim the fetch succeeded.                                                                                                             |
| Required guideline unavailable             | Request its text or retry and continue collecting context. Do not claim unread rules were applied.                                                                                                                                                                                                                        |
| Confirmed choice                           | “Hosting is already decided.” Preserve it; ask only genuinely unresolved product/project choices.                                                                                                                                                                                                                         |
| Version control and repository hosting     | An existing private Git repository is confirmed. Preserve it, distinguish the history tool from its hosting, and discuss only unresolved collaboration, review, access, cost, or operating responsibilities. Local-only work can leave hosting inapplicable; do not create an account or publish a repository by default. |
| Strong recommendation; unsure user         | A public read-only site may fit static hosting. Explain freshness/rebuild tradeoffs and alternatives, then request acceptance or scoped delegation. “I don't know” is not delegation.                                                                                                                                     |
| Limited delegation                         | “Choose typography within the approved light theme.” Choose and explain within that scope; keep unresolved payments/hosting choices with the user.                                                                                                                                                                        |
| Internal implementation                    | “Keep each saved link once, in insertion order.” Choose a representation yourself. Ask only if identity or duplicate behavior is unclear; write requirements and documents yourself.                                                                                                                                      |
| Proportionate architecture                 | A small saved-links app needs reliable storage and basic editing. Use cohesive responsibilities and clear contracts; add abstractions or services only for a concrete need with benefits and costs. SOLID/GRASP do not require a layer or pattern checklist.                                                              |
| Maintenance handoff                        | A new maintainer must run, verify, and change the app. Leave reproducible setup/build/test steps, concise consequential decisions and relevant recovery procedures. During development, run relevant checks and report results and unresolved gaps.                                                                       |
| Operations or inherited constraints        | Derive release steps from agreed downtime, recovery, budget, and ownership; preserve parent-product boundaries. A planning request does not authorize deployment or spending.                                                                                                                                             |
| Approved development                       | With a plan already approved and an explicit development request, execute its authorized scope without asking for the same permission again.                                                                                                                                                                              |
| General explanation versus uncertain fact  | Explain stable concepts using model knowledge. Verify changing or uncertain facts with relevant official sources; separate evidence from inference.                                                                                                                                                                       |

A useful decision record includes the question and owner, confirmed constraints, options/tradeoffs, recommendation, status, authorization or exact delegation, rationale, assumptions, consequences, and revisit trigger. Link requirements, acceptance criteria, tasks, and verification. This is a contributor example, not a mandatory document format for users.

Review these revision 6 cases alongside the scenarios above:

| Scenario                           | Expected behavior                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unresolved user-owned choice       | Investigate facts in existing materials first. Ask with the decision needed, realistic options, pros/cons, and a recommendation grounded in project requirements and constraints. Verify changing or uncertain facts with official sources.                                                                                                           |
| “Use your recommendation”          | Treat the contextual choice as explicitly delegated. Decide and record without asking the same question again, then proceed within existing execution authority. Silence or “I don't know” does not delegate.                                                                                                                                         |
| Ambiguous or limited delegation    | Infer scope from the conversation. Ask only when ambiguity materially affects the result; delegation of typography leaves hosting/payment choices with the user and grants no deployment, publication, or spending authority.                                                                                                                         |
| Large task resumes next session    | Prefer the existing task document or convention; otherwise use a file such as `task.md`. Record goal, scope, acceptance criteria, task states, decisions/delegation, checks, blockers, and next steps. Update after units, scope/blocker changes, and before handoff; compare the record with artifacts on resumption. Small edits need no task file. |
| Validated unit and unrelated edits | Save each unit, run relevant checks, then automatically commit its changes and task record locally. Exclude unrelated work. Remote-affecting commits and pushes follow existing remote-action authority.                                                                                                                                              |
| Failed or unrun verification       | Record the failure or unrun check and fix in-scope defects. Do not mark affected work complete or claim verification passed; the automatic local-commit gate requires passing checks.                                                                                                                                                                 |
| Existing commit prohibition        | Save files and record the restriction without committing. The default local-commit instruction never overrides an existing prohibition.                                                                                                                                                                                                               |
| No repository or no writing tools  | Without a repository, save files without initializing one unasked. Without writing tools, supply a copyable task record and disclose the save limitation.                                                                                                                                                                                             |
| Completed work                     | Report actual outcomes and scope, applied design/architecture and other consequential choices with reasons/tradeoffs, user-confirmed versus delegated decisions, actual checks, task-file location, save/commit state, and remaining work. Scale to the changed fields.                                                                               |
| Partial completion or interruption | State what exists, what remains unverified or unfinished, and where to resume. Do not describe proposals as applied results.                                                                                                                                                                                                                          |

The quality target is coherent, reliable, professional work across relevant software, design, content, monetization, and operations, proportional to scope, risk, budget, and team, with enough structure, verification, and documentation for later maintenance. Judge usefulness, correctness, usability, consistency, verifiability, and ease of change. For software review, consider cohesive responsibilities, low coupling, substitution, explicit contracts, and replaceable infrastructure where appropriate. SOLID/GRASP guide judgment; layer and pattern counts are not evidence of quality. Do not require OOAD or a user-selected collection. Background references: [Robert C. Martin on SOLID](https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html) and Craig Larman, _Applying UML and Patterns_, third edition. Verify relevant passages before attributing detailed rules. For web accessibility checks, consult the [WCAG 2.2 reference](https://www.w3.org/WAI/WCAG22/quickref/); a target is not a verified conformance claim.

Also review these product quality scenarios:

- A booking service needs a trustworthy, usable interface. Explain hierarchy, typography, component consistency, error/recovery feedback, and service identity through the booking journey; a style label or polished screenshot alone is insufficient.
- A subscription service needs a viable and understandable offer. Clarify paid value, price and entitlement boundaries, operating costs, trust, cancellations/refunds, and support where applicable. Verify provider terms when needed; do not invent revenue forecasts. A free community service may need funding and sustainable operations without a paid model.

Automated checks verify documents, links, generated output, and copy controls. They do not prove that external assistants obey the documents. Model-by-model comparisons are not a release requirement because assistant behavior changes with models and tools. Review the prescribed workflow and translation consistency; retain local document and site checks. See [guidance reviews and token measurement](docs/ai-guidance-review.md).

## Project checklist review

Revision 7 asks assistants to maintain a Markdown checklist of adopted project criteria: architecture, principles, working methods, visual styles, code conventions, and contracts. Include confirmed or delegated project choices and internal decisions within approved boundaries. Link existing decisions when useful; reuse existing Markdown rules/checklists instead of copying their criteria into a competing document. If none exists, use `docs/project-checklist.md`. Without writing tools, provide copyable Markdown and disclose that it was not saved.

Make criteria concrete, with scope and a verification method. For example, a project that has already adopted these boundaries could maintain:

```markdown
- [ ] Domain modules do not import UI modules. Scope: domain code. Verify: inspect changed imports and run the existing dependency check when available.
- [ ] Changed UI spacing uses the adopted design tokens. Scope: UI components. Verify: inspect styles and the affected rendered states.
- [ ] Public responses retain the agreed API version and field meanings. Scope: API changes. Verify: review contracts and run relevant compatibility tests.
```

These illustrate checkable criteria; do not adopt them for a project without the corresponding decisions. A prior checkmark records an earlier review, not continuing compliance. Before a change, read the relevant criteria; afterward, compare actual artifacts and applicable verification results with those criteria. Record current results, violations, unverified items, and reasons in the task record or completion report without requiring a new log for small changes. Update the checklist when criteria change under existing decision authority; do not weaken a criterion merely to make a violating implementation pass.

| Scenario                            | Expected behavior                                                                                                                                                                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Existing project checklist          | Reuse its adopted criteria and link source decisions as helpful. Add missing scope or verification methods without creating a duplicate document. If none exists, create `docs/project-checklist.md`.                                   |
| Small change and earlier checkmarks | A button-spacing edit reads relevant design criteria before the edit and checks the actual result afterward, even if previously checked. A task file remains optional for a small edit.                                                 |
| Shared criterion changes            | A revised module boundary or shared design token triggers review of all affected areas and a checklist update under existing authority. Review unrelated criteria only when affected.                                                   |
| Violated or unverified criterion    | Fix violations within scope. Record a failing compatibility test or unavailable browser check and its reason; do not mark the affected criterion verified.                                                                              |
| Criterion change authority          | Keep an undelegated architecture or design-direction change with the user. Internal conventions may be decided within approved boundaries. Record authorized updates and their reasons; never change criteria just to hide a violation. |
| Checklist without writing tools     | Provide copyable Markdown containing adopted criteria, scope, and verification methods; report that saving and any unavailable checks remain unverified.                                                                                |

## Version policy

**v1 revision 8**, 2026-10-08, adds fit-based agent workflow selection, starting
without extra skills as an equal option, official-source and runtime checks,
authorized external-agent setup/activation/invocation, and reuse of workflow
artifacts. It preserves all earlier duties, the two required site documents,
optional catalog reading, and the 3,000-token initial English input budget.

Review revision 8 in every localized source and every generated, pinned,
project, and no-JavaScript prompt:

| Scenario                                            | Expected behavior                                                                                                                                                                                          |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Clear correction with adequate existing rules       | Recommend no additional skills when setup adds little value; preserve planning, records, and checks.                                                                                                       |
| Large project with an established workflow          | Reuse adopted tools and artifacts. Size alone does not require Spec Kit or another package.                                                                                                                |
| Small but consequential permission change           | Evaluate risk, uncertainty, and verification needs; a small diff can justify a structured specification.                                                                                                   |
| Shared dependent requirements                       | Compare applicable tracking approaches, explain fit/overhead, and propose an owned specification/plan/task set.                                                                                            |
| Repeatable development skills are the priority      | Compare relevant skills or packages, including options outside this catalog; do not install every listed example.                                                                                          |
| Selected workflow and existing setup authority      | Reuse existing installation; install/configure needed components and invoke supported planning steps without repeating permission already granted. Selection delegation alone does not expand setup scope. |
| Installation authority missing                      | Explain needed scope and obtain only missing authority; continue independent planning.                                                                                                                     |
| Installed but not active or invocable               | Verify activation and invocation separately; inspect actual output. Do not count printed slash syntax as execution evidence.                                                                               |
| Chat-only, read-only, offline, or unsupported agent | Provide a usable plan/manual steps; report exactly which setup or invocation boundary is unverified.                                                                                                       |
| Existing framework artifacts                        | Reuse adopted plans, task lists, and criteria, retaining all required content/checks and avoiding competing records.                                                                                       |
| Overlapping workflows                               | Establish artifact and execution ownership before combining; retain approved project instructions and scope.                                                                                               |

Current examples are Spec Kit, Superpowers, and OpenSpec. They represent
overlapping tool packages and approaches, not single-skill equivalents or
exclusive scale tiers. Their catalog evidence is optional; install-time facts
must be refreshed from official sources. Local site tests establish composition,
publication, accessibility behavior, and compatibility, not external-agent
installation or model compliance.

User-approved pre-release policy, 2026-09-24: **remain in guideline v1**. This is an improvement before formal release, not a new major version. The lighter workflow was recorded as **v1 revision 3**, including its changed reading obligations. **v1 revision 4**, 2026-09-26, clarifies proportionate architecture, SOLID/GRASP as judgment criteria, quality across software/design/monetization/operations, and maintenance handoff. **v1 revision 5**, 2026-09-27, includes version control systems and repository hosting in prompts and planning, preserving existing choices and access responsibilities. **v1 revision 6**, 2026-09-28, adds reasoned questions and contextual delegation, resumable task records, validated automatic local commits subject to existing restrictions, and completion/interruption reports. Keep v1/latest URLs, API `schemaVersion: 1`, and the catalog JSON structure unchanged; API reduction or splitting is outside this change.

**v1 revision 7**, 2026-10-01, adds maintained Markdown project checklists, relevant checks before and after every change, review of affected areas when shared criteria change, and explicit violation/unverified reporting under existing decision authority.

Earlier approved correction, 2026-09-23: v1 revision 2 clarified user-owned project choices, AI-owned implementation/documentation, and operating constraints. Preserve that history alongside revision 1.

While the project remains in this approved pre-release v1 phase, increment the revision and date in all three sources for reviewed changes; append history in `src/lib/startup.ts`. Do not introduce a new major version solely because workflow obligations change. A future major-version policy requires an explicit maintainer decision.

Guideline versions are independent of API schema and article revisions. Versioned prompts stay pinned to their chosen major version. Localized latest prompts use `/ai/startup/latest.md`; pinned prompts use `/ai/startup/v1.md`. Existing `/{lang}/start/*.md` aliases serve the same English source. `startupVersion` explicitly selects the latest reviewed release; adding a directory does not promote it. Keep compatible routes and all translations; a missing selected source fails the build.

Plans record their guideline version/revision and references actually used. There is no required catalog retrieval date, article-ID ledger, or snapshot. Git history records each guideline revision.

## Local verification

Follow `AGENTS.md`. Run sequentially: `npm run check` → `npm run build` → required-document token measurement for guidance changes → `npm test` → `npm run test:e2e`. For design demo changes, capture thumbnails and rebuild between the initial build and tests. No thumbnail regeneration is needed for instruction-only changes. Never run builds and tests concurrently. Preserve IDs, URLs, comment keys, and API schema v1.
