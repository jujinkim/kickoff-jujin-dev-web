---
articleId: github
lang: ja
sourceRevision: 1
sources:
  - title: "GitHub: What is GitHub?"
    url: "https://docs.github.com/en/get-started/start-your-journey/what-is-github"
    claim: リポジトリを中心としたGitホスティングと協業を説明します。
    checked: "2026-09-27"
  - title: "GitHub: Pull requests"
    url: "https://docs.github.com/en/pull-requests/reference/pull-requests"
    claim: ブランチの変更を提案し、議論・レビュー・マージできます。
    checked: "2026-09-27"
---

## 選択・比較

運営者、レビュー、連携、費用、移行経路を比較します。PRが独自機能だからではなく、貢献者がすでに集まっているためGitHubを選ぶ例です。Codebergは非営利の自由ソフトウェア共同体、Giteaは自主運用に適します。既存の業務にはGitLab、Bitbucket、Azure Reposが合う場合もあります。

## 応用例

forkを使うと、天気ウィジェットの貢献者は元のリポジトリへの書き込み権限なしに提案ブランチを公開できます。PRに議論と修正を集め、適切な権限の人がマージを判断します。レビューだけで配布が行われたり、正しさが証明されたりはしません。

## 実装の参考・注意点

権限と必須チェックを意図して設定します。自動化と秘密情報を設定するときは外部のコードを信頼しない前提で扱います。プラン選択前に公開範囲、保存容量、自動化の枠を最新条件で確認します。Git履歴は別のGitホストへ移せますが、課題の議論、権限、自動化は別に移行を試します。
