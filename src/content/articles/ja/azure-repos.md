---
kind: concept
articleId: azure-repos
lang: ja
title: Azure Repos
summary: 既存のAzure DevOps運用でブランチポリシーを使うリポジトリ協業。
category: repository-hosting
aliases:
  - Azure Repos
  - Azure DevOps
  - 애저 리포스
  - アジュールリポジトリ
related:
  - git
  - github
  - gitlab
  - bitbucket
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Git PRと設定済みブランチポリシー
  advantages: Azure DevOpsの協業を維持
  limitations: ポリシーと回避権限の確認が必要
  suitable: 既存のAzure DevOpsチーム
  combinations: Git・レビュー・ビルド検証
---

## なぜ必要なのか

施設予約アプリで社員が会議室を予約します。チームはAzure DevOpsを使い、予約競合の修正をmainに入れる前に確認したいと考えています。既存プロジェクトの権限と検査をまとめられる点で選びます。

## どう解決するのか

GitブランチをpushしてPRを開きます。例のmainは承認とビルド検証を要求します。予約テストの失敗で完了を保留し、修正後に必須検査とレビューを経てマージします。

## どんな考え方なのか

Azure ReposはAzure DevOpsのリポジトリサービスです。Gitブランチポリシーには設定が必要で、回避権限も重要です。TFVCにも対応します。ここにコードを置いても、アプリをAzure上で動かす必要はありません。

[出典](https://learn.microsoft.com/en-us/azure/devops/repos/get-started/what-is-repos?view=azure-devops)
