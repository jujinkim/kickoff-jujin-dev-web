---
articleId: gitlab
lang: ja
sourceRevision: 1
sources:
  - title: "GitLab: Merge request pipelines"
    url: "https://docs.gitlab.com/ci/pipelines/merge_request_pipelines/"
    claim: MRパイプラインは一致するCIルールを必要とし、ソースブランチを検査します。
    checked: "2026-09-27"
  - title: GitLab plans
    url: "https://docs.gitlab.com/subscriptions/choosing_subscription/"
    claim: GitLab.comとSelf-Managedは運用責任とプランの選択が異なります。
    checked: "2026-09-27"
---

## 選択・比較

リポジトリのレビューと設定済みCIを一緒に扱う価値が大きいときに選びます。他のホストでも検査とレビューを連携できます。GitLab.comはGitLabが運営し、Self-Managedではチームがインスタンスを管理します。必要な機能を満たせば、Giteaによる小規模な自主運用も候補です。

## 応用例

休暇アプリの例のテストは残日数を超える申請の拒否を確認します。MRには失敗した実行と修正後の成功が表示されます。合格はレビューの根拠であり、全休暇ルールの証明や自動配布の承認ではありません。

## 実装の参考・注意点

.gitlab-ci.ymlにMRイベントのルールを定義し、適切なrunnerを用意します。通常のMRパイプラインはソースブランチを検査するため、必要ならマージ結果の検査も別に確認します。ホスト型の枠と自主運用・更新・復元の費用を比較します。Git履歴に加え、課題、CI設定、アクセス設定の移行も試します。
