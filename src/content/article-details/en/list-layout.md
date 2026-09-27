---
articleId: list-layout
lang: en
sourceRevision: 7
sources:
  - title: "W3C: CSS Grid Level 1"
    url: "https://www.w3.org/TR/css-grid-1/"
    claim: Grid tracks support aligned fields; the list pattern and fictional availability are authored design choices.
    checked: "2026-09-27"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: "Supports narrow-screen and zoom checks, not the definition of a layout or typeface."
    checked: "2026-09-27"
  - title: "Project Gutenberg: Pride and Prejudice"
    url: "https://www.gutenberg.org/ebooks/1342"
    claim: Confirms title and Jane Austen authorship; availability in the demo is fictional.
    checked: "2026-09-27"
  - title: "Project Gutenberg: Frankenstein"
    url: "https://www.gutenberg.org/ebooks/84"
    claim: Confirms title and Mary Shelley authorship; no lending data is fetched.
    checked: "2026-09-27"
  - title: "Project Gutenberg: Alice’s Adventures in Wonderland"
    url: "https://www.gutenberg.org/ebooks/11"
    claim: Confirms title and Lewis Carroll authorship; only bibliographic labels are used.
    checked: "2026-09-27"
  - title: "Project Gutenberg Canada: A Room of One’s Own"
    url: "https://www.gutenberg.ca/ebooks/woolfv-aroomofonesown/woolfv-aroomofonesown-00-h.html"
    claim: Confirms title and Virginia Woolf authorship; the demo does not reproduce the book.
    checked: "2026-09-27"
---

## Selection & comparison

Choose rows when users repeatedly scan the same text fields. A grid gives images equal emphasis; masonry preserves varied image proportions. A list can fill a main region beside separate filters.

## Applications

The book results expose title, author and lending status together. A directory or message inbox can use the same rhythm. Real bibliographic names are distinct from this example’s invented stock status.

## Implementation & cautions

Filter normalized text without persisting the query. Retain a labeled input and an explicit empty result. On narrow screens, move status below the title in the same row rather than hiding it. Real lending data needs a freshness and conflict policy.
