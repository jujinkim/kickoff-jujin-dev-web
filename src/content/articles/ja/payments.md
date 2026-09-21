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
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "商品と販売者所在地に合うToss PaymentsのPG、Lemon SqueezyのMoR、必要なストア課金を比較して。法域、顧客、経路の不足を質問して。日付付きの公式根拠で資格、料金、税の範囲、返金、精算を確認して。不明点を示し、選定前に質問して。サーバー検証と冪等な権限更新を要件に含めて。"
checked: "2026-09-21"
---

## 概念

決済チャネルは経路、PGは決済処理サービス、MoRは顧客との取引における法的な販売者です。

## 実例

ブラウザーの成功URLは支払いの証拠ではありません。サーバーで注文と金額を確認してから利用権を付与します。

## 選ぶ条件

PGとMoRの契約は責任を異なる形で配分します。名称だけで税、返金、商品の義務すべては決まりません。 最新の契約と許可された経路を確認します。信頼できるイベントを冪等に処理し、再試行で利用権を重複付与しないようにします。 [Toss Payments](https://docs.tosspayments.com/guides/v2/payment-widget/integration) · [Lemon Squeezy](https://docs.lemonsqueezy.com/help/payments/merchant-of-record) · [Apple](https://developer.apple.com/app-store/review/guidelines/) · [Google Play](https://support.google.com/googleplay/android-developer/answer/9858738)

出典確認：2026-09-21。条件は変わる場合があります。
