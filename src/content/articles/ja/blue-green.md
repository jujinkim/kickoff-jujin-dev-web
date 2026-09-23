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
revision: 4
sourceRevision: 4
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

一日中注文が入るオンライン店を運営するとします。新版で注文の確認手順が変わるため、買い物客に使わせる前に動作を確かめたい場面です。

オンライン店では決済の経路を移す前に新版を確かめる必要があります。切り替え前に別の環境を検証したい場面です。

## どう解決するのか

最初はブルーv1が全トラフィックを受け、グリーンv2は待機します。次へでグリーンを検証してから切り替えます。検証失敗は切り替えを止めます。切り替え後の注文の領収書保存は互換性のある共有データに記録します。障害・復帰は経路をブルーへ戻しますが注文の領収書は残ります。前へも書き込みを消さず段階を戻します。リセット・再読み込みは全体を消します。

## どんな考え方なのか

ブルーグリーンは環境を2つ用意し、実際のトラフィックの行き先を変更します。経路を戻してもデータベースへの書き込みは取り消されません。

データの互換性と復旧は別に計画します。

[出典](https://martinfowler.com/bliki/BlueGreenDeployment.html)
