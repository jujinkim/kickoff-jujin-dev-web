---
kind: concept
articleId: vue
lang: ja
title: Vue
summary: リアクティブな状態がテンプレートを更新します。
category: web-ui
aliases:
  - Vue
related:
  - tools
  - react
  - svelte
status: published
revision: 5
sourceRevision: 5
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 状態に結び付いたテンプレート
  advantages: ロジックとマークアップを併記
  limitations: 共有状態の管理が必要
  suitable: テンプレート中心のUIチーム
  combinations: プロップスとイベントを使うAstroアイランド
---

## なぜ必要なのか

読者が本や記事を保存する読書棚を作るとします。表示と件数を一致させたい。制作側は表示を一つずつ書き換える代わりに、HTMLに近いテンプレートを反応的な状態に結び付けたいと考えます。

## どう解決するのか

現場ノートのカード2枚は未保存で開始します。図書館の本を保存すると、そのカードだけ保存済みになり、庭の記事は変わりません。庭の記事も保存すると合計は1から2になります。同じカードを再び保存しても合計は2です。図はリアクティブな状態とテンプレートをつなぎます。リセット・再読み込みで両方を消します。永続保存はありません。

## どんな考え方なのか

Vueはテンプレートをリアクティブな状態に結び付けます。単一ファイルコンポーネントはロジック・テンプレート・スタイルの記述形式であり、通信ファイル1つを保証しません。

共有状態の管理と外部保存は別に決めます。

[出典](https://vuejs.org/guide/introduction.html)
