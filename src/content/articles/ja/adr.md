---
kind: guide
articleId: "adr"
lang: "ja"
title: "Design DecisionとADR：判断を残す"
summary: "選んだ理由と、選び直す条件を記録します。"
category: "planning"
aliases:
  [
    "ADR",
    "Design Decision",
    "decision record",
    "설계 결정",
    "결정 기록",
    "設計判断",
    "決定記録",
  ]
related: ["srs", "static-sites"]
example: "decision"
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "レンダリング方式のADRを提案状態で書いて。既存の判断を読み、制約、代案、費用、推薦、責任者、再検討条件を含めて。採用・却下・別案を質問して。私が決定するか明示的に委任するまでは採用扱いにしないで。"
---

## 概念

アーキテクチャ決定記録（ADR）は重要な選択、その背景、代案、結果を残します。

## 実例

公開カタログで事前生成HTMLを選びます。公開には再ビルドが必要です。非公開の個別コンテンツが必要になったら再検討します。

## 選ぶ条件

簡単なメモは速い反面、失われがちです。ADRは理由を残しますが管理が必要です。 担当者と提案・採用・却下・置換済みの状態を記録します。推薦は承認ではありません。 [AWS](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/welcome.html)
