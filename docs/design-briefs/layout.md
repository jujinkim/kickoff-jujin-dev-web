# Name the layout you are pointing at / レイアウトとUI要素に名前を付ける / 레이아웃과 UI 요소: 가리키는 것에 이름 붙이기

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `layout`; `design`. Existing URLs and comment identity retained.
- Definition and selection: Arrange regions and reading order around the user’s main task.
- Closest options and concrete difference: Use a single flow for sequential reading, a sidebar for persistent support, and multiple regions for simultaneous references. Rows help compare repeated text; equal cards align visual peers; masonry preserves varied image heights. Page regions differ from CSS multi-column text flow.
- Distinct situation and Why opening: Imagine designing a catalog where visitors find and compare items. Each page needs navigation, filters, results, and enough detail to make a choice, including on a phone. A screen can contain every required feature while making the main task difficult to find. On a narrow device, sidebars squeeze text and controls jump out of reading order. You need to organize information around what the reader is trying to accomplish before deciding how many columns or cards look attractive.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/layout.md), [KO](../../src/content/articles/ko/layout.md), [JA](../../src/content/articles/ja/layout.md); matching revision 7. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: The catalog sketch names navigation, filters, results and detail. The narrow version preserves a useful source order while stacking those regions. Empty results retain filters and a recovery path. Each region supports finding an item rather than competing for the main action.
- Visual structure: `LayoutGuide.astro` owns its markup, spacing and state. Caption: Find and compare catalog entries
- Initial and changed states: 1. Choose one task, such as finding and comparing two catalog items. List what the person needs first, what supports the decision and what can wait. Give navigation, filters, results and supporting detail distinct responsibilities. Do not make every region compete as the main action. 2. Sketch a single-column reading order. Put the page identity and purpose before its controls, followed by results and supporting material. Start with realistic long titles, translated labels and an empty result; short placeholder text conceals spacing problems. 3. Add columns only when simultaneous visibility helps. Persistent filters can sit beside a long list on a wide screen. At smaller widths, stack regions in a meaningful order before either becomes cramped. A breakpoint follows available content space, not the assumption that every phone or tablet has one fixed size. 4. Match the item presentation to comparison. Repeated text fields may work well as rows; similar visual entries can use aligned cards. A varied image collection may tolerate unequal heights, but keyboard order must still make sense. Keep the same information while comparing arrangements so decoration does not decide the result. 5. Test the states people actually encounter: loading, no matches, failure, long content and expanded details. Use only a keyboard to find controls and reach a result. If a modal is necessary, give it a clear name, a way to close, contained focus and a sensible return point. Check the complete task at narrow and wide widths, with zoom and each supported language. A screenshot of the default state is only one piece of evidence. Ask whether people can identify where to start, predict what happens next and recover when there is nothing to show. Let those answers drive the next revision.
- Repetition, empty/failure and constraints: No interactive state. Failure branches explain outcomes without pretending to execute requests.
- Controls and state selectors: None; static explanatory diagram.
- Reset and reload: Not applicable: no script, reset or mount wait.
- Mobile order and widths: max-width:480px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Readable text and ordered structure; no imitation controls.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Static diagram needs neither motion nor JavaScript.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `static`; `[data-demo="layout"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/layout.md`, sourceRevision 7; selection/comparison, applications and implementation/limits.
- Comparison summaries: Guide compares choices in its walkthrough and supplementary selection section.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/layout-320.png`, `artifacts/design-demos/layout-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [W3C: CSS Grid Layout](https://www.w3.org/TR/css-grid-1/) (checked 2026-09-27): Grid places page regions; visual placement must not replace meaningful source order.
- [WAI modal dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) (checked 2026-09-27): Modal dialogs require focus management and an accessible close path; the sketch is not a working dialog.

## Strong teaching case — 2026-09-27

Navigation, filters, results and details have explicit spatial roles and mobile order.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
