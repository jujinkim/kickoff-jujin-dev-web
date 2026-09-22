---
kind: "concept"
articleId: "user-story"
lang: "ja"
title: "ユーザーストーリー"
summary: "利用者の価値を小さく検証できる単位に分けます。"
category: "requirements"
aliases: ["ユーザーストーリー", "User story"]
related: ["srs", "use-case", "job-story"]
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "利用者の価値と受け入れ基準の対話",
    "advantages": "小さな単位で提供できる",
    "limitations": "一文だけでは詳細条件が不足",
    "suitable": "段階的な機能開発の計画",
    "combinations": "ユースケースの経路とジョブストーリーの文脈",
  }
---

## なぜ必要なのか

大きな機能依頼は一度に作成・確認しにくいものです。利用者の価値が見える小さな成果へ分ける必要があります。

## どう解決するのか

1. 架空の状況：ログイン済みの通勤者、未保存のA17。
2. 役割 → 目標 → 価値：「読者として、後で戻れるようにA17のリンクを保存したい。」
3. 受け入れ基準：保存で1件、繰り返しても1件。書き込み前に失敗したら未保存を伝え、再試行を案内します。

リンク保存はオフライン閲覧を保証しません。

## どんな考え方なのか

ユーザーストーリーは利用者の価値を小さな単位で表し、対話と受け入れ基準で具体化します。役割・目標・価値の文は対話の出発点であり、完全な仕様ではありません。 [出典](https://agilealliance.org/glossary/user-stories/)

ユースケースで失敗経路を、ジョブストーリーで状況と動機を補います。
