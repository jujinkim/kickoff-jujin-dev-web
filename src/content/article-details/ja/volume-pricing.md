---
articleId: volume-pricing
lang: ja
sourceRevision: 6
sources:
  - title: "Stripe: tiered pricing"
    url: "https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing"
    claim: 数量制は選択段階の単価を全体に適用し、境界で総額が下がる場合があります。
    checked: "2026-09-27"
---

## 選択・比較

印刷店が大口注文全体へ低い単価を適用したいときに合います。段階制は後の数量だけを割り引き、この方式で起こる総額低下を避けます。基本料＋超過料は含有量を超えた分に請求します。

## 応用例

月100回までは単価0.20、その後は全出力に0.10です。100回は20、101回は10.10、120回は12です。利用容量と販売者の提供義務は価格式と別です。

## 実装の参考・注意点

0と各境界の両側を確認します。価格低下を明示し、段階制の計算へすり替えません。架空の模型に段階固定料・税・返金・最低料は含みません。
