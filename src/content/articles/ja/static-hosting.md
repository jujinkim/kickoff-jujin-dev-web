---
kind: concept
articleId: static-hosting
lang: ja
title: 静的ホスティング
summary: 公開ファイルと個人の書き込みを分けます。
category: hosting-models
aliases:
  - 静的ホスティング
related:
  - shipping
  - always-on-server
  - serverless-functions
status: published
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 事前生成ファイルを配信
  advantages: 閲覧時のアプリ描画が不要
  limitations: 個人の書き込みにはAPIが必要
  suitable: 公開記事と文書
  combinations: 静的生成器とサーバーまたは関数
---

## なぜ必要なのか

公開記事は要求ごとに内容が変わりません。毎回アプリを動かす代わりに、用意したファイルを届けられます。

## どう解決するのか

記事を読む操作はファイルの経路を通ります。A17の保存は別のAPIから外部ストアへ進みます。再保存しても例の読者・記事キーにより記録は1件です。次の保存を失敗させるとストアを変えず失敗を返します。処理器を再起動しても外部の記録は残ります。リセット・再読み込みは仮想ストアを含むページメモリ全体を消します。

## どんな考え方なのか

静的ホスティングは事前生成したHTML・CSS・JavaScriptを配信します。ブラウザーの操作は可能ですが、公開ファイルは読者の個人記録を保存しません。

個人の書き込みには生成ファイルと認証付きAPIを組み合わせます。

[出典](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
