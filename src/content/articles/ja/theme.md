---
kind: guide
articleId: "theme"
lang: "ja"
title: "テーマ・フォント・共通スタイル"
summary: "似た色五十個より、一つの決定を共有します。"
category: "design"
aliases:
  [
    "theme",
    "font",
    "design tokens",
    "테마",
    "폰트",
    "공통 스타일",
    "テーマ",
    "フォント",
    "デザイントークン",
  ]
related: ["layout", "architecture"]
example: "theme"
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "色、文字、間隔を調べ、英韓日の代替書体と意味的トークンを提案して。ライト・ダークの例とコントラスト測定を示して。未決定の方向性は適用前に質問し、キーボードのフォーカスと保存済み設定を維持して。"
---

## 概念

テーマは視覚的判断の集合です。デザイントークンは共通の色、間隔、文字に名前を付け、書体選びはその一部です。

## 実例

カードが背景と文字のトークンを使います。共通値を変えると、カードを書き直さずテーマを変えられます。

## 選ぶ条件

システム書体は端末で変わります。自己配信は一貫性とともに通信・許諾の作業を加えます。ダークでは別途コントラストを確認します。 役割別の色、読める文字、見えるフォーカス、保存したテーマ選択を保ちます。色名ではなく実際の背景で確認します。 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) · [W3C](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
