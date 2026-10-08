# AI guidance reviews

## v1 revision 8 guidance review

Reviewed 2026-10-08 against the requested workflow assessment, external-agent
setup, and optional learning catalog. Starting without extra skills is an equal
recommendation. English was reviewed before equivalent Korean/Japanese startup,
prompt, and help wording. Existing planning, decision ownership, checklist,
recording, commit, and evidence obligations remain in force.

Manual scenario and translation review describes prescribed behavior; it does
not establish external AI compliance:

| Scenario                                           | Expected behavior and reviewed rule                                                                                                                                              |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Clear venue correction with adequate project rules | Recommend no additional skills when setup brings no useful benefit; retain applicable planning and checks.                                                                       |
| Large established project with adequate practices  | Size alone does not trigger installation or replacement of existing workflows.                                                                                                   |
| Small but consequential shared booking rule        | Consider traceable requirements and review when dependencies or risk justify their cost.                                                                                         |
| Repeatable implementation or review needs          | Compare scoped skills, including Superpowers, against existing development practices.                                                                                            |
| Agreed changes to current behavior                 | Compare OpenSpec proposals/deltas against the required ownership and maintenance of records.                                                                                     |
| Existing setup or combined workflows               | Reuse setup, preserve confirmed choices, assign artifact ownership, and avoid competing plans/tasks/checklists.                                                                  |
| Accepted or delegated selection                    | Proceed within existing installation authority; ask only when required authority is missing. Choice delegation alone does not authorize implementation, publishing, or spending. |
| Selected tool is installed                         | Verify activation, availability, supported invocation, and actual result separately; a printed slash command proves no execution.                                                |
| Missing shell/write/network/invocation capability  | Continue independent planning and provide manual next steps, with unverified boundaries named.                                                                                   |
| EN/KO/JA prompt entry points                       | Shared reminders reach latest, pinned, project, generated, and JavaScript-disabled prompts; required reading remains the same two documents.                                     |
| Catalog reference                                  | Optional learning material; consider suitable options beyond this catalog and verify changing facts with official sources.                                                       |

Sequential local verification completed:

- Regular `npm run check`: 222 files; zero errors, warnings, or hints; all 288 published sources and formatting validated.
- Regular `npm run build`: 455 static pages; 261 indexed localized documents. Twelve localized PNG/WebP thumbnail pairs generated and inspected; changed diagrams recaptured before the final rebuild.
- Built required English input: startup **1,577** + assistant rules **1,387** = **2,964 / 3,000 o200k_base tokens**, measured with tiktoken 0.12.0.
- `npm test`: **54/54 passed**, including all localized prompt paths, workflow publication gates, source-backed supplements, budgets, and output identities.
- Full browser run: **174 passed / 15 failed**. After resolving diagram contrast, a named rule label, and outdated test assumptions, the four affected files yielded **41 passed / 3 failed**; their last case-sensitive assertion was corrected and **3/3** final startup cases passed. All **189 distinct cases ultimately passed across these runs**; there was no fresh 189/189 single run.
- New workflow browser checks: **10/10 passed**, covering EN/KO/JA discovery, aliases, related reading, keyboard disclosures, meaningful static mechanisms, 320/390/768/1440px light/dark layouts, text contrast, 200% text, and JavaScript-disabled reading. Broad corrective checks covered all active screens and registered visuals.

Guidance remains pre-release v1 revision 8. Existing public routes, IDs, comment
keys, browser-only input handling, required-reading scope, and API schemaVersion
1 are retained. Catalog additions are optional. External-agent installation,
model compliance, real-device behavior, and live publication were not tested.
See the [workflow task record](agent-workflow-selection-task.md) for decisions,
corrections, and save/commit state.

## v1 revision 7 guidance review

Reviewed 2026-10-01 against the approved Markdown project-checklist plan. The user selected relevant-item review before and after each change, with broader impact review when shared criteria change. English rules and reminders were written first, then Korean/Japanese startup artifacts and workflow reminders were reviewed for equivalent obligations. Detailed creation, reuse, checks, authority, and reporting rules live in the shared English assistant instructions; startup documents and copied prompts connect to those rules.

Manual scenario and translation review (prescribed behavior, not external AI compliance):

