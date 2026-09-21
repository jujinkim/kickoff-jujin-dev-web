# Shared design examples — review

The 2026-09-22 refresh replaces unrelated example applications with one scenario
per comparison category. It supersedes the screen descriptions in
[the original demo review](design-demos-review.md).

## Fixed comparison conditions

- Seven styles: the same three-task checklist, initial unchecked state,
  status filter, completed count, empty state, reset, and reload behavior.
  Color, borders, shadows, material, typography, and spacing distinguish styles.
  Glass retains an optional opaque surface; checked neumorphic rows look inset.
- Six layouts: the same six resources, titles, descriptions, artwork palette,
  topic filter, collection/reverse order, expandable study notes, and width
  selector. Single/two/multiple columns rearrange filters, resources, and guide;
  list/grid/masonry rearrange the same resource cards.
- Five type specimens: the same heading, sentence, localized phrase, numbers,
  `iiiWWW 0123`, and 48px initial editable sample. Only type family and declared
  inspection controls differ. Noto Sans intentionally covers both sans-serif
  shape and proportional width: those are different classification axes.

All 54 article bodies, summaries, revisions, comparison notes where needed,
registry captions, and localized thumbnails match the new screens. The 36 guide
articles, stable IDs, public API v1, URLs, and comment mappings are retained.

## Implementation and inspection

Components retain their own markup and scoped visual styles. Category helpers
share state behavior; resource data lives in `resources.ts`. Shared control CSS
is scoped to `[data-comparison]`, never the surrounding site.

The type sample stays one text node. DOM Range measurements and overlay guides
preserve connected script shaping; individual character ranges can overlap for
ligatures. Font-loaded tests cover all five types. Manifest checks confirm the
localized phrase is covered by all four existing Noto KR/JP subset files; no new
font binaries were required.

Visual review caught and corrected navigation selects extending beyond a narrow
column and specimen headings inheriting the site's face. A final mobile pass
kept task numbers on one line and checkboxes beside their labels. Tall element captures
also exposed the fixed, off-screen skip link; screenshot-only styles now hide
that link during capture. Actual keyboard navigation is unchanged.

## Screen comparisons

Each sheet pairs desktop (1440px viewport) and mobile (320px viewport) captures.
Screens are scaled to fit; originals are available in `artifacts/design-demos/`
after running the browser suite. Public thumbnails contain complete initial
screens without cropping.

- [Styles: brutalism, neobrutalism, glass](verification/design-comparisons/comparison-1.png)
- [Styles: neumorphism, skeuomorphism, flat](verification/design-comparisons/comparison-2.png)
- [Minimalism, single column, two columns](verification/design-comparisons/comparison-3.png)
- [Multiple columns, list, uniform grid](verification/design-comparisons/comparison-4.png)
- [Masonry, serif, sans-serif](verification/design-comparisons/comparison-5.png)
- [Script, proportional, monospace](verification/design-comparisons/comparison-6.png)

## Final verification

Run sequentially on the final application changes:

1. `npm run check` — 0 errors, 0 warnings; 90 published articles valid.
2. `npm run build` — 90 Pagefind pages across three languages.
3. `npm run thumbnails` — all 54 localized captures regenerated.
4. Stop the capture server; `npm run build` — copy final captures into output.
5. `npm test` — 22 unit/output tests passed.
6. `npm run test:e2e` — all 31 browser tests passed after the final mobile fix.

Browser coverage includes 320/768/1440px, both surrounding site themes,
JavaScript-disabled rendering, keyboard focus/reset, reduced motion and removed
shadows, repeated actions, empty task filters and specimen input, reload,
resource sorting/filtering, masonry overlap and DOM focus order, actual loaded
fonts and widths, and matching group content in English/Korean/Japanese.
All 90 visible introductions retain their reading budget; localized images,
search, generated Markdown, sitemap, and AI output remain covered.
