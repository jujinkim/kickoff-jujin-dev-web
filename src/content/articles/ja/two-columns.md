---
kind: concept
articleId: two-columns
lang: ja
title: サイドバーレイアウト
summary: 主な内容の横にナビゲーション・フィルター・補足情報を置き、一緒に見られるようにします。
category: columns
aliases:
  - サイドバーレイアウト
  - 2カラム
  - Sidebar layout
  - Two columns
related:
  - layout
  - single-column
  - multiple-columns
status: published
revision: 7
sourceRevision: 7
updated: "2026-09-27"
comparison:
  features: 主領域の隣に細い補助領域を配置
  advantages: 条件と結果を一緒に確認
  limitations: 読み幅が不足する前に縦へ切り替える
  suitable: 内容の隣にナビゲーションや条件を保つ
  combinations: 主領域内にリストやグリッドを配置可能
checked: "2026-09-26"
---

## なぜ必要なのか

レシピ一覧で料理する人は材料と調理時間から夕食を選びます。料理を比べながら条件を変えます。途切れない読書より結果の横にある操作部が重要です。複数の作業領域が同等に重要なら別の構成が必要です。

## どう解決するのか

トマトと20分以内を選ぶと、トマトとバジルのパスタだけが残ります。一覧から調理メモを開けます。10分以内では該当なしとなり、条件解除で戻せます。狭い画面では条件の後にレシピが続きます。

## どんな考え方なのか

[**サイドバーレイアウト**](https://design-system.w3.org/layouts/sidebar.html)は幅が足りるとき、主領域の横に細い補助領域を置きます。FlexboxやGridで実装できます。本文が流れるCSS段組みとは異なるページ構成です。窮屈になる前に縦に並べます。
