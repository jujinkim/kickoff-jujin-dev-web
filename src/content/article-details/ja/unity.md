---
articleId: unity
lang: ja
sourceRevision: 7
sources:
  - title: "Unity: GameObjects"
    url: "https://docs.unity3d.com/Manual/GameObjects.html"
    claim: GameObjectとコンポーネントの機能を説明し、迷路の模型はUnityを実行しません。
    checked: "2026-09-27"
---

## 選択・比較

GameObjectとコンポーネントの構成やチームの道具がゲームに合うときに使います。Godotは再利用するノードシーン、UnrealはActorとBlueprintを提供します。実際の道具で対象環境・ライフサイクル・素材の流れを確認します。

## 応用例

博物館の迷路の鍵は表示・衝突・独自挙動を持ちます。接触で得点を一度増やし、鍵を消します。接触しない状態は検査する規則を示し、物理シミュレーションではありません。

## 実装の参考・注意点

得点の所有者を一つにし、取得の重複処理を防ぎます。実エンジンで参照とライフサイクルを確かめます。模型は再読み込みで消え、ゲーム保存の耐久性や出力互換性は証明しません。
