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
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: プロップス・イベント・状態による描画
  advantages: カードの動作を再利用
  limitations: 共有状態の管理設計が必要
  suitable: コンポーネント中心のUI
  combinations: Astroアイランドと外部保存
---

## なぜ必要なのか

買い物リストと週間メニューが同じ画面にある家庭用の計画アプリを作るとします。家族は項目を追加し、名前と合計をすぐ確かめます。

家庭の計画には買い物リストと週間メニューが並びます。

## どう解決するのか

現場ノートのカード2枚は未保存で開始します。買い物リストを保存すると、そのカードだけ保存済みになり、週間メニューは変わりません。週間メニューも保存すると合計は1から2になります。同じカードを再び保存しても合計は2です。図はイベント・状態更新・描画をつなぎます。リセット・再読み込みで両方を消します。永続保存はありません。

## どんな考え方なのか

Reactのコンポーネントはプロップスを受け取り、状態からUIを表します。状態の設定関数は描画を要求します。通常の変数を変えるだけでは同じ仕組みになりません。

永続保存は別に追加します。

[出典](https://react.dev/learn)
