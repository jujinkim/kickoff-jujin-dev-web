---
kind: "concept"
articleId: "prepaid-credits"
lang: "ja"
title: "前払いクレジット"
summary: "先に残高を用意し、利用量に応じて減らします。"
category: "billing"
aliases: ["前払いクレジット", "Prepaid credits"]
related:
  [
    "revenue",
    "one-time-payment",
    "subscription",
    "usage-based",
    "consumable-purchase",
  ]
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "事前に用意した利用残高",
    "advantages": "支出の境界が見える",
    "limitations": "追加購入と期限の規則が必要",
    "suitable": "予算を決めた消費",
    "combinations": "利用量の計測",
  }
---

## なぜ必要なのか

変動する資源を使う前に支出の上限を決めたい。月末に制限なく請求される方式では予算を管理しにくくなります。

## どう解決するのか

架空の出力ツールは1,000クレジットで始まり、1回につき1を使います。共通の月間利用量100・300・600回を実行すると残高は900・600・0です。その後は仮の追加購入まで出力を止めます。この例では期限がなく、購入価格・税金・手数料・返金は省略しています。

## どんな考え方なのか

前払いクレジットは利用前に代金を受け取り、利用単位に応じて残高を減らします。価値・期限・対象用途は商品条件によります。

残高の規則を示し、利用量の計測と組み合わせます。

[出典](https://docs.stripe.com/billing/subscriptions/usage-based/billing-credits)
