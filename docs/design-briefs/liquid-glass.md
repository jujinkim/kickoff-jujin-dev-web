# Liquid Glass / Liquid Glass / Liquid Glass

Based on [the planning template](../templates/design-demo-brief.md). Implementation brief, reviewed 2026-09-22.

- Stable ID, leaf category, English/Korean/Japanese titles: `liquid-glass`; `styles`; Liquid Glass / Liquid Glass / Liquid Glass.
- Definition (one sentence): Liquid Glass uses a dynamic, transparent navigation layer above content. This web study illustrates its visual cues, not Apple’s native rendering.
- Closest concept and concrete difference: Glassmorphism spreads frosted panels through content; this study reserves glass for the floating navigation layer.
- Distinguishing visual features (structure, material, typography): Floating capsules, reflective edges, and expanding tools separate navigation from content. A floating navigation capsule overlaps only reserved blank space above the content canvas. Expanding tools grows in flow; it never covers text or controls.
- Shared comparison category (styles / layout / typography): styles.
- Distinct familiar situation, dataset, labels, actions, and initial state for this article: For the coastal photo diary, track three tasks and two notes.
- Visual variable changed; concept-specific extra controls and their justification: View tools expands the floating capsule; Opaque panels removes transparency. Opaque panels is a labeled readability aid; reset turns it off while the OS transparency preference remains effective.
- Fictional scenario and why it demonstrates the definition: A coastal photo diary needs navigation above full-size photos. For the coastal photo diary, track three tasks and two notes.
- Representative action and observable result: For the coastal photo diary, track three tasks and two notes. Mark one task: progress becomes 1 / 3 and 33%.
- Initial state: All, three unchecked tasks, 0 / 3, 0%, two closed notes, ready status. Tools tray is closed; opaque toggle is off.
- Changed state, repeated action, empty input/no results: Toggling a task twice restores it; Done before completion yields an empty message. Open with all tasks complete also yields empty. Notes can independently open and close. No free-text input.
- Reset and reload behavior: Reset all controls, progress, details and material extras. Keep focus on Reset and announce restoration. Reload uses server-rendered initial state; no storage.
- Mobile order and width thresholds: At demo content width below 600px, use one column in DOM order: header, menu, overview, tasks, progress, resources, footer. No CSS visual reordering.
- Keyboard order, focus, accessible names, live feedback: Native anchors, checkbox labels, select, details/summary, reset. Anchors target root-local unique IDs and focus sections after JS mount. 3px focus outline; polite atomic completion/progress status.
- Light/dark surrounding themes, opaque fallback, no shadows, reduced motion: Authored palette stays legible within either site theme. Checked glyphs, strike-through and numbers survive shadow removal. Motion is disabled for prefers-reduced-motion. Glass has manual, unsupported-filter, and prefers-reduced-transparency fallbacks.
- JavaScript-disabled initial screen and explanation: All text and native menu/details remain usable; JS-dependent controls are disabled. Wrapper explains the static state.
- Font families, supported characters, fallback and measurement method: System fonts with platform CJK fallbacks; Georgia serif or monospace where styled. No remote fonts or measurements; all strings remain real text.
- Localized visible strings, input constraints, original/translation review: English first, then Korean and Japanese; project labels, empty/reset feedback, notes and article explanations preserve the same meaning. Three matching revisions.
- Capture selector and initial content: `[data-demo="liquid-glass"]`; full root in all languages, light theme, reset state, cleared live message. PNG remains complete; catalog card uses top-aligned cover with 360px maximum.
- Source URLs, inspected date, claims each source supports: [Apple WWDC25](https://developer.apple.com/videos/play/wwdc2025/219/); inspected 2026-09-22. Supports the material definition, not universal suitability or performance claims.
- Comparison summaries: features: Floating capsules, reflective edges, and expanding tools separate navigation from content. Advantages: The light navigation layer preserves visual context. Limitations: Transparency needs contrast checks and an opaque fallback. Suitable: Choose it for a small navigation layer over rich content. Combinations: Keep task surfaces solid; avoid stacking glass layers.
- Verification commands and evidence paths: Follow [release sequence](../design-demos.md#commands-and-capture); output and browser tests in `tests/`; screenshots in `artifacts/design-demos/`; final results in [workspace review](../design-workspaces-review.md).
