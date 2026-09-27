---
articleId: subversion
lang: ja
sourceRevision: 1
sources:
  - title: Apache Subversion
    url: "https://subversion.apache.org/"
    claim: Subversionは集中型バージョン管理です。
    checked: "2026-09-27"
  - title: "Apache Subversion: Quick Start"
    url: "https://subversion.apache.org/quick-start"
    claim: 作業コピー、update、commit、競合、任意のロックを説明します。
    checked: "2026-09-27"
---

## 選択・比較

履歴は中央リポジトリにあり、作業コピーは全履歴のクローンではありません。ローカル編集や一部の比較はオフラインでも可能ですが、リビジョンの記録にはアクセスが必要です。独立したローカルコミットが重要ならGitやMercurialを比較します。この例で維持する理由は既存のSVNスクリプトと権限です。

## 応用例

編集者は機材マニュアルをupdateし、申請手順を変更してコミットします。別の編集者は作業コピーをupdateして新しいリビジョンを受け取ります。競合時は同僚のページを黙って置き換えず両者の変更を確認します。SVNにもブランチと任意のファイルロックがあり、集中型だから全ファイルがロックされるわけではありません。

## 実装の参考・注意点

作業コピーだけでなくリポジトリをバックアップし、復元を試します。サーバーへのアクセスと既存クライアント・フックの互換性を確認します。テキストのマージとバイナリ編集の調整を比較し、素材の作業手順に合えばP4も検討します。別グループのGitホストをそのままSVNサーバーにはできません。
