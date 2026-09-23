# Skeuomorphism / 스큐어모피즘 / スキューモーフィズム

Based on [the planning template](../templates/design-demo-brief.md). Implementation brief, reviewed 2026-09-22.

- Stable ID, leaf category, English/Korean/Japanese titles: `skeuomorphism`; `styles`; Skeuomorphism / 스큐어모피즘 / スキューモーフィズム.
- Definition (one sentence): Recognizable materials and objects explain a digital task.
- Closest concept and concrete difference: Neumorphism suggests generic molded surfaces; skeuomorphism models a recognizable paper notebook and binding.
- Distinguishing visual features (structure, material, typography): Recognizable materials and objects explain a digital task. The workspace opens as a paper notebook on a wooden surface. Open notebook: the left page contains overview and tasks; the right page contains progress and resources. Binding is decorative.
- Shared comparison category (styles / layout / typography): styles.
- Distinct familiar situation, dataset, labels, actions, and initial state for this article: For the recipe notebook, track three tasks and two notes.
- Visual variable changed; concept-specific extra controls and their justification: The workspace opens as a paper notebook on a wooden surface. No extra task actions.
- Fictional scenario and why it demonstrates the definition: A recipe app can feel unfamiliar to someone used to a paper notebook. For the recipe notebook, track three tasks and two notes.
- Representative action and observable result: For the recipe notebook, track three tasks and two notes. Mark one task: progress becomes 1 / 3 and 33%.
- Initial state: All, three unchecked tasks, 0 / 3, 0%, two closed notes, ready status.
- Changed state, repeated action, empty input/no results: Toggling a task twice restores it; Done before completion yields an empty message. Open with all tasks complete also yields empty. Notes can independently open and close. No free-text input.
- Reset and reload behavior: Reset all controls, progress, details and material extras. Keep focus on Reset and announce restoration. Reload uses server-rendered initial state; no storage.
- Mobile order and width thresholds: At demo content width below 600px, use one column in DOM order: header, menu, overview, tasks, progress, resources, footer. No CSS visual reordering.
- Keyboard order, focus, accessible names, live feedback: Native anchors, checkbox labels, select, details/summary, reset. Anchors target root-local unique IDs and focus sections after JS mount. 3px focus outline; polite atomic completion/progress status.
- Light/dark surrounding themes, opaque fallback, no shadows, reduced motion: Authored palette stays legible within either site theme. Checked glyphs, strike-through and numbers survive shadow removal. Motion is disabled for prefers-reduced-motion. Glass has manual, unsupported-filter, and prefers-reduced-transparency fallbacks.
- JavaScript-disabled initial screen and explanation: All text and native menu/details remain usable; JS-dependent controls are disabled. Wrapper explains the static state.
- Font families, supported characters, fallback and measurement method: System fonts with platform CJK fallbacks; Georgia serif or monospace where styled. No remote fonts or measurements; all strings remain real text.
- Localized visible strings, input constraints, original/translation review: English first, then Korean and Japanese; project labels, empty/reset feedback, notes and article explanations preserve the same meaning. Three matching revisions.
- Capture selector and initial content: `[data-demo="skeuomorphism"]`; full root in all languages, light theme, reset state, cleared live message. PNG remains complete; catalog card uses top-aligned cover with 360px maximum.
- Source URLs, inspected date, claims each source supports: [IxDF](https://ixdf.org/literature/topics/skeuomorphism); existing source ledger retained. Supports the material definition, not universal suitability or performance claims.
- Comparison summaries: features: Recognizable materials and objects explain a digital task. The workspace opens as a paper notebook on a wooden surface. Advantages: Paper and cover metaphors make a familiar checklist. Limitations: Decorative realism consumes space; keep task controls explicit. Suitable: Choose a familiar metaphor that supports the task. Combinations: A single reading column can sit inside the paper surface.
- Verification commands and evidence paths: Follow [release sequence](../design-demos.md#commands-and-capture); output and browser tests in `tests/`; screenshots in `artifacts/design-demos/`; final results in [workspace review](../design-workspaces-review.md).
