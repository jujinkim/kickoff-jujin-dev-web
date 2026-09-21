---
kind: guide
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
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "Describe this catalog using named regions and components. Propose mobile and desktop layouts, reading order, keyboard behavior, and empty/loading/error states. Ask about unresolved information priorities before choosing a layout. Return a text wireframe and testable acceptance criteria."
---

## Concept

Layout arranges regions. Headers identify, navigation connects sections, cards group content, and modal dialogs interrupt a task.

## Example

Catalog: header → filter toolbar → card grid → footer. On mobile, stack content in reading order.

## When to choose it

Grids aid scanning; lists accommodate long titles. Sidebars consume width. Dialogs require clear closing and focus management. Start with semantic landmarks and one mobile column. Include empty, loading, error, and keyboard states. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) · [WAI](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
