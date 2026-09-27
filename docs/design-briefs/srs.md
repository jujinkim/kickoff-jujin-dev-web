# Requirements: agree on what done means — representative review

- Stable ID: `srs`; leaf category: `planning`.
- Titles (EN / KO / JA): Requirements: agree on what done means / 요구사항·완료 조건: 원하는 동작 합의하기 / 要件と完了条件：望む動作を合意する.
- Definition and selection criterion: Turn expected behavior and constraints into observable completion checks before choosing implementation details.
- Neighbor comparison: see the matching Selection & comparison supplement; choices may coexist.
- Why / situation: Bookshop cart: agree on the outcome of a deliberate second addition, duplicate delivery and unavailable stock.
- How / representative action: Read each acceptance case from the same explicit starting state.
- Initial, changed, repeat, empty, reset and reload: Static: one row quantity 1 → deliberate add gives 2; retry gives 1; unavailable stock leaves state. No artificial reset, focus stops or controls.
- Visual structure, incidental choices and mobile order: Book and cart header introduce the situation before AC labels. Three independent outcomes explain checks; labels are traceable acceptance IDs, not unexplained people or apps.
- Keyboard: native controls in DOM order, visible focus, polite localized status where interactive; reset retains focus.
- No JavaScript: static explanation and initial screen remain; script-dependent controls stay disabled. Native disclosures work.
- Themes and motion: authored demo colors within neutral shell; no required animation. Check dark surrounding theme, forced colors, focus and 200% text.
- Assets and conditions: No raster asset; component-owned HTML diagram.; provenance in public/images/README.md or font manifest and bundled OFL files.
- Localized visible labels: authored in English, then Korean/Japanese with the same actions and outcomes.
- Revision: 7; each supplement sourceRevision matches.
- Capture: `[data-demo="srs"]`; screenshots use initial state and loaded fonts/images.
- Evidence inspected 2026-09-26:
  - [NASA: How to Write a Good Requirement](https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/): Supports clear, verifiable requirements; the cart outcomes are authored examples rather than NASA requirements.
- Verification: check → build → thumbnails → rebuild → unit/output → browser; actual results in [review record](../quality-review.md).

## Strong teaching case — 2026-09-27

Repeated cart actions show distinct acceptance outcomes and prominent quantities/refusals.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
