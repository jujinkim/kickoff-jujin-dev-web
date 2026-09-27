---
articleId: single-column
lang: ja
sourceRevision: 8
sources:
  - title: "Every Layout: The Stack"
    url: "https://every-layout.dev/layouts/stack/"
    claim: 縦の流れと間隔のパターン原資料です。架空の散歩道は創作の応用です。
    checked: "2026-09-27"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: 狭い画面や拡大の検査を支えるもので、配置や書体の定義ではありません。
    checked: "2026-09-27"
---

## 選択・比較

手順・道順・続けて読む文章には一つの流れが適します。フィルターが常に必要ならサイドバー、独立した文脈を比較するなら複数領域が役立ちます。単一列の中にも小さなグリッドを置けます。

## 応用例

入口・休憩地点・目的地を順に置きます。距離は架空の例で実際の道順ではありません。設定ガイドでも準備・実行・完了確認に応用できます。

## 実装の参考・注意点

通常の文書フロー、意味のある見出し、標準のdetailsを使います。画面幅を固定せず行長を制限します。JavaScriptなしでも道順を読め、リセットは開閉部分を閉じるだけです。
