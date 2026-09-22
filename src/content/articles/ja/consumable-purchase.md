---
kind: "concept"
articleId: "consumable-purchase"
lang: "ja"
title: "消耗型購入"
summary: "購入した数量が使用で減ります。"
category: "purchase-types"
aliases: ["消耗型購入", "Consumable purchase"]
related: ["revenue", "non-consumable-purchase", "prepaid-credits", "freemium"]
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "使用で数量を消費",
    "advantages": "繰り返し購入できる",
    "limitations": "残高と支出の説明が必要",
    "suitable": "任意の消耗アイテム",
    "combinations": "フリーミアムのアクセス",
  }
---

## なぜ必要なのか

ヒントは使うたびに減ります。永久の利用権では、減る残高と買い足しを表現できません。

## どう解決するのか

架空のパズルアプリはヒント0個で始まります。3個買って繰り返し使うと残高は0になり、それ以上は使えません。再度パックを買うと3個増えます。ページ内の仮の例で、実際の購入は処理しません。価格・税金・手数料・返金は省略し、リセットや再読み込みで例を消去します。

## どんな考え方なのか

消耗型購入は使用すると減り、再購入できる単位を提供します。非消耗型の機能利用権とは異なります。

無料アクセスと組み合わせ、残高と支出を明確にします。

[出典](https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types)
