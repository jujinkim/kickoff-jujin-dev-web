---
kind: guide
articleId: "collections"
lang: "ja"
title: "配列・リスト・マップ・集合：操作で選ぶ"
summary: "順序、検索、重複排除は別の仕事です。"
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
aiPrompt: "商品の選択について順序、重複、検索キー、直列化を確認して。例のデータと操作で配列・マップ・集合を比較して。未決定事項は質問し、推薦する表現と出力を示して。索引を複数持つなら同期の危険も書いて。"
---

## 概念

配列は添字付きの順序、マップはキーと値の対応、セットは重複しない項目を持ちます。リストの実装は言語で異なります。

## 実例

配列：下書き → レビュー → 公開。マップ(Map)：book-1 → 12000。セット：book-1を二回入れても一項目です。

## 選ぶ条件

配列は順序を保ち、マップはキー検索を明示します。セットは重複回数を失います。JavaScriptのオブジェクトキーは同一性で区別します。 同一性には安定したIDを使います。利点が同期の負担を上回る場合だけ複数の索引を保ちます。 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections) · [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
