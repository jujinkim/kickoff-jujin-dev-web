# Hexagonal architecture — representative review

- Stable ID: `hexagonal-architecture`; leaf category: `boundaries`.
- Titles (EN / KO / JA): Hexagonal architecture / 헥사고날 아키텍처 / ヘキサゴナルアーキテクチャ.
- Definition and selection criterion: Separate application rules from input and storage technologies through ports and replaceable adapters.
- Neighbor comparison: see the matching Selection & comparison supplement; choices may coexist.
- Why / situation: Teachers save a class schedule through interchangeable HTTP/CLI and storage edges.
- How / representative action: Read dependencies into application-owned ports separately from runtime calls toward storage.
- Initial, changed, repeat, empty, reset and reload: Static diagram: first save 0 → 1; repetition stays 1; invalid input or pre-write failure stays 0. No fake controls or reset.
- Visual structure, incidental choices and mobile order: Three zones separate driving adapters, application and driven adapters. Narrow layout stacks in semantic order. Solid dependencies, dashed calls and dotted process enclosure have explicit labels.
- Keyboard: native controls in DOM order, visible focus, polite localized status where interactive; reset retains focus.
- No JavaScript: static explanation and initial screen remain; script-dependent controls stay disabled. Native disclosures work.
- Themes and motion: authored demo colors within neutral shell; no required animation. Check dark surrounding theme, forced colors, focus and 200% text.
- Assets and conditions: No raster asset; component-owned semantic HTML diagram.; provenance in public/images/README.md or font manifest and bundled OFL files.
- Localized visible labels: authored in English, then Korean/Japanese with the same actions and outcomes.
- Revision: 5; each supplement sourceRevision matches.
- Capture: `[data-demo="hexagonal-architecture"]`; screenshots use initial state and loaded fonts/images.
- Evidence inspected 2026-09-26:
  - [Alistair Cockburn: Hexagonal architecture](https://alistair.cockburn.us/hexagonal-architecture): Original ports-and-adapters account explains application isolation and substitutable external connections.
- Verification: check → build → thumbnails → rebuild → unit/output → browser; actual results in [review record](../quality-review.md).

## Strong teaching case — 2026-09-27

Application-owned ports between replaceable adapters; separately labeled runtime path.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
