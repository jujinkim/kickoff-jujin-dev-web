---
articleId: "shipping"
lang: "ja"
title: "Web・アプリ・PC・コンソールの届け方"
summary: "「デプロイして」だけでは住所が足りません。"
category: "deployment"
aliases:
  [
    "runtime",
    "hosting",
    "distribution",
    "web",
    "console",
    "호스팅",
    "배포",
    "콘솔",
    "ホスティング",
    "配布",
    "コンソール",
  ]
related: ["static-sites", "payments"]
example: "shipping"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "確定した対象端末について実行環境、配布経路、ホスティングを分けて。成果物、署名、審査、更新、バックエンドの必要性を書いて。未決定の対象は質問し、現行の公式規則を示して。承認を仮定せず必要なアクセスを明記して。"
checked: "2026-09-21"
---

## 概念

実行環境は動く場所、配布経路は利用者が入手する方法、ホスティングは通信サービスやファイルを置く場所です。ストアが自動的にバックエンドになるわけではなく、実行ファイルを置いてもブラウザーアプリにはなりません。

## 必要な場面

Web、モバイル、PC、コンソールの発売費用を見積もる前に分けます。登録、署名、審査、更新、運用費用は異なります。規則は変わるため発売日を約束する前に確認しましょう。

## 実例

ブラウザーのカタログはGitHub PagesにHTMLを置き、アプリサーバーなしで動かせます。PCゲームはストアで配り、対戦サーバーを別にできます。モバイルの補助アプリが同じAPIを使うことも可能。コンソールには固有のアクセスと承認が必要です。

```text
Web: browser | URL | static host + optional API
Mobile: iOS / Android | store or allowed channel | optional backend
PC: OS binary | download / store | optional backend
Console: platform runtime | approved channel | optional backend
```

## 選択肢とトレードオフ

Webはリンク共有が簡単ですがブラウザー機能に制約されます。ネイティブはプラットフォームAPIを使える反面、署名と発売作業が増えます。ストアは発見と更新を助ける代わりに規約を適用。直接配布は自由ですが更新の信頼も自分で管理します。

## 選ぶ条件

対象ごとに実行環境、経路、成果物、バックエンド、署名、審査、更新、担当者を表にします。利用者の実際の端末から考えましょう。書き出しメニューがあるだけでコンソール発売を約束しないこと。

## AIへの指示例

確定した対象端末について実行環境、配布経路、ホスティングを分けて。成果物、署名、審査、更新、バックエンドの必要性を書いて。未決定の対象は質問し、現行の公式規則を示して。承認を仮定せず必要なアクセスを明記して。

## 関連記事と出典

- [Astro・Hugo・Jekyll：HTMLを届ける三つの方法](/ja/catalog/static-sites/)
- [決済経路とPG・MoR：TossとLemon Squeezy](/ja/catalog/payments/)

- [GitHub — Pages overview](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Apple — Distributing your app](https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases)
- [Steamworks — Getting started](https://partner.steamgames.com/doc/gettingstarted)
- [Nintendo — Developer portal](https://developer.nintendo.com/)

サービス資料確認日：2026-09-21。提供範囲・規約・契約は変わるため、公開前に再確認してください。
