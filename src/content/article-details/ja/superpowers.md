---
articleId: "superpowers"
lang: "ja"
sourceRevision: 1
sources:
  [
    {
      "title": "Superpowers README",
      "url": "https://github.com/obra/superpowers",
      "claim": "Superpowersは組合せ可能な開発スキルをまとめ、環境別のプラグイン・拡張導入を記します。",
      "checked": "2026-10-08",
    },
    {
      "title": "Superpowers test-driven development skill",
      "url": "https://github.com/obra/superpowers/blob/main/skills/test-driven-development/SKILL.md",
      "claim": "テスト先行の手順は最小実装の前に失敗を確認し、その後で通過する動作を確認します。",
      "checked": "2026-10-08",
    },
    {
      "title": "Superpowers brainstorming skill",
      "url": "https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md",
      "claim": "設計の明確化は提供済みの背景を再利用し、実装前に選んだ経路の設計条件を満たします。",
      "checked": "2026-10-08",
    },
  ]
---

## 選択・比較

優先するのは繰り返せる開発手順です。設計を明確化し作業を計画し、回帰問題を検証して結果をレビューします。Superpowersにはそれらのスキルがあります。継続する要件記録が必要ならSpec KitやOpenSpecも検討しますが、実行を管理する記録と承認を先に定めます。既存の指示と通常のエージェントで十分な場合もあります。選択基準は編集上の判断で、測定済みの品質順位ではありません。

## 応用例

架空のレシピは4人分に小麦粉200 gを使います。2人分には100 gが必要で、図の失敗結果200 gが不具合を示します。有意義なテストは倍率の動作を確認し、修正前の失敗と修正後の通過を観察します。必要なら他の合意済みの分量と丸め規則も確認します。図は手順の説明であり、テストを実行せず実際のモデル結果でもありません。

## 実装の参考・注意点

利用する外部エージェントの最新の公式導入指針を読みます。環境ごとのプラグイン・拡張導入が記され、現在のCodex CLIにはプラグイン選択の流れがあります。AIが操作できなければ正確な利用者の手順を示し設定は未完了とします。使用前に導入スキル・フック・範囲・有効な版を確認します。必要なスキルを読込み・呼出し、結果を確認します。導入だけでは有効化の証明になりません。承認済みの要件を再利用し、プロジェクトのテスト・委任制限を守ります。サブエージェント・worktree・統合・公開の指示を追加権限と解釈しません。全手順は小さい修正には過剰な場合があります。
