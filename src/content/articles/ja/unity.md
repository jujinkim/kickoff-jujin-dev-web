---
kind: concept
articleId: unity
lang: ja
title: Unity
summary: コンポーネントが動作を与えます。
category: game-engines
aliases:
  - Unity
related:
  - tools
  - godot
  - unreal-engine
status: published
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: GameObjectにコンポーネントを付与
  advantages: 動作の責任を分担
  limitations: 参照とライフサイクルの検証が必要
  suitable: コンポーネント中心のゲーム開発
  combinations: 得点処理と表示を分離
---

## なぜ必要なのか

ゲームの物体は共通の機能を異なる形で組み合わせます。物体ごとの大きなスクリプトでは、同じ責任が重複します。

## どう解決するのか

図にはプレイヤー・床・カメラ・収集アイテム1つがあります。アイテムへ移動で独自の接触処理が動き、得点は0から1になりアイテムが消えます。再接触しても加点されません。移動前に接触を無効にすると収集に失敗し、得点は0のままです。リセット・再読み込みで元に戻ります。実際のエンジンではなく概念シミュレーションです。

## どんな考え方なのか

UnityのGameObjectはコンポーネントを保持します。Transform・描画・衝突・独自スクリプトが役割を分担し、名前だけではゲーム動作は生まれません。

得点の管理責任を明確にし、参照を検証します。

[出典](https://docs.unity3d.com/Manual/GameObjects.html)
