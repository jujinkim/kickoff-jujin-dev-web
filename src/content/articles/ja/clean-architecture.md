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
revision: 1
sourceRevision: 1
updated: "2026-09-22"
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

## 概念

クリーンアーキテクチャはソースの依存を方針へ向けます。実行時の呼び出しは内側が所有するインターフェース経由で外へ進めます。[Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

## 実例

1. 架空の単一プロセス。R1、A17は未保存。HTTP・CLIコントローラーがIDをSaveArticleへ渡し、SavedArticleが検証する。
2. SaveArticleはメモリ・組み込みデータベースのアダプターが実装するSaveRepositoryを呼ぶ。参照はアダプター → ユースケースの契約 → ドメインへ、呼び出しは外の保存先へ進む。境界には単純なデータのみを渡し、ORM行は外に置く。
3. 保存完了：0 → 1件、繰り返しても1件。空のIDや書き込み前の失敗は0件のまま。修正後に再試行。

## 選ぶ条件

長く保つ方針に有用ですが、データ変換の管理が必要です。ヘキサゴナルのポートと組み合わせられます。四つのフォルダーは必須ではありません。
