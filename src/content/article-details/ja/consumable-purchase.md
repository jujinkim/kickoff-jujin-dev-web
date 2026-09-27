---
articleId: consumable-purchase
lang: ja
sourceRevision: 6
sources:
  - title: "Apple: in-app purchase types"
    url: "https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types"
    claim: 消耗品は使用で減少し、ストアの領収書と付与はブラウザー模型の対象外です。
    checked: "2026-09-27"
---

## 選択・比較

クロスワードでヒントごとに一回の価値がある場合に向きます。非消耗型は持続する機能を開き、購読は期間の利用権を与えます。併用できますが、永続解放を消耗品扱いにはしません。

## 応用例

プレイヤーはヒント3個を買い、1回に1個使います。0では使用を止め、再購入で3個追加します。価格とストア販売条件は未定で、すべてローカルの仮購入です。

## 実装の参考・注意点

領収書を検証し、取引ごとに一度付与してから使用を許可します。端末間残高・返金・オフライン動作を定めます。ローカルの連打防止はサーバー台帳や平台の取引処理を代替しません。
