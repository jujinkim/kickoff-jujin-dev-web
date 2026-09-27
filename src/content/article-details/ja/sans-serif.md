---
articleId: sans-serif
lang: ja
sourceRevision: 9
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

情報階層に簡潔な印象が合えばサンセリフを使います。セリフは記事らしい雰囲気、スクリプトは短い表現に向きます。普遍的に読みやすい形はなく、文字・サイズ・太さ・言語を比べます。

## 応用例

架空の交通案内は大きさと太さで時刻・行先・運行状態を分けます。標識やUIにも応用できます。実際の運行情報ではなく書体の例です。

## 実装の参考・注意点

document.fonts.ready後に実際の書体を確認します。一つのテキストノードをRangeで測り字形処理を保ちますが、合字・結合文字・代替字形は範囲に影響します。実験と実用の見本を分け、各言語の対応文字を検査します。
