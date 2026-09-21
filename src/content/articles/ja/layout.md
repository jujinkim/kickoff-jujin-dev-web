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
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "カタログを名前のある領域と部品で説明して。モバイルとデスクトップの配置、読み順、キーボード、空・読み込み・エラー状態を提案して。情報の優先度が未定なら配置を決める前に質問して。テキストのワイヤーフレームと完了条件を残して。"
---

## 概念

レイアウトは領域を配置し、部品は小さな仕事をします。ヘッダーは識別、ナビは移動、パンくずは階層、カードは情報のまとまり、ダイアログは現在の作業を中断します。ドロワーはパネルの形式で、すべてのサイドバーの別名ではありません。

## 必要な場面

言葉より画像のほうが明確なときに役立ちます。領域、整列、間隔、状態、画面幅への対応を説明しましょう。「もっとすっきり」はAIを無給の推測旅行に送ります。

## 実例

カタログはヘッダー、絞り込みツール、カードのグリッド、フッターで構成できます。記事は本文横に目次を追加。狭い画面では補助ナビを前後へ移し、読み順を守ります。下の図は画像なしでも理解できます。

```text
[ Header: identity + navigation ]
[ Breadcrumb: Catalog > Design ]
[ Sidebar ] [ Main: article + examples ]
[ Footer: related links ]
Mobile: main content first; navigation collapses
```

## 選択肢とトレードオフ

グリッドは一覧に、リストは長い見出しの比較に向きます。固定サイドバーは移動が速い反面、幅を使います。モーダルは短い作業へ集中させますが、フォーカス管理、閉じる操作、呼び出し元への復帰が必要です。

## 選ぶ条件

意味のあるHTML領域とモバイル一列から始めましょう。余裕があれば列を増やします。中断が役立つときだけダイアログを使い、空・読み込み・エラー・キーボードの状態も定義します。

## AIへの指示例

カタログを名前のある領域と部品で説明して。モバイルとデスクトップの配置、読み順、キーボード、空・読み込み・エラー状態を提案して。情報の優先度が未定なら配置を決める前に質問して。テキストのワイヤーフレームと完了条件を残して。

## 関連記事と出典

- [テーマ・フォント・共通スタイル](/ja/guides/theme/)
- [SRSと完了条件：「完成」の意味から](/ja/guides/srs/)

- [MDN — CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [WAI — Dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
