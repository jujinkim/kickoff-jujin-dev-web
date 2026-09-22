# Glassmorphism / 글래스모피즘 / グラスモーフィズム

Based on [the planning template](../templates/design-demo-brief.md). Implementation brief, reviewed 2026-09-22.

- Stable ID, leaf category, English/Korean/Japanese titles: `glassmorphism`; `styles`; Glassmorphism / 글래스모피즘 / グラスモーフィズム.
- Definition (one sentence): Translucent panels reveal a blurred background.
- Closest concept and concrete difference: Liquid Glass reserves material for a floating navigation layer; glassmorphism uses frosted panels across the workspace.
- Distinguishing visual features (structure, material, typography): Translucent panels reveal a blurred background. Opaque panels replace the frosted surfaces when selected. Header and menu precede a two-column workspace: overview/tasks left, progress/resources right. Footer follows both columns.
- Shared comparison category (styles / layout / typography): styles.
- Fixed scenario, dataset, labels, actions, and initial state inherited from that group: Make room / PROJECT TODAY 01; overview and description; Gather references, Draw the first draft, Review labels; progress; Reference board and Review checklist with native expandable notes; footer with 3 tasks / 2 resources. All filter, unchecked tasks, 0 / 3, 0%, closed notes. Copy comes from `workshop.ts`.
- Visual variable changed; concept-specific extra controls and their justification: Opaque panels replace the frosted surfaces when selected. Opaque panels is a labeled readability aid; reset turns it off while the OS transparency preference remains effective.
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
- Capture selector and initial content: `[data-demo="glassmorphism"]`; full root in all languages, light theme, reset state, cleared live message. PNG remains complete; catalog card uses top-aligned cover with 360px maximum.
- Source URLs, inspected date, claims each source supports: [NN/g](https://www.nngroup.com/articles/glassmorphism/); existing source ledger retained. Supports the material definition, not universal suitability or performance claims.
- Comparison summaries: features: Translucent panels reveal a blurred background. Opaque panels replace the frosted surfaces when selected. Advantages: Translucent panels retain the background context. Limitations: Contrast depends on the backdrop; offer an opaque mode and test each scene. Suitable: Choose it when background context matters. Combinations: Pair with a simple grid and an opaque readability fallback.
- Verification commands and evidence paths: Follow [release sequence](../design-demos.md#commands-and-capture); output and browser tests in `tests/`; screenshots in `artifacts/design-demos/`; final results in [workspace review](../design-workspaces-review.md).
