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
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: ノードで作る再利用シーン
  advantages: アイテム構成を再利用
  limitations: 接触処理の検証が必要
  suitable: シーン中心の試作
  combinations: プレイヤーとアイテムのシーンを分離
---

## なぜ必要なのか

ゲームには小さな部品から成る物体が繰り返し登場します。一つずつ別に作ると、共通動作を直しにくくなります。

## どう解決するのか

図にはプレイヤー・床・カメラ・収集アイテムのインスタンス1つがあります。アイテムへ移動で独自の接触処理が動き、得点は0から1になりアイテムが消えます。再接触しても加点されません。移動前に接触を無効にすると収集に失敗し、得点は0のままです。リセット・再読み込みで元に戻ります。実際のエンジンではなく概念シミュレーションです。

## どんな考え方なのか

Godotはノードをシーンにまとめ、別のシーン内にインスタンスとして置けます。シーンは再利用する収集アイテムにもゲームの開始点にもなります。

ゲーム処理と書き出し結果は別に検証します。

[出典](https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html)
