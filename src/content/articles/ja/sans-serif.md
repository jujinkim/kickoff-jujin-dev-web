---
kind: concept
articleId: sans-serif
lang: ja
title: サンセリフ
summary: "交通案内に簡潔な字形を使い、太さや見分けにくい文字を確認します。"
category: type-shapes
aliases:
  - サンセリフ
related:
  - theme
  - serif
  - script
status: published
revision: 7
sourceRevision: 7
updated: "2026-09-26"
comparison:
  features: サンセリフはセリフの飾りを省きますが、端の形や比率はさまざまです。
  advantages: サイズと太さで同じ見本に階層を作ります。
  limitations: 普遍的な読みやすさを仮定せず、似た文字と韓日のサブセットを確認します。
  suitable: 階層が明確な案内板やUIに向きます。
  combinations: 平面の操作部やセリフの見出しと組み合わせます。
---

## なぜ必要なのか

利用者が路線と時刻を素早く読む交通案内画面を作るとします。編集側は印刷物らしい雰囲気より簡潔な字形を選びつつ、似た表示を区別できるかも確かめます。

## どう解決するのか

列車案内板に使う言葉とiiiWWW 0123、数字を比べます。文字入力、サイズ、実測幅ガイド、数字の整列を操作します。文字列の接続形を保ちます。リセット・再読み込みで最初の文字と48pxに戻ります。 太さを変えて同じ文字の線の違いを比べます。

## どんな考え方なのか

サンセリフはセリフの飾りを省きますが、端の形や比率はさまざまです。

普遍的な読みやすさを仮定せず、似た文字と韓日のサブセットを確認します。

[W3C](https://www.w3.org/TR/css-fonts-3/)
