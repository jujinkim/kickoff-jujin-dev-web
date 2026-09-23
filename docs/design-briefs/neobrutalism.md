# Neobrutalism / 네오브루탈리즘 / ネオブルータリズム

Based on [the planning template](../templates/design-demo-brief.md). Implementation brief, reviewed 2026-09-22.

- Stable ID, leaf category, English/Korean/Japanese titles: `neobrutalism`; `styles`; Neobrutalism / 네오브루탈리즘 / ネオブルータリズム.
- Definition (one sentence): Bright blocks, thick outlines, and hard offset shadows create graphic emphasis.
- Closest concept and concrete difference: Brutalism keeps raw monochrome structure; neobrutalism adds saturated panels, thick outlines and hard offset shadows.
- Distinguishing visual features (structure, material, typography): Bright blocks, thick outlines, and hard offset shadows create graphic emphasis. Bold outlines and hard shadows give the panels a graphic weight. Header and menu precede a two-column workspace: overview/tasks left, progress/resources right. Footer follows both columns.
- Shared comparison category (styles / layout / typography): styles.
- Distinct familiar situation, dataset, labels, actions, and initial state for this article: For the school fair, track three tasks and two notes.
- Visual variable changed; concept-specific extra controls and their justification: Bold outlines and hard shadows give the panels a graphic weight. No extra task actions.
- Fictional scenario and why it demonstrates the definition: A school-fair board needs bold grouping among many stalls. For the school fair, track three tasks and two notes.
- Representative action and observable result: For the school fair, track three tasks and two notes. Mark one task: progress becomes 1 / 3 and 33%.
- Initial state: All, three unchecked tasks, 0 / 3, 0%, two closed notes, ready status.
- Changed state, repeated action, empty input/no results: Toggling a task twice restores it; Done before completion yields an empty message. Open with all tasks complete also yields empty. Notes can independently open and close. No free-text input.
- Reset and reload behavior: Reset all controls, progress, details and material extras. Keep focus on Reset and announce restoration. Reload uses server-rendered initial state; no storage.
- Mobile order and width thresholds: At demo content width below 600px, use one column in DOM order: header, menu, overview, tasks, progress, resources, footer. No CSS visual reordering.
- Keyboard order, focus, accessible names, live feedback: Native anchors, checkbox labels, select, details/summary, reset. Anchors target root-local unique IDs and focus sections after JS mount. 3px focus outline; polite atomic completion/progress status.
- Light/dark surrounding themes, opaque fallback, no shadows, reduced motion: Authored palette stays legible within either site theme. Checked glyphs, strike-through and numbers survive shadow removal. Motion is disabled for prefers-reduced-motion. Glass has manual, unsupported-filter, and prefers-reduced-transparency fallbacks.
- JavaScript-disabled initial screen and explanation: All text and native menu/details remain usable; JS-dependent controls are disabled. Wrapper explains the static state.
- Font families, supported characters, fallback and measurement method: System fonts with platform CJK fallbacks; Georgia serif or monospace where styled. No remote fonts or measurements; all strings remain real text.
- Localized visible strings, input constraints, original/translation review: English first, then Korean and Japanese; project labels, empty/reset feedback, notes and article explanations preserve the same meaning. Three matching revisions.
- Capture selector and initial content: `[data-demo="neobrutalism"]`; full root in all languages, light theme, reset state, cleared live message. PNG remains complete; catalog card uses top-aligned cover with 360px maximum.
- Source URLs, inspected date, claims each source supports: [NN/g](https://www.nngroup.com/articles/neobrutalism/); existing source ledger retained. Supports the material definition, not universal suitability or performance claims.
- Comparison summaries: features: Bright blocks, thick outlines, and hard offset shadows create graphic emphasis. Bold outlines and hard shadows give the panels a graphic weight. Advantages: Strong blocks emphasize tasks and actions. Limitations: Dense decoration competes with details; reserve strong emphasis for key information. Suitable: Choose it for a small interface with a bold voice. Combinations: Keep repeated task rows concise.
- Verification commands and evidence paths: Follow [release sequence](../design-demos.md#commands-and-capture); output and browser tests in `tests/`; screenshots in `artifacts/design-demos/`; final results in [workspace review](../design-workspaces-review.md).
