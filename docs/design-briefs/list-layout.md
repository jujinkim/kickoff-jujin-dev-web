# List layout / リスト / 리스트

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `list-layout`; `content-arrangement`. Existing URLs and comment identity retained.
- Definition and selection: Repeated rows align text and metadata when scanning comparable fields matters more than image variety.
- Closest options and concrete difference: Choose rows when users repeatedly scan the same text fields. A grid gives images equal emphasis; masonry preserves varied image proportions. A list can fill a main region beside separate filters.
- Distinct situation and Why opening: A library search helps readers compare titles, authors and availability. Card layouts scatter these text fields across the screen. Scanning matching fields matters more than large cover images.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/list-layout.md), [KO](../../src/content/articles/ko/list-layout.md), [JA](../../src/content/articles/ja/list-layout.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Search four real book titles/authors with normalized text and an availability filter. Mary Shelley plus available yields no result; reset restores four.
- Visual structure: `ListLayout.astro` owns its markup, spacing and state. Caption: Search real book titles and compare fictional lending status
- Initial and changed states: Search four real book titles/authors with normalized text and an availability filter. Mary Shelley plus available yields no result; reset restores four.
- Repetition, empty/failure and constraints: Filter normalized text without persisting the query. Retain a labeled input and an explicit empty result. On narrow screens, move status below the title in the same row rather than hiding it. Real lending data needs a freshness and conflict policy.
- Controls and state selectors: `data-search`, `data-availability`, `data-count`, `data-book`, `data-available`, `data-search-text`, `data-empty`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: width<470px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="list-layout"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/list-layout.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Repeated rows align text and metadata when scanning comparable fields matters more than image variety.; advantages: Stable metadata positions support quick comparison.; limitations: Long summaries can hide the pattern; keep row content concise.; suitable: Choose it for scanning and comparing text-heavy items.; combinations: A list can fill the main region of a two-column page.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/list-layout-320.png`, `artifacts/design-demos/list-layout-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [W3C: CSS Grid Level 1](https://www.w3.org/TR/css-grid-1/) (checked 2026-09-27): Grid tracks support aligned fields; the list pattern and fictional availability are authored design choices.
- [WCAG 2.2: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) (checked 2026-09-27): Supports narrow-screen and zoom checks, not the definition of a layout or typeface.
- [Project Gutenberg: Pride and Prejudice](https://www.gutenberg.org/ebooks/1342) (checked 2026-09-27): Confirms title and Jane Austen authorship; availability in the demo is fictional.
- [Project Gutenberg: Frankenstein](https://www.gutenberg.org/ebooks/84) (checked 2026-09-27): Confirms title and Mary Shelley authorship; no lending data is fetched.
- [Project Gutenberg: Alice’s Adventures in Wonderland](https://www.gutenberg.org/ebooks/11) (checked 2026-09-27): Confirms title and Lewis Carroll authorship; only bibliographic labels are used.
- [Project Gutenberg Canada: A Room of One’s Own](https://www.gutenberg.ca/ebooks/woolfv-aroomofonesown/woolfv-aroomofonesown-00-h.html) (checked 2026-09-27): Confirms title and Virginia Woolf authorship; the demo does not reproduce the book.

## Strong teaching case — 2026-09-27

Dense book rows align ordinal, metadata and status without card gaps.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
