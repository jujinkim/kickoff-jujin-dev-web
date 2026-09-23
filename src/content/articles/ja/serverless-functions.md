---
kind: concept
articleId: serverless-functions
lang: ja
title: サーバーレス関数
summary: 呼び出し実行と永続状態を分けます。
category: hosting-models
aliases:
  - サーバーレス関数
related:
  - shipping
  - static-hosting
  - always-on-server
status: published
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: イベントで起動する管理型処理
  advantages: 基盤がサーバーを準備
  limitations: 再試行と寿命の設計が必要
  suitable: イベント中心のAPI
  combinations: 静的フロントエンドと外部ストア
---

## なぜ必要なのか

祭りの日程には時々保存要求が届く程度で、常時稼働のアプリは一日の大半を待機します。

## どう解決するのか

記事の閲覧は処理器を呼び出します。祭りの日程の保存は別の実行で外部ストアに記録します。再保存しても例の読者・記事キーにより記録は1件です。次の保存を失敗させるとストアを変えず失敗を返します。処理器の再起動は実行状態だけを破棄し、記録を残します。リセット・再読み込みは仮想ストアを含むページメモリ全体を消します。

## どんな考え方なのか

サーバーレス関数はイベントやリクエストに応じて管理された処理を実行します。基盤はサーバーを管理しますが、アプリの正しさは開発者の責任です。

重複処理と永続保存を設計し、前の実行環境が残ると仮定しないでください。

[出典](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
