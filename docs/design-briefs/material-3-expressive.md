# Material 3 Expressive / Material 3 Expressive / Material 3 Expressive

Based on [the planning template](../templates/design-demo-brief.md). Implementation brief, reviewed 2026-09-22.

- Stable ID, leaf category, English/Korean/Japanese titles: `material-3-expressive`; `styles`; Material 3 Expressive / Material 3 Expressive / Material 3 Expressive.
- Definition (one sentence): Material 3 Expressive directs attention with color, shape, size, and motion. This authored study uses large task controls and varied curves.
- Closest concept and concrete difference: Flat design separates solid regions; this study adds varied curves, larger controls and responsive shape motion.
- Distinguishing visual features (structure, material, typography): Color blocks, varied curves, large controls, and brief shape reactions. Header and menu precede a two-column workspace: overview/tasks left, progress/resources right. Footer follows both columns.
- Shared comparison category (styles / layout / typography): styles.
- Fixed scenario, dataset, labels, actions, and initial state inherited from that group: Make room / PROJECT TODAY 01; overview and description; Gather references, Draw the first draft, Review labels; progress; Reference board and Review checklist with native expandable notes; footer with 3 tasks / 2 resources. All filter, unchecked tasks, 0 / 3, 0%, closed notes. Copy comes from `workshop.ts`.
- Visual variable changed; concept-specific extra controls and their justification: Completion briefly pulses the progress shape; reduced motion removes animation. No extra task actions.
- Fictional scenario and why it demonstrates the definition: A small project workspace gives every style the same navigation, content, controls and supporting information to render. Header and menu precede a two-column workspace: overview/tasks left, progress/resources right. Footer follows both columns.
- Representative action and observable result: Complete Gather references; show a tick, strike-through, 1 / 3, and 33%. Filter Done to show only that row. Open a reference note.
- Initial state: All, three unchecked tasks, 0 / 3, 0%, two closed notes, ready status.
- Changed state, repeated action, empty input/no results: Toggling a task twice restores it; Done before completion yields an empty message. Open with all tasks complete also yields empty. Notes can independently open and close. No free-text input.
- Reset and reload behavior: Reset all controls, progress, details and material extras. Keep focus on Reset and announce restoration. Reload uses server-rendered initial state; no storage.
- Mobile order and width thresholds: At demo content width below 600px, use one column in DOM order: header, menu, overview, tasks, progress, resources, footer. No CSS visual reordering.
- Keyboard order, focus, accessible names, live feedback: Native anchors, checkbox labels, select, details/summary, reset. Anchors target root-local unique IDs and focus sections after JS mount. 3px focus outline; polite atomic completion/progress status.
- Light/dark surrounding themes, opaque fallback, no shadows, reduced motion: Authored palette stays legible within either site theme. Checked glyphs, strike-through and numbers survive shadow removal. Motion is disabled for prefers-reduced-motion. Glass has manual, unsupported-filter, and prefers-reduced-transparency fallbacks.
- JavaScript-disabled initial screen and explanation: All text and native menu/details remain usable; JS-dependent controls are disabled. Wrapper explains the static state.
- Font families, supported characters, fallback and measurement method: System fonts with platform CJK fallbacks; Georgia serif or monospace where styled. No remote fonts or measurements; all strings remain real text.
- Localized visible strings, input constraints, original/translation review: English first, then Korean and Japanese; project labels, empty/reset feedback, notes and article explanations preserve the same meaning. Three matching revisions.
- Capture selector and initial content: `[data-demo="material-3-expressive"]`; full root in all languages, light theme, reset state, cleared live message. PNG remains complete; catalog card uses top-aligned cover with 360px maximum.
- Source URLs, inspected date, claims each source supports: [Google Design](https://design.google/library/expressive-material-design-google-research); inspected 2026-09-22. Supports the material definition, not universal suitability or performance claims.
- Comparison summaries: features: Color blocks, varied curves, large controls, and brief shape reactions. Advantages: Size and containment give primary actions emphasis. Limitations: Expressive shapes must preserve familiar labels and reading order. Suitable: Choose it when key actions need clear visual emphasis. Combinations: Pair solid surfaces with a clear grid and reduced-motion support.
- Verification commands and evidence paths: Follow [release sequence](../design-demos.md#commands-and-capture); output and browser tests in `tests/`; screenshots in `artifacts/design-demos/`; final results in [workspace review](../design-workspaces-review.md).
