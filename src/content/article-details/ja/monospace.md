---
articleId: monospace
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

コードや空白で揃える記録に等幅を使います。続く文章には比例幅が自然な場合があり、数値表なら数字だけの等幅で足りることもあります。サンセリフの形が等幅を意味するわけではありません。

## 応用例

架空のラテン文字の観測値で列の整列を示します。ログ・コード・識別子にも応用できます。行列の関係を明示する必要がある場合は意味のある表が適します。

## 実装の参考・注意点

document.fonts.ready後に実際の書体を確認します。一つのテキストノードをRangeで測り字形処理を保ちますが、合字・結合文字・代替字形は範囲に影響します。実験と実用の見本を分け、各言語の対応文字を検査します。
