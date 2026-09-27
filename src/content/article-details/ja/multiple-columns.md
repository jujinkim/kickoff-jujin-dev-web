---
articleId: multiple-columns
lang: ja
sourceRevision: 8
sources:
  - title: "W3C: CSS Grid Level 1"
    url: "https://www.w3.org/TR/css-grid-1/"
    claim: 勧告候補草案は二次元のグリッド配置を定義し、このサイトのページ分類を規定するものではありません。
    checked: "2026-09-27"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: 狭い画面や拡大の検査を支えるもので、配置や書体の定義ではありません。
    checked: "2026-09-27"
  - title: "W3C: CSS Multi-column Level 1"
    url: "https://www.w3.org/TR/css-multicol-1/"
    claim: ページ領域とは別に、文章を複数の段へ分割する仕組みを定義します。
    checked: "2026-09-27"
---

## 選択・比較

選択・作業・独立した文脈が同時に必要なときに使います。主作業と補助操作が一つずつならサイドバーが簡潔です。領域数だけで使いやすさを証明できません。

## 応用例

展示ごとに写真と観察の問いを結び付けます。編集画面や参考ツールにも応用できます。生成した植物写真は配置を示し、実際の収蔵品の記録ではありません。

## 実装の参考・注意点

CSS Gridは独立領域を配置し、CSS段組みは一つの内容の流れを分割します。DOMを操作→展示→説明にし、小画面でも同じ順序にします。一つの選択状態で写真と文脈を更新します。
