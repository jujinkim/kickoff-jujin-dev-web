---
kind: "concept"
articleId: "non-consumable-purchase"
lang: "ja"
title: "非消耗型購入"
summary: "繰り返し使っても購入権が残ります。"
category: "purchase-types"
aliases: ["非消耗型購入", "Non-consumable purchase"]
related: ["revenue", "consumable-purchase", "one-time-payment", "freemium"]
status: "published"
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "維持される購入権",
    "advantages": "消耗せず繰り返し使える",
    "limitations": "購入復元の実装が必要",
    "suitable": "持続する任意の機能",
    "combinations": "フリーミアムと買い切り",
  }
---

## なぜ必要なのか

暗い画面を選べる夜のパズルアプリを作るとします。プレイヤーは店でテーマを買い、次に開いたときも選べると期待します。

夜のパズルで暗いテーマを一度買った人は、その後のプレイでも使えると期待します。

## どう解決するのか

架空の夜のパズルアプリは夜のテーマがロックされた状態で始まります。一度買って繰り返し適用しても権利は残り、購入回数は1です。この例の再購入操作では再請求しません。実際の購入復元は実装範囲外です。価格・税金・手数料・返金は省略し、リセットは例だけを消去します。

## どんな考え方なのか

非消耗型購入は、使用で減ったり期限切れになったりしない権利を開放します。消耗する数量や継続課金とは異なります。

無料アクセスと組み合わせ、購入復元は別に設計します。

[出典](https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types)
