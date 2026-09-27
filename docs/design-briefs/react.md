# React — representative review

- Stable ID: `react`; leaf category: `web-ui`.
- Titles (EN / KO / JA): React / React / React.
- Definition and selection criterion: Build interfaces from components and state, suited to teams that want JavaScript-driven rendering and explicit state ownership.
- Neighbor comparison: see the matching Selection & comparison supplement; choices may coexist.
- Why / situation: Family home planner with shopping and menu cards sharing saved state.
- How / representative action: Save either card; only its label changes while the shared total derives from saved IDs.
- Initial, changed, repeat, empty, reset and reload: Both unsaved → first saved / count 1 → both saved / count 2. Repetition stays 2; reset and reload clear state. No persistence.
- Visual structure, incidental choices and mobile order: Planner cards and event → setter → render trace. Browser simulation, not a real React runtime. Parent ownership supplies each card status.
- Keyboard: native controls in DOM order, visible focus, polite localized status where interactive; reset retains focus.
- No JavaScript: static explanation and initial screen remain; script-dependent controls stay disabled. Native disclosures work.
- Themes and motion: authored demo colors within neutral shell; no required animation. Check dark surrounding theme, forced colors, focus and 200% text.
- Assets and conditions: No raster asset; component-owned HTML cards.; provenance in public/images/README.md or font manifest and bundled OFL files.
- Localized visible labels: authored in English, then Korean/Japanese with the same actions and outcomes.
- Revision: 6; each supplement sourceRevision matches.
- Capture: `[data-demo="react"]`; screenshots use initial state and loaded fonts/images.
- Evidence inspected 2026-09-26:
  - [React: State as a Snapshot](https://react.dev/learn/state-as-a-snapshot): State setters request rendering; each render sees a snapshot of state.
  - [React: Sharing State Between Components](https://react.dev/learn/sharing-state-between-components): Move coordinated state to a shared owner and pass data and event handlers to children.
- Verification: check → build → thumbnails → rebuild → unit/output → browser; actual results in [review record](../quality-review.md).

## Strong teaching case — 2026-09-27

Parent-owned state feeds two independent cards; event, setter and render form a clear path.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
