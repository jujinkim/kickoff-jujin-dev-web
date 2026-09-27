---
articleId: git
lang: ja
sourceRevision: 1
sources:
  - title: "Pro Git: About Version Control"
    url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
    claim: ローカルと分散の履歴モデルを説明します。
    checked: "2026-09-27"
  - title: "Pro Git: Working with Remotes"
    url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes"
    claim: fetchとpushはリポジトリデータを交換し、pushには権限と適合する履歴が必要です。
    checked: "2026-09-27"
---

## 選択・比較

履歴の場所、オフライン作業、協業、ファイルの性質、既存ツールを比較します。Gitはローカルリポジトリにコミットとブランチを持ちます。Mercurialも分散作業に対応し、既存のhg運用維持が移行より有利な場合があります。SVNは中央にコミットし、P4はバイナリ素材の排他的編集を管理する既存チームに合う場合があります。

## 応用例

旅行サイトは別ブランチで博物館への訪問を試します。ローカルコミットはエディターを閉じても残りますが、push成功までは共有リポジトリにありません。同僚はfetchしてから確認・統合します。Gitホスティングは別の選択です。このカタログのホストはGitと組み合わせるもので、全バージョン管理のサーバーとして交換できるわけではありません。

## 実装の参考・注意点

コミット前にgit statusと対象ブランチを確認します。push前にリモートと権限を確認し、分岐した履歴は同僚の変更を強制的に上書きせず調整します。Gitのクローンだけではホストの課題・レビュー・設定をすべて保存できません。移行時は別途エクスポートを試します。
