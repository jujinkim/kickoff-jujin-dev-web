---
kind: "concept"
articleId: "graduated-pricing"
lang: "ja"
title: "区分別累進単価"
summary: "各区分の利用量を別々に計算して合計します。"
category: "pricing-models"
aliases: ["区分別累進単価", "Graduated pricing"]
related:
  [
    "revenue",
    "flat-rate-pricing",
    "per-seat-pricing",
    "feature-tiered-pricing",
    "volume-pricing",
    "base-plus-overage",
    "usage-based",
  ]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "区分ごとに計算して合算",
    "advantages": "先の単位の価格を維持",
    "limitations": "計算の説明が増える",
    "suitable": "段階的な利用量割引",
    "combinations": "利用量の計測と継続課金",
  }
---

## 概念

区分別累進単価は、各区分の利用量をその単価で計算して足します。安い区分に達しても、それ以前の単位の価格は変わりません。

## 実例

架空の作業スペースは3席・月120回の出力を使います。最初の100回は1回0.20、それ以降は0.10です。100 × 0.20 + 20 × 0.10 = 22となります。利用量を変えると100回は20、101回は20.10、0回は0です。税金・手数料・返金・区分固定料は省略しています。

## 選ぶ条件

追加数量に段階的な割引を適用する場合に適します。同じ境界で全数量段階単価と比較します。

[出典](https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing)