| Scenario                                                                     | Result and supporting rule                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Adopted architecture, principles, methods, styles, conventions, or contracts | Shared rules maintain criteria from confirmed or delegated choices and internal decisions within approved boundaries. Each item has concrete scope and a verification method.                                                            |
| Existing Markdown rules/checklist                                            | Reuse the existing document; otherwise use `docs/project-checklist.md`. Contributor examples explain linking decisions without duplicating criteria.                                                                                     |
| Small edit or previously checked item                                        | Read relevant items before every change and check actual changed artifacts and applicable verification results afterward, including previously checked items. Small edits still need no task file.                                       |
| Shared criterion changes                                                     | Review all affected areas; criterion updates follow existing decision authority and record reasons. Unrelated choices remain outside the change.                                                                                         |
| Violated or unverified item                                                  | Fix in-scope violations and report violations/unverified items with reasons in the task record or report. Do not rewrite criteria merely to hide a violation.                                                                            |
| Undelegated project choice versus internal decision                          | User-owned architecture/design-direction changes retain existing ownership; internal choices within approved boundaries require no separate delegation.                                                                                  |
| No writing tools                                                             | Provide copyable Markdown; contributor scenarios require honest disclosure of unsaved or unverified work.                                                                                                                                |
| EN/KO/JA prompt paths                                                        | All startup sources name the checklist artifact, scope, and verification methods and connect to the shared rules. `workflowPrompt` supplies equivalent reminders to latest, pinned, project, generated, and JavaScript-disabled prompts. |
| Earlier obligations and document budget                                      | Only the original two documents remain required; catalog references stay optional. Shortened English introductory and optional-reference wording preserves its obligations.                                                              |

Sequential local verification completed:

- `npm run check`: passed; 214 files with zero errors/warnings/hints, 276 articles validated, and formatting passed.
- `npm run build`: passed; 440 static pages and 249 indexed documents.
- `scripts/measure-ai-input.py` with tiktoken 0.12.0 and `o200k_base`: startup **1,628** + assistant rules **1,366** = **2,994 / 3,000 tokens**. Future wording changes must be measured again because only six tokens remain below the limit.
- `npm test`: **51/51 passed**, including revision/history, translated checklist reminders, all prompt entry points, authority boundaries, required rules, and stable output identities.
- `npm run test:e2e -- tests/browser/startup.spec.ts --output=/tmp/kickoff-revision-7-e2e`: **20/20 passed** in 27.3 seconds. Covers EN/KO/JA generated, pinned and project prompt copying, no-JavaScript fallback, keyboard use, clipboard failure, input privacy, and 320/768/1440px light/dark layouts.
- Catalog JSON remained byte-identical: SHA-256 `ea42c0be62ae1b012c8ec24a5dd4a4b50462cfe2a798b038cce6da624353f508` before and after the build.

This instruction-only change needs no demo or thumbnail regeneration. Public routes, IDs, comment keys, API schemaVersion 1, and browser-only input handling are preserved. No full catalog browser suite, external AI compliance test, or deployment was performed. See [revision 7 task record](ai-guidance-revision-7-task.md) for save/commit state and the resume point.

## v1 revision 6 guidance review

Reviewed 2026-09-28 against the approved question/delegation, task-record/commit, and completion-report plan. English rules and startup wording were written first. Korean and Japanese preserve the same contextual delegation, existing authorization, work tracking, and report obligations. Detailed exceptions live in the required English assistant rules; all three startup documents connect to them. `workflowPrompt` supplies one localized core request to latest/pinned and project prompts. Generated prompts and the no-JavaScript fallback inherit the same request through `startupPrompt`.

Manual scenario and translation review (prescribed behavior, not external AI compliance):

