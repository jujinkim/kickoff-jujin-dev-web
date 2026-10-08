---
articleId: "spec-kit"
lang: "ja"
sourceRevision: 1
sources:
  [
    {
      "title": "Spec Kit SDD quickstart",
      "url": "https://github.github.io/spec-kit/quickstart.html",
      "claim": "仕様・計画・作業・実装・実装照合がSDDの流れで、追加の品質確認を選択できます。",
      "checked": "2026-10-08",
    },
    {
      "title": "Spec Kit installation",
      "url": "https://github.github.io/spec-kit/installation.html",
      "claim": "導入と初期化には実行環境・連携の条件があり、エージェント呼出しとは別です。",
      "checked": "2026-10-08",
    },
    {
      "title": "Spec Kit integrations",
      "url": "https://github.github.io/spec-kit/reference/integrations.html",
      "claim": "呼出し構文と導入先は選んだエージェント連携で異なります。",
      "checked": "2026-10-08",
    },
    {
      "title": "Spec Kit existing projects",
      "url": "https://github.github.io/spec-kit/guides/existing-projects.html",
      "claim": "既存プロジェクトの初期化は競合する管理パスを変更し得るため、確認可能な基準状態から始めます。",
      "checked": "2026-10-08",
    },
    {
      "title": "Spec Kit README",
      "url": "https://github.com/github/spec-kit",
      "claim": "SDD・修正・案の評価は別の入口で、後二つは任意の拡張です。",
      "checked": "2026-10-08",
    },
  ]
---

## 選択・比較

この例では予約・通知の作業に関わる共同ルールを優先します。Spec Kitは要件を計画・作業・実装・仕様との照合まで結びます。既存の方法が十分なら追加スキルなしで進められます。Superpowersは繰り返せる開発スキル、OpenSpecは現在の要件と変更差分を重視します。道具は組み合わせられますが、計画・作業一覧・要件ごとに基準となる記録を定めます。パッケージはAIの指示遵守を保証しません。

## 応用例

例のルールは取消後、席を一般公開する前に次の対象待機者へ通知することです。対象条件と返答期限は勝手に作らず判断・記録します。仕様・技術計画・作業を確認し、検証を合意したルールへ結びます。実装との照合ではコードと記録を比較し、残作業を追加する場合があります。ファイル数の少ない権限変更にもこの手順が必要な場合があります。

## 実装の参考・注意点

外部エージェントで現在の実行環境、導入済みSpec Kit、ファイル、公式導入指針を確認します。対応する連携を選び既存導入を再利用します。許可範囲で確認した版を導入し対象プロジェクトを初期化して、生成ファイルと呼出し対応を調べます。端末の設定とエージェントのスキル呼出しは別です。Codexでは`$speckit-specify`などを使い導入された形式を確認します。既存プロジェクトの初期化は競合する管理ファイルを変更し得るため、作業を保全し差分を確認します。実装は許可範囲で開始します。仕様・計画・作業をkickoffの記録に再利用し計画を重複管理しません。
