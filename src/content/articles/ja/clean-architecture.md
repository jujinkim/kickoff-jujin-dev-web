---
kind: "concept"
articleId: "clean-architecture"
lang: "ja"
title: "クリーンアーキテクチャ"
summary: "ソースの依存を方針へ向けます。"
category: "boundaries"
aliases: ["クリーンアーキテクチャ"]
related: ["architecture", "layered-architecture", "hexagonal-architecture"]
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "ソースの依存は内側へ",
    "advantages": "方針がフレームワークのデータから独立",
    "limitations": "境界でのデータ変換に管理コスト",
    "suitable": "UIやデータベースより長く保つ方針",
    "combinations": "外側の境界にヘキサゴナルのポートを適用可能",
  }
---

## なぜ必要なのか

家計簿ガイドの保存規則は画面やDBが替わっても残したいものですが、直接参照すると方針まで結び付いてしまいます。

## どう解決するのか

1. 単一プロセスでハナの家計簿ガイドは未保存。HTTP・CLIからSaveArticleへIDを渡し、SavedArticleで検証。
2. SaveRepository経由でメモリ・組み込みDBへ保存。依存はアダプター → ユースケース契約 → ドメイン。呼び出しは外へも進むが、境界は単純なデータだけ。ORM行は外に置く。
3. 成功は0 → 1件、反復も1件。空ID・書き込み前の失敗は0件。修正後に再試行。

## どんな考え方なのか

クリーンアーキテクチャはソースの依存を方針へ向けます。実行時の呼び出しは内側が所有するインターフェース経由で外へ進めます。[Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

ヘキサゴナルのポートと組み合わせられます。四つのフォルダーは必須ではありません。

境界のデータ変換にも管理費用がかかります。
