---
articleId: architecture
lang: ja
sourceRevision: 8
sources:
  - title: "Microsoft: architectural principles"
    url: "https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles"
    claim: カプセル化と明示的依存で契約の背後を変更できますが、図だけで実行時の障害分離は証明できません。
    checked: "2026-09-27"
---

## 選択・比較

規則・データ所有・想定変更に合わせて境界を決めます。層は構造、ポートは外部契約、サービスは配布境界を示し、併用できます。独立配布が分散調整の費用に見合わなければモジュラーモノリスを検討します。

## 応用例

店の調整役は注文確認・在庫確保・決済を順序付けます。注文は確定、在庫は数量、連携は事業者結果の変換を担います。タイムアウトは再試行・解除の根拠が出るまで未確定です。矢印は呼び出しで、必ずしもソース依存ではありません。

## 実装の参考・注意点

許可するソース依存を実行呼び出し・配布単位・障害範囲と分けて記録します。重複要求・決済結果不明・復旧担当を確認します。偽の決済先は契約の試験で、実通信・事業者・DBの原子的復旧を保証しません。