| Scenario                                                                    | Result and supporting rule                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unresolved product/design/tool choice                                       | Shared context rules require investigation of available facts, realistic options, pros/cons, and recommendations grounded in requirements/constraints. Evidence rules retain official-source verification for changing or uncertain facts. Startup §2 and all prompts carry the request in EN/KO/JA. |
| Existing confirmed choices                                                  | Context and authorization rules preserve decisions and approvals; questions concern only unresolved user-owned choices.                                                                                                                                                                              |
| “Use your recommendation” / “알아서 추천대로 해줘” / “推薦どおりに任せます” | Authorization and startup §2 treat the choice in context as delegated. Decide and record without reconfirming; execute only within existing authorization. Silence and “I don't know” remain non-delegation.                                                                                         |
| Limited or materially ambiguous delegation                                  | Infer scope from the conversation; clarify material ambiguity only. Typography delegation does not decide unrelated hosting/payment choices or authorize publishing/spending.                                                                                                                        |
| Internal implementation                                                     | Shared context rules and startup §2 allow implementation decisions inside approved boundaries without separate delegation.                                                                                                                                                                           |
| Large task resumes                                                          | Work-record rules cover existing-file preference, proportional task-file creation, all required fields, update events, and checking actual artifacts on resumption. Startup §6 connects all languages to these rules.                                                                                |
| Verification fails or is not run                                            | Save and record the gap; fix in-scope defects. Do not mark affected work complete. Automatic local commits follow passing relevant checks.                                                                                                                                                           |
| Commit prohibited / unrelated edits present                                 | Existing prohibitions prevail; commit only the validated unit and its record. Remote-affecting commits and pushes retain the remote-action permission boundary.                                                                                                                                      |
| No repository / no file-writing tools                                       | Save without unsolicited repository initialization, or provide a copyable task record when writing is unavailable.                                                                                                                                                                                   |
| Completion report                                                           | Shared reporting rules and localized prompts cover actual scope, applied design/architecture and key decisions with reasons/tradeoffs, user versus delegated ownership, actual checks, record location, save/commit state, and remaining work. Report only relevant changed fields.                  |
| Partial completion / interruption                                           | Report actual progress, unfinished/unverified items, and a resume point. Proposals are never presented as implemented results.                                                                                                                                                                       |

Required reading remains the two English documents. Catalog reading stays optional; prior revisions, v1/latest URLs, public API schemaVersion 1, prompt input types, and browser-only input handling are preserved. No demo or thumbnail changes are needed.

Sequential local verification completed:

- `npm run check`: passed, 214 files with zero errors/warnings/hints; 276 articles validated; formatting passed.
- `npm run build`: passed, 440 static pages and 249 indexed documents.
- `scripts/measure-ai-input.py` with tiktoken 0.12.0 and `o200k_base`: startup **1,614** + assistant rules **1,244** = **2,858 / 3,000 tokens**.
- `npm test`: **51/51 passed**, including revision/history, translated workflow reminders, all prompt entry points, authority/record/report boundaries, and public output identities.
- `npm run test:e2e -- tests/browser/startup.spec.ts --output=/tmp/kickoff-revision-6-e2e`: **20/20 passed** in 26.9 seconds. Covers EN/KO/JA generated, pinned and project prompt copying, no-JavaScript fallback, keyboard use, clipboard failure, input privacy, and 320/768/1440px light/dark layouts.
- The first browser run passed 19/20; its final Japanese screenshot failed with `ENOSPC: no space left on device, write` on the root filesystem. Preserved those artifacts in `/tmp/kickoff-revision-6-enospc-results` and reran all 20 tests using the separate `/tmp` filesystem, without changing product code or tests to bypass the failure.
- `agent-browser` checked the Korean start page at 320px: meaningful content, usable inputs, revision 6 prompt text, no page errors or error overlay, and no horizontal overflow. The screenshot `/tmp/kickoff-revision-6-mobile.png` was visually inspected.
- Catalog JSON remained byte-identical: SHA-256 `ea42c0be62ae1b012c8ec24a5dd4a4b50462cfe2a798b038cce6da624353f508` before and after the build.

No full catalog browser suite, external AI compliance test, or deployment was performed. All checks required for this instruction-only change passed; thumbnail regeneration was unnecessary. Save/commit state and the resume point are in [the revision 6 task record](ai-guidance-revision-6-task.md).

## v1 revision 5 guidance review

Reviewed 2026-09-27 following the user's request to include the new version-control category when creating prompts. Latest and pinned startup prompts, the custom prompt builder (including its no-JavaScript fallback), and the project-assistant prompt now explicitly include version control systems and repository hosting while preserving existing choices. Startup §2 covers history needs, the system/hosting distinction, offline work, review, file types, integrations, access/privacy, costs, operation and backups. Shared ownership rules explicitly include both choices.

