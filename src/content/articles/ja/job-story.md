---
kind: "concept"
articleId: "job-story"
lang: "ja"
title: "ジョブストーリー"
summary: "解決策を選ぶ前に状況と望む変化を説明します。"
category: "requirements"
aliases: ["ジョブストーリー", "Job story"]
related: ["srs", "user-story", "use-case"]
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "状況・動機・望む成果",
    "advantages": "複数の解決策を検討できる",
    "limitations": "仮定した動機は調査が必要",
    "suitable": "UIを選ぶ前のニーズ探索",
    "combinations": "ユーザーストーリーの開発単位とユースケースの失敗経路",
  }
---

## なぜ必要なのか

庭師が植え付けガイドを途中で離れ、保存ボタンを求めます。

## どう解決するのか

架空の地域の園芸家、未保存の庭の記録：

1. 庭で植え方の案内を読み終える前に帰るとき、
2. 庭の記録に戻る手がかりがほしい。
3. 帰宅後に植え付け計画を終えられるように。

リンク保存やリンク付きリマインダーを検討します。どちらもオフライン閲覧を保証しません。保存を選ぶなら、重複保存や書き込み失敗は別途検討します。

## どんな考え方なのか

ジョブストーリーは解決策を選ぶ前に、状況・動機・望む成果を結びます。探索の出発点であり、受け入れテストではありません。 [出典](https://www.intercom.com/blog/using-job-stories-design-features-ui-ux/)

仮定した動機を調査で確かめ、ユーザーストーリーの開発単位とユースケースの経路を補います。
