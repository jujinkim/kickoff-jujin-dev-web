---
articleId: static-hosting
lang: ja
sourceRevision: 6
sources:
  - title: "GitHub: About Pages"
    url: "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages"
    claim: 静的ファイル配信の例を説明します。別APIと個人保存はアプリの設計で、ファイル配信の機能ではありません。
    checked: "2026-09-27"
---

## 選択・比較

要求前に生成できる公開内容にはファイル配信を使います。要求ごとに信頼できる計算が必要なら常時サーバーや関数が役立ちます。ブラウザー操作は静的ファイルと共存でき、書き込みには別の信頼経路が必要です。

## 応用例

便りは公開ホストからHTMLを読み、APIで読者と記事の組を保存します。模型の処理器の再起動では外部記録が残ります。模型全体はページメモリなので再読み込みでは記録も消えます。

## 実装の参考・注意点

公開担当はビルド鮮度・成果物配布・キャッシュを管理し、API担当は認証・重複防止・永続データ復旧を担います。保存ボタンだけで永続性を推測せず、コードの切り戻しをDB復元と混同しません。
