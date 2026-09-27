---
articleId: react
lang: ja
sourceRevision: 7
sources:
  - title: "React: State as a Snapshot"
    url: "https://react.dev/learn/state-as-a-snapshot"
    claim: 状態設定が描画を要求し、各描画は状態のスナップショットを見ることを説明します。
    checked: "2026-09-26"
  - title: "React: Sharing State Between Components"
    url: "https://react.dev/learn/sharing-state-between-components"
    claim: 連動する状態を共通の所有者へ移し、データとイベント処理を子へ渡す方法です。
    checked: "2026-09-26"
---

## 選択・比較

JavaScriptのコンポーネントでUIを再利用し、状態の所有者を明確にしたいチームに向きます。テンプレート中心のVueやコンパイラー中心のSvelteが、好みや既存コードに合う場合もあります。ほぼ静的なページなら小さな操作領域だけで足りるかもしれません。フレームワークを選んでも保存・認証・配置は決まりません。

## 応用例

家庭の計画には買い物と献立のカードがあります。一方を保存すると他方を保ちつつ、そのラベルと合計を更新します。実際のReactでは最も近い共通の親に選択IDを置き、値とハンドラーを渡せます。作例は状態の流れを説明するブラウザー上の模型で、Reactバンドルは実行しません。再読み込みで意図的に消します。

## 実装の参考・注意点

状態の設定関数で描画を要求します。前の値から次を求めるなら `setSaved(previous => previous.includes(id) ? previous : [...previous, id])` のような更新関数を使います。合計を別々に保存してずれを生まず、同じ配列から求めます。描画に副作用を入れません。複数端末の保存には、待機・失敗・再試行を含む別の永続化契約が必要です。
