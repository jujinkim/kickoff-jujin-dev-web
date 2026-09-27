# Neumorphism / ニューモーフィズム / 뉴모피즘

Based on [the planning template](../templates/design-demo-brief.md). Approved expansion implementation, 2026-09-27. Visual and automated acceptance are recorded separately in [quality review](../quality-review.md).

- Stable ID and category: `neumorphism`; `styles`. Existing URLs and comment identity retained.
- Definition and selection: Similar-tone surfaces and paired shadows suggest soft raised or pressed controls.
- Closest options and concrete difference: Choose soft surface depth for a small, calm control panel. Skeuomorphism borrows recognizable objects more broadly; flat design avoids this depth. Material impression must never replace a visible state label.
- Distinct situation and Why opening: A stretch timer helps someone choose a movement and take a short break. They want controls that feel gently pressed into one calm surface. A simple flat color change works functionally but does not give this material impression.
- English/Korean/Japanese review: [EN](../../src/content/articles/en/neumorphism.md), [KO](../../src/content/articles/ko/neumorphism.md), [JA](../../src/content/articles/ja/neumorphism.md); matching revision 10. Read English first, then compare scenario, outcomes and limits in both translations.
- How/visual link and representative action: Choose one of two movements; start once or repeatedly, pause, resume, complete at zero, and reset the 30-second deadline-based timer.
- Visual structure: `Neumorphism.astro` owns its markup, spacing and state. Caption: Start, pause and reset a stretch countdown
- Initial and changed states: Choose one of two movements; start once or repeatedly, pause, resume, complete at zero, and reset the 30-second deadline-based timer.
- Repetition, empty/failure and constraints: Compute remaining time from a deadline, rather than assuming each interval fires on time. Repeated Start must not create another timer. Keep state text, pressed semantics, focus outlines and forced-color boundaries when box shadows are removed.
- Controls and state selectors: `data-seconds`, `data-move`, `data-start`, `data-pause`, `data-phase`, `data-idle`, `data-running`, `data-paused`, `data-done`, `data-reset`
- Reset and reload: Reset returns the rendered initial model, announces restoration and keeps reset focus. Reload restores initial state; no input persistence or remote mutation.
- Mobile order and widths: Responsive wrapping within the available article width. DOM reading order is preserved. Verify 320, 390, 768 and 1440px with long translated labels.
- Keyboard, focus and feedback: Native controls with localized accessible names, visible focus and a polite status region. Representative keyboard actions and reset covered in browser tests.
- Light/dark surrounding themes: local palettes remain independent of the site theme. Text and state must remain recognizable without shadows; selection is not conveyed only by color.
- Reduced motion and JavaScript disabled: Motion is optional. Server-rendered initial information remains readable; script-dependent controls are disabled and the wrapper explains the limitation.
- Fonts and measurement: Ordinary readable text with system fallbacks; no font metric claim.
- Assets and usage: No new bitmap required by this component, or shared generated assets selected from its local data. See [image provenance](../../public/images/README.md) and [font manifest](../../public/fonts/manifest.json) for original generation prompts, origins and usage conditions. Images contain no translated UI labels.
- Mode and capture: `interactive`; `[data-demo="neumorphism"]`. Capture decoded images, settled fonts and initial state.
- Incidental example choices: names, times, quantities, prices, light direction and palette are illustrative. They are not universal definitions, performance claims or real transactions.
- Supplementary reading: all three files under `src/content/article-details/<lang>/neumorphism.md`, sourceRevision 10; selection/comparison, applications and implementation/limits.
- Comparison summaries: features: Raised and inset surfaces from paired shadows; advantages: A tactile focus for a small control set; limitations: Low-contrast edges need reinforcement; suitable: A calm control panel with clear states; combinations: Text labels, borders and visible focus
- Verification: sequential check → build → thumbnails → rebuild → unit/output → browser. Initial capture alone may use build:demo-preview. Evidence: `artifacts/design-demos/neumorphism-320.png`, `artifacts/design-demos/neumorphism-1440.png`, localized review captures and [quality review](../quality-review.md).

## Claim evidence

- [Hype4: Shadows and Blurs](https://hype4.academy/articles/design/ui-design-shapes-objects-basics-shadows-and-blurs) (checked 2026-09-27): Explains shadow techniques and soft dimensional surfaces; a lighting direction is not a universal definition.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (checked 2026-09-27): Keyboard, focus, reflow and contrast requirements; a visual style alone does not establish conformance.
- [W3C: CSS backgrounds and borders](https://www.w3.org/TR/css-backgrounds-3/#box-shadow) (checked 2026-09-27): Defines outer and inset box shadows; lighting direction in this illustration is an artistic choice.

## Strong teaching case — 2026-09-27

Raised timer disc and inset pressed controls share one surface; text retains state without shadows.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
