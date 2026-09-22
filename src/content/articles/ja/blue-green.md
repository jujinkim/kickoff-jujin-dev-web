---
kind: concept
articleId: blue-green
lang: ja
title: ブルーグリーン
summary: 経路を戻してもデータは残ります。
category: release-replacement
aliases:
  - ブルーグリーン
related:
  - shipping
  - rolling
  - canary
status: published
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 準備した2環境の経路を切り替え
  advantages: 旧環境を復帰用に維持
  limitations: 追加容量とデータ互換性が必要
  suitable: 制御可能なトラフィック切り替え
  combinations: 全面切り替え前のカナリア評価
---

## なぜ必要なのか

稼働中の環境を上書きすると、元へ戻すのが難しくなります。切り替え前に別の環境を検証したい場面です。

## どう解決するのか

最初はブルーv1が全トラフィックを受け、グリーンv2は待機します。次へでグリーンを検証してから切り替えます。検証失敗は切り替えを止めます。切り替え後のA17保存は互換性のある共有データに記録します。障害・復帰は経路をブルーへ戻しますがA17は残ります。前へも書き込みを消さず段階を戻します。リセット・再読み込みは全体を消します。

## どんな考え方なのか

ブルーグリーンは環境を2つ用意し、実際のトラフィックの行き先を変更します。経路を戻してもデータベースへの書き込みは取り消されません。

データの互換性と復旧は別に計画します。

[出典](https://martinfowler.com/bliki/BlueGreenDeployment.html)
