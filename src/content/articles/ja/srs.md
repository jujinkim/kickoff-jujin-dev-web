---
articleId: "srs"
lang: "ja"
title: "SRSと完了条件：「完成」の意味から"
summary: "願望を、検証できる要件に変えます。"
category: "planning"
aliases:
  [
    "SRS",
    "requirements",
    "acceptance criteria",
    "요구사항",
    "완료 조건",
    "要件",
    "受け入れ条件",
  ]
related: ["adr", "ooad"]
example: "spec"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "書店のカートについて、確定済みの要件を先に読んで。在庫、ゲスト購入、失敗時の未決定事項を挙げ、実装前に選択を質問して。番号付き要件、対象外、受け入れ例、作業分割を残して。明示的に委任していない製品動作を勝手に決めないで。"
---

## 概念

SRSは、ソフトウェアの観察可能な動作と制約を記す要件仕様です。受け入れ条件は要件を確認可能にします。「直感的に」は気分であってテストではありません。目的、範囲、対象外、動作、品質制約を分けましょう。

## 必要な場面

カートや予約など失敗状態のある機能をAIに頼む前に使います。小さなプロジェクトなら一ページで十分。大切なのは文書の重さより、認識が一致することです。

## 実例

書店で「本を買える」と言っても、在庫、数量、ゲスト購入、決済失敗が隠れています。下の例では同じ本を二回追加すると一行の数量が2になります。支払い中に在庫が変わった場合の動作と、その決定者も明記します。

```text
Given: a visitor with an empty cart
When: they add the same book twice
Then: one cart row has quantity 2
Failure: unavailable stock leaves the cart unchanged
```

## 選択肢とトレードオフ

チェックリストは安く管理できますが、相互作用を見落としがちです。ユーザーストーリーは動機を説明しても、受け入れ条件が必要です。詳細なSRSは複数チームの合意に役立つ反面、レビューと更新の費用が増えます。

## 選ぶ条件

小規模な機能なら、番号付きの各要件に成功例と失敗例を一つずつ書きます。性能目標は端末、負荷、測定方法と一緒に決めてください。科学的に見えるからと100msを発明しないこと。

## AIへの指示例

書店のカートについて、確定済みの要件を先に読んで。在庫、ゲスト購入、失敗時の未決定事項を挙げ、実装前に選択を質問して。番号付き要件、対象外、受け入れ例、作業分割を残して。明示的に委任していない製品動作を勝手に決めないで。

## 関連記事と出典

- [Design DecisionとADR：判断を残す](/ja/catalog/adr/)
- [OOADと責務分離：それぞれに仕事を](/ja/catalog/ooad/)

- [NASA — Software requirements](https://swehb.nasa.gov/display/SWEHBVD/SWE-050+-+Software+Requirements)
