---
articleId: srs
lang: ja
sourceRevision: 8
sources:
  - title: "NASA: How to Write a Good Requirement"
    url: "https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/"
    claim: 明確で検証可能な要件を支えます。カートの結果は独自の作例で、NASAの要件ではありません。
    checked: "2026-09-26"
  - title: "AWS: Architectural decision record process"
    url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html"
    claim: >-
      アーキテクチャ決定記録の決定・背景・結果とライフサイクルを説明します。例のカート方針を定めたり、AIの出力品質を保証したりする資料ではありません。
    checked: "2026-09-26"
---

## 選択・比較

機能名に合意しても予測する結果が違うなら、動作をたどります。ユーザーストーリーは価値、ユースケースは成功・失敗の経路を整理できますが、観察可能な結果の合意は置き換えません。前提と確認方法が明確なら短い要件で足りる場合があります。文書の長さは準備の尺度ではありません。

## 応用例

書店のカートに本Aが1冊あります。意図した新しい追加なら数量2、処理済みの要求の再送なら数量1を保ちます。在庫不足はカートを保ち、問題を知らせます。同じボタンでも要求の届き方が違うので別々に検討します。合意した規則に識別子を付け、タスクと検証から参照します。

## 実装の参考・注意点

各確認を初期条件・操作・期待結果として書き、必要な通知とデータ保全も含めます。未決定の動作は推測で実装せず質問として残します。性能が重要な場合だけ測定可能な基準を合意します。範囲の変更では要件、影響する作業、検証を一緒に更新します。配列・マップ・文書形式はAIが選べますが、製品の動作はユーザーが決めます。
