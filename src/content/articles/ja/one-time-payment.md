---
kind: "concept"
articleId: "one-time-payment"
lang: "ja"
title: "買い切り"
summary: "定めた利用権に一度だけ請求します。"
category: "billing"
aliases: ["買い切り", "One-time payment"]
related:
  [
    "revenue",
    "subscription",
    "usage-based",
    "prepaid-credits",
    "non-consumable-purchase",
  ]
status: "published"
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "一度だけ請求",
    "advantages": "購入額が明確",
    "limitations": "将来のサービス条件が必要",
    "suitable": "範囲の決まった成果物",
    "combinations": "非消耗型の利用権",
  }
---

## なぜ必要なのか

発表資料をダウンロードできるスライドに変えるツールを作るとします。顧客は一つのファイルを送り、成果物を受け取って作業を終えます。

スライド出力ツールは決まった成果物を渡すため、毎月同じ料金を求める理由が弱くなります。

## どう解決するのか

架空のスライド出力ツールは1か月目に30、2・3か月目に0を請求し、合計30です。共通の利用量は100・300・600回です。この例では購入権がその利用を含み、税金・手数料・返金は省略しています。時間軸は請求と利用量を分けます。

## どんな考え方なのか

買い切りは特定の購入に一度だけ請求します。アクセス・サポート・更新の権利は別に定め、一度の支払いが生涯のホスティングを約束するわけではありません。

サービス維持費が続くなら継続課金と比較します。

[出典](https://docs.stripe.com/payments/checkout)
