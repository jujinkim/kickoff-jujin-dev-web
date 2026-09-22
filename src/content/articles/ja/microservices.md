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
revision: 2
sourceRevision: 2
updated: "2026-09-23"
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

境界の明確な業務ごとに異なる日程や責任で公開したい。一括のリリースでは無関係な変更まで調整が必要になります。

## どう解決するのか

1. 架空の読書アプリ。一チーム、カタログ・ライブラリ・課金は各v1。A17はタグなし。
2. 互換性を保つタグ機能をライブラリv2だけにデプロイ。カタログ・課金はv1のまま。
3. ライブラリがネットワークでカタログを参照し、自分の保存先に`travel`を記録。書き込み前の参照タイムアウトならタグなしのまま。失敗を伝え、復旧後に再試行。

## どんな考え方なのか

マイクロサービスは明示的な契約とデータ所有権を持ち、独立してデプロイする業務機能別サービスです。プロセス分割だけでは独立性は生まれません。[Lewis・Fowler](https://martinfowler.com/articles/microservices.html)

ネットワーク障害とサービス間データの調整が必要です。他の機能はモジュラーモノリスに残せます。
