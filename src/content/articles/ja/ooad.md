---
articleId: "ooad"
lang: "ja"
title: "OOADと責務分離：それぞれに仕事を"
summary: "クラスの森を描く前に、動作と所有者を決めます。"
category: "planning"
aliases:
  [
    "OOAD",
    "responsibility",
    "객체지향",
    "책임 분리",
    "オブジェクト指向",
    "責務",
  ]
related: ["architecture", "srs"]
example: "objects"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "購入フローの概念、不変条件、責務の所有者を整理して。実際の複雑さに基づき、トランザクションスクリプトと小さなドメインモデルを比較して。未決定の境界は質問し、継承ツリーを既定にしないで。責務表、呼び出し順、失敗の担当、テストを残して。"
---

## 概念

オブジェクト指向分析はドメインの概念と規則を見つけ、設計は規則を協力者に割り当てます。Managerという名前だけでは複雑さを管理できません。事実を知る者、不変条件を守る者、手順を調整する者を分けます。

## 必要な場面

画面ごとに検証が重複したり、一つの規則変更が無関係な修正を招く場合に使います。関数中心のコードでも、責務と所有者は必要です。

## 実例

Orderは確定可能かを、Inventoryは在庫を管理します。アプリケーションサービスが購入の流れを調整します。決済インフラは提供元と通信しますが、販売可能な本を決めません。矢印は継承ではなく呼び出しです。

```text
Checkout -> Order.place()
Order -> Inventory.reserve(items)
Order -> Payment.authorize(total)
Receipt <- Order.confirm()
```

## 選択肢とトレードオフ

一つのトランザクションスクリプトは小さな処理を追いやすい反面、規則が重複するとずれます。ドメインモデルは規則を集約しますが概念と間接参照が増えます。継承は強く結合し、合成は明示的な接続を必要とする代わりに交換を容易にします。

## 選ぶ条件

責務の表と具体的な利用例から始めます。繰り返す規則や守るべき不変条件ができたらオブジェクトを抽出しましょう。領収書を出すだけの機能に抽象ファクトリーは不要。失敗と巻き戻しの責任も記録します。

## AIへの指示例

購入フローの概念、不変条件、責務の所有者を整理して。実際の複雑さに基づき、トランザクションスクリプトと小さなドメインモデルを比較して。未決定の境界は質問し、継承ツリーを既定にしないで。責務表、呼び出し順、失敗の担当、テストを残して。

## 関連記事と出典

- [アーキテクチャとSOLID・GRASP入門](/ja/catalog/architecture/)
- [SRSと完了条件：「完成」の意味から](/ja/catalog/srs/)

- [Microsoft — Domain model design](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/microservice-domain-model)
