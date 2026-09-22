---
kind: concept
articleId: always-on-server
lang: ja
title: 常時稼働サーバー
summary: プロセスとデータの寿命は異なります。
category: hosting-models
aliases:
  - 常時稼働サーバー
related:
  - shipping
  - static-hosting
  - serverless-functions
status: published
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 長時間稼働するリクエスト待機プロセス
  advantages: 実行環境を直接制御
  limitations: 監視と復旧の担当が必要
  suitable: 独自の実行動作
  combinations: 外部の永続ストアと静的フロントエンド
---

## なぜ必要なのか

要求を処理する実行環境とプロセスの寿命を自分で管理したい。要求ごとの処理だけでは必要な運用を表せない場面です。

## どう解決するのか

記事の閲覧とA17の保存は待機中のプロセスに入ります。保存は外部ストアに記録します。再保存しても例の読者・記事キーにより記録は1件です。次の保存を失敗させるとストアを変えず失敗を返します。処理器の再起動はプロセスだけを置き換え、記録を残します。リセット・再読み込みは仮想ストアを含むページメモリ全体を消します。

## どんな考え方なのか

常時稼働サーバーはプロセスが継続してリクエストを待つ運用を意図します。再起動は起こるため、名前が無停止を保証するわけではありません。

永続データは外部に置き、監視・容量・復旧の担当者を決めます。

[出典](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
