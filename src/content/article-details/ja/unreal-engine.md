---
articleId: unreal-engine
lang: ja
sourceRevision: 7
sources:
  - title: "Epic: Blueprint Visual Scripting"
    url: "https://dev.epicgames.com/documentation/en-us/unreal-engine/introduction-to-blueprints-visual-scripting-in-unreal-engine"
    claim: Blueprintクラスでの視覚的なゲーム処理を説明し、コインの流れはブラウザーの説明模型です。
    checked: "2026-09-27"
---

## 選択・比較

再利用する視覚イベントグラフとActor構成が合うときに選びます。GodotのノードシーンやUnityのコンポーネント方式も比較します。描画目標だけでなく作成・配布・運用の制約を確かめます。

## 応用例

村のゲームのコインActorは重なりイベントを受け、取得済みか確認して得点を増やし消えます。繰り返しても得点は1です。Actorの機能とイベント経路に書いた規則を分けます。

## 実装の参考・注意点

得点と消費状態の所有者を定め、責務を隠す巨大なグラフを避けます。実際のUnrealで重なり設定・重複・破棄を検査します。ブラウザー模型はUnrealを読み込まず、性能・パッケージ・保存動作を証明しません。
