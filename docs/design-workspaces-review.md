# Project workspace style review — 2026-09-22

The eleven style demos now share the Make room project, its three original tasks,
internal navigation, progress, two resource notes, and reset behavior. Each Astro
component owns its structure, control baseline and visual rules. `workshop.ts` supplies translated
copy; `tasks.ts` handles state. The other eleven layout/type demos retain their
own scenarios. All effects stay inside article-body roots.

The catalog now has 22 design concepts, 12 guides, and 102 published localized
articles. Four new concepts add 12 articles; seven existing styles have 21 revised
articles with synchronized revisions. Forty other candidates remain planned.
IDs, existing URLs, comment identities and API schema v1 remain stable.

## Visual and interaction decisions

Default composition has header/menu above two columns: overview/tasks and
progress/resources. Below 600px of demo content width, these follow DOM reading
order in one column. The exceptions are a notebook spread, a floating navigation
capsule, a paper collage board, and desktop windows. Each retains the same
information and actions. Plans for each style are in [design-briefs](design-briefs/).

Neumorphism removes resting borders, including native checkbox styling. Raised
and inset shadows use the same surface hue with light from the upper left.
Checked glyphs, strike-through and numeric feedback remain without shadows;
keyboard focus and forced-color boundaries remain available.

Liquid Glass reserves its transparent treatment for navigation; View tools grows
that layer in normal flow above the content. Opaque mode and OS reduced-transparency
settings remove blur and transparent fill. Material 3 Expressive emphasizes large
task controls and briefly animates the progress shape. Reduced motion removes
that response. Collage notes unfold as paper; retro notes unfold inside titled
windows. Menus and native notes remain usable without JavaScript.

Category pages now render published entries with the same `Card` component as
the catalog; planned candidates remain separate text entries. Catalog and category
cards display full-width screenshots at their natural ratio,
with a 360px maximum and top-aligned cover crop. Full PNGs retain the entire demo;
list view hides thumbnails.

## Research and copy review

English originals were reviewed first for mechanism, comparison and claim scope;
Korean and Japanese preserve these boundaries. All 33 style introductions fit
within the existing one-minute budget (41–56 estimated seconds, including the
15-second visual allowance). Demo exploration time is separate.

Sources inspected 2026-09-22:

- [Hype4: shadows and blurs](https://hype4.academy/articles/design/ui-design-shapes-objects-basics-shadows-and-blurs):
  opposing shadow offsets, related surface hues and inset depth; a shadow reversal
  alone is too weak to communicate selected state. Decorative borders are not a
  required part of the material. Earlier authoring advice about permanent outlines
  was corrected; focus and forced-color lines are separate access aids.
- [Apple WWDC25: Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219/):
  floating navigation, reflective/lensing cues and expanding controls. The demo is
  an authored CSS illustration, not Apple's native adaptive renderer.
- [Google Design: expressive research](https://design.google/library/expressive-material-design-google-research):
  color, size, shape and containment direct attention while familiar labels and
  patterns remain necessary. Research performance numbers are not attributed to
  this example.
- [Canva's 2026 trends](https://www.canva.com/newsroom/news/design-trends-2026/):
  tactile/handmade treatments and early-computing nostalgia support the two
  editorial categories. The names are not presented as Canva's exact taxonomy,
  and 2026 is not their invention date.

## Verification evidence

First captures of the four new designs used `build:demo-preview`; all regular
verification uses normal builds. Final verification ran sequentially:

| Stage                | Result                                                                  |
| -------------------- | ----------------------------------------------------------------------- |
| `npm run check`      | PASS: 0 errors, warnings or hints; 102 valid articles; formatting clean |
| `npm run build`      | PASS: 242 HTML pages; 102 Pagefind articles in three languages          |
| `npm run thumbnails` | PASS: 66 full localized demo captures                                   |
| `npm run build`      | PASS: rebuilt output contains refreshed thumbnails                      |
| `npm test`           | PASS: 23 unit/output/publication tests                                  |
| `npm run test:e2e`   | PASS: 44 Chromium browser tests                                         |
| `git diff --check`   | PASS                                                                    |

Browser coverage includes 320/768/1440px, three languages, both surrounding
site themes, keyboard navigation and focus, check/filter/progress/empty states,
native notes, reset/reload, disabled-JavaScript initial screens, reduced motion,
reduced transparency, manual opaque mode, and shadowless/forced-color state.
The 599px/600px container boundary is checked independently of viewport size.
Expanded notes and tools are checked for overlap across the full language,
width and theme matrix. Category/card thumbnails are checked for full width,
natural scaling, 360px cap and top alignment; catalog list view hides them.

Output tests verify published-only search/Markdown/sitemaps/AI lists, translated
comparison summaries, canonical/alternate links and stable comment IDs/API v1.
`agent-browser` also verified rendered controls and page errors on built output.
Evidence stays in `artifacts/design-demos/`; logs are `unit.log`, `browser.log`,
`build.log` and `check.log` there. Public thumbnails contain complete localized
initial screens. Work is local; no deployment was performed.

## Visual evidence

All eleven initial screens were inspected at desktop and 320px widths. Expanded
notes and tools were captured for every style in every language, with mobile dark
and desktop light surrounding themes. The browser suite checks 768px as well.
The material palette deliberately stays local to each demo in either site theme.

- Full desktop initial captures: [Liquid Glass](../public/thumbnails/liquid-glass-en.png),
  [Material 3 Expressive](../public/thumbnails/material-3-expressive-en.png),
  [Tactile collage](../public/thumbnails/tactile-collage-en.png),
  [Retro digital](../public/thumbnails/retro-digital-en.png).
- Initial viewport evidence: `artifacts/design-demos/<id>-320.png` and
  `<id>-1440.png` for all registered designs.
- Expanded localized evidence:
  `artifacts/design-demos/<id>-<lang>-320-dark-expanded.png` and
  `<id>-<lang>-1440-light-expanded.png` for all eleven styles.
- Shadowless/forced-color state:
  `artifacts/design-demos/neumorphism-forced-colors.png`.

Visual review confirms distinct material and typography, readable note expansion,
and no overlap of the floating tools with content. The review caught a local CSS
baseline overriding some material button fills; the selector specificity was
corrected and a browser regression checks monochrome, flat and expressive control
treatments. Forced-color checkbox identification was also corrected after its
first assertion exposed a specificity conflict.
