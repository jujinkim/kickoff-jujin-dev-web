# Plan mode recommendation near prompt copying

Started 2026-10-01. Status: complete; verified and saved in the local commit.

## Goal and accepted decisions

Add an optional Plan mode recommendation beside prompt-copy buttons and in successful-copy messages. The user requested both placements and asked whether a message helps; it reminds readers when they move to their separately prepared external AI tool.

Use shared localized strings, English first and equivalent Korean/Japanese. State that Plan mode is recommended only when the external tool supports it and is not required. Apply the hint to the custom builder and shared startup component (including v1 and the external-AI instructions page). Keep article follow-up copy behavior outside this change.

## Acceptance checklist

- [x] Show the hint beside copy buttons; wrap it beneath them on narrow screens.
- [x] Associate copy buttons with the hint using `aria-describedby`; keep existing validation and live copy feedback.
- [x] Append the same localized hint to successful-copy messages.
- [x] Retain the recommendation with JavaScript disabled, alongside manual-copy guidance.
- [x] Preserve copied prompt bodies, guideline revision 7, required AI documents, public identities, and browser-only input handling.
- [x] Pass sequential check, build, unit/output tests, and startup browser tests; inspect the narrow layout. No thumbnails are affected.
- [x] Save the verified change in a local commit.

## Progress and evidence

- Inspection complete: clean main, current revision 7, reusable PromptBuilder/StartupPrompt components, shared localized strings, existing startup clipboard/privacy/responsive tests.
- Implementation complete: shared EN/KO/JA hints, wrapping copy-action rows, accessible button descriptions, successful-copy messages, and no-JavaScript guidance.
- First startup browser run passed 14/20; the new copy-action wrapper exposed the shared handler's direct-parent status lookup. The handler now searches the enclosing prompt section, preserving feedback for nested buttons and article follow-ups. Initial failure artifacts are preserved in `/tmp/kickoff-plan-mode-hint-e2e`.
- Full sequential rerun passed: `npm run check` (214 files, no diagnostics; 276 articles), `npm run build` (440 pages; 249 indexed documents), `npm test` (51/51), and startup browser tests (20/20 in 27.5 seconds). Passing browser artifacts are in `/tmp/kickoff-plan-mode-hint-e2e-fixed`.
- Browser coverage includes EN/KO/JA visible optional recommendations, success messages, unchanged copied text, denied clipboard/manual copy, JavaScript-disabled hints, input privacy, keyboard use, and 320/768/1440px light/dark layouts. Korean 320px and 1440px screenshots were visually inspected: readable recommendation, correct placement, no horizontal overflow.
- Required startup Markdown, assistant rules, and catalog JSON remain byte-identical before and after builds. SHA-256: startup `d6e4aff7f650e54627364bd29e1089efebb81154a51e94c665cea7c458268567`; rules `fb9a6c252589a110a6eeec39cc0e84793c47f4ea2b9aab9115a5f631350a816b`; catalog `ea42c0be62ae1b012c8ec24a5dd4a4b50462cfe2a798b038cce6da624353f508`.
- Saved with the local commit `Add optional Plan mode hints to prompt copying`; inspect Git history for its ID. Remote publication has not been requested for this change.

## Resume point

No remaining implementation or verification work. Before follow-up, compare this record with the working tree and Git history. Remote publication requires its applicable authorization.
