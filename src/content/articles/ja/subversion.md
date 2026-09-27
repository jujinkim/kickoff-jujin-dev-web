---
kind: concept
articleId: subversion
lang: ja
title: Apache Subversion
summary: 既存のSVNリポジトリと作業手順を維持するチーム向けの集中型バージョン管理。
category: version-control-systems
aliases:
  - Apache Subversion
  - Subversion
  - SVN
  - svn
  - 서브버전
  - サブバージョン
related:
  - git
  - mercurial
  - perforce-p4
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: 作業コピーと中央履歴
  advantages: 既存のSVNツールを維持
  limitations: 中央コミットにはアクセスが必要
  suitable: 既存の集中型協業
  combinations: SVNクライアントとSVNサーバー
---

## なぜ必要なのか

社内マニュアルが社員に機材の申請方法を案内します。編集者は既存のSVNリポジトリでページを更新します。接続なしのローカルコミットより、中央での作業手順の維持が重要です。

## どう解決するのか

作業コピーをupdateし、申請ページを直して差分を確認します。commitすると中央リポジトリに記録され、別の編集者がupdateで受け取ります。競合した変更を調整してから再試行します。

## どんな考え方なのか

Apache Subversion、略してSVNは集中型バージョン管理です。オフライン編集は可能ですが、履歴のコミットにはリポジトリへのアクセスが必要です。ローカルコミットにはGitやMercurialが合い、切り替え時にはツールと履歴の移行も必要です。

[出典](https://subversion.apache.org/)
