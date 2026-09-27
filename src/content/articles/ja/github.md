---
kind: concept
articleId: github
lang: ja
title: GitHub
summary: 貢献者がすでにGitHubを使う場でのGitホスティングとPRによる協業。
category: repository-hosting
aliases:
  - GitHub
  - 깃허브
  - 깃헙
  - ギットハブ
related:
  - git
  - gitlab
  - codeberg
  - gitea
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: GitホスティングとPR
  advantages: 外部の貢献をレビュー
  limitations: プランと権限の確認が必要
  suitable: 貢献者がすでにGitHubを使う開発
  combinations: ローカルGitとホスト上のレビュー
---

## なぜ必要なのか

公開の天気ウィジェットが地域サイトに雨予報を表示します。ボランティアが表示修正を提案します。貢献者はすでにGitHubを利用し、サーバー運用より、全員に書き込み権限を与えず提案を受け取ることを重視します。

## どう解決するのか

貢献者は自分のforkへブランチをpushし、PRを開きます。保守担当者が差分を確認し、修正を求めてからマージします。提案だけではmainに入りません。

## どんな考え方なのか

GitHubはGitリポジトリと協業を提供します。Gitは履歴を記録し、GitHubはレビューとアクセス管理を加えます。他のホストにもPRがあります。非営利の共同体ならCodeberg、自主運用ならGiteaが合う場合があります。

[出典](https://docs.github.com/en/get-started/start-your-journey/what-is-github)
