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
revision: 5
sourceRevision: 5
updated: "2026-09-26"
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

## なぜ必要なのか

登山者がガイドを保存し、追加機能を買うアプリを作るとします。週末タグの追加が課金コードに波及しそうです。チームは別サービスを運用せず、一括更新内で所有範囲を明確にしたいのです。

## どう解決するのか

1. 一チームがカタログ・ライブラリ・課金を一括更新。保存した登山ガイドはタグなし。
2. ライブラリの所有テーブルにタグ保存を追加し、アプリv2を配布。課金の動作は同じ。一つのDBでもテーブルはモジュール別に所有し、他モジュールの直接アクセスは禁止。
3. ライブラリがカタログAPIをプロセス内で呼び、`週末`を記録。参照失敗はタグなし。復旧後に再試行。

## どんな考え方なのか

モジュラーモノリスは一つのデプロイ内に明示的な境界を設けます。モジュールAPIが所有する内部実装を保護します。引き続きモノリスです。[Fowler](https://martinfowler.com/bliki/MonolithFirst.html)

フォルダー分け以上の境界強制が必要で、リリース・プロセス障害は共有します。内部にヘキサゴナルのポートを置けます。
