---
articleId: layered-architecture
lang: ja
sourceRevision: 7
sources:
  - title: "Microsoft: N-tier architecture"
    url: "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier"
    claim: 論理層と物理ティア、開放型と閉鎖型を区別します。この図は単一プロセスの閉鎖型の例です。
    checked: "2026-09-27"
---

## 選択・比較

表示・アプリ調整・保存の責務が安定しているときに層を使います。外部接続の独立した変更にはヘキサゴナルのポート、内側の方針への依存にはクリーンを検討します。層と併用できます。

## 応用例

図書館案内はHTTPとCLIの保存を同じ検証へ送ります。入口を変えても保存規則を複製しません。静的な矢印は依存・呼び出し・戻りを分け、リクエストを実行するものではありません。

## 実装の参考・注意点

層の飛び越し可否を決めます。ここでは依存と呼び出しが下へ、結果が上へ進みます。単一プロセスなのでその障害を共有し、論理分離はデプロイ境界ではありません。空の中継層より実際の変更を守る境界検査を置きます。
