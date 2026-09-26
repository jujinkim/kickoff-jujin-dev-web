# AI guidance reviews

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
