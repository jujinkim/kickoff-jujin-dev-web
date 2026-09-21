---
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
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "商品の選択について順序、重複、検索キー、直列化を確認して。例のデータと操作で配列・マップ・集合を比較して。未決定事項は質問し、推薦する表現と出力を示して。索引を複数持つなら同期の危険も書いて。"
---

## 概念

配列は添字でアクセスする列、リストは実装が様々な列の抽象です。マップはキーと値を対応させ、集合は一意な要素の所属を表します。JavaScriptでは日常的なリストにArrayを使います。言語が違えばリストの性能も違います。

## 必要な場面

待ち行列、商品検索、選択タグ、ナビゲーションで選びます。順序、重複の意味、探し方、削除方法を確認してください。

## 実例

編集段階には配列、商品ID別の価格にはマップ、選択IDには集合を使います。例ではbook-1の重複が一つになります。JavaScriptのMapのオブジェクトキーとSetのオブジェクト要素は同一性で比較するため、同じフィールドを持つ別オブジェクトは別項目です。

```text
const queue = ["draft", "review", "publish"];
const prices = new Map([["book-1", 12000]]);
const selected = new Set(["book-1", "book-1"]);
// queue[0] => draft; prices.get("book-1") => 12000
// selected.size => 1
```

## 選択肢とトレードオフ

配列は順序表示が簡単ですがID検索で全件走査することがあります。マップはキー検索を明確にする反面、通常のJSON直列化には変換が必要です。集合は重複を消すと出現回数を失います。ハッシュの平均検索は一般に速くても、保証は言語と実行環境次第です。

## 選ぶ条件

同一性が重要ならIDをキーにします。表示順は配列にし、検索費用や明確さが必要な場合だけマップを追加します。両方を持てば同期が必要。巧妙な索引より実際の負荷測定が先です。

## AIへの指示例

商品の選択について順序、重複、検索キー、直列化を確認して。例のデータと操作で配列・マップ・集合を比較して。未決定事項は質問し、推薦する表現と出力を示して。索引を複数持つなら同期の危険も書いて。

## 関連記事と出典

- [OOADと責務分離：それぞれに仕事を](/ja/catalog/ooad/)
- [SRSと完了条件：「完成」の意味から](/ja/catalog/srs/)

- [MDN — Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)
- [MDN — Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
