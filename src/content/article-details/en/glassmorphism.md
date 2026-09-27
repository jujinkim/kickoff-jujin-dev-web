---
articleId: glassmorphism
lang: en
sourceRevision: 13
sources:
  - title: Glassmorphism in user interfaces
    url: "https://hype4.academy/articles/design/glassmorphism-in-user-interfaces"
    claim: Author’s original style article; public preview only, used for provenance rather than technical or accessibility requirements.
    checked: "2026-09-27"
  - title: "Apple: Meet Liquid Glass"
    url: "https://developer.apple.com/videos/play/wwdc2025/219/"
    claim: Defines Apple’s adaptive control material and lensing; the separate web example is an approximation.
    checked: "2026-09-27"
  - title: Filter Effects Level 2
    url: "https://drafts.csswg.org/filter-effects-2/#BackdropFilterProperty"
    claim: >-
      Defines backdrop-filter rendering; a draft mechanism specification, not a
      definition of the style.
    checked: "2026-09-26"
  - title: "NN/g: Glassmorphism"
    url: "https://www.nngroup.com/articles/glassmorphism/"
    claim: >-
      Describes the visual treatment and readability risks; this demo’s scenic
      route is an authored example.
    checked: "2026-09-26"
  - title: "MDN: backdrop-filter"
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter"
    claim: >-
      Browser compatibility reference; test target browsers and preserve a
      fallback.
    checked: "2026-09-26"
  - title: "WCAG 2.2: Contrast (Minimum)"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
    claim: Text contrast criteria apply to the final visible background.
    checked: "2026-09-26"
---

## Selection & comparison

Choose translucent panels when the background carries useful context, such as a place, artwork or photograph. Keep the content hierarchy simple: background context, foreground task, readable controls. A flat, opaque surface is a better starting point for dense forms or dashboards with unpredictable backdrops. Liquid Glass is a separate, platform-associated material study; these labels are not interchangeable specifications.

## Applications

The route chooser retains the lake scene while changing distance and duration. A photograph viewer could use the same relationship for a compact caption. The lesson is the relationship between foreground and background, not a required card radius, light direction or number of tasks. Avoid stacking many translucent layers: readers still need to identify what they can act on.

## Implementation & cautions

Use a translucent background together with `backdrop-filter: blur(10px) saturate(1.35)`. The filter acts on content behind the element; `filter: blur(...)` would blur the element itself. Start from a readable opaque color and enhance only where supported. This demo supplies an opaque switch, an unsupported-filter fallback and reduced-transparency handling. Test contrast against the composited result, keyboard focus and reduced motion. Browser support does not establish accessibility.

The distinction is deliberately strong here: a broad frosted content panel versus a compact lens that expands with its controls. Glassmorphism is a general visual treatment and can also animate; the distinction is not simply “still versus moving.” The web lens displaces a copy of the selected image and adds edge highlights. It does not reproduce Apple’s native material, automatic tint adaptation or physical light simulation.
