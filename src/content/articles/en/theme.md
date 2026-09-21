---
kind: guide
articleId: "theme"
lang: "en"
title: "Themes and fonts without fifty shades of almost"
summary: "Use shared tokens so one decision stays one decision."
category: "design"
aliases:
  [
    "theme",
    "font",
    "design tokens",
    "테마",
    "폰트",
    "공통 스타일",
    "テーマ",
    "フォント",
    "デザイントークン",
  ]
related: ["layout", "architecture"]
example: "theme"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "Audit our colors, typography, and spacing. Propose semantic tokens and font fallbacks for English, Korean, and Japanese. Show light/dark examples and contrast measurements. Ask me to choose unresolved visual directions before applying them. Preserve keyboard focus and saved theme preference."
---

## Concept

A theme is a set of visual decisions. Design tokens give names to colors, spacing, typography, and other shared values. Semantic tokens such as surface and text explain purpose better than green-7. A font family is only part of typography; size, line height, weight, and line length shape reading.

## When you need it

Use tokens when multiple components should change together or when supporting light and dark themes. Multilingual pages need fallbacks for Korean and Japanese, not empty squares wearing a premium Latin font.

## Example

The CSS example changes surface and text tokens for dark mode while the card uses the same rules. Keep focus rings and status colors distinct. Font loading should leave text readable; compare system fonts with self-hosted licensed files using actual multilingual paragraphs.

```text
:root { --surface: #fffdf7; --ink: #243e35; }
[data-theme=dark] { --surface: #182922; --ink: #f5f2e7; }
.card { background: var(--surface); color: var(--ink); }
```

## Options and tradeoffs

System fonts load without an extra font request but vary by device. Self-hosted fonts improve consistency but add bytes, licensing, and subset work. Semantic tokens ease global changes but need documented intent. Dark mode needs separate contrast checks; inversion alone is not a design system.

## When to choose it

Start with a small type scale and role-based colors. Check normal text contrast against its actual background; WCAG AA calls for 4.5:1 for ordinary text and 3:1 for qualifying large text. Check controls and focus visibility too. Persist explicit theme choice and use device preference only when no choice exists.

## AI instructions

Audit our colors, typography, and spacing. Propose semantic tokens and font fallbacks for English, Korean, and Japanese. Show light/dark examples and contrast measurements. Ask me to choose unresolved visual directions before applying them. Preserve keyboard focus and saved theme preference.

## Related reading and sources

- [Name the layout you are pointing at](/en/guides/layout/)
- [Architecture without acronym worship](/en/guides/architecture/)

- [MDN — Custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [W3C — Contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
