---
kind: concept
articleId: gitea
lang: ja
title: Gitea
summary: サービス運用を担うチーム向けのセルフホスト可能なGit協業。
category: repository-hosting
aliases:
  - Gitea
  - 기티아
  - ギティア
  - self-hosted Git
related:
  - git
  - gitlab
  - github
  - codeberg
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: セルフホストするGitとレビュー
  advantages: インスタンスを自分たちで管理
  limitations: 更新・復旧・サーバー費用
  suitable: 運用担当者がいるチーム
  combinations: Git・自前サーバー・バックアップ手順
---

## なぜ必要なのか

サークルの機材貸出アプリがカメラの借り手を記録します。開発者は自分たちのサーバーにコードを置きたく、運用担当者もいます。保守の削減よりサービスの管理権を重視します。

## どう解決するのか

メンバーはサークルのGiteaサーバーへpushして変更をレビューします。担当者は権限、更新、バックアップを管理します。復元練習でリポジトリ、データベース、設定を一緒に確認します。

## どんな考え方なのか

Giteaはセルフホスト可能なGit協業ソフトウェアです。この例はサークル運営で、サーバー費用や復旧作業は残ります。GitLabも自主運用できます。保守担当がいなければ管理型ホストが合います。

[出典](https://docs.gitea.com/)
