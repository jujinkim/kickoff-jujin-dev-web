---
articleId: bitbucket
lang: ja
sourceRevision: 1
sources:
  - title: "Atlassian: Integrate Bitbucket and Jira"
    url: >-
      https://support.atlassian.com/bitbucket-cloud/docs/use-bitbucket-cloud-and-jira-together/
    claim: Jira連携は作業項目とBitbucket Cloudの開発作業を結びます。
    checked: "2026-09-27"
---

## 選択・比較

この記事はBitbucket Cloudを扱います。運営、PR手順、Jira連携、プラン制約、エクスポートを比較します。Jira連携は独占機能ではないため、実際の業務で必要な連携の深さを比較します。既存の貢献者にはGitHub、既存のAzure DevOpsプロジェクトにはAzure Reposが合う場合があります。

## 応用例

注文アプリのJira作業項目が住所修正を説明します。ブランチとPRがキーを参照し、レビュアーはチャットを探さず要件を確認できます。ORDER-12は説明用の識別子で、実在のチケットではありません。リンクは実装が要件を満たす証拠にはなりません。

## 実装の参考・注意点

正しいworkspaceとJiraサイトを接続し、権限と対象読者に見えるリンクを確認します。ブランチ、コミット、PRタイトルでのキー使用を揃えます。選択前に最新のプラン、容量、パイプライン制限を再確認します。Git履歴だけを移してもJiraリンク、議論、自動化は移りません。
