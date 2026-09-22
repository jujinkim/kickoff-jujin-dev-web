---
kind: "concept"
articleId: "subscription"
lang: "ja"
title: "サブスクリプション"
summary: "継続課金とアクセス方針を定めます。"
category: "billing"
aliases: ["サブスクリプション", "Subscription"]
related:
  [
    "revenue",
    "one-time-payment",
    "usage-based",
    "prepaid-credits",
    "flat-rate-pricing",
  ]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "期間ごとの継続課金",
    "advantages": "継続サービスを支える",
    "limitations": "更新と失敗への対応が必要",
    "suitable": "継続する顧客価値",
    "combinations": "従量料金または定額",
  }
---

## 概念

サブスクリプションは合意した期間ごとに請求を繰り返します。従量料金を含めることもでき、継続課金は定額と同義ではありません。

## 実例

架空の出力ツールは月12を請求します。100・300・600回使った3か月の支払いが成功すると合計36です。期間を進め、更新停止や支払い失敗を試します。この例では支払済み期間の終了時にアクセスが終わり、失敗時は再試行の成功まで停止します。税金・手数料・返金は省略しています。

## 選ぶ条件

価値を継続提供する場合に適します。更新と失敗時の方針を明示し、利用量が変わるなら従量課金と組み合わせます。

[出典](https://docs.stripe.com/billing/subscriptions/overview)
