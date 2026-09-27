---
articleId: mercurial
lang: ja
sourceRevision: 1
sources:
  - title: "Mercurial: Working with Phases"
    url: "https://www.mercurial-scm.org/help/topics/phases"
    claim: publishingリモートへ送るとdraftはpublicになり、non-publishingリポジトリではdraftを交換できます。
    checked: "2026-09-27"
  - title: Mercurial Guide
    url: "https://www.mercurial-scm.org/guide"
    claim: ローカルコミットとpush・pullによる交換を説明します。
    checked: "2026-09-27"
---

## 選択・比較

MercurialとGitはどちらもローカルコミットと分散協業に対応します。既存のhg自動化やチームの知識に価値があれば維持を選びます。必要なレビューサービスがGit専用なら移行の負担を比較します。SVNは中央にコミットし、P4は既存のバイナリ素材の運用に合う場合があります。

## 応用例

翻訳ツールの文言修正をローカルリポジトリに記録します。既定のdraftコミットとpublishingリモートの組み合わせでは、push後にpublicになります。non-publishingの協業リポジトリならdraftを保持できます。publicは共有状態であり、非公開アクセスの制御は別です。

## 実装の参考・注意点

履歴編集の拡張を使う前に、リモートのpublishing設定と段階を確認します。secretの変更は通常交換されませんが、段階は認可機構や秘密の保管庫ではありません。拡張とホストの互換性を確認し、ツール変更前にコピーで翻訳文の競合や履歴移行を試します。
