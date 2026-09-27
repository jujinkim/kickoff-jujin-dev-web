---
kind: concept
articleId: gitlab
lang: ja
title: GitLab
summary: 一つの作業手順でMRと設定済みCIを結ぶGit協業。
category: repository-hosting
aliases:
  - GitLab
  - 깃랩
  - ギットラボ
related:
  - git
  - github
  - gitea
  - azure-repos
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: MRと設定済みCIの連携
  advantages: 検査結果の横で変更を議論
  limitations: runnerの容量とルール設定が必要
  suitable: GitLabのレビューとCIを保つチーム
  combinations: Gitとホスト型・自主運用型GitLab
---

## なぜ必要なのか

社内の休暇アプリで社員が休みを申請します。開発者は残日数ルールの変更を自動チェックと一緒に確認します。別のホストを採用するより、既存のGitLabで議論とCIを保つことが重要です。

## どう解決するのか

MRを開くと、設定したCIルールがrunnerで残日数を検査します。失敗したら修正して再実行し、レビュアーがマージを判断します。

## どんな考え方なのか

GitLabはGitホスティング、MR、CIを組み合わせます。設定とrunnerの容量が必要です。MRパイプラインはソースブランチを検査し、マージ結果を自動的に検査するわけではありません。サービス利用と自主運用では責任が異なります。

[出典](https://docs.gitlab.com/ci/pipelines/merge_request_pipelines/)
