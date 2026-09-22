---
kind: guide
articleId: "srs"
lang: "ja"
title: "要件と完了条件：望む動作を合意する"
summary: "ユーザーが動作を説明し、AIが要件と判断記録を作成します。"
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
related: ["architecture", "shipping"]
example: "spec"
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
aiPrompt: "確定済みの要件を読んで。重複、順序、在庫、ゲスト購入、障害復旧など未決定の製品動作と制約だけ質問して。回答を番号付き要件・完了条件・タスクに整理して。ユーザーストーリー・ユースケース・ジョブストーリーは必要に応じて自分で作成し、私に文書形式を選ばせないで。重要な判断の代案・状態・再検討条件を記録して。内部のデータ構造は自分で選び、不明な製品規則は推測しないで。"
---

## 概念

要件は観察できる動作と制約を説明し、完了条件はそれを確認可能にします。[NASA](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695421/SWE-050%2B-%2BSoftware%2BRequirements)

## 実例

空のカートに同じ本を二度追加すると、一行で数量二になります。在庫がなければ変更しません。ユーザーがこの動作を確認し、AIが保存構造を選びます。

## 選ぶ条件

開発前に範囲、動機、成功・失敗の動作を合意します。AIが適切なストーリーやシナリオを作り、ユーザーは文書形式を選ぶ必要がありません。重要な判断は背景と結果を記録しますが、保守負担も考慮します。AIが判断記録と完了条件をまとめます。[AWS](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
