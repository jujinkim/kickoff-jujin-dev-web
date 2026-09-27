---
articleId: payments
lang: ja
sourceRevision: 8
sources:
  - title: "Stripe: fulfill orders"
    url: "https://docs.stripe.com/checkout/fulfillment"
    claim: 提供処理は複数回の実行に安全で、リダイレクトでなく信頼できる決済状態を使う必要があります。
    checked: "2026-09-27"
  - title: "Lemon Squeezy: merchant of record"
    url: "https://docs.lemonsqueezy.com/help/payments/merchant-of-record"
    claim: 対象の販売者義務を説明し、残る商品責任と資格は実契約で確認します。
    checked: "2026-09-27"
---

## 選択・比較

商品・市場・販売者所在地を確認してから決済構造を選びます。直接販売は取引義務を保持し、MoRは契約範囲の販売者を担います。ストア課金は該当する流通経路に関わります。決済業者名だけで全責任は決まりません。

## 応用例

オンライン講座は注文・事業者決済・権限記録を結びます。保留結果では講座を開きません。検証イベントが重複しても権限は一つで、提供失敗の支払済み注文は再請求せず復旧可能にします。

## 実装の参考・注意点

信頼できるサーバーで署名と注文金額・通貨・本人・完了状態を確認します。同時処理でも冪等性を永続記録し、欠落イベントを照合して返金後のアクセスを定めます。図は提供者へ接続せず、資格・税遵守・取引安全を実証しません。
