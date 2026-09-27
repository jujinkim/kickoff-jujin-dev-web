---
articleId: script
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

短い挨拶や表情のある見出しに使い、装飾的だからと本文まで置き換えないようにします。長文はセリフやサンセリフで読ませられます。接続方法や言語対応は書体ごとに異なります。

## 応用例

招待状はラテン文字の挨拶と実用的な催しの情報を分けます。個人のカードや短い見出しにも同じ強調を使えます。韓国語や日本語の手書きを示す見本ではありません。

## 実装の参考・注意点

document.fonts.ready後に実際の書体を確認します。一つのテキストノードをRangeで測り字形処理を保ちますが、合字・結合文字・代替字形は範囲に影響します。実験と実用の見本を分け、各言語の対応文字を検査します。
