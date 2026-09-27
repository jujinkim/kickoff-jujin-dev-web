---
articleId: liquid-glass
lang: en
sourceRevision: 8
sources:
  - title: "Apple: Meet Liquid Glass"
    url: "https://developer.apple.com/videos/play/wwdc2025/219/"
    claim: Describes a dynamic material for a separate control/navigation layer. CSS blur does not reproduce native lensing.
    checked: "2026-09-27"
  - title: WCAG 2.2
    url: "https://www.w3.org/TR/WCAG22/"
    claim: "Keyboard, focus, reflow and contrast requirements; a visual style alone does not establish conformance."
    checked: "2026-09-27"
  - title: "CSSWG: Filter Effects Level 2"
    url: "https://drafts.csswg.org/filter-effects-2/#BackdropFilterProperty"
    claim: Draft specification for backdrop filtering; CSS blur is not Apple’s native optical system and needs fallback testing.
    checked: "2026-09-27"
---

## Selection & comparison

Use this direction for a compact control layer over photographs or other rich content. Glassmorphism can describe stable frosted panels more broadly. Apple’s material includes adaptive optical behavior that this web study does not implement.

## Applications

The diary cycles through three local generated photographs. The tool capsule expands in normal flow, so it cannot cover the explanation below. A small gallery or map navigation layer could use the same relationship.

## Implementation & cautions

Begin with an opaque readable surface, enhance with backdrop filtering, and test each image. Honor reduced transparency and forced colors. The opaque switch affects this demo only. Do not claim Apple platform behavior or automatic contrast adaptation from CSS styling.

The distinction is deliberately strong here: a broad frosted content panel versus a compact lens that expands with its controls. Glassmorphism is a general visual treatment and can also animate; the distinction is not simply “still versus moving.” The web lens displaces a copy of the selected image and adds edge highlights. It does not reproduce Apple’s native material, automatic tint adaptation or physical light simulation.
