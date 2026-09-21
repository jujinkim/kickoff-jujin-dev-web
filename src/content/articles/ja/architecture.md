---
articleId: "architecture"
lang: "ja"
title: "アーキテクチャとSOLID・GRASP入門"
summary: "略語の暗記より、変更の費用を考えます。"
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
related: ["ooad", "adr"]
example: "layers"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "実際の変更がコードを通る経路を調べて。依存方向と誤配置された責務を示し、役立つSOLID・GRASP原則と追加の複雑さを説明して。境界を変える前に質問し、最小のリファクタリングと動作維持の検証案を出して。"
---

## 概念

アーキテクチャは境界と依存方向を決めます。SOLIDは単一責任、開放閉鎖、置換可能性、インターフェース分離、依存性逆転を扱います。GRASPは情報エキスパート、生成者、コントローラー、低結合、高凝集などの責務割り当て指針です。作るフォルダーではなく、問うべき観点です。

## 必要な場面

保存先の変更で業務規則が壊れる、UIが価格を決める、すべてのテストにDBが必要な場合に使います。層を増やす前に、困っている変更を特定しましょう。

## 実例

価格計算は税ポリシーのインターフェースに依存し、アプリが実装を渡します。DBアダプターは保存ポートを実装します。計算をDBなしで検証できます。依存性逆転はソースの依存方向であり、クリック順を逆にすることではありません。

```text
UI -> use case -> domain rules
         |
         v
     storage port <- database adapter
Domain rules do not import the UI or database driver.
```

## 選択肢とトレードオフ

直接呼び出しはコードを減らしますが実装に結合します。ポートは交換と検証を容易にする代わりに抽象化の管理が増えます。SRPは一ファイル一メソッドではなく、一貫した変更理由です。リスコフ置換は名前だけでなく動作の契約も守ります。

## 選ぶ条件

関連規則をまとめ、利用者の必要な機能が違うときにインターフェースを分けます。実際の外部境界にポートを置きましょう。情報エキスパートで必要な情報の近くに責務を置き、コントローラーで手順を調整します。十九個の箱より測れる改善を。

## AIへの指示例

実際の変更がコードを通る経路を調べて。依存方向と誤配置された責務を示し、役立つSOLID・GRASP原則と追加の複雑さを説明して。境界を変える前に質問し、最小のリファクタリングと動作維持の検証案を出して。

## 関連記事と出典

- [OOADと責務分離：それぞれに仕事を](/ja/catalog/ooad/)
- [Design DecisionとADR：判断を残す](/ja/catalog/adr/)

- [Microsoft — Architecture principles](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles)
- [Craig Larman — Applying UML and Patterns](https://www.craiglarman.com/wiki/index.php?title=Books_by_Craig_Larman)
