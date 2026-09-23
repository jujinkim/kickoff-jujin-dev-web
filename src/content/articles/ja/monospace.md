---
kind: concept
articleId: monospace
lang: ja
title: 等幅
summary: 同じ文字・文章・数字で書体を比較。
category: character-width
aliases:
  - 等幅
related:
  - theme
  - proportional
status: published
revision: 5
sourceRevision: 5
updated: "2026-09-23"
comparison:
  features: 等幅ラテン文字は輪郭が違っても送り幅を共有します。
  advantages: 同じラテン送り幅がコードと資料の列を揃えます。
  limitations: CJK、絵文字、結合文字、代替書体では異なるため、対応文字を確認します。
  suitable: コードや整列したラテン文字の資料に向きます。
  combinations: 等幅コードの隣に比例幅の説明文を置けます。
---

## なぜ必要なのか

天気の記録を文字だけの表で示す画面を作るとします。測定値を列で比べる際、ラテン文字の幅が異なると位置がずれます。

## どう解決するのか

天気の記録に使う言葉とiiiWWW 0123、数字を比べます。文字入力、サイズ、実測幅ガイド、数字の整列を操作します。文字列の接続形を保ちます。リセット・再読み込みで最初の文字と48pxに戻ります。 対応するラテン文字は等しい送り幅ですが、代替文字では異なる場合があります。

## どんな考え方なのか

等幅ラテン文字は輪郭が違っても送り幅を共有します。

CJK、絵文字、結合文字、代替書体では異なるため、対応文字を確認します。

[W3C](https://www.w3.org/TR/css-fonts-3/)
