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
revision: 5
sourceRevision: 5
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

訪問者が散策路や名所の記事を読む町の案内サイトを作るとします。制作側は主にMarkdownと共通テンプレートを管理します。記事ごとのクライアント部品を作らず、ファイルとして配信したいと考えます。

## どう解決するのか

町の観光案内をMarkdown記事3件とレイアウト1つから始めます。次へでテンプレートを処理し、一覧と記事HTML3件を生成してホスティング経由でブラウザーへ届けます。この例ではレイアウト欠落で出力前に停止します。別のウィジェットは保存APIを呼べますが、ビルドツールは読者のリクエストを処理しません。前へは前段階、リセット・再読み込みは初期状態に戻ります。

## どんな考え方なのか

Hugoはコンテンツとテンプレートを組み合わせて静的ファイルを生成します。Goで実装されていますが、記事をGoのプログラムにする必要はありません。

テンプレート管理と個人の保存は別に設計します。

[出典](https://gohugo.io/about/introduction/)
