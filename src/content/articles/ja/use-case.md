---
kind: "concept"
articleId: "use-case"
lang: "ja"
title: "ユースケース"
summary: "目標達成の成功経路と失敗経路を記述します。"
category: "requirements"
aliases: ["ユースケース", "Use case"]
related: ["srs", "user-story", "job-story"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "アクターの目標・主経路・拡張",
    "advantages": "実装前に失敗経路を発見",
    "limitations": "段階的な開発には分割が必要",
    "suitable": "保存と再試行の流れの設計",
    "combinations": "ユーザーストーリーの単位とジョブストーリーの文脈",
  }
---

## 概念

ユースケースはアクターの目標達成に向けたやり取りと、成功・失敗の経路を記述します。図だけでは、その全体を説明できません。 [出典](https://alistaircockburn.com/Unifying%20us%20uc%20sm.pdf)

## 実例

架空の事前条件：ログイン済みの通勤者、未保存のA17、開始時は保存先を利用可能。

1. 読者がA17のリンク保存を依頼します。
2. システムがA17を確認します。
3. システムが項目を1件記録します。
4. システムが成功を通知します。

書き込み前に失敗したら未保存を伝え、手順1から再試行します。保存を繰り返しても1件を保ちます。リンク保存はオフライン閲覧を保証しません。

## 選ぶ条件

失敗分岐を明らかにするときに適します。ユーザーストーリーで開発単位を分け、ジョブストーリーで動機を記録します。品質要件は別途扱います。
