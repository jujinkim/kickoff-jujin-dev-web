---
kind: "concept"
articleId: "spec-kit"
lang: "ja"
title: "Spec Kit"
summary: "共同ルールの合意を維持するとき、要件を仕様・計画・作業・実装確認まで追跡します。"
category: "agent-workflows"
aliases: ["spec-kit", "Spec Kit", "speckit", "스펙킷", "スペックキット"]
related: ["no-extra-skills", "superpowers", "openspec", "tools", "srs"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-10-08"
checked: "2026-10-08"
comparison:
  {
    "features": "仕様・計画・作業・実装との照合",
    "advantages": "共同の要件を継続して確認可能",
    "limitations": "導入と文書確認の作業が増える",
    "suitable": "依存する機能や重要な共同ルール",
    "combinations": "記録の所有が明確な実行スキル",
  }
---

## なぜ必要なのか

公演予約サービスで観客は席を予約し待機者一覧に登録します。予約と通知の別々の変更が、一つの席の割当ルールを守る必要があります。開発者には追跡可能な合意が必要です。一つの文言の修正なら少ない手順が向きます。

## どう解決するのか

取消席を待機者へいつ割り当てるか仕様に記し、境界を計画し、実装作業をルールへ結びます。コードと記録を照合し不足を解消します。確定済みの回答は再利用します。

## どんな考え方なのか

Spec Kitは仕様に基づく開発のためのエージェント手順・テンプレート・設定ツールを提供します。修正・案の評価も任意で使えます。共同作業とリスクで判断し、規模だけで導入しません。

[出典](https://github.github.io/spec-kit/quickstart.html)
