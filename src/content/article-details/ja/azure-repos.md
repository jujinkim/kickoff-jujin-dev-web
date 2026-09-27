---
articleId: azure-repos
lang: ja
sourceRevision: 1
sources:
  - title: "Microsoft: What is Azure Repos?"
    url: >-
      https://learn.microsoft.com/en-us/azure/devops/repos/get-started/what-is-repos?view=azure-devops
    claim: GitとTFVCに対応し、GitリポジトリではPRを使用できます。
    checked: "2026-09-27"
  - title: "Microsoft: Branch policies"
    url: >-
      https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops
    claim: 設定したポリシーでレビューとビルド検証を要求でき、回避権限の確認が必要です。
    checked: "2026-09-27"
---

## 選択・比較

既存のAzure DevOpsプロジェクト、権限、レビュー習慣が調整を減らすなら選びます。既存のJira運用にはBitbucketが合う場合があり、他のホストもブランチ保護の検査を提供します。コードの置き場が実行基盤を決めると考えず、運営者、連携、プラン制約、移行を比較します。

## 応用例

施設チームはmainに最少レビュアー数と必須ビルド検証を設定します。例のPRは予約競合テストの失敗中は待機し、修正後にレビュアーが新しい結果を確認して完了します。Gitの例で、別のTFVCモデルではありません。

## 実装の参考・注意点

必須のポリシー、変更後の承認リセット、回避できる人を確認します。ビルド成功は全予約ルールの証明ではありません。既存運用向けの集中型TFVCもありますが、Gitの図を適用しないでください。アクセスとサービス制限を再確認し、Git履歴とは別にレビューとポリシーの移行を試します。
