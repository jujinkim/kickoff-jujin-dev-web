---
kind: "concept"
articleId: "modular-monolith"
lang: "ja"
title: "モジュラーモノリス"
summary: "一つのデプロイ内でモジュールの所有権を守ります。"
category: "service-split"
aliases: ["モジュラーモノリス"]
related: ["architecture", "monolith", "microservices"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "単一デプロイ内の明示的なモジュールAPI",
    "advantages": "ライブラリの変更をAPIの内部に限定",
    "limitations": "境界の強制が必要・リリースは共有",
    "suitable": "遠隔呼び出しなしで明確な所有権",
    "combinations": "モジュール内部にクリーンやヘキサゴナルを適用可能",
  }
---

## 概念

モジュラーモノリスは一つのデプロイ内に明示的な境界を設けます。モジュールAPIが所有する内部実装を保護します。引き続きモノリスです。[Fowler](https://martinfowler.com/bliki/MonolithFirst.html)

## 実例

1. 架空の読書アプリ。一チーム、アプリv1にカタログ・ライブラリ・課金を含む。A17はタグなし。
2. ライブラリ所有のテーブルにタグ保存を追加し、アプリv2をデプロイ。課金の動作は同じ。一つのDBでもテーブルはモジュール別に所有し、他モジュールの直接アクセスは禁止。
3. ライブラリがカタログAPIをプロセス内で呼び、`travel`を記録。参照失敗ならタグなしのまま。復旧後に再試行。

## 選ぶ条件

遠隔呼び出しなしで所有権を分ける場合に有用です。フォルダー分け以上の境界強制が必要で、リリース・プロセス障害は共有します。内部にヘキサゴナルのポートを置けます。
