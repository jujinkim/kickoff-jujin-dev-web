---
articleId: two-columns
lang: ja
sourceRevision: 7
sources:
  - title: "W3C Design System: Sidebar"
    url: "https://design-system.w3.org/layouts/sidebar.html"
    claim: 細い補助パネルと幅に応じた縦並びの作例です。カタログ全体の公式分類ではありません。
    checked: "2026-09-26"
  - title: CSS Grid Layout Level 1
    url: "https://www.w3.org/TR/css-grid-1/"
    claim: トラックと独立したグリッド項目の配置を定義します。
    checked: "2026-09-26"
  - title: CSS Multi-column Layout Level 1
    url: "https://www.w3.org/TR/css-multicol-1/"
    claim: 分割されて続く本文の流れと独立した配置領域を区別します。
    checked: "2026-09-26"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: 情報や機能を失わない狭い画面の確認を支えます。サイドバーの定義ではありません。
    checked: "2026-09-26"
---

## 選択・比較

条件と結果、章のナビゲーションと文書、メタデータと編集画面のように、一方が他方を支えるときにサイドバーが役立ちます。同じ幅である必要はありません。順番に読む作業には単一カラム、複数の作業領域を見続けるなら複数領域が向きます。主領域の中にリストやグリッドを置けるので併用できます。

## 応用例

レシピ一覧では結果を見ながら材料と時間を変えます。トマトと20分では1件、10分では該当なしと復帰の案内を表示します。狭い画面でも同じ条件がレシピの前に来ます。文書サイトにも同じ構造を使えますが、レシピの条件ではなく文書へのリンクが必要です。

## 実装の参考・注意点

Gridの `grid-template-columns: minmax(150px, .7fr) minmax(0, 2fr)` と内容幅による切り替えを使えます。Flexboxでも幅に応じて2領域を折り返せます。縦に並ぶ際もDOM順序の意味を保ちます。サイドバーは固定表示でなくても構いません。stickyを加える前に拡大、長いラベル、内容の高さを確認します。CSSの `column-count` は一つの本文を複数の段に流すもので、独立したページ領域は作りません。