English was edited and reviewed first; Korean and Japanese preserve the same obligations and limits. All three sources advance to revision 5, with prior revisions retained in history. Required reading remains two English documents; catalog references remain optional. Existing v1/latest routes and API schemaVersion 1 remain intact.

Manual review of the prescribed workflow:

| Scenario                                                  | Expected behavior and review result                                                                                                                                                      |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Private Git repository and hosting already selected       | Preserve the combination, ownership and access; ask only unresolved questions. No migration or public repository is implied.                                                             |
| New project needs collaboration but no tools are selected | Distinguish the history system from hosting; compare requirements and responsibilities, then offer the existing choose/recommend/delegate/defer options. Git and a Git host can coexist. |
| Local-only project                                        | Include history needs in planning; repository hosting may be inapplicable or deferred with a reason. No account is required by default.                                                  |
| Prompt copied with or without JavaScript                  | Include both version-control choices, existing-decision preservation, and only the two required document URLs in all three languages.                                                    |

These are document and translation reviews, not tests of external model compliance.

Measured built English Markdown with tiktoken 0.12.0 and `o200k_base`: startup 1,495 tokens + assistant rules 983 = **2,478 / 3,000 tokens**. The same two-document limit passes. Existing catalog diagrams and thumbnails were unchanged by this prompt follow-up.

Sequential local verification passed: `npm run check` (214 files, zero errors/warnings/hints; 276 articles; formatting), `npm run build` (249 indexed documents), `npm test` (**51/51**) and `npm run test:e2e -- tests/browser/startup.spec.ts tests/browser/version-control.spec.ts` (**30/30**, 36.9 seconds). An existing test still expected revision 4's date and revision; both assertions were updated before the passing unit run. Browser coverage includes copied latest/pinned/project prompts in three languages, no-JavaScript fallback, keyboard and clipboard failures, responsive light/dark layouts, and the new catalog diagrams. The earlier full **178/178** catalog-extension run remains recorded separately in [the extension review](version-control-review.md).

## v1 revision 4 guidance review

Reviewed 2026-09-26. Scope: software, design, monetization, and operating plans; shared result quality and maintenance rules; reviewed translations; contributor scenarios; and revision history. The quality target is coherent, reliable, professional work proportional to scope, risk, budget, and team, with enough structure and documentation for later maintenance.

### Changes and translation review

- Startup §3 chooses the simplest architecture meeting agreed requirements and quality needs. SOLID/GRASP assess responsibilities, coupling, dependencies, and contracts where appropriate to the programming paradigm. Abstractions or services require a concrete responsibility, risky boundary, or supported maintenance need with explained benefits and costs.
- Startup §4 adds readable content, visual hierarchy, consistent components and feedback, and service-appropriate identity. Consequential design choices must be explained through user tasks, usability, and inherited constraints.
- Startup §5 adds relevant monetization planning: payment value, pricing/free-paid boundaries, revenue and cost assumptions, payment responsibility, user trust, and applicable purchase/support states. Free services keep funding and sustainability constraints without a forced paid model. Plan artifacts in §6 now cover relevant product, monetization, and operating decisions as well as software/design.
- Shared assistant rules apply professional judgment across relevant product behavior, software, design, content, monetization, and operations. Code rules require consistent naming, explicit validation and failure handling, preservation of agreed behavior, reviewable development increments, relevant checks, and reports of actual results and remaining gaps. Reproducible setup/build/test steps and concise decision and operating documentation support maintenance; documentation remains proportional and consistent with the implementation.
- English was edited first. Korean and Japanese preserve the same architecture selection, principle purpose, abstraction justification, design quality criteria, relevant monetization obligations, and free-service treatment. Shared assistant rules remain English-only as required for public AI Markdown.
- Guideline v1 advances to revision 4. The two required documents, optional catalog reading, decision ownership, development authorization, v1/latest routes, and API schema v1 remain intact.

### Scenario review

This reviews prescribed behavior and translation consistency. Per the user's decision, model-by-model comparisons are not a release requirement. No external model compliance or code quality comparison was performed or claimed. Local document and site verification remains required.

