---
articleId: perforce-p4
lang: ja
sourceRevision: 1
sources:
  - title: "P4: Preventing multiple checkouts"
    url: >-
      https://help.perforce.com/helix-core/server-apps/cmdref/current/Content/P4Guide/resolve.lock.exclusive.html
    claim: +lは同時オープンを防ぎ、p4 lockは提出を制限します。
    checked: "2026-09-27"
  - title: "P4: p4 submit"
    url: >-
      https://help.perforce.com/helix-core/server-apps/cmdref/current/Content/CmdRef/p4_submit.html
    claim: 変更リストの提出と失敗時の動作を説明します。
    checked: "2026-09-27"
---

## 選択・比較

システム選択前に素材の性質を比較します。この例は競合変更のマージが難しいバイナリモデルを、排他的アクセス設定で順番に編集します。GitやMercurialは分散ローカル履歴に適し、SVNでもロックを使えます。ロックはP4専用機能ではなく、既存ツールとチームの作業手順で適性を判断します。

## 応用例

車両モデルにbinary+lを明示的に指定します。制作者が開いて編集し、変更リストをdepotへ提出した後、次の人が提出済みの版をsyncします。中央のP4運用を示す例で、全構成を表しません。提出の失敗は次の人が作業できることを意味しません。

## 実装の参考・注意点

対象素材のtypemapを確認します。オープンを制限する+lと提出を制限するp4 lockを区別します。放置ロックの回復とバックアップの担当を決めます。実際の負荷に応じて最新のライセンス、ユーザー制限、ホスティング条件を確認します。無料枠や価格を保証する記事ではありません。
