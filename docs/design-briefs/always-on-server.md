# Always-on server — representative review

- Stable ID: `always-on-server`; leaf category: `hosting-models`.
- Titles (EN / KO / JA): Always-on server / 상시 서버 / 常時稼働サーバー.
- Definition and selection criterion: Keep a process listening for requests, with runtime control and responsibility for capacity, supervision and recovery.
- Neighbor comparison: see the matching Selection & comparison supplement; choices may coexist.
- Why / situation: Library reading list with listening process, restart boundary and external store.
- How / representative action: Read/save/fail/restart demonstrate process lifetime separately from record lifetime.
- Initial, changed, repeat, empty, reset and reload: Generation 1 and zero records. Save is idempotent; failure leaves store unchanged. Restart preserves store; reset/reload clear whole page simulation.
- Visual structure, incidental choices and mobile order: Operational regions name owner, provisioned idle capacity and recovery responsibilities. No cloud API, price quote or persistence.
- Keyboard: native controls in DOM order, visible focus, polite localized status where interactive; reset retains focus.
- No JavaScript: static explanation and initial screen remain; script-dependent controls stay disabled. Native disclosures work.
- Themes and motion: authored demo colors within neutral shell; no required animation. Check dark surrounding theme, forced colors, focus and 200% text.
- Assets and conditions: No raster asset; component-owned operational diagram.; provenance in public/images/README.md or font manifest and bundled OFL files.
- Localized visible labels: authored in English, then Korean/Japanese with the same actions and outcomes.
- Revision: 7; each supplement sourceRevision matches.
- Capture: `[data-demo="always-on-server"]`; screenshots use initial state and loaded fonts/images.
- Evidence inspected 2026-09-26:
  - [Node.js: Introduction](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs): Shows an HTTP server listening for requests; operational ownership and cost comparisons here are planning considerations, not Node.js guarantees.
- Verification: check → build → thumbnails → rebuild → unit/output → browser; actual results in [review record](../quality-review.md).

## Strong teaching case — 2026-09-27

Continuous runtime enclosure holds request handling; store lies outside restart scope.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
