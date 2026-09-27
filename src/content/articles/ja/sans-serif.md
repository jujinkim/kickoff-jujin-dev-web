---
kind: concept
articleId: sans-serif
lang: ja
title: サンセリフ
summary: セリフのない字形で簡潔な印象を伝え、読みやすさは実際の書体と文脈で確認します。
category: type-shapes
aliases:
  - サンセリフ
related:
  - theme
  - serif
  - script
status: published
revision: 9
sourceRevision: 9
updated: "2026-09-27"
comparison:
  features: セリフのない字形で簡潔な印象を伝え、読みやすさは実際の書体と文脈で確認します。
  advantages: サイズと太さで同じ見本に階層を作ります。
  limitations: 普遍的な読みやすさを仮定せず、似た文字と韓日のサブセットを確認します。
  suitable: 階層が明確な案内板やUIに向きます。
  combinations: 平面の操作部やセリフの見出しと組み合わせます。
checked: "2026-09-27"
---

## なぜ必要なのか

利用者が路線と時刻を素早く読む交通案内画面を作るとします。編集側は印刷物らしい雰囲気より簡潔な字形を選びつつ、似た表示を区別できるかも確かめます。

## どう解決するのか

交通案内の時刻・行先・状態を読みます。別の実験で太さや似た字形を比べます。ローカルのNoto SansとCJK書体が対応文字を描画し、リセットで初期見本へ戻ります。

## どんな考え方なのか

サンセリフはセリフの飾りを省きますが、端の形や比率はさまざまです。

普遍的な読みやすさを仮定せず、似た文字と韓日のサブセットを確認します。

[W3C](https://www.w3.org/TR/css-fonts-3/)
