---
kind: "concept"
articleId: "openspec"
lang: "ja"
title: "OpenSpec"
summary: "合意した動作を変えるとき、現在の仕様と確認した変更提案・差分をともに維持します。"
category: "agent-workflows"
aliases: ["openspec", "OpenSpec", "오픈스펙", "オープンスペック"]
related: ["no-extra-skills", "spec-kit", "superpowers", "tools", "srs"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-10-08"
checked: "2026-10-08"
comparison:
  {
    "features": "現在の仕様と提案した変更差分",
    "advantages": "変更する規則と保つ規則が見える",
    "limitations": "記録とコードを一致させる必要",
    "suitable": "合意した動作の確認可能な変更",
    "combinations": "範囲が明確な実行スキルと既存の規則",
  }
---

## なぜ必要なのか

陶芸教室のサイトで会員は授業を予約し確認を受け取ります。日程変更を追加しても既存の確認ルールは保つ必要があります。管理者は変わる内容を正確に確認し判断を残したいと考えます。文言修正だけなら少ない記録が向きます。

## どう解決するのか

現在の予約確認の要件を保ちます。日程変更ルールと追加シナリオ・作業を提案し、確認・実装して両方の動作を検証します。仕様を整合させ変更を保存します。

## どんな考え方なのか

OpenSpecはコーディングエージェント向けに仕様と変更の成果物を管理します。理解が進めば記録を修正でき、新規プロジェクトにも対応します。差分の維持と導入費用に見合う利点が必要です。

[出典](https://github.com/Fission-AI/OpenSpec)
