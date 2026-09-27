---
kind: concept
articleId: masonry
lang: ja
title: メイソンリー
summary: 共通の行より画像比率の保持が重要なとき、高さの異なる項目を短い列へ詰めます。
category: content-arrangement
aliases:
  - メイソンリー
related:
  - layout
  - list-layout
  - uniform-grid
status: published
revision: 7
sourceRevision: 7
updated: "2026-09-27"
comparison:
  features: 共通の行より画像比率の保持が重要なとき、高さの異なる項目を短い列へ詰めます。
  advantages: 短い列がカードを受け入れ、共通行の隙間を減らします。
  limitations: 展開後のキーボード順と重なりを確認し、狭い画面では1列にします。
  suitable: 視覚資料の収集に向きます。
  combinations: 最小限のカード装飾で多様な画像を引き立てます。
checked: "2026-09-27"
---

## なぜ必要なのか

旅行アルバムで友人は横長・縦長の写真と思い出を見ます。同じ高さの行は大きな隙間を残すか、縦の港を切ります。同じ項目の整列より各写真の比率を重視します。

## どう解決するのか

写真の元の比率を保ち、最も短い列にカードを置きます。思い出を開くと後のカードが重ならずに移動します。DOMとキー操作の順序は変えません。小画面は1列、リセットはメモを閉じます。

## どんな考え方なのか

メイソンリーは共通の行を要求せず、高さの違う項目を詰めます。視覚的な閲覧に向き、厳密な順序比較に常に適するとは限りません。画像・書体・展開の寸法が変わったら再計算します。

[Masonry: Layout](https://masonry.desandro.com/layout.html)
