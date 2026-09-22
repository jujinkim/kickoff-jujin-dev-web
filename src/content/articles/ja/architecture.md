---
kind: guide
articleId: "architecture"
lang: "ja"
title: "アーキテクチャ：境界と役割を決める"
summary: "モジュールの役割と所有を合意し、内部コードはAIが具体化します。"
category: "planning"
aliases:
  [
    "SOLID",
    "GRASP",
    "architecture",
    "아키텍처",
    "응집도",
    "アーキテクチャ",
    "凝集度",
  ]
related: ["srs", "tools"]
example: "layers"
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
aiPrompt: "確定済みの要件と制約を読んで。全体のモジュール、責任、データと規則の所有、依存方向、公開契約、障害復旧の担当を提案して。代案と保守費用を説明し、未決定のアーキテクチャだけ質問して。承認済みの判断を守り、境界内のクラス・メソッド・データ構造は自分で選んで。UMLは判断の説明に必要な場合に作成し、私に作成を求めないで。"
---

## 概念

アーキテクチャはモジュールの責任、所有、依存方向を定めます。公開契約が明確なら、協力するモジュールを壊さず内部実装を変えられます。[Microsoft](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles)

## 実例

UI → ユースケース → ドメイン規則。注文は確定規則、在庫は数量を所有します。購入処理が両者と復旧を調整し、データベースアダプターが保存を担います。

## 選ぶ条件

責任が複数の機能に及ぶ場合は境界を合意します。インターフェースは交換を助けますが、保守対象も増えます。規模に合わせて構成します。このガイドではユーザーが全体の役割と制約を確認し、AIがクラス・メソッドや必要なUMLを具体化します。
