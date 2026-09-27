---
articleId: godot
lang: ja
sourceRevision: 8
sources:
  - title: "Godot: Nodes and Scenes"
    url: "https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html"
    claim: ノード・シーン・インスタンスの資料です。果樹園はエンジンの出力ではなくブラウザーの模型です。
    checked: "2026-09-27"
---

## 選択・比較

再利用するノード階層がチームと対象環境に合うときに選びます。UnityはGameObjectとコンポーネント、UnrealはActorとBlueprintを提供します。図だけで選ばず、実際の出力と入力を試作で確かめます。

## 応用例

果樹園は見た目と接触の部分からリンゴを構成します。取得で得点が一度増え、インスタンスが消えます。重複接触の防止は独自の保護処理で、シーンだけで保証されません。

## 実装の参考・注意点

得点と取得済み状態の所有者を定めます。シグナルを一度接続し、接触無効と繰り返しを検査します。模型はページメモリで、保存・物理・入力・出力は実エンジンで検証します。
