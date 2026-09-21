---
kind: guide
articleId: "tools"
lang: "ja"
title: "言語・フレームワーク・ライブラリ・エンジン"
summary: "仕事の違う道具で決勝戦をしないこと。"
category: "development"
aliases:
  [
    "language",
    "framework",
    "library",
    "engine",
    "언어",
    "프레임워크",
    "라이브러리",
    "엔진",
    "言語",
    "フレームワーク",
    "ライブラリ",
    "エンジン",
  ]
related: ["static-sites", "shipping"]
example: "tools"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "候補を言語、ライブラリ、フレームワーク、エンジン、または組み合わせに分類して。確定済みの成果物と実行環境の制約を読んで。併用できる道具を示し、同じ層の代案を比較して。推薦前に未決定要件を質問して。"
---

## 概念

言語はプログラムを表現し、ライブラリは呼び出せる機能を提供します。フレームワークは実行構造と慣習を定めます。エンジンは主要な実行システムを統合し、エディターを備えることもあります。境界は重なり、製品名が絶対的な分類ではありません。

## 必要な場面

TypeScriptとAstroのどちらを使うか、という質問を整理できます。文字体系と印刷機の二択のようなもの。両方を一つの解決策に使えます。

## 実例

記事サイトではAstroの中でTypeScriptを書き、日付ライブラリを呼べます。GodotゲームではGDScriptで振る舞いを書き、シーンと描画をエンジンに任せます。例は順位ではなく役割です。

```text
Language: TypeScript -> expresses program rules
Library: date utility <- your code calls it
Framework: Astro -> organizes pages and rendering
Engine: Godot -> scene, input, rendering, physics
```

## 選択肢とトレードオフ

小さなライブラリは構造を自由にしますが統合作業が必要。フレームワークは慣習と道具を提供する代わりに構造と更新を制約します。エンジンは実行基盤の実装を減らす反面、対応環境、容量、書き出し条件を増やします。

## 選ぶ条件

記事サイト、対話型アプリ、ゲームなど成果物から決めます。実行環境とチームの経験を確認し、同じ層の候補を比べましょう。影がきれいだからと日付整形にゲームエンジンを入れないこと。

## AIへの指示例

候補を言語、ライブラリ、フレームワーク、エンジン、または組み合わせに分類して。確定済みの成果物と実行環境の制約を読んで。併用できる道具を示し、同じ層の代案を比較して。推薦前に未決定要件を質問して。

## 関連記事と出典

- [Astro・Hugo・Jekyll：HTMLを届ける三つの方法](/ja/guides/static-sites/)
- [Web・アプリ・PC・コンソールの届け方](/ja/guides/shipping/)

- [TypeScript — Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Godot — Introduction](https://docs.godotengine.org/en/stable/getting_started/introduction/introduction_to_godot.html)
- [Astro — Why Astro](https://docs.astro.build/en/concepts/why-astro/)
