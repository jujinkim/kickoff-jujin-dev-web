# Agent workflow selection and startup task

Started 2026-10-08. Status: complete.

## Goal and authorized scope

Update kickoff's generated prompts and v1 guidance to assess whether additional
agent workflows are useful before recommending them. Treat starting without
extra skills as an equal option. Recommend suitable alternatives, install and
invoke the selected workflow in the user's external agent when authorized and
supported, and add learning articles to the catalog.

The website continues to prepare prompts in the browser. Tool installation and
AI work happen in the external agent. No separate kickoff skill is introduced.
This task includes local implementation, checks, and local commits; remote
publication is not requested.

## Acceptance criteria

- [x] Assess uncertainty, dependencies, risk, collaboration, handoff, existing
      practices, agent capabilities, and setup/maintenance cost; no size cutoff.
- [x] Compare no additional skills, Spec Kit, and suitable other workflows.
- [x] Preserve confirmed choices and existing authorization; an accepted or
      delegated selection can proceed without another identical permission ask.
- [x] Verify official sources and runtime compatibility before installation;
      distinguish installation, activation, and successful invocation.
- [x] Reuse existing records and avoid competing plans/task/checklist documents;
      unsupported environments receive usable next steps.
- [x] Record v1 revision 8 in EN/KO/JA, retaining existing obligations, routes,
      stable identities, optional catalog reading, and API schemaVersion 1.
- [x] Required English startup plus assistant rules stay within 3,000
      o200k_base tokens.
- [x] Publish reviewed EN-first catalog concepts and faithful KO/JA translations,
      supplements, evidence, distinct article-body diagrams, and thumbnails.
- [x] Sequential check/build/capture/rebuild/unit/output/browser gates pass.

## Decisions and status

User requested scale-aware workflow selection, alternatives to Spec Kit,
external-agent installation, and catalog learning material. User explicitly
added starting without extra skills as a recommendation. Implementation details
and editorial topic selection are handled within this scope.

Reviewed catalog examples: no additional skills, Spec Kit,
Superpowers, and OpenSpec. These are examples rather than an exclusive list;
compatible scoped skills may coexist without overlapping workflow ownership.

| Unit                                 | Status   | Evidence / next action                                                                                                                                                                      |
| ------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repository and primary-source review | Complete | Official Spec Kit, Superpowers, OpenSpec, Agent Skills, and Codex docs reviewed; initial tree was clean.                                                                                    |
| Guidance and prompt update           | Complete | Revision 8 in all languages; built English document total 2,964 / 3,000 tokens. Manual scenarios reviewed.                                                                                  |
| Catalog articles and diagrams        | Complete | Four EN-first concepts and faithful translations/supplements; distinct static diagrams registered. All overview budgets are within 60 seconds; twelve PNG/WebP pairs captured and reviewed. |
| Sequential verification              | Complete | Regular check/build, 2,964-token audit, 54/54 unit/output checks; all 189 distinct browser cases passed across full and corrective runs.                                                    |
| Local save and commit                | Complete | Implementation saved in local commit `a05035acbd66764e5e053bffa9bbb52238e2db02`; this closing record is documentation only. No remote action.                                               |

## Verification and resume point

Implementation and source review complete. Regular check passed with 222 files,
zero errors/warnings/hints, 288 validated published articles, and formatting.
Regular build passed: 455 static pages and 261 indexed localized documents.
Twelve localized PNG/WebP thumbnail pairs captured; a Spec Kit class collision
with global step styling was fixed and all three affected captures regenerated.
Built document input: startup 1,577 + assistant rules 1,387 = 2,964 / 3,000
`o200k_base` tokens (tiktoken 0.12.0).

Unit/output tests passed 54/54 after replacing a fixed former inventory count
with checks derived from current originals and all three translations. Initial full browser run completed: 174 passed and 15 failed (9.7 minutes).
Failures exposed theme-dependent eyebrow color, a test inspecting closed related
reading, dates and a section number fixed to former content, and an opaque rule
identifier in the new Spec Kit diagram. Explicit diagram color, keyboard-opening
of related reading, source-derived evidence dates, section 7, and a named
waitlist-first rule resolve those findings. Changed diagrams were recaptured,
regular check/build repeated, and unit/output tests passed 54/54 again. The four
affected browser files then ran: 41/44 passed (2.9 minutes). Their only remaining
failures were a case-sensitive assertion of the preserved language rule. After
making that assertion case-insensitive, all three EN/KO/JA startup-and-copy
cases passed (3.0 seconds). All 189 distinct cases ultimately passed across the
full suite and corrective runs; this is not a claim of a fresh 189/189 single
run. The last edit makes the English club example's visitors explicit, matching
the existing translations; final regular check/build and 54/54 unit/output
checks cover that rebuild, with the English budget unchanged.

New workflow browser coverage passed all ten cases: aliases, comparison table,
related reading, native keyboard disclosures, meaningful mechanisms, no fake
controls, 320/390/768/1440px layouts, light/dark text contrast, 200% text, and
JavaScript-disabled reading. Full-page review checked active screens and all
registered visuals. Desktop and mobile diagram captures were inspected. All
articles preserve schemaVersion 1, English Markdown aliases, canonical and
alternate links, sitemap/search presence, and comment identities.

Save point: implementation and verification were saved in local commit
`a05035acbd66764e5e053bffa9bbb52238e2db02` (Add fit-based agent workflow selection
and learning catalog). The closing record changes documentation only; its
formatting and diff checks pass. No work remains in the requested local scope.
No push or deploy was performed.

External-agent installation, model compliance, real-device behavior, and live
publication are not established by local site tests. No push or deploy requested.
