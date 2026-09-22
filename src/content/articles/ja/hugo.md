---
kind: concept
articleId: hugo
lang: ja
title: Hugo
summary: コンテンツとテンプレートをファイルにします。
category: static-generators
aliases:
  - Hugo
related:
  - static-sites
  - astro
  - jekyll
status: published
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: コンテンツとGoテンプレート
  advantages: 閲覧時の記事描画処理が不要
  limitations: テンプレートとウィジェットは別作業
  suitable: ファイル中心の文書公開
  combinations: 静的ホスティングと保存API
---

## なぜ必要なのか

多数の原稿を一貫したページにしたい。繰り返すHTMLを手で直すと、全体の変更に時間と修正漏れが生じます。

## どう解決するのか

Markdown記事3件とレイアウト1つから開始します。次へでテンプレートを処理し、一覧と記事HTML3件を生成してホスティング経由でブラウザーへ届けます。この例ではレイアウト欠落で出力前に停止します。別のウィジェットは保存APIを呼べますが、ビルドツールは読者のリクエストを処理しません。前へは前段階、リセット・再読み込みは初期状態に戻ります。

## どんな考え方なのか

Hugoはコンテンツとテンプレートを組み合わせて静的ファイルを生成します。Goで実装されていますが、記事をGoのプログラムにする必要はありません。

テンプレート管理と個人の保存は別に設計します。

[出典](https://gohugo.io/about/introduction/)
