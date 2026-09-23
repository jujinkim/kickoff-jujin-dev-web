---
kind: concept
articleId: jekyll
lang: ja
title: Jekyll
summary: Rubyで生成し、ファイルを配信します。
category: static-generators
aliases:
  - Jekyll
related:
  - static-sites
  - astro
  - hugo
status: published
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: Rubyビルドと再利用レイアウト
  advantages: 複数記事でレイアウトを共有
  limitations: ビルド依存関係の管理が必要
  suitable: 既存のJekyll公開工程
  combinations: CIビルドと静的ホスティング
---

## なぜ必要なのか

家族のレシピ集では新しい記事をよく加えますが、毎回ページ全体を複製すると共通の型を直すのが大変です。

## どう解決するのか

家族のレシピ集をMarkdown記事3件とレイアウト1つから始めます。次へでRubyのビルドから一覧と記事HTML3件を生成し、ホスティング経由でブラウザーへ届けます。この例ではレイアウト欠落で出力前に停止します。閲覧時にRubyの処理は不要です。個人の保存記録には別のAPIが必要です。前へは前段階、リセット・再読み込みは初期状態に戻ります。

## どんな考え方なのか

JekyllはRubyのビルド工程でMarkdownとレイアウトを静的サイトに変換します。生成とホスティングは別の選択です。

ビルド依存関係とホスティングを分けて管理します。

[出典](https://jekyllrb.com/docs/)
