# Glassmorphism — representative review

- Stable ID: `glassmorphism`; leaf category: `styles`.
- Titles (EN / KO / JA): Glassmorphism / 글래스모피즘 / グラスモーフィズム.
- Definition and selection criterion: Use translucent, blurred panels to preserve background context while keeping foreground content readable.
- Neighbor comparison: see the matching Selection & comparison supplement; choices may coexist.
- Why / situation: Photo-walk route planner. Walkers compare a lake route and a pine route while keeping the landscape in view.
- How / representative action: Select a route; distance, duration and description change without replacing the photograph. Select opaque mode to remove translucency.
- Initial, changed, repeat, empty, reset and reload: Lake route 2.4 km / 45 minutes → pine route 4.1 km / 80 minutes. Repeated selection is idempotent; reset and reload restore lake and translucent mode. No free-text input or empty result.
- Visual structure, incidental choices and mobile order: Photo remains visible through frosted panels: 58% white fill, 10px backdrop blur, 1.35 saturation, translucent edges and inset highlights. These values are example choices, not the style definition. Panel radius, particular landscape and light direction are authored choices. Opaque fallback, reduced-transparency and forced-colors override preserve controls.
- Keyboard: native controls in DOM order, visible focus, polite localized status where interactive; reset retains focus.
- No JavaScript: static explanation and initial screen remain; script-dependent controls stay disabled. Native disclosures work.
- Themes and motion: authored demo colors within neutral shell; no required animation. Check dark surrounding theme, forced colors, focus and 200% text.
- Assets and conditions: public/images/lake-walk.png; provenance in public/images/README.md or font manifest and bundled OFL files.
- Localized visible labels: authored in English, then Korean/Japanese with the same actions and outcomes.
- Revision: 12; each supplement sourceRevision matches.
- Capture: `[data-demo="glassmorphism"]`; screenshots use initial state and loaded fonts/images.
- Evidence inspected 2026-09-26:
  - [Filter Effects Level 2](https://drafts.csswg.org/filter-effects-2/#BackdropFilterProperty): Defines backdrop-filter rendering; a draft mechanism specification, not a definition of the style.
  - [NN/g: Glassmorphism](https://www.nngroup.com/articles/glassmorphism/): Describes the visual treatment and readability risks; this demo’s scenic route is an authored example.
  - [MDN: backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter): Browser compatibility reference; test target browsers and preserve a fallback.
  - [WCAG 2.2: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html): Text contrast criteria apply to the final visible background.
- Verification: check → build → thumbnails → rebuild → unit/output → browser; actual results in [review record](../quality-review.md).

## Strong teaching case — 2026-09-27

Broad, strongly frosted content panels over the landscape; opaque fallback.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
