---
articleId: "static-sites"
lang: "ja"
title: "Astro・Hugo・Jekyll：HTMLを届ける三つの方法"
summary: "速度のトロフィーより執筆と保守で選びます。"
category: "development"
aliases: ["Astro", "Hugo", "Jekyll", "SSG", "정적 사이트", "静的サイト"]
related: ["tools", "shipping", "adr"]
example: "generators"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "確定した執筆手順に対してAstro・Hugo・Jekyllを比較して。多言語、実例、検索、配信の方法と保守費用、公式資料を示して。構成変更前に推薦の採用・却下・別候補を質問して。"
checked: "2026-09-21"
---

## 概念

静的サイト生成器は読者が来る前に原稿とテンプレートをファイルに変換します。静的出力にもJavaScriptの操作を加えられます。自我のあるスクリーンショットではありません。

## 必要な場面

ビルドで更新できる文書、カタログ、出版物に向きます。個人の秘密や認証操作には適切なサーバーサービスが必要。ボタンを隠すことは認可ではありません。

## 実例

このカタログはMarkdownから記事HTMLと配布用Markdownを作ります。Astroコンポーネントはプレビュー、小さなスクリプトはテーマと検索を担当。HugoはGoテンプレート、JekyllはRuby環境のLiquidを使います。三つともGitHub Pages用のファイルを生成できます。

```text
Markdown + templates -> build -> HTML / CSS / JS
Astro: components + optional interactive islands
Hugo: Go templates + content pipelines
Jekyll: Liquid templates + Ruby ecosystem
```

## 選択肢とトレードオフ

Astroはコンポーネント中心の表示と選択的な操作に向き、Nodeの管理が必要です。Hugoはコンテンツ用の機能と単体生成器を持ち、Goテンプレートの学習が必要。Jekyllは既存のLiquidテーマに合いますが、Ruby依存とプラグイン互換性を確認します。他人の速度グラフより自分の原稿で測りましょう。

## 選ぶ条件

チーム経験、実例の複雑さ、多言語、更新手順で選びます。ここでは再利用する視覚例とTypeScriptに合わせAstroを選択しました。すべてのブログへの判決ではありません。最新の配信・プラグイン対応は公式資料で確認してください。

## AIへの指示例

確定した執筆手順に対してAstro・Hugo・Jekyllを比較して。多言語、実例、検索、配信の方法と保守費用、公式資料を示して。構成変更前に推薦の採用・却下・別候補を質問して。

## 関連記事と出典

- [言語・フレームワーク・ライブラリ・エンジン](/ja/catalog/tools/)
- [Web・アプリ・PC・コンソールの届け方](/ja/catalog/shipping/)
- [Design DecisionとADR：判断を残す](/ja/catalog/adr/)

- [Astro — Islands architecture](https://docs.astro.build/en/concepts/islands/)
- [Hugo — Introduction](https://gohugo.io/about/introduction/)
- [Jekyll — GitHub Pages](https://jekyllrb.com/docs/github-pages/)

サービス資料確認日：2026-09-21。提供範囲・規約・契約は変わるため、公開前に再確認してください。
