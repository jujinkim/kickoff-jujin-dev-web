---
kind: guide
articleId: "payments"
lang: "ja"
title: "決済経路とPG・MoR：TossとLemon Squeezy"
summary: "決済ボタンは事務作業の始まりです。"
category: "business"
aliases:
  [
    "PG",
    "MoR",
    "Toss Payments",
    "Lemon Squeezy",
    "결제",
    "토스",
    "전자결제대행",
    "決済",
    "販売責任者",
  ]
related: ["revenue", "shipping"]
example: "payments"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "商品と販売者所在地に合うToss PaymentsのPG、Lemon SqueezyのMoR、必要なストア課金を比較して。法域、顧客、経路の不足を質問して。日付付きの公式根拠で資格、料金、税の範囲、返金、精算を確認して。不明点を示し、選定前に質問して。サーバー検証と冪等な権限更新を要件に含めて。"
checked: "2026-09-21"
---

## 概念

決済経路はWebのチェックアウトやストア課金など支払いの道です。PGは決済処理を支援します。MoRは顧客との取引における法的な販売主体です。交換できるブランド名ではなく、異なる責任を表します。

## 必要な場面

顧客、販売者所在地、商品種別、配布経路を決めてから比較します。税、資格、ストア規約、返金、精算が実現性を左右します。実際の法域と契約の現行条件を確認し、このガイドだけで個別事業の判断を完結させないでください。

## 実例

Toss Paymentsは加盟店向けの決済連携を提供します。Lemon SqueezyはMoRとしてサービス範囲内の売上税や返金などを扱うと説明しています。通常のPG契約が販売者の全義務を引き受けると推測しないこと。MoRも制作者自身の会計や製品責任までは消しません。

```text
Customer -> permitted checkout channel -> payment provider
Server: verify order + amount -> confirm payment
Verified event -> idempotent entitlement update
Refund / dispute -> reconcile entitlement and records
Never grant access solely from a browser success URL.
```

## 選択肢とトレードオフ

PGは直接販売に合う反面、自分で運用する仕事が多く残ります。MoRは越境取引業務を減らせますが利用資格、精算、サービスの制約があります。モバイルのストア課金は別の規約問題で、外部決済の可否は現行規則、地域、プログラムで異なります。

## 選ぶ条件

対応国・商品、精算、返金、税の範囲、料金、許可経路を現行契約で確認します。普遍的な料金を約束しないこと。保存した注文と金額をサーバーで照合し、信頼できるイベントを冪等に処理します。成功URLは支払いの証明ではありません。

## AIへの指示例

商品と販売者所在地に合うToss PaymentsのPG、Lemon SqueezyのMoR、必要なストア課金を比較して。法域、顧客、経路の不足を質問して。日付付きの公式根拠で資格、料金、税の範囲、返金、精算を確認して。不明点を示し、選定前に質問して。サーバー検証と冪等な権限更新を要件に含めて。

## 関連記事と出典

- [サブスク・買い切り・広告：価値に合わせる](/ja/guides/revenue/)
- [Web・アプリ・PC・コンソールの届け方](/ja/guides/shipping/)

- [Toss Payments — Payment integration](https://docs.tosspayments.com/guides/v2/payment-widget/integration)
- [Lemon Squeezy — Merchant of Record](https://docs.lemonsqueezy.com/help/payments/merchant-of-record)
- [Apple — App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Google Play — Payments policy](https://support.google.com/googleplay/android-developer/answer/9858738)

サービス資料確認日：2026-09-21。提供範囲・規約・契約は変わるため、公開前に再確認してください。
