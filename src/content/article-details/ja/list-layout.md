---
articleId: list-layout
lang: ja
sourceRevision: 7
sources:
  - title: "W3C: CSS Grid Level 1"
    url: "https://www.w3.org/TR/css-grid-1/"
    claim: グリッドのトラックが項目の整列を支えます。一覧のパターンと架空の貸出状態は作例の設計です。
    checked: "2026-09-27"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: 狭い画面や拡大の検査を支えるもので、配置や書体の定義ではありません。
    checked: "2026-09-27"
  - title: "Project Gutenberg: Pride and Prejudice"
    url: "https://www.gutenberg.org/ebooks/1342"
    claim: 題名と著者Jane Austenを確認し、デモの貸出状態は架空です。
    checked: "2026-09-27"
  - title: "Project Gutenberg: Frankenstein"
    url: "https://www.gutenberg.org/ebooks/84"
    claim: 題名と著者Mary Shelleyを確認し、貸出データは取得しません。
    checked: "2026-09-27"
  - title: "Project Gutenberg: Alice’s Adventures in Wonderland"
    url: "https://www.gutenberg.org/ebooks/11"
    claim: 題名と著者Lewis Carrollを確認し、書誌ラベルだけを使います。
    checked: "2026-09-27"
  - title: "Project Gutenberg Canada: A Room of One’s Own"
    url: "https://www.gutenberg.ca/ebooks/woolfv-aroomofonesown/woolfv-aroomofonesown-00-h.html"
    claim: 題名と著者Virginia Woolfを確認し、本文は複製しません。
    checked: "2026-09-27"
---

## 選択・比較

同じ文字項目を繰り返し見るときに行を選びます。グリッドは画像を対等に強調し、メイソンリーは異なる比率を保ちます。一覧を主領域に置き、横にフィルターを置くこともできます。

## 応用例

書名・著者・貸出状況を一緒に表示します。連絡先や受信箱にも同じ反復を使えます。実際の書誌情報と、この例の架空の在庫状態は別です。

## 実装の参考・注意点

検索語を正規化して絞り込み、保存しません。ラベル付き入力と空の結果を残します。狭い画面では状態を隠さず、同じ行の題名の下へ置きます。実際の貸出情報には鮮度と競合の方針が必要です。
