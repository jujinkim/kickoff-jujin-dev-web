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
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 選択的クライアントアイランド
  advantages: 本文を静的HTMLで維持
  limitations: 個人の保存には別サービスが必要
  suitable: 一部の操作が必要なコンテンツ
  combinations: UIアイランドと静的ホスティング
---

## なぜ必要なのか

記事中心のサイトに一部の操作機能を加えたい。読むだけの本文まで大きなアプリとして準備すると余計な負担が生まれます。

## どう解決するのか

Markdown記事3件とレイアウト1つから開始します。次へで一覧と記事HTML3件を生成し、ホスティング経由でブラウザーへ届けます。任意の保存アイランドを有効にしても本文は読めます。レイアウト欠落はビルドを停止します。静的ファイルだけでは個人の保存記録を維持できません。前へは前段階、リセット・再読み込みは初期状態に戻ります。

## どんな考え方なのか

AstroはコンテンツをHTMLに描画し、選んだアイランドにクライアント側の操作を追加します。ここでは静的出力を使いますが、サーバーレンダリングにも対応します。

アイランドと別の保存APIを組み合わせます。

[出典](https://docs.astro.build/en/concepts/why-astro/)
