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
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "色、文字、間隔を調べ、英韓日の代替書体と意味的トークンを提案して。ライト・ダークの例とコントラスト測定を示して。未決定の方向性は適用前に質問し、キーボードのフォーカスと保存済み設定を維持して。"
---

## 概念

テーマは視覚的な判断の集合。デザイントークンは色、間隔、文字など共通値に名前を付けます。green-7よりsurfaceとtextが目的を示します。文字組みは書体だけでなく大きさ、行高、太さ、行長で読み心地を作ります。

## 必要な場面

複数部品を一緒に変える場合やライト・ダーク対応で使います。多言語では韓国語と日本語の代替フォントが必要。高級な欧文書体を着た空の四角は翻訳ではありません。

## 実例

CSSの例はダーク時に背景と文字のトークンを変え、カードの規則を共有します。フォーカスと状態色を区別しましょう。読み込み中も本文を読めるようにし、実際の多言語段落でシステム書体と許諾済みの自己配信書体を比べます。

```text
:root { --surface: #fffdf7; --ink: #243e35; }
[data-theme=dark] { --surface: #182922; --ink: #f5f2e7; }
.card { background: var(--surface); color: var(--ink); }
```

## 選択肢とトレードオフ

システム書体は追加通信が不要ですが端末で変わります。自己配信は一貫する反面、容量、許諾、サブセット管理が必要。意味的トークンは一括変更を助けますが用途を文書化します。色の反転だけではダークのコントラスト検証になりません。

## 選ぶ条件

小さな文字スケールと役割別の色から始めます。実際の背景で測り、WCAG AAの通常文字は4.5:1、条件を満たす大文字は3:1を確認。操作部品とフォーカスも確認します。明示的な選択を保存し、未選択時だけ端末設定を使います。

## AIへの指示例

色、文字、間隔を調べ、英韓日の代替書体と意味的トークンを提案して。ライト・ダークの例とコントラスト測定を示して。未決定の方向性は適用前に質問し、キーボードのフォーカスと保存済み設定を維持して。

## 関連記事と出典

- [レイアウトとUI要素に名前を付ける](/ja/guides/layout/)
- [アーキテクチャとSOLID・GRASP入門](/ja/guides/architecture/)

- [MDN — Custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [W3C — Contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
