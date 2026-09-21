---
kind: guide
articleId: "revenue"
lang: "ja"
title: "サブスク・買い切り・広告：価値に合わせる"
summary: "料金表だけでは製品を救えません。"
category: "business"
aliases:
  [
    "subscription",
    "one-time",
    "advertising",
    "구독",
    "일회 결제",
    "광고",
    "サブスクリプション",
    "買い切り",
    "広告",
  ]
related: ["payments", "srs"]
example: "revenue"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "対象者と継続費用に基づき定期課金・買い切り・広告を比較して。仮定を明記し売上と費用を分けて。利用期間、解約、プライバシーの未決定事項を質問して。委任なしにモデルを決めず、判断記録と完了条件を残して。"
checked: "2026-09-21"
---

## 概念

サブスクリプションは継続的な利用や価値、買い切りは定めた権利に課金します。広告は注目や掲載枠を売ります。売上は利益ではなく、手数料、返金、税、基盤、サポート費用が残ります。

## 必要な場面

利用権、解約、アカウント削除を設計する前に選びます。毎月のサーバー代があるからと、顧客が定期課金を望むとは限りません。広告には読者と規約に合う掲載枠が必要です。

## 実例

ローカルの書き出しツールは特定版の永久ライセンス、共同作業サービスは継続提供に課金できます。公開教材では読書体験と規模が合えば広告を検討できます。下の計算は費用を除いた例で、収益の約束ではありません。

```text
Illustrative monthly model, not a forecast:
100 members x $5 = $500 gross recurring revenue
minus fees, refunds, tax, hosting, support, acquisition
One-time: new sales must cover ongoing promises
Ads: eligible traffic x variable realized yield
```

## 選択肢とトレードオフ

定期課金は継続サービスと合いますが、離脱、決済失敗、解約への対応が必要。買い切りは説明しやすい反面、長期支援を賄えない場合があります。広告は支払いの壁を下げますが規模依存、プライバシー、注意散漫を増やします。混合は運用を複雑にします。

## 選ぶ条件

何を何年間提供し、解約や支払い失敗後にどうなるかを記録します。控えめな売上と全運用費を計算しましょう。三列の料金表を磨く前に支払い意思を確認し、提供元の利用資格と規約は公開前に直接確認します。

## AIへの指示例

対象者と継続費用に基づき定期課金・買い切り・広告を比較して。仮定を明記し売上と費用を分けて。利用期間、解約、プライバシーの未決定事項を質問して。委任なしにモデルを決めず、判断記録と完了条件を残して。

## 関連記事と出典

- [決済経路とPG・MoR：TossとLemon Squeezy](/ja/guides/payments/)
- [SRSと完了条件：「完成」の意味から](/ja/guides/srs/)

- [Stripe — Billing subscriptions](https://docs.stripe.com/billing/subscriptions/overview)
- [Google — AdSense eligibility](https://support.google.com/adsense/answer/9724)

サービス資料確認日：2026-09-21。提供範囲・規約・契約は変わるため、公開前に再確認してください。
