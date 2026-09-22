# Retro digital / 레트로 디지털 / レトロデジタル

Based on [the planning template](../templates/design-demo-brief.md). Implementation brief, reviewed 2026-09-22.

- Stable ID, leaf category, English/Korean/Japanese titles: `retro-digital`; `styles`; Retro digital / 레트로 디지털 / レトロデジタル.
- Definition (one sentence): Retro digital borrows early desktop windows and pixel ornaments. This editorial category relates to Canva’s 2026 early-computing trend, not a claim of invention in 2026.
- Closest concept and concrete difference: Brutalism exposes raw structure; this study deliberately references desktop window chrome.
- Distinguishing visual features (structure, material, typography): Title bars, beveled windows, pixel ornaments, and fixed-width type. Desktop windows group overview/tasks, progress and resources. Each resource note expands in its own titled window; window ornaments have no implied controls.
- Shared comparison category (styles / layout / typography): styles.
- Fixed scenario, dataset, labels, actions, and initial state inherited from that group: Make room / PROJECT TODAY 01; overview and description; Gather references, Draw the first draft, Review labels; progress; Reference board and Review checklist with native expandable notes; footer with 3 tasks / 2 resources. All filter, unchecked tasks, 0 / 3, 0%, closed notes. Copy comes from `workshop.ts`.
- Visual variable changed; concept-specific extra controls and their justification: Menus lead to task windows; resource notes unfold inside titled windows. No extra task actions.
- Fictional scenario and why it demonstrates the definition: A small project workspace gives every style the same navigation, content, controls and supporting information to render. Desktop windows group overview/tasks, progress and resources. Each resource note expands in its own titled window; window ornaments have no implied controls.
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
- Capture selector and initial content: `[data-demo="retro-digital"]`; full root in all languages, light theme, reset state, cleared live message. PNG remains complete; catalog card uses top-aligned cover with 360px maximum.
- Source URLs, inspected date, claims each source supports: [Canva 2026](https://www.canva.com/newsroom/news/design-trends-2026/); inspected 2026-09-22. Supports the material definition, not universal suitability or performance claims. Canva describes trends, not their invention or these editorial category names.
- Comparison summaries: features: Title bars, beveled windows, pixel ornaments, and fixed-width type. Advantages: Window groups make the project feel like a compact desktop. Limitations: Nostalgic decoration must not shrink text or imply unavailable actions. Suitable: Choose it for a playful, compact workspace. Combinations: Combine window framing with modern reflow and native controls.
- Verification commands and evidence paths: Follow [release sequence](../design-demos.md#commands-and-capture); output and browser tests in `tests/`; screenshots in `artifacts/design-demos/`; final results in [workspace review](../design-workspaces-review.md).
