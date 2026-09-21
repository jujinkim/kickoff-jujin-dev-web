# Design demos — local verification, 2026-09-22

Historical screen review. Current comparison examples are documented in
[Shared design examples](design-comparison-review.md).

Implemented 18 independent article-body demonstrations: seven rebuilt styles,
six layouts, and five typography examples. Each has English, Korean, and Japanese
articles and an actual-screen thumbnail. Existing guide content remains 36
articles: 90 published translations total, 40 candidates still planned. Existing
style revisions moved to 3; new design articles start at revision 1.

Site chrome, article identity, URL paths, comment keys, and public API schema v1
are preserved. No deployment is included in this work.

## Visual review

The following sheets pair 1440px desktop and 320px mobile captures of every
design. Images are scaled to fit the sheet; original screenshots remain under
`artifacts/design-demos/` and language thumbnails under `public/thumbnails/`.

| Designs                                 | Desktop/mobile comparison                             |
| --------------------------------------- | ----------------------------------------------------- |
| Brutalism, neobrutalism, glassmorphism  | [Sheet 1](verification/design-demos/comparison-1.png) |
| Neumorphism, skeuomorphism, flat design | [Sheet 2](verification/design-demos/comparison-2.png) |
| Minimalism, single column, two columns  | [Sheet 3](verification/design-demos/comparison-3.png) |
| Multiple columns, list, uniform grid    | [Sheet 4](verification/design-demos/comparison-4.png) |
| Masonry, serif, sans-serif              | [Sheet 5](verification/design-demos/comparison-5.png) |
| Script, proportional, monospace         | [Sheet 6](verification/design-demos/comparison-6.png) |

The archive exposes monochrome rules and underlined links; the poster uses
strong blocks, black outlines, and hard offset shadows. Weather panels retain
background light through translucent blurred surfaces. The light console uses
opposing soft shadows; the notebook shows binding, rules, layered paper edges,
and a page-specific bookmark. Flat tasks use solid color and explicit controls.
The portfolio limits its palette and gives each work generous space.

Column demonstrations retain navigation/document/reference order on narrow
screens. List rows keep metadata attached; uniform cards align their rows;
masonry uses unequal card heights and shortest-column placement. The type
specimens use visibly different serif, sans, handwriting, proportional, and
fixed-advance forms. Large specimens reflow rather than forcing page overflow.

Visual review caught narrow English word breaks in the poster and notebook,
and an overly long sign specimen. These were corrected with narrow-screen title
sizes, cleared floats, and a shorter label. The weather announcement surface is
opaque only when populated, avoiding an empty decorative strip.

## Functional evidence

| Demo             | Verified representative result                                              |
| ---------------- | --------------------------------------------------------------------------- |
| Brutalism        | Search plus type filter; no results, cleared query, reset                   |
| Neobrutalism     | Friday/Saturday lineups; reload restores Friday                             |
| Glassmorphism    | Night background and opaque panels; blur becomes `none`                     |
| Neumorphism      | Power off gives 0%; brightness updates light and numeric output             |
| Skeuomorphism    | Separate page text, page-specific bookmark, complete reset                  |
| Flat design      | Completion count, state filter, empty completed state                       |
| Minimalism       | Previous/next wraps through three works with matching title/index           |
| Single column    | Width choice and native additional paragraph expansion                      |
| Two columns      | Document selection; navigation stacks above narrow document                 |
| Multiple columns | Main and related content update; three regions stack in order               |
| List             | Topic filter and numeric duration sorting preserve metadata                 |
| Uniform grid     | Category filter, details expansion, shared row boundaries                   |
| Masonry          | Expansion repositions following cards; no overlap; DOM focus order retained |
| Serif            | Size output updates and left H terminal markers become visible              |
| Sans-serif       | Size/weight controls update the specimen; ambiguous glyphs stay visible     |
| Script           | Latin title input, empty title, size control, reset                         |
| Proportional     | Measured i/W advances differ; tabular digits align numeric rows             |
| Monospace        | Measured Latin i/W advances match; guides and empty input work              |

Browser verification uses Chromium against built `dist`, not the dev server.
All 54 design routes are checked at 320, 768, and 1440px in both site themes,
with JavaScript enabled and disabled: 648 reflow combinations. Enabled examples
also receive keyboard interaction/reset, focus checks, reduced-motion media,
and removed shadows. No-JavaScript pages retain initial screens, explanatory
Markdown, and disabled JS-only controls; native details remain available.

Masonry measurements wait for the layout frame after details change. Its narrow
CSS fallback also reflows immediately before ResizeObserver fires. Tests verify
non-overlap and that Tab follows original DOM order. Typography tests verify
actual local font loading, Korean/Japanese CJK font loading, equal versus unequal
Latin advances, and proportional versus tabular digit rows. Unsupported input
characters deliberately use documented fallback fonts.

[Recorded Chromium font metrics](verification/design-demos/font-metrics.json)
also identify the rendered custom fonts through `CSS.getPlatformFontsForNode`:
at 32px, Noto Sans advances are 8px for `i` and 30px for `W`; JetBrains Mono
advances are 19px for both. These are this build/browser's measurements, not
universal values. [Expanded terminal markers](verification/design-demos/serif-terminals.png)
show the enlarged serif specimen's annotated state.

## Commands and results

Executed sequentially:

```text
npm run check          PASS: 0 errors, 0 warnings; 90 valid articles; formatting
npm run build          PASS: 227 HTML pages; Pagefind indexes 90 articles
npm run thumbnails     PASS: 54 actual-screen PNGs
npm run build          PASS: captures copied into final static output
npm test               PASS: 22 unit/output/publication tests
npm run test:e2e        PASS: 24 browser tests
```

Search tests query every published article title in its own language. Output
tests verify Markdown, sitemap entries, translations, internal assets, canonical
URLs, comments, `llms.txt`, and the 30-entry AI catalog with 90 translations.
All one-minute overview budgets pass (maximum calculated allowance: 50 seconds);
application strings are excluded from
the overview's reading-time calculation and Pagefind body.

After visually aligning the serif terminal markers, check/build, the three
serif captures, rebuild, and all 22 unit/output tests passed again. The two
focused browser suites for representative actions and actual fonts also passed
(5.9 seconds); the full 24-test browser run above passed in 1.3 minutes.

## Extension audit

Compared the [extension guide](design-demos.md) against the existing Masonry
registration, component, capture selector, three articles, and thumbnail paths.
`npm run thumbnails -- --id masonry` captured only its three languages; hashes
of all other PNGs stayed unchanged. Full capture also discovers all published
registry entries without a fixed design-ID array.

Normal content validation rejects missing registration, component, component
contract, caption, current translation, and thumbnail. Mutation tests cover a
new public ID with no implementation, a wrong component, omitted captions/assets,
and a draft translation. Local `build:demo-preview` bypasses only thumbnail
existence to solve first-capture bootstrapping; normal builds remain strict.

The font regeneration script was run successfully against all eight recorded
upstream hashes. It retains the named families' licenses and exact coverage
manifest. New demo authors have a linked brief template, component contract,
commands, troubleshooting table, and copyable implementation request.
