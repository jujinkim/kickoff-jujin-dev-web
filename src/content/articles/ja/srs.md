---
kind: guide
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
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "書店のカートについて、確定済みの要件を先に読んで。在庫、ゲスト購入、失敗時の未決定事項を挙げ、実装前に選択を質問して。番号付き要件、対象外、受け入れ例、作業分割を残して。明示的に委任していない製品動作を勝手に決めないで。"
---

## 概念

ソフトウェア要求仕様（SRS）は観察できる動作と制約を説明します。受け入れ基準は要求を確認可能にします。

## 実例

空のカートへ同じ本を二回入れると、一行の数量が2になります。在庫がなければカートを変えません。

## 選ぶ条件

チェックリストは軽量で、ユーザーストーリーは動機を説明します。詳細仕様はチーム間の調整を助けますが管理が増えます。 成功と失敗の例を持つ番号付き要求を書きます。根拠のある測定方法がある場合だけ数値制限を加えます。 [NASA](https://swehb.nasa.gov/display/SWEHBVD/SWE-050+-+Software+Requirements)
