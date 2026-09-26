---
kind: "concept"
articleId: "microservices"
lang: "ja"
title: "マイクロサービス"
summary: "業務機能別のサービスを独立してデプロイします。"
category: "service-split"
aliases: ["マイクロサービス"]
related: ["architecture", "monolith", "modular-monolith"]
status: "published"
revision: 5
sourceRevision: 5
updated: "2026-09-26"
checked: "2026-09-22"
comparison:
  {
    "features": "独立デプロイ可能な業務機能別サービス",
    "advantages": "課金の再ビルドなしでライブラリをリリース",
    "limitations": "ネットワーク障害とデータ調整が必要",
    "suitable": "安定した境界と独立リリースの必要性",
    "combinations": "モジュラーモノリスと共存可能",
  }
---

## なぜ必要なのか

家族が行事案内を保存し、参加費を払う学校アプリを作るとします。急ぎのボランティアタグは課金の公開を待てません。一チームが独立更新のため通信の調整を引き受けます。内部モジュールだけなら更新は共通です。

## どう解決するのか

1. 一チームがカタログ・ライブラリ・課金を各v1で運用。保存した学校行事の案内はタグなし。
2. 互換性のあるタグ機能をライブラリv2だけに配布。カタログ・課金はv1のまま。
3. ライブラリがネットワークでカタログを参照し、自分の保存先に`ボランティア`を記録。書き込み前のタイムアウトはタグなし。失敗を伝え、復旧後に再試行。

## どんな考え方なのか

マイクロサービスは明示的な契約とデータ所有権を持ち、独立してデプロイする業務機能別サービスです。プロセス分割だけでは独立性は生まれません。[Lewis・Fowler](https://martinfowler.com/articles/microservices.html)

ネットワーク障害とサービス間データの調整が必要です。他の機能はモジュラーモノリスに残せます。