| Scenario                                                      | Expected behavior and review result                                                                                                                                                                                                            |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Small saved-links app with basic editing and reliable storage | Startup §3 permits the simplest structure meeting requirements. Cohesive responsibilities and clear contracts are required where appropriate; SOLID/GRASP do not mandate extra layers, patterns, or classes.                                   |
| A payment integration creates a risky external boundary       | Startup §3 permits a justified abstraction or service and requires its benefits and costs to be explained. Proportionate architecture still addresses genuine complexity.                                                                      |
| New maintainer needs to run, verify, and change the project   | Shared quality rules require reproducible setup/build/test steps and concise consequential decisions, relevant operating/recovery procedures, and implementation-consistent documentation.                                                     |
| A development check exposes a defect                          | Shared quality rules direct the assistant to fix defects within authorized scope and report actual results and remaining gaps. A verification plan alone is not completion evidence.                                                           |
| Product choices are confirmed; implementation remains open    | Existing ownership and authorization rules continue to let the assistant choose internal implementation and proceed within scope without repeating questions. The new quality criteria add no mandatory user questionnaire or document format. |

Additional review cases cover professional judgment outside code:

- A booking service's interface must justify hierarchy, typography, consistency, feedback, and identity through its user journey. Startup §4 and shared result quality rules cover these criteria, rather than accepting a style name or visual polish as sufficient evidence.
- A subscription service must define paid value, price/entitlement boundaries, costs, trust, and applicable cancellation/refund/support states. Startup §5 requires alternatives and separates assumptions from verified terms; a free community service instead records funding and sustainability constraints.

### Token measurement and local verification

Measured the final built English Markdown with tiktoken 0.12.0 and `o200k_base` using `scripts/measure-ai-input.py`:

| Document                |    Tokens |
| ----------------------- | --------: |
| `/ai/startup/latest.md` |     1,390 |
| `/ai/instructions.md`   |       976 |
| **Total**               | **2,366** |

The total remains within the 3,000-token limit. This measures the two required document bodies, not conversation cost, external model compliance, or result quality.

Checks ran sequentially after the final changes; design demos were unchanged, so thumbnail capture was unnecessary:

- `npm run check`: passed; zero errors/warnings/hints, 246 articles validated, formatting passed.
- `npm run build`: passed; 401 static pages and 219 indexed articles in three languages.
- `npm test`: 11 of 13 test files passed, including startup, prompt builder, and output tests. `catalog-scope.test.mjs` and `publication.test.mjs` could not complete because their synchronous subprocess calls return `spawnSync /usr/local/bin/node EPERM`. Direct execution exposed the same error; a standalone subprocess reproduction confirmed the environment restriction. The full suite is not reported as passing.
- `npm run test:e2e -- tests/browser/startup.spec.ts`: blocked before browser tests began. The preview server could not bind: `listen EPERM: operation not permitted 127.0.0.1:4322`. No browser success is claimed.

These results describe local document/output checks. No deployment or external-model comparison was performed.

## v1 revision 3 guidance review

Reviewed 2026-09-24. Scope: startup and assistant instructions, prompts, related UI/help, contributor rules, and their verification. The catalog remains learning material. Catalog API reduction/splitting, article content, design demos, and deployment are outside this change.

### Required input and responsibilities

Only `/ai/startup/latest.md` (the same English body as v1) and `/ai/instructions.md` are required site documents. Startup owns intake, project planning, software/design baselines, and the plan artifact. Assistant rules own decision boundaries, authorization, and evidence. Existing project context still applies. References in the contribution section are optional; following them is not an initial reading requirement.

The English source was revised first, then Korean and Japanese were reviewed against it. All three preserve the same intake fields, requirement-derived decision list, optional catalog use, software/design baselines, artifacts, and development gate. Shared behavior rules are served in English for all languages. Latest/pinned and legacy localized Markdown routes keep the same English body.

### Scenario review

This is a manual review of the instructions' prescribed behavior, not a run against an external AI model. Automated assertions check text, routes, and UI wiring only.

