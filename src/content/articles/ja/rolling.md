---
kind: concept
articleId: rolling
lang: ja
title: ローリング
summary: 準備できたレプリカを順に置き換えます。
category: release-replacement
aliases:
  - ローリング
related:
  - shipping
  - blue-green
  - canary
status: published
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: レプリカを段階的に交換
  advantages: 準備済み旧版が処理を継続
  limitations: 混在する版の互換性が必要
  suitable: 複製されたサービス
  combinations: カナリア評価後にローリング交換
---

## なぜ必要なのか

四つの実行中の複製で天気の通知サービスを運営するとします。通知形式の変更を公開する間も、登録者には知らせを届け続ける必要があります。

天気の通知はレプリカ4個を更新する間も利用できる必要があります。旧版と新版が混在する時間を扱う方法が必要です。

## どう解決するのか

準備済みのv1が4個、予備枠が1つの状態から始めます。次へでv2追加・準備確認・v1削除を進め、v2が4個になるまで繰り返します。準備失敗は旧版削除の前に停止します。前へは前段階、リセット・再読み込みはv1の4個に戻ります。この例は利用不可を0個に制限しますが、準備状態は正しい動作の証明ではありません。

## どんな考え方なのか

ローリングリリースはレプリカを段階的に置き換えます。旧版と新版が共存するため、契約と共有データの互換性が必要です。

交換の前にカナリア評価を置けます。

[出典](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
