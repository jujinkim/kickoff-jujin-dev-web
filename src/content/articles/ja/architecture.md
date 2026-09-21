---
kind: guide
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
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "実際の変更がコードを通る経路を調べて。依存方向と誤配置された責務を示し、役立つSOLID・GRASP原則と追加の複雑さを説明して。境界を変える前に質問し、最小のリファクタリングと動作維持の検証案を出して。"
---

## 概念

アーキテクチャは境界と依存方向を定めます。SOLIDとGRASPは責任の配置を助ける原則で、フォルダーの型ではありません。

## 実例

UI → ユースケース → ドメイン規則。DBアダプターが保存インターフェースを実装し、ドメイン規則はDBドライバーを参照しません。

## 選ぶ条件

直接呼び出しは簡素です。インターフェースは交換とテストを助けますが、管理する抽象化が増えます。 関連する規則をまとめます。層を増やすより、実際に変更が難しい箇所に境界を置きます。 [Microsoft](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles) · [Craig Larman](https://www.craiglarman.com/wiki/index.php?title=Books_by_Craig_Larman)
