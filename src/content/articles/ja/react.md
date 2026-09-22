---
kind: concept
articleId: react
lang: ja
title: React
summary: 状態変更が表示ラベルを変えます。
category: web-ui
aliases:
  - React
related:
  - tools
  - vue
  - svelte
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  features: プロップス・イベント・状態による描画
  advantages: カードの動作を再利用
  limitations: 共有状態の管理設計が必要
  suitable: コンポーネント中心のUI
  combinations: Astroアイランドと外部保存
---

## 概念

Reactのコンポーネントはプロップスを受け取り、状態からUIを表します。状態の設定関数は描画を要求します。通常の変数を変えるだけでは同じ仕組みになりません。

## 実例

現場ノートのカード2枚は未保存で開始します。A17を保存すると、そのカードだけ保存済みになり、B04は変わりません。B04も保存すると合計は1から2になります。同じIDを再び保存しても合計は2です。図はイベント・状態更新・描画をつなぎます。リセット・再読み込みで両方を消します。永続保存はありません。

## 選ぶ条件

再利用するUIと明示的な共有状態の管理に適しています。永続保存は別に追加します。

[出典](https://react.dev/learn)
