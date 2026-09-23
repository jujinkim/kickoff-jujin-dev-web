---
kind: "concept"
articleId: "per-seat-pricing"
lang: "ja"
title: "席数課金"
summary: "利用権を持つ席ごとに請求します。"
category: "pricing-models"
aliases: ["席数課金", "Per-seat pricing"]
related:
  [
    "revenue",
    "flat-rate-pricing",
    "feature-tiered-pricing",
    "volume-pricing",
    "graduated-pricing",
    "base-plus-overage",
    "subscription",
  ]
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "席数と単価の積",
    "advantages": "利用権に応じて拡張",
    "limitations": "課金対象の席の定義が必要",
    "suitable": "チーム向け製品",
    "combinations": "継続課金や機能パッケージ",
  }
---

## なぜ必要なのか

診察予定ツールは規模の異なるチームが使い、二人の診療所と大きな医院を同額にすると差が反映されません。

## どう解決するのか

架空の診察予定ツールは3席・月120回の出力で始まります。1席月8なら合計24です。席数を変えると4席は32、この例の0席は0です。出力回数は計算に影響しません。日割り・税金・手数料・返金は省略しています。

## どんな考え方なのか

席数課金は席数に単価を掛けます。課金対象の席を定める必要があり、活動量や利用量とは別の指標です。

継続課金と組み合わせ、席の変更と請求時期は別に定めます。

[出典](https://docs.stripe.com/products-prices/pricing-models)
