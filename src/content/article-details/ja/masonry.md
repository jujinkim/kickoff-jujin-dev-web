---
articleId: masonry
lang: ja
sourceRevision: 7
sources:
  - title: "Masonry: Layout"
    url: "https://masonry.desandro.com/layout.html"
    claim: 元のライブラリ文書は画像を考慮した配置を説明します。このサイトではライブラリではなく独自の小さな配置処理を使います。
    checked: "2026-09-27"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: 狭い画面や拡大の検査を支えるもので、配置や書体の定義ではありません。
    checked: "2026-09-27"
---

## 選択・比較

画像中心の閲覧には異なる高さを詰める配置が適します。行ごとの属性比較なら均等グリッド、厳密な読む順なら一覧を使います。メイソンリーの視覚とフォーカス順は明示的に検査します。

## 応用例

アルバムは横長・縦長の画像と異なる長さの説明を混ぜます。作品集にも応用できます。同じ写真に別の記憶を付け、文章の高さも影響することを示します。

## 実装の参考・注意点

ソース順を保ち、実際の高さを測り、画像・書体・開閉の変化を監視します。JavaScriptなしでは通常のグリッドです。展開後にカードの全組み合わせの重なりとTabのDOM順を確認します。
