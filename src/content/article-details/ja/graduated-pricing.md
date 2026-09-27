---
articleId: graduated-pricing
lang: ja
sourceRevision: 6
sources:
  - title: "Stripe: tiered pricing"
    url: "https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing"
    claim: 段階制は前の数量を再計算せず、各段階の金額を合計します。
    checked: "2026-09-27"
---

## 選択・比較

教材作成で前の作業価格を保ちつつ追加出力を割り引く場合に合います。数量制は境界で全体の単価を変えます。基本料＋超過料は含有量の基本料を取るため、境界が同じでも式が違います。

## 応用例

顧客は月の最初の100回に各0.20、その後に各0.10を払います。120回は20＋2＝22、101回は20.10です。この条件の0回は0です。

## 実装の参考・注意点

境界の含み方を明示し、正確な通貨単位で計算します。0・100・101・120を確認します。段階固定料・権限執行・販売義務・徴収は計算外なので、小計表から推定しません。
