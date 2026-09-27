---
kind: concept
articleId: mercurial
lang: ja
title: Mercurial
summary: 共有段階を持ち、既存のhg運用に適した分散バージョン管理。
category: version-control-systems
aliases:
  - Mercurial
  - hg
  - 머큐리얼
  - マーキュリアル
related:
  - git
  - subversion
  - perforce-p4
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: 共有段階を持つ分散履歴
  advantages: 既存のhg自動化を維持
  limitations: ホストと拡張の互換性確認が必要
  suitable: Mercurialを使っているチーム
  combinations: hgクライアントと対応リポジトリ
---

## なぜ必要なのか

翻訳ツールでボランティアが画面の文言を直します。保守チームはすでにhgスクリプトを使っています。Gitへ移行せず、修正可能な作業と共有済みの履歴を区別したいと考えています。

## どう解決するのか

文言の修正をローカルにdraftとしてコミットします。チームのpublishingリポジトリへpushすると、両側でpublicになります。履歴を書き換える前に段階を確認します。

## どんな考え方なのか

Mercurialは分散バージョン管理です。段階は権限ではなく共有状態で、publicはネット上での一般公開を意味しません。non-publishingのリモートではdraftを交換できます。必須連携がGitを要求するならGitが合う場合があります。

[出典](https://www.mercurial-scm.org/help/topics/phases)
