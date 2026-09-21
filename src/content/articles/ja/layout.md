---
kind: guide
articleId: "layout"
lang: "ja"
title: "レイアウトとUI要素に名前を付ける"
summary: "ヘッダー、サイドバー、グリッド、モーダル。指摘にも座標が必要です。"
category: "design"
aliases:
  [
    "layout",
    "sidebar",
    "breadcrumb",
    "modal",
    "레이아웃",
    "사이드바",
    "모달",
    "レイアウト",
    "サイドバー",
    "モーダル",
  ]
related: ["theme", "srs"]
example: "layout"
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "カタログを名前のある領域と部品で説明して。モバイルとデスクトップの配置、読み順、キーボード、空・読み込み・エラー状態を提案して。情報の優先度が未定なら配置を決める前に質問して。テキストのワイヤーフレームと完了条件を残して。"
---

## 概念

レイアウトは領域を配置します。ヘッダーは識別、ナビゲーションは移動、カードは内容のまとまりを担い、ダイアログは作業を中断します。

## 実例

カタログ：ヘッダー → フィルター → カードのグリッド → フッター。モバイルでは読む順に積みます。

## 選ぶ条件

グリッドは一覧、リストは長いタイトルに向きます。サイドバーは幅を使います。ダイアログには明確な閉じ方とフォーカス管理が必要です。 意味のある領域とモバイルの一列から始めます。空、読み込み、エラー、キーボード操作の状態も含めます。 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) · [WAI](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
