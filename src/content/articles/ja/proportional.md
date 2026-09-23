---
kind: concept
articleId: proportional
lang: ja
title: プロポーショナル
summary: 同じ文字・文章・数字で書体を比較。
category: character-width
aliases:
  - プロポーショナル
related:
  - theme
  - monospace
status: published
revision: 5
sourceRevision: 5
updated: "2026-09-23"
comparison:
  features: 比例幅の文字は異なる送り幅を使います。
  advantages: 異なる送り幅が各文字の比率を反映します。
  limitations: 対応文字や数字機能は異なるため、名称から推測せず読み込んだ書体を測ります。
  suitable: 流れる本文に向きます。
  combinations: セリフもサンセリフも比例幅になり、等幅数字とも共存できます。
---

## なぜ必要なのか

長い段落がある庭の便りを作るとします。読者が続く文章を読む際、細い文字と広い文字に同じ幅を与えると間隔が不自然になります。

## どう解決するのか

庭の便りに使う言葉とiiiWWW 0123、数字を比べます。文字入力、サイズ、実測幅ガイド、数字の整列を操作します。文字列の接続形を保ちます。リセット・再読み込みで最初の文字と48pxに戻ります。 iとWの実測送り幅は異なりますが、数字は別に等幅で揃えられます。

## どんな考え方なのか

**プロポーショナル** — 比例幅の文字は異なる送り幅を使います。

対応文字や数字機能は異なるため、名称から推測せず読み込んだ書体を測ります。

[W3C](https://www.w3.org/TR/css-fonts-3/)
