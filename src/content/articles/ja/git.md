---
kind: concept
articleId: git
lang: ja
title: Git
summary: ローカル作業のための分散履歴・ブランチと、別に選ぶリポジトリホスティング。
category: version-control-systems
aliases:
  - Git
  - git
  - 깃
  - ギット
related:
  - github
  - mercurial
  - subversion
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: ローカルコミットとブランチ
  advantages: 共有前にも作業可能
  limitations: 競合の確認が必要
  suitable: ローカル履歴とGit対応ツールが必要なチーム
  combinations: Gitとリポジトリホスティング
---

## なぜ必要なのか

旅行サイトで友人が日ごとの訪問先を決めます。開発者はオフラインでも別々の実験を進めたいと考えています。ローカル履歴とGit対応ホスティングを優先し、既存のSVNツール維持を優先するならSubversionが合います。

## どう解決するのか

新しい訪問先をローカルブランチにコミットしても、リモートにはまだありません。接続後にpushし、同僚がfetchします。両方の履歴を確認し、pushが拒否されたら履歴を調整します。

## どんな考え方なのか

Gitは分散バージョン管理です。commitはローカルに記録し、pushは別のリポジトリと共有します。GitHubなどのホスティングはGitに協業機能を加えます。競合の解決には判断が必要です。

[出典](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
