---
kind: concept
articleId: proportional
lang: ja
title: プロポーショナル
summary: 文字ごとに異なる送り幅で続く文章を組み、字間は別に調整します。
category: character-width
aliases:
  - プロポーショナル
related:
  - theme
  - monospace
status: published
revision: 8
sourceRevision: 8
updated: "2026-09-27"
comparison:
  features: 文字ごとに異なる送り幅で続く文章を組み、字間は別に調整します。
  advantages: 異なる送り幅が各文字の比率を反映します。
  limitations: 対応文字や数字機能は異なるため、名称から推測せず読み込んだ書体を測ります。
  suitable: 流れる本文に向きます。
  combinations: セリフもサンセリフも比例幅になり、等幅数字とも共存できます。
checked: "2026-09-27"
---

## なぜ必要なのか

長い段落がある庭の便りを作るとします。読者が続く文章を読む際、細い文字と広い文字に同じ幅を与えると間隔が不自然になります。

## どう解決するのか

庭の便りを読み、別の幅測定を見ます。読み込んだNoto SansではiとWの送り幅が異なります。数字は別に等幅で揃えられます。字間の変更が比例幅の定義ではありません。

## どんな考え方なのか

**プロポーショナル** — 比例幅の文字は異なる送り幅を使います。

対応文字や数字機能は異なるため、名称から推測せず読み込んだ書体を測ります。

[W3C](https://www.w3.org/TR/css-fonts-3/)
