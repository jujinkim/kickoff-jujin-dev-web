---
kind: concept
articleId: bitbucket
lang: ja
title: Bitbucket
summary: Bitbucket Cloudを使うチームでJiraの作業と開発を結ぶGitホスティング。
category: repository-hosting
aliases:
  - Bitbucket
  - Bitbucket Cloud
  - 빗버킷
  - ビットバケット
related:
  - git
  - github
  - gitlab
  - azure-repos
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Jira作業に結び付くGitレビュー
  advantages: 依頼からコードへ追跡
  limitations: 接続と作業キーの設定が必要
  suitable: JiraとBitbucket Cloudを使うチーム
  combinations: GitとJira連携
---

## なぜ必要なのか

注文アプリで店員が配送先住所を直します。チームはJiraで変更依頼を管理しますが、依頼とコードレビューの関係を見失います。作業管理の置き換えより、そのつながりの維持が重要です。

## どう解決するのか

JiraとBitbucket Cloudを接続します。住所修正の作業キーをブランチとPRに入れます。レビュアーは依頼から変更案へたどり、マージ後の結果を確認します。

## どんな考え方なのか

Bitbucket CloudはPRレビューとJira連携を備えたGitホスティングです。接続設定と一貫したキーが必要です。他のホストもJiraと連携できるため、既存の手順、プラン制限、移行の負担で判断します。

[出典](https://support.atlassian.com/bitbucket-cloud/docs/use-bitbucket-cloud-and-jira-together/)
