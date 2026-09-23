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
revision: 4
sourceRevision: 4
updated: "2026-09-23"
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

## なぜ必要なのか

貸出ルールを読んで保存する図書館アプリを作るとします。画面が検証と保存を直に担うと、CLI追加時に規則が重複し、保存先の変更も画面に及びます。

## どう解決するのか

1. 単一プロセスでジュンの貸出ルールのページは未保存。メモリまたは組み込みDBを使う。
2. HTTP・CLIの表示層がアプリ層の検証を参照・呼び出し、そこから保存層を参照・呼び出す。この閉鎖型の例では飛び越しは禁止。
3. 成功は0 → 1件、反復も1件。空ID・書き込み前の失敗は0件。修正後に再試行。

HTTPをCLIへ替えても検証の位置は同じ。

## どんな考え方なのか

レイヤードアーキテクチャは責務を分け、レイヤー間の依存を制限します。論理レイヤーごとに別のマシンが必要なわけではありません。[Microsoft](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier)

ポートで保存への依存を逆転できます。フォルダー名だけではルールを強制できません。

中継だけの層にも管理費用がかかります。
