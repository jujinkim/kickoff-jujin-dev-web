---
kind: guide
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
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "購入フローの概念、不変条件、責務の所有者を整理して。実際の複雑さに基づき、トランザクションスクリプトと小さなドメインモデルを比較して。未決定の境界は質問し、継承ツリーを既定にしないで。責務表、呼び出し順、失敗の担当、テストを残して。"
---

## 概念

オブジェクト指向分析はドメインの概念と規則を見つけ、設計は協調するオブジェクトに規則を割り当てます。

## 実例

Orderは確定規則、Inventoryは在庫を担当します。購入処理が両者を調整し、決済基盤が提供者と通信します。

## 選ぶ条件

手続きのスクリプトは簡素です。ドメインモデルは規則を集約しますが、概念と間接参照が増えます。 一つのユースケースと責任表から始めます。失敗と取り消しの担当も定めます。 [Microsoft](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/microservice-domain-model)
