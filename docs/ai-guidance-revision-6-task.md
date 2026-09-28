# AI guidance revision 6 task

Started 2026-09-28. Status: complete; verified and saved in the local revision 6 commit.

## Goal and authorized scope

Implement the approved v1 revision 6 plan: evidence-backed questions and scoped delegation, resumable records and local commits for large tasks, and proportionate completion reports. Update English first, then equivalent Korean/Japanese startup guidance, every prompt entry point, contributor scenarios, revision history, and review evidence.

The user confirmed the workflow and requested implementation and verification. Internal wording, reuse, and test choices are implementation decisions. Local commits are authorized; remote publication and spending are outside this task.

## Completion criteria

- Shared rules contain the detailed workflow; startup guidance connects to it.
- Latest, v1, project, generated, and JavaScript-disabled prompts carry the same core obligations in all three languages.
- Preserve public routes, IDs, comment keys, API schemaVersion 1, prompt input types, existing authorization, and optional catalog reading.
- Required built English documents total at most 3,000 o200k_base tokens.
- Review all approved scenarios and translations; pass check, build, token measurement, unit/output tests, then startup browser tests in sequence. Thumbnails are unchanged.
- Record actual outcomes, remaining gaps, and local commit state. Do not claim external AI compliance.

## Work unit and state

Revision 6 is one coupled document/prompt release, committed after its checks pass.

| Step                                                       | State    | Evidence / next action                                                                                                                                               |
| ---------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inspect current guidance, prompts, tests, and repository   | Complete | Clean initial working tree; current revision 5; detailed rules in `src/lib/ai.ts`, startup sources in `src/startup/v1/`                                              |
| English rules and prompt workflow                          | Complete | Detailed rules and shared workflow prompt implemented                                                                                                                |
| Korean/Japanese parity, history, and contributor scenarios | Complete | EN-first edits, translated obligations, revision 6 metadata/history and scenario review recorded                                                                     |
| Output/prompt/browser assertions                           | Complete | All prompt entry points, authority/record/report boundaries and metadata assertions updated                                                                          |
| Sequential verification and review record                  | Complete | Check/build passed; 2,858/3,000 tokens; unit/output 51/51; startup browser 20/20                                                                                     |
| Save and local commit                                      | Complete | Changes and this record saved together in the local commit `Revise v1 guidance for delegation, task records, and completion reports`; inspect Git history for its ID |

## Decisions and verification

- Keep detailed procedures in the shared rules and concise reminders in prompts/startup guidance to avoid duplicating required input.
- Reuse localized workflow prompt text across entry points; generated and no-JavaScript prompts already share `startupPrompt`.
- Check and build passed; required English input is 2,858/3,000 tokens; unit/output tests passed 51/51. First startup browser run passed 19/20; the final Japanese screenshot failed with `ENOSPC: no space left on device, write` on the root filesystem. Preserved that run in `/tmp/kickoff-revision-6-enospc-results`; rerun uses `/tmp/kickoff-revision-6-e2e` on the separate tmpfs. The full rerun passed 20/20 in 26.9 seconds; the environmental failure is resolved for this verification run. Pre-build catalog JSON SHA-256: `ea42c0be62ae1b012c8ec24a5dd4a4b50462cfe2a798b038cce6da624353f508`.

- Full evidence and scenario review: [AI guidance review](ai-guidance-review.md#v1-revision-6-guidance-review). A 320px Korean screenshot was also visually inspected with no overflow or page errors.
- No unresolved implementation or verification blockers. The root filesystem still has limited free space; browser artifacts are on `/tmp`. No external AI compliance or remote deployment was tested.

## Resume point

No remaining implementation work. For any follow-up, compare this record with the working tree and commit history first. Push or deployment requires the applicable remote-action authority.
