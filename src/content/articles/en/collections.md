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
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "For our product selection, clarify ordering, duplicate handling, lookup keys, and serialization. Compare array, map, and set using example data and expected operations. Ask about unresolved requirements. Recommend a representation, show its output, and list synchronization risks if multiple indexes are kept."
---

## Concept

Arrays hold indexed sequences; maps associate keys with values; sets hold unique entries. List implementations vary by language.

## Example

Array: draft → review → publish. Map: book-1 → 12000. Set: book-1 twice produces one entry.

## When to choose it

Arrays preserve sequence; maps expose keyed lookup; sets discard duplicate counts. JavaScript object keys use identity. Use stable IDs for identity. Keep multiple indexes only when their benefit justifies synchronization. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections) · [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
