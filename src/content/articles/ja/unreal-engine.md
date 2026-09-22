---
kind: concept
articleId: unreal-engine
lang: ja
title: Unreal Engine
summary: アクターの構成とイベントを結び付けます。
category: game-engines
aliases:
  - Unreal Engine
related:
  - tools
  - godot
  - unity
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  features: アクター・コンポーネント・Blueprintイベント
  advantages: ゲーム処理の経路を確認
  limitations: 大きなグラフは責任の整理が必要
  suitable: 視覚的なゲームスクリプト作成
  combinations: Blueprintの操作と得点処理
---

## 概念

Unreal Engineではレベルにアクターを配置します。コンポーネントが機能を提供し、Blueprintグラフは再利用クラスのゲームイベントと動作を定義できます。

## 実例

図にはプレイヤー・床・カメラ・収集アイテムのアクター1つがあります。アイテムへ移動で独自の重なり判定が動き、得点は0から1になりアクターが消えます。再接触しても加点されません。移動前に接触を無効にすると収集に失敗し、得点は0のままです。リセット・再読み込みで元に戻ります。概念シミュレーションです。

## 選ぶ条件

視覚的なゲームスクリプト作成に適しています。グラフの責任と得点の管理を明確にします。

[出典](https://dev.epicgames.com/documentation/en-us/unreal-engine/actors-in-unreal-engine) · [出典 2](https://dev.epicgames.com/documentation/en-us/unreal-engine/introduction-to-blueprints-visual-scripting-in-unreal-engine)
