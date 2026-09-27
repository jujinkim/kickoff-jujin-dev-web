---
articleId: serif
lang: en
sourceRevision: 8
sources:
  - title: CSS Fonts Level 3
    url: "https://www.w3.org/TR/css-fonts-3/#generic-font-families"
    claim: >-
      Defines generic families, font matching and numeric variants;
      classification does not prove universal readability.
    checked: "2026-09-26"
  - title: "CSS Text Level 3: letter-spacing"
    url: "https://www.w3.org/TR/css-text-3/#letter-spacing-property"
    claim: >-
      Defines spacing between typographic character units separately from font
      selection.
    checked: "2026-09-26"
---

## Selection & comparison

Shape, advance width and spacing answer different questions. Serif and sans-serif describe letterform characteristics. Monospaced and proportional describe how much horizontal space characters receive. `letter-spacing` adds spacing; it does not change the font into a fixed-width typeface. Serif body text and sans-serif controls can share a page. Test the actual family rather than assigning a personality or reading-speed promise to the entire class.

## Applications

The local history magazine pairs a serif headline and passage with small interface labels. Inspect H to locate terminal details, then compare i and W in the editable measurement sample. Those Latin letters have different advances in this font. Korean and Japanese use local Noto Serif subsets; their glyph designs require their own review. A Latin H cannot establish the form of every script.

## Implementation & cautions

Wait for fonts before measuring. The demo uses DOM Range rectangles over one shaped text node, preserving contextual shaping. Ranges are not always independent glyph advances: ligatures and fallback fonts affect interpretation. Compare the same text, size and weight. Tabular digits align numerals within a font; they do not make all letters monospaced. Review fallback coverage, magnification and line length. Local font provenance and OFL licenses live in the font manifest.
