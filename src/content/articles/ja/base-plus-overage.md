---
kind: "concept"
articleId: "base-plus-overage"
lang: "ja"
title: "基本料＋超過利用量"
summary: "基本料に含まれる量を超えた分だけ加算します。"
category: "pricing-models"
aliases: ["基本料＋超過利用量", "Base fee plus overage"]
related:
  [
    "revenue",
    "flat-rate-pricing",
    "per-seat-pricing",
    "feature-tiered-pricing",
    "volume-pricing",
    "graduated-pricing",
    "subscription",
    "usage-based",
  ]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "基本料と超過分",
    "advantages": "基本サービスを支える",
    "limitations": "利用0でも基本料を請求",
    "suitable": "固定費と変動費",
    "combinations": "継続課金と利用量の計測",
  }
---

## 概念

基本料＋超過利用量は、固定料金に含まれる利用量と超過単価を組み合わせます。利用がなくても基本料は請求されます。

## 実例

架空の作業スペースは3席・月120回の出力を使います。月額基本料20に100回を含み、超過分は1回0.10です。合計は20 + 20 × 0.10 = 22です。利用量を変えると0回と100回はともに20、101回は20.10です。税金・手数料・返金は省略しています。

## 選ぶ条件

基本サービスと変動する消費の両方が重要な場合に適します。継続課金と組み合わせます。

[出典](https://docs.stripe.com/products-prices/pricing-models)
