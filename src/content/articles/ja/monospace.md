---
kind: concept
articleId: monospace
lang: ja
title: 等幅
summary: 同じ文字送り幅でテキストデータを揃え、字形や代替書体の範囲は別に確認します。
category: character-width
aliases:
  - 等幅
related:
  - theme
  - proportional
status: published
revision: 8
sourceRevision: 8
updated: "2026-09-27"
comparison:
  features: 同じ文字送り幅でテキストデータを揃え、字形や代替書体の範囲は別に確認します。
  advantages: 同じラテン送り幅がコードと資料の列を揃えます。
  limitations: CJK、絵文字、結合文字、代替書体では異なるため、対応文字を確認します。
  suitable: コードや整列したラテン文字の資料に向きます。
  combinations: 等幅コードの隣に比例幅の説明文を置けます。
checked: "2026-09-27"
---

## なぜ必要なのか

天気の記録を文字だけの表で示す画面を作るとします。測定値を列で比べる際、ラテン文字の幅が異なると位置がずれます。

## どう解決するのか

天気の記録の時刻・気温・風の列を読みます。別の実験でiとWを比べ、見本と実測ガイドを調整します。対応するラテン文字は送り幅が同じで、リセットすると48pxに戻ります。

## どんな考え方なのか

等幅ラテン文字は輪郭が違っても送り幅を共有します。

CJK、絵文字、結合文字、代替書体では異なるため、対応文字を確認します。

[W3C](https://www.w3.org/TR/css-fonts-3/)
