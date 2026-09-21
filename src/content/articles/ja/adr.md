---
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
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "レンダリング方式のADRを提案状態で書いて。既存の判断を読み、制約、代案、費用、推薦、責任者、再検討条件を含めて。採用・却下・別案を質問して。私が決定するか明示的に委任するまでは採用扱いにしないで。"
---

## 概念

設計判断は動作や構造を選ぶこと。ADRは重要な選択の背景、代案、結果を保存する記録です。コミットは変更内容を示しても、不採用の理由までは説明しません。

## 必要な場面

複数の部品に影響する、長期の依存を増やす、元に戻す費用が高い判断で使います。ボタンの色に憲法会議は不要。でも認証戦略なら話は別です。

## 実例

アカウントのない公開カタログなら、事前生成HTMLが候補になります。鮮度の要件、リクエスト時レンダリングなどの代案、再ビルド費用を記録します。例のacceptedは責任者の同意後に付けます。AIの推薦はまだproposedです。

```text
ADR-001: Static catalog
Status: accepted
Context: public articles; no per-user data
Decision: pre-render HTML
Cost: publish requires a build
Revisit: private personalized content becomes required
```

## 選択肢とトレードオフ

メモは速い反面、紛失しやすいものです。ADRは状態と結果を可視化しますが管理が必要。不採用案も残すと議論の繰り返しを防げます。些細な選択まで残すと記録がごみ置き場になります。

## 選ぶ条件

提案、採用、却下、置換済みの状態を使います。固定番号と後継記録へのリンクを付けましょう。最初から知っていたふりで過去を書き換えず、当時の根拠を残します。制約が変わる再検討条件も決めます。

## AIへの指示例

レンダリング方式のADRを提案状態で書いて。既存の判断を読み、制約、代案、費用、推薦、責任者、再検討条件を含めて。採用・却下・別案を質問して。私が決定するか明示的に委任するまでは採用扱いにしないで。

## 関連記事と出典

- [SRSと完了条件：「完成」の意味から](/ja/catalog/srs/)
- [Astro・Hugo・Jekyll：HTMLを届ける三つの方法](/ja/catalog/static-sites/)

- [AWS — Architectural decision records](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/welcome.html)