| Input or condition                                                                                  | Review result and supporting rule                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| An offline field notebook needs later synchronization; suitable options are absent from the catalog | Startup §2 derives decisions from requirements and considers architecture, tools, visual design, and operations on equal terms regardless of site coverage. No taxonomy ledger is required.                             |
| User asks to use a particular static-hosting article                                                | Startup §2 and assistant evidence rules require reading that article before citation. They do not require its siblings or the complete catalog. Changing product facts still need official evidence.                    |
| Optional catalog/article request fails                                                              | Assistant evidence rules require disclosure of the failed URL and evidence gap. Planning continues; only a decision that depends on unavailable evidence is deferred. No invented successful fetch or unsupported fact. |
| Hosting was already selected                                                                        | Assistant context rules preserve confirmed decisions and ask only unresolved questions. Startup §1 reuses supplied answers.                                                                                             |
| “Choose typography within the approved light theme”                                                 | Assistant authorization rules permit choices only within that scope. Unresolved payments and hosting remain user-owned; internal implementation needs no separate delegation.                                           |
| Plan approved and development explicitly requested                                                  | Startup §5 and assistant authorization rules direct execution within existing scope without repeating permission questions. Planning alone gives no development, deployment, publishing, or spending authority.         |
| Only a rough service description is supplied                                                        | Startup §1 asks for missing name/considerations, accepts an undecided name, and treats blank considerations as needing clarification. It then refines requirements before architecture recommendations.                 |
| General concept versus current price/support/specification or uncertain fact                        | Assistant evidence rules allow model knowledge for general explanations and require relevant official sources for changing or uncertain facts.                                                                          |

### Token measurement

Measure the actual built English responses, including the startup title, independently with `o200k_base`, then sum them. Do not include optional references, localized HTML, prompts, project context, later research, tool output, or generated answers. This is document input reduction, not total work cost reduction.

The approved plan supplied an approximate previous mandatory-input baseline of **60,490 tokens**. That earlier measurement is used as the comparison baseline, not reclassified as a new measurement here. Acceptance: new sum ≤3,000 tokens and ≥95% reduction against that baseline.

Reproduce after `npm run build` using an isolated environment (no application dependency change):

```sh
rtk proxy python3 -m venv /tmp/kickoff-guidance-tokens
rtk proxy /tmp/kickoff-guidance-tokens/bin/pip install tiktoken==0.12.0
rtk proxy /tmp/kickoff-guidance-tokens/bin/python scripts/measure-ai-input.py
```

Measured from the built responses with tiktoken 0.12.0:

| Document                | o200k_base tokens |
| ----------------------- | ----------------: |
| `/ai/startup/latest.md` |             1,141 |
| `/ai/instructions.md`   |               772 |
| **Total**               |         **1,913** |

This is **96.84% less document input** than the supplied approximate 60,490-token baseline. Both acceptance thresholds pass. It does not measure total conversation tokens, model reasoning, tool usage, execution time, or billing.

### Verification scope

Run `check → build → unit/output tests → browser tests`. Design demos are unchanged, so thumbnail regeneration is skipped. Output checks cover the two-document prompts, optional index, revision metadata, localized HTML, matching v1/latest Markdown, internal links, and existing catalog schema/identity. Browser checks cover copied prompt contents in three languages, pinned/latest entrypoints, clipboard failure, no-JavaScript fallback, and layout at existing tested viewport sizes. These checks cannot guarantee external AI compliance.

Observed local results:

- `npm run check`: passed; zero Astro errors/warnings, 246 articles validated, formatting passed.
- `npm run build`: passed; 401 static pages and 219 searchable articles across three languages.
- `npm test`: 45/45 passed. The heading comparison now accounts for Markdown's typographic apostrophe rendering.
- `npm run test:e2e`: 123/123 passed (7.3 minutes), including all three languages' prompt builder, pinned prompt, AI connection copy controls, manual-copy fallback, and responsive checks. The existing local preview was verified to serve the current built startup Markdown before the browser run.
- Catalog JSON was byte-identical before and after the build: SHA-256 `f1ff5d4c43a7534690686034babd137ffb75dff0ab21530439562e7b339ecaa1`. API schema remains 1; routes, article IDs, and comment identities retain existing output tests.
- The Korean prompt builder's 320px light-mode screenshot was inspected: the two document URLs, behavior-rules link, and revision history remain readable without page overflow.

No deployment was performed. These results describe local generated output and browser behavior.
