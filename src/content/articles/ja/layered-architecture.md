---
kind: "concept"
articleId: "layered-architecture"
lang: "ja"
title: "レイヤードアーキテクチャ"
summary: "明示的な依存ルールで責務を分けます。"
category: "boundaries"
aliases: ["レイヤードアーキテクチャ"]
related: ["architecture", "hexagonal-architecture", "clean-architecture"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "責務別レイヤーと下向きの依存",
    "advantages": "検証の配置場所が明確",
    "limitations": "単なる中継にも管理コスト",
    "suitable": "表示・アプリケーション・保存の責務が安定",
    "combinations": "ポートと依存性逆転を追加可能",
  }
---

## 概念

レイヤードアーキテクチャは責務を分け、レイヤー間の依存を制限します。論理レイヤーごとに別のマシンが必要なわけではありません。[Microsoft](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier)

## 実例

1. 架空の単一プロセス。読者R1、A17は未保存。メモリまたは組み込みデータベースを使用。
2. HTTP・CLIの表示レイヤーがアプリケーションの検証を参照・呼び出し、そこから保存レイヤーを参照・呼び出す。この閉鎖型の例では飛び越しは禁止。
3. 保存完了が上へ戻る。0 → 1件、繰り返しても1件。空のIDや書き込み前の失敗は0件のまま。修正後に再試行。

HTTPをCLIに替えても検証の位置は変わりません。

## 選ぶ条件

責務が安定している場合に有用ですが、中継だけの層にも管理が必要です。ポートで保存への依存を逆転できます。フォルダー名だけではルールを強制できません。
