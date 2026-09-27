---
articleId: non-consumable-purchase
lang: ja
sourceRevision: 6
sources:
  - title: "Apple: in-app purchase types"
    url: "https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types"
    claim: 非消耗型商品は使用で失効・減少せず、復元には平台の権限処理が必要です。
    checked: "2026-09-27"
---

## 選択・比較

夜のパズルテーマは遊んでも減らないため持続解放に向きます。消耗ヒントは減り、購読は利用期間に従います。非消耗型は権利の動作を示し、一回販売の全義務を定義するものではありません。

## 応用例

プレイヤーはテーマを一度購入し、使用や購入ボタンの再押下でも購入回数は1のままです。デモのセッション中はテーマを保ちます。価格と実際のストア復元は再現しません。

## 実装の参考・注意点

実サービスは取引検証・復元・権限取消に対応します。再読込は教材を戻すだけで、非消耗型の定義を変えません。アカウント変更と返金にはブラウザー保存だけでない明示的権限規則が必要です。
