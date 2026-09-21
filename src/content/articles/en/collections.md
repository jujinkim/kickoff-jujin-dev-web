---
kind: guide
articleId: "collections"
lang: "en"
title: "Array, list, map, set: pick by operation"
summary: "Order, lookup, and uniqueness are different jobs."
category: "data"
aliases:
  [
    "array",
    "list",
    "map",
    "set",
    "배열",
    "리스트",
    "맵",
    "집합",
    "配列",
    "リスト",
    "マップ",
    "集合",
  ]
related: ["ooad", "srs"]
example: "collections"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "For our product selection, clarify ordering, duplicate handling, lookup keys, and serialization. Compare array, map, and set using example data and expected operations. Ask about unresolved requirements. Recommend a representation, show its output, and list synchronization risks if multiple indexes are kept."
---

## Concept

An array is an indexed sequence; a list is a sequence abstraction whose implementation varies. A map associates keys with values. A set represents unique membership. In JavaScript, Array usually serves as your everyday list. Do not assume every language gives ‘list’ the same performance.

## When you need it

Choose a collection when designing queues, product lookup, selected tags, or navigation. Ask whether order matters, duplicates are meaningful, and how items are found or removed.

## Example

Use an array for editorial steps, a map for price by product ID, and a set for selected IDs. The example deduplicates book-1. JavaScript Map keys and Set object entries use object identity, so two separate objects with the same fields are still distinct entries.

```text
const queue = ["draft", "review", "publish"];
const prices = new Map([["book-1", 12000]]);
const selected = new Set(["book-1", "book-1"]);
// queue[0] => draft; prices.get("book-1") => 12000
// selected.size => 1
```

## Options and tradeoffs

Arrays are easy to display in order, but searching by ID may scan all entries. Maps make keyed access explicit but need conversion for ordinary JSON serialization. Sets remove duplicates but lose duplicate counts. Typical hash implementations offer fast average lookup; exact guarantees depend on the language and runtime.

## When to choose it

Use IDs as keys when identity matters. Keep an array for visible ordering and a map only if lookup cost or clarity justifies keeping both in sync. Measure representative workloads before trading simple code for clever indexing.

## AI instructions

For our product selection, clarify ordering, duplicate handling, lookup keys, and serialization. Compare array, map, and set using example data and expected operations. Ask about unresolved requirements. Recommend a representation, show its output, and list synchronization risks if multiple indexes are kept.

## Related reading and sources

- [OOAD: give each object a job](/en/guides/ooad/)
- [SRS: make ‘done’ mean something](/en/guides/srs/)

- [MDN — Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)
- [MDN — Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
