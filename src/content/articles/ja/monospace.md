---
kind: concept
articleId: monospace
lang: ja
title: 等幅
summary: ラテン文字の送り幅を測る.
category: character-width
aliases:
  - 等幅
related:
  - theme
  - proportional
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-22"
comparison:
  features: 等幅ラテン文字は輪郭が違っても送り幅を共有します。
  advantages: 同じラテン送り幅がコードと資料の列を揃えます。
  limitations: CJK、絵文字、結合文字、代替書体では異なるため、対応文字を確認します。
  suitable: コードや整列したラテン文字の資料に向きます。
  combinations: 等幅コードの隣に比例幅の説明文を置けます。
---

## 概念

等幅ラテン文字は輪郭が違っても送り幅を共有します。すべてのUnicode文字が端末の1セルを占めるという意味ではありません。

## 実例

JetBrains Monoの見本を編集し、文字枠ガイドを出します。実測したiとWの幅が一致し、コードと数値列も一定間隔を示します。 リセット・再読み込みで初期状態に戻ります。

## 選ぶ条件

コードや整列したラテン文字の資料に向きます。CJK、絵文字、結合文字、代替書体では異なるため、対応文字を確認します。

[W3C](https://www.w3.org/TR/css-fonts-3/)
