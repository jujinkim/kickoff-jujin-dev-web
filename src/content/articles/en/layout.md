---
articleId: "layout"
lang: "en"
title: "Name the layout you are pointing at"
summary: "Header, sidebar, grid, dialog: give your feedback coordinates."
category: "design"
aliases:
  [
    "layout",
    "sidebar",
    "breadcrumb",
    "modal",
    "레이아웃",
    "사이드바",
    "모달",
    "レイアウト",
    "サイドバー",
    "モーダル",
  ]
related: ["theme", "srs"]
example: "layout"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "Describe this catalog using named regions and components. Propose mobile and desktop layouts, reading order, keyboard behavior, and empty/loading/error states. Ask about unresolved information priorities before choosing a layout. Return a text wireframe and testable acceptance criteria."
---

## Concept

Layout arranges regions; components perform smaller jobs. A header identifies the site, navigation helps move between sections, breadcrumbs show hierarchy, cards group related content, and a dialog interrupts the current task. A drawer is a panel pattern, not a synonym for every sidebar.

## When you need it

Use these names when a screenshot is clearer than your request. Describe the region, alignment, spacing, state, and responsive behavior. ‘Make it cleaner’ sends AI on an unpaid guessing expedition.

## Example

A catalog can use a header, filter toolbar, card grid, and footer. An article can add a table of contents next to the main text. On a narrow screen move secondary navigation above or below the article, preserving a sensible reading order. The diagram below remains useful without an image.

```text
[ Header: identity + navigation ]
[ Breadcrumb: Catalog > Design ]
[ Sidebar ] [ Main: article + examples ]
[ Footer: related links ]
Mobile: main content first; navigation collapses
```

## Options and tradeoffs

A grid supports scanning several items; a list makes comparison of long titles easier. A persistent sidebar gives quick access but consumes width. A modal focuses a short task but requires focus management, a clear close action, and returning focus to its trigger.

## When to choose it

Start with semantic HTML landmarks and a single-column mobile flow. Add grid columns when content has room. Use a dialog only when interruption helps the task. Specify empty, loading, error, and keyboard states alongside the happy screenshot.

## AI instructions

Describe this catalog using named regions and components. Propose mobile and desktop layouts, reading order, keyboard behavior, and empty/loading/error states. Ask about unresolved information priorities before choosing a layout. Return a text wireframe and testable acceptance criteria.

## Related reading and sources

- [Themes and fonts without fifty shades of almost](/en/catalog/theme/)
- [SRS: make ‘done’ mean something](/en/catalog/srs/)

- [MDN — CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [WAI — Dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
