# v1 revision 3 guidance review

Reviewed 2026-09-24. Scope: startup and assistant instructions, prompts, related UI/help, contributor rules, and their verification. The catalog remains learning material. Catalog API reduction/splitting, article content, design demos, and deployment are outside this change.

## Required input and responsibilities

Only `/ai/startup/latest.md` (the same English body as v1) and `/ai/instructions.md` are required site documents. Startup owns intake, project planning, software/design baselines, and the plan artifact. Assistant rules own decision boundaries, authorization, and evidence. Existing project context still applies. References in the contribution section are optional; following them is not an initial reading requirement.

The English source was revised first, then Korean and Japanese were reviewed against it. All three preserve the same intake fields, requirement-derived decision list, optional catalog use, software/design baselines, artifacts, and development gate. Shared behavior rules are served in English for all languages. Latest/pinned and legacy localized Markdown routes keep the same English body.

## Scenario review

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

## Token measurement

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

## Verification scope

Run `check → build → unit/output tests → browser tests`. Design demos are unchanged, so thumbnail regeneration is skipped. Output checks cover the two-document prompts, optional index, revision metadata, localized HTML, matching v1/latest Markdown, internal links, and existing catalog schema/identity. Browser checks cover copied prompt contents in three languages, pinned/latest entrypoints, clipboard failure, no-JavaScript fallback, and layout at existing tested viewport sizes. These checks cannot guarantee external AI compliance.

Observed local results:

- `npm run check`: passed; zero Astro errors/warnings, 246 articles validated, formatting passed.
- `npm run build`: passed; 401 static pages and 219 searchable articles across three languages.
- `npm test`: 45/45 passed. The heading comparison now accounts for Markdown's typographic apostrophe rendering.
- `npm run test:e2e`: 123/123 passed (7.3 minutes), including all three languages' prompt builder, pinned prompt, AI connection copy controls, manual-copy fallback, and responsive checks. The existing local preview was verified to serve the current built startup Markdown before the browser run.
- Catalog JSON was byte-identical before and after the build: SHA-256 `f1ff5d4c43a7534690686034babd137ffb75dff0ab21530439562e7b339ecaa1`. API schema remains 1; routes, article IDs, and comment identities retain existing output tests.
- The Korean prompt builder's 320px light-mode screenshot was inspected: the two document URLs, behavior-rules link, and revision history remain readable without page overflow.

No deployment was performed. These results describe local generated output and browser behavior.
