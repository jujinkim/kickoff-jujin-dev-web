---
kind: "concept"
articleId: "usage-based"
lang: "ja"
title: "従量課金"
summary: "利用単位を測り、料金を計算します。"
category: "billing"
aliases: ["従量課金", "Usage-based billing"]
related:
  [
    "revenue",
    "one-time-payment",
    "subscription",
    "prepaid-credits",
    "volume-pricing",
  ]
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "測定した利用単位に課金",
    "advantages": "消費量に応じた料金",
    "limitations": "利用量で請求額が変わる",
    "suitable": "測定できる消費",
    "combinations": "定期回収や前払いクレジット",
  }
---

## なぜ必要なのか

地図画像を数枚だけ出す人と何百枚も出す人に同じ料金を求めると、利用量の違いを反映できません。

## どう解決するのか

架空の地図画像の出力ツールは1回0.02です。月100・300・600回なら2・6・12、合計20です。1か月目の利用量を変えるか1回追加すると、その月の料金と合計が変わります。この例では利用量0なら料金も0です。税金・手数料・返金は省略しています。

## どんな考え方なのか

従量課金は測定した消費量で料金を計算します。課金単位と回収周期は別に定め、サブスクリプション内でも利用できます。

計測方法と予算の変動を説明し、前払いクレジットと比較します。

[出典](https://docs.stripe.com/billing/usage-based)
