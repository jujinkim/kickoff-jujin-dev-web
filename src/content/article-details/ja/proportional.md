---
articleId: proportional
lang: ja
sourceRevision: 8
sources:
  - title: "W3C: CSS Fonts Level 3"
    url: "https://www.w3.org/TR/css-fonts-3/"
    claim: 汎用書体分類と数字の機能を定義します。実際の送り幅は読み込んだ書体と字形処理に依存します。
    checked: "2026-09-27"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: 狭い画面や拡大の検査を支えるもので、配置や書体の定義ではありません。
    checked: "2026-09-27"
---

## 選択・比較

文章で文字ごとの比率を生かすときに比例幅を選びます。空白でラテン文字の列を揃えるなら等幅が適します。セリフもサンセリフも比例幅になり、等幅数字とも併用できます。

## 応用例

庭の便りは続くラテン文字の段落と翻訳された案内を並べます。記事や通常のUI文にも使えます。全字が比例幅と仮定せず、実際の書体と言語の文字を確認します。

## 実装の参考・注意点

document.fonts.ready後に実際の書体を確認します。一つのテキストノードをRangeで測り字形処理を保ちますが、合字・結合文字・代替字形は範囲に影響します。実験と実用の見本を分け、各言語の対応文字を検査します。
