# AI guidance revision 7 task

Started 2026-10-01. Status: complete; verified and saved in the local revision 7 commit.

## Goal and authorization

Implement the approved project-checklist plan as v1 revision 7. Maintain adopted project criteria in Markdown, read relevant items before each change, verify actual results afterward, and review all affected areas when shared rules change. Update English first, preserve equivalent Korean/Japanese obligations, and cover every prompt path.

The user chose review of change-relevant items and requested implementation. Wording, document reuse, and verification choices are delegated implementation details. Save the verified unit in a local commit; remote publication is outside this task.

## Acceptance checklist

- [x] Shared rules cover adopted architecture, principles, methods, styles, conventions, and contracts within existing decision authority.
- [x] Reuse existing Markdown rules/checklists; otherwise use `docs/project-checklist.md`. Without writing tools, provide copyable Markdown.
- [x] Each criterion has concrete scope and a verification method. Review relevant items before and after every change, including previously checked items.
- [x] Shared-rule changes trigger review of affected areas. Record violations and unverified items with reasons; criteria changes follow existing authority.
- [x] EN/KO/JA startup sources, latest/pinned/project/generated/no-JavaScript prompts, and revision history agree on revision 7.
- [x] Preserve existing obligations, public routes, IDs, comment keys, API schemaVersion 1, optional catalog reading, and browser-only input handling.
- [x] Built required English documents stay within 3,000 o200k_base tokens.
- [x] Sequential check, build, token measurement, unit/output tests, and startup browser tests pass. No thumbnail changes are needed.

## Work state

| Unit                                                         | State    | Evidence / next action                                                                                         |
| ------------------------------------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------- |
| Inspect sources, prompts, tests, and constraints             | Complete | Clean main; revision 6; existing required documents match sources and total 2,858 tokens                       |
| English rules, checklist artifact, and prompt request        | Complete | Detailed checklist rules and concise shared reminders; existing duties retained                                |
| Translations, history, contributor scenarios, and assertions | Complete | EN/KO/JA parity reviewed; revision 7 metadata/history and all prompt-path assertions updated                   |
| Sequential validation and review record                      | Complete | Check/build passed; required input 2,994/3,000 tokens; unit/output 51/51; startup browser 20/20                |
| Save and local commit                                        | Complete | Saved with the local commit `Add project checklists to v1 revision 7 guidance`; inspect Git history for its ID |

## Decisions and verification

- The checklist stores reusable project criteria; task records store current work and verification results. Reuse existing documents instead of creating parallel sources of truth.
- Small changes still review applicable criteria. Existing proportional task-file rules remain valid.
- The shared workflow request already propagates to latest, v1, project, generated, and JavaScript-disabled prompts.
- Initial source token estimate was 3,011; compact introductory and optional-reference wording preserves previous obligations. The actual built responses measured 2,994/3,000 o200k_base tokens (startup 1,628; rules 1,366). Only six tokens remain below the limit; remeasure future required-document changes.
- Initial catalog JSON SHA-256: `ea42c0be62ae1b012c8ec24a5dd4a4b50462cfe2a798b038cce6da624353f508`.
- Scenario and translation review and full evidence are recorded in [AI guidance reviews](ai-guidance-review.md#v1-revision-7-guidance-review).
- Sequential checks passed: check (214 files, no diagnostics; 276 articles), build (440 pages; 249 indexed documents), token measurement, unit/output tests (51/51), and startup browser tests (20/20 in 27.3 seconds). Browser artifacts are in `/tmp/kickoff-revision-7-e2e`.
- Catalog JSON SHA-256 remained identical before and after the build. No implementation or verification blockers remain. External assistant compliance, remote publication, and deployment were not tested.

## Resume point

No remaining implementation work. Compare this record with the working tree and commit history before follow-up. Remote publication requires its applicable authorization.
