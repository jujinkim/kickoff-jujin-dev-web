# Retro digital / レトロデジタル / 레트로 디지털

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `retro-digital`; `styles`. Existing URLs and comment identity retained.
- Definition and selection: Early-computer windows, pixel details and type evoke a deliberate digital nostalgia.
- Closest options and concrete difference: Choose retro digital when a specific computing-era mood supports the content. Skeuomorphism can imitate other physical objects, and brutalism may look raw without desktop window metaphors. Avoid presenting every old interface as one style.
- Distinct situation and Why opening: An arcade meetup page helps guests pick a game and find its session time. Generic modern panels miss the event’s early-computer mood. Nostalgic window framing matters more here than minimalism’s quiet restraint.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/retro-digital.md), [KO](../../src/content/articles/ko/retro-digital.md), [JA](../../src/content/articles/ja/retro-digital.md); matching revision 6. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Choose a game, open its session window, close or press Escape and return focus to the opener. The window is in-flow, not modal.
- Visual structure: `RetroDigital.astro` owns its markup, spacing and state. Caption: Choose an arcade game and open its session window
- Initial and changed states: Choose a game, open its session window, close or press Escape and return focus to the opener. The window is in-flow, not modal.
- Repetition, empty/failure and constraints: Expose expanded state and provide a labeled close button. Escape closes only the open local window. Keep its content in DOM order and return focus to the opener when closing. Pixel ornaments must not reduce body text size.
- Controls and state selectors: `data-game`, `data-open`, `data-window`, `data-close`, `data-session`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="retro-digital"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/retro-digital.md`, sourceRevision 6; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Early digital window and pixel motifs; advantages: A recognizable arcade-era identity; limitations: Nostalgia must not obscure current controls; suitable: A nostalgic interface over natural materials; combinations: Legible type and accessible window behavior
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/retro-digital-320.png`, `artifacts/design-demos/retro-digital-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Canva: Design trends 2026](https://www.canva.com/newsroom/news/design-trends-2026/) (checked 2026-09-27): Reports renewed interest in early-computing visual cues; not the invention date or a formal specification.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (checked 2026-09-27): Keyboard, focus, reflow and contrast requirements; a visual style alone does not establish conformance.

## Strong teaching case — 2026-09-27

Arcade window with beveled controls, pixel texture and title bar.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
