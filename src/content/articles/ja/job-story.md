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
revision: 1
sourceRevision: 1
updated: "2026-09-22"
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

## 概念

ジョブストーリーは解決策を選ぶ前に、状況・動機・望む成果を結びます。探索の出発点であり、受け入れテストではありません。 [出典](https://www.intercom.com/blog/using-job-stories-design-features-ui-ux/)

## 実例

架空のログイン済み通勤者、未保存のA17：

1. 移動中に読書を中断するとき、
2. A17に戻る手がかりがほしい。
3. 後で最後まで読めるように。

リンク保存やリンク付きリマインダーを検討します。どちらもオフライン閲覧を保証しません。保存を選ぶなら、重複保存や書き込み失敗は別途検討します。

## 選ぶ条件

状況によってニーズが変わるときに適します。仮定した動機を調査で確かめ、ユーザーストーリーの開発単位とユースケースの経路を補います。
