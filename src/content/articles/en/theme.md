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
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "Audit our colors, typography, and spacing. Propose semantic tokens and font fallbacks for English, Korean, and Japanese. Show light/dark examples and contrast measurements. Ask me to choose unresolved visual directions before applying them. Preserve keyboard focus and saved theme preference."
---

## Concept

A theme groups visual decisions. Design tokens name shared colors, spacing, and typography; font choice is only one part.

## Example

A card uses surface and text tokens. Changing those shared values changes its theme without rewriting the card.

## When to choose it

System fonts vary by device; self-hosted fonts add consistency, downloads, and licensing work. Dark mode needs separate contrast checks. Keep role-based colors, readable text, visible focus, and saved theme choice. Check actual backgrounds, not color names. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) · [W3C](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
