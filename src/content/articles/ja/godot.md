---
kind: concept
articleId: godot
lang: ja
title: Godot
summary: ノードで再利用可能なシーンを構成します。
category: game-engines
aliases:
  - Godot
related:
  - tools
  - unity
  - unreal-engine
status: published
revision: 6
sourceRevision: 6
updated: "2026-09-26"
checked: "2026-09-22"
comparison:
  features: ノードで作る再利用シーン
  advantages: アイテム構成を再利用
  limitations: 接触処理の検証が必要
  suitable: シーン中心の試作
  combinations: プレイヤーとアイテムのシーンを分離
---

## なぜ必要なのか

プレイヤーがリンゴへ移動して得点する果樹園ゲームを作るとします。リンゴごとに見た目と接触処理をコピーすると修正がずれます。制作側は表示と接触の部品をツリーとして再利用したく、視覚的な動作グラフよりシーン中心の作業を重視します。

## どう解決するのか

図にはプレイヤー・床・カメラ・リンゴのインスタンス1つがあります。アイテムへ移動で独自の接触処理が動き、得点は0から1になりアイテムが消えます。再接触しても加点されません。移動前に接触を無効にすると収集に失敗し、得点は0のままです。リセット・再読み込みで元に戻ります。実際のエンジンではなく概念シミュレーションです。

## どんな考え方なのか

Godotはノードをシーンにまとめ、別のシーン内にインスタンスとして置けます。シーンは再利用するリンゴにもゲームの開始点にもなります。

ゲーム処理と書き出し結果は別に検証します。

[出典](https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html)
