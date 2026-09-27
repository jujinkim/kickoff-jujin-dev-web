# Sidebar layout — representative review

- Stable ID: `two-columns`; leaf category: `columns`.
- Titles (EN / KO / JA): Sidebar layout / 사이드바 레이아웃 / サイドバーレイアウト.
- Definition and selection criterion: Keep navigation, filters or supporting information beside the main content so both remain available.
- Neighbor comparison: see the matching Selection & comparison supplement; choices may coexist.
- Why / situation: Recipe browser for cooks choosing dinner by ingredient and time.
- How / representative action: Filter tomato + 20 minutes → pasta; 10 minutes → no matches; clear filters → four recipes. Native recipe notes expand in place.
- Initial, changed, repeat, empty, reset and reload: Initial all ingredients / all times / four recipes / closed notes. Repeated filters are stable. Reset and reload restore initial state.
- Visual structure, incidental choices and mobile order: Narrow filters support the wider recipe list. Below 520px of component content width, filters precede recipes. No fixed sidebar position; DOM order stays unchanged.
- Keyboard: native controls in DOM order, visible focus, polite localized status where interactive; reset retains focus.
- No JavaScript: static explanation and initial screen remain; script-dependent controls stay disabled. Native disclosures work.
- Themes and motion: authored demo colors within neutral shell; no required animation. Check dark surrounding theme, forced colors, focus and 200% text.
- Assets and conditions: public/images/tomato-pasta.png; provenance in public/images/README.md or font manifest and bundled OFL files.
- Localized visible labels: authored in English, then Korean/Japanese with the same actions and outcomes.
- Revision: 6; each supplement sourceRevision matches.
- Capture: `[data-demo="two-columns"]`; screenshots use initial state and loaded fonts/images.
- Evidence inspected 2026-09-26:
  - [W3C Design System: Sidebar](https://design-system.w3.org/layouts/sidebar.html): Pattern example with narrower support panel and stacking based on available width; not a catalog-wide official taxonomy.
  - [CSS Grid Layout Level 1](https://www.w3.org/TR/css-grid-1/): Defines tracks and placement of separate grid items.
  - [CSS Multi-column Layout Level 1](https://www.w3.org/TR/css-multicol-1/): Distinguishes fragmented content flow from independent layout regions.
  - [WCAG 2.2: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html): Supports checking narrow-width reading without losing information or functionality; does not define sidebar layout.
- Verification: check → build → thumbnails → rebuild → unit/output → browser; actual results in [review record](../quality-review.md).

## Strong teaching case — 2026-09-27

Narrow bounded filters beside dominant recipe results; reading order preserved on mobile.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
