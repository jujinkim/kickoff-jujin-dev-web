---
kind: "concept"
articleId: "superpowers"
lang: "ja"
title: "Superpowers"
summary: "設計・テスト・調査・レビューの再現可能な手順を重視するとき、組み合わせられる開発スキルを使います。"
category: "agent-workflows"
aliases: ["superpowers", "Superpowers", "슈퍼파워스", "スーパーパワーズ"]
related: ["no-extra-skills", "spec-kit", "openspec", "tools", "srs"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-10-08"
checked: "2026-10-08"
comparison:
  {
    "features": "組合せ可能な設計・テスト・調査・レビュースキル",
    "advantages": "明確な開発と検証の習慣",
    "limitations": "手順とエージェント設定の費用",
    "suitable": "繰り返せる実行と回帰確認",
    "combinations": "既存要件や記録の所有が明確な仕様手順",
  }
---

## なぜ必要なのか

レシピアプリで料理する人は人数に合わせて材料を調整します。人数を半分にしても小麦粉の量が誤っています。開発者には繰り返せるテスト・レビューによる修正手順が必要です。製品仕様の保管だけでその習慣は生まれません。

## どう解決するのか

倍率のルールを合意し、200 gが100 gになるテストを書きます。失敗を確認して計算を直し、確認を再実行します。合意した計画と変更を照合してレビューします。

## どんな考え方なのか

Superpowersは開発手順を組合せ可能なエージェントスキルとして提供します。導入・有効化は実行環境で異なります。手順の費用があり、既存の確認が十分なら維持し、要件の追跡が優先なら仕様手順を検討します。

[出典](https://github.com/obra/superpowers)
