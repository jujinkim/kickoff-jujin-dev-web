---
kind: concept
articleId: astro
lang: ja
title: Astro
summary: 静的ページに必要なアイランドを追加します。
category: static-generators
aliases:
  - Astro
related:
  - static-sites
  - hugo
  - jekyll
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  features: 選択的クライアントアイランド
  advantages: 本文を静的HTMLで維持
  limitations: 個人の保存には別サービスが必要
  suitable: 一部の操作が必要なコンテンツ
  combinations: UIアイランドと静的ホスティング
---

## 概念

AstroはコンテンツをHTMLに描画し、選んだアイランドにクライアント側の操作を追加します。ここでは静的出力を使いますが、サーバーレンダリングにも対応します。

## 実例

Markdown記事3件とレイアウト1つから開始します。次へで一覧と記事HTML3件を生成し、ホスティング経由でブラウザーへ届けます。任意の保存アイランドを有効にしても本文は読めます。レイアウト欠落はビルドを停止します。静的ファイルだけでは個人の保存記録を維持できません。前へは前段階、リセット・再読み込みは初期状態に戻ります。

## 選ぶ条件

少数の操作を持つコンテンツに適しています。アイランドと別の保存APIを組み合わせます。

[出典](https://docs.astro.build/en/concepts/why-astro/)
