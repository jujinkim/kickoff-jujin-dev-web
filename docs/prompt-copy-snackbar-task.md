# Transient prompt-copy success feedback

Started 2026-10-01. Status: complete; verified and saved in the local commit.

## Goal and decisions

The user requested snackbar-style copy-completion feedback instead of a persistent message. Show one shared snackbar at the bottom of the viewport for successful prompt copies across the builder, startup/project prompts, and article follow-ups. Keep localized external-AI handoff and the optional Plan mode recommendation in their existing applicable messages.

Implementation defaults: six seconds; manual close and Escape; pause automatic dismissal while hovered or focused; no focus movement on appearance. Keep a ready polite live region, restore copy-button focus when dismissing from its close button, and clear a builder-owned snackbar when its inputs change or reset. Failures stay inline for manual-copy recovery. Preserve static Plan mode guidance, prompt bodies, guideline revisions, identities, and browser-only inputs.

## Acceptance checklist

- [x] Completion messages appear in one fixed snackbar after successful copying, without adding space to the prompt layout.
- [x] Auto-dismiss after six seconds; repeated copy restarts the timeout. Hover/focus pause dismissal; close and Escape work.
- [x] Live feedback and dismissal controls are accessible and localized; showing a message does not steal focus.
- [x] Input changes/reset and late clipboard completion cannot leave stale builder success feedback.
- [x] Clipboard failures retain visible manual-copy guidance; no-JavaScript use remains available.
- [x] Sequential check, build, unit/output tests, and startup browser tests pass; inspect the snackbar at a narrow viewport.
- [x] Save the verified unit and this record in a local commit.

## Progress

- Inspection complete: clean main; current success handlers write into persistent per-section status paragraphs. Shared copy handling and builder handling must use the same controller.
- Implementation complete: one lazy client controller manages the shared live region, timer, focus/hover pauses, dismissal, and owner-scoped clearing. Both copy paths use it; empty inline error regions reserve no layout space.
- Sequential verification passed: check (215 files, no diagnostics; 276 articles), build (440 pages; 249 indexed documents), unit/output tests (51/51), and startup browser tests (21/21 in 28.9 seconds).
- Browser coverage includes EN/KO/JA copied content and success feedback on builder, pinned/project, and article prompts; manual-copy failures; no-JavaScript use; keyboard/privacy/layout checks; and late clipboard completion after edit/reset. A clock-controlled test verifies expiry, timer restart, hover/focus pause, Escape, manual dismissal, focus restoration, and hiding on input edits.
- The Korean 320px snackbar screenshot was visually inspected: readable text and close button, fixed bottom placement, no horizontal overflow. Browser evidence is in `/tmp/kickoff-copy-snackbar-e2e`.
- Required AI documents and catalog JSON remain byte-identical to the previous build: startup SHA-256 `d6e4aff7f650e54627364bd29e1089efebb81154a51e94c665cea7c458268567`; rules `fb9a6c252589a110a6eeec39cc0e84793c47f4ea2b9aab9115a5f631350a816b`; catalog `ea42c0be62ae1b012c8ec24a5dd4a4b50462cfe2a798b038cce6da624353f508`.
- Saved with the local commit `Show prompt copy success in a transient snackbar`; inspect Git history for its ID. Remote publication is outside this change.

## Resume point

No remaining implementation or verification work. Compare this record with the working tree and Git history before follow-up. Remote publication requires its applicable authorization.
