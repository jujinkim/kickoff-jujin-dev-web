---
kind: "concept"
articleId: "volume-pricing"
lang: "ja"
title: "全数量段階単価"
summary: "最終数量の区分で全単位の単価を決めます。"
category: "pricing-models"
aliases: ["全数量段階単価", "Volume pricing"]
related:
  [
    "revenue",
    "flat-rate-pricing",
    "per-seat-pricing",
    "feature-tiered-pricing",
    "graduated-pricing",
    "base-plus-overage",
    "usage-based",
  ]
status: "published"
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "全単位に一つの単価",
    "advantages": "全数量への割引",
    "limitations": "境界で合計が下がり得る",
    "suitable": "意図した数量割引",
    "combinations": "利用量の計測と継続課金",
  }
---

## なぜ必要なのか

印刷店がポスターを出力するデザインツールを作るとします。一人の顧客向けに数枚だけ作ることも、催し向けに大量に作ることもあります。

印刷店のデザインツールは大量出力で単価が下がりますが、割引が全量に及ぶか明確にする必要があります。

## どう解決するのか

架空の印刷店のデザインツールは3席・月120回の出力を使います。100回までは単価0.20、超えると全量が0.10なので120回は12です。利用量を変えると100回は20、101回は10.10、0回は0です。税金・手数料・返金・区分固定料は省略しています。

## どんな考え方なのか

全数量段階単価は、最終数量が属する区分の単価をすべての単位に適用します。累進方式と異なり、境界を超えると合計が下がる場合があります。

境界の影響を示し、同じ区分表で累進方式と比較します。

[出典](https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing)
