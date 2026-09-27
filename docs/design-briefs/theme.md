# Themes and fonts without fifty shades of almost / テーマ・フォント・共通スタイル / 테마·폰트·공통 스타일: 비슷한 색 50개 금지

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `theme`; `design`. Existing URLs and comment identity retained.
- Definition and selection: Name visual roles so shared colors, type and spacing stay consistent.
- Closest options and concrete difference: Semantic tokens fit decisions reused across cards, forms and states. Component-specific values still suit unique structure. A theme changes coordinated values; it need not impose one layout or material on every example. Font classification, glyph width and letter spacing remain separate choices.
- Distinct situation and Why opening: Imagine running a community event site with articles, cards, and signup buttons. Organizers want the same brand colors and readable text on light and dark screens. Changing a brand color should not mean hunting through dozens of components. Yet independent color and spacing choices drift, while a dark background can leave old text colors unreadable. You need shared visual decisions that preserve each element's role and can be checked in the actual combinations users will see.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/theme.md), [KO](../../src/content/articles/ko/theme.md), [JA](../../src/content/articles/ja/theme.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Switch local light/dark tokens on one card and form. Submit no session to expose an error, select a session to clear it, reset to light and no selection.
- Visual structure: `ThemeGuide.astro` owns its markup, spacing and state. Caption: Switch semantic tokens on the same workshop card and form
- Initial and changed states: Switch local light/dark tokens on one card and form. Submit no session to expose an error, select a session to clear it, reset to light and no selection.
- Repetition, empty/failure and constraints: Measure contrast on rendered pairs, including focus and error states. Check fallback fonts, translation, zoom and forced colors. This demo stores no preference and resets to light; production persistence or system-preference rules require their own explicit design.
- Controls and state selectors: `data-theme-choice`, `data-switched`, `data-confirmed`, `data-missing`, `data-choice`, `data-session`, `data-error`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: width < 560px. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="theme"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/theme.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: Guide compares choices in its walkthrough and supplementary selection section.
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/theme-320.png`, `artifacts/design-demos/theme-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [W3C: CSS custom properties](https://www.w3.org/TR/css-variables-1/) (checked 2026-09-27): Custom properties cascade and inherit; semantic roles and accessible value pairs remain design responsibilities.
- [WCAG 2.2 contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) (checked 2026-09-27): Normal text requires 4.5:1 contrast, with stated exceptions; palette names alone establish no conformance.

## Strong teaching case — 2026-09-27

The same card/form changes semantic tokens locally; error and focus retain their roles.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
