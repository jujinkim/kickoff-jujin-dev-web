---
kind: "concept"
articleId: "monolith"
lang: "ja"
title: "モノリス"
summary: "サーバーアプリケーションを一単位でデプロイします。"
category: "service-split"
aliases: ["モノリス"]
related: ["architecture", "modular-monolith", "microservices"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "サーバー全体が一つのデプロイ単位",
    "advantages": "小さなチームに一つのパイプライン",
    "limitations": "リリースとプロセス障害の境界を共有",
    "suitable": "一つのチームが密接な機能を運用",
    "combinations": "内部にレイヤーや明示的なモジュールを配置可能",
  }
---

## 概念

モノリスはサーバーアプリケーションを一単位でデプロイします。同じ成果物のレプリカを増やしてもモノリスであり、内部にモジュールを置けます。[Lewis・Fowler](https://martinfowler.com/articles/microservices.html)

## 実例

1. 架空の読書アプリ。一チーム、アプリv1にカタログ・ライブラリ・課金を含む。A17はタグなし。
2. ライブラリにタグ機能を加え、アプリv2をデプロイ。課金の動作は同じでも同じ成果物に含まれる。共有データベースはアプリが所有。
3. ライブラリがプロセス内でカタログを参照し、`travel`を記録。書き込み前の参照失敗ならタグなしのまま。復旧後に再試行。

## 選ぶ条件

一つのパイプラインで運用する場合に有用です。リリースとプロセス障害は共有します。境界が重要になれば明示的なモジュールを加えます。
