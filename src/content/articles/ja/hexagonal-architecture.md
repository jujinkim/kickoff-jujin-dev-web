---
kind: "concept"
articleId: "hexagonal-architecture"
lang: "ja"
title: "ヘキサゴナルアーキテクチャ"
summary: "技術に依存しないポートでアプリケーションを囲みます。"
category: "boundaries"
aliases: ["ヘキサゴナルアーキテクチャ"]
related: ["architecture", "layered-architecture", "clean-architecture"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "アプリケーションのポートと外部アダプター",
    "advantages": "メモリアダプターで保存をテスト",
    "limitations": "ポートとアダプターで間接処理が増加",
    "suitable": "入口や保存実装が複数ある場合",
    "combinations": "内部の方針にクリーンアーキテクチャを適用可能",
  }
---

## 概念

ヘキサゴナルアーキテクチャはポートと技術別アダプターでアプリケーションを接続します。六角形は六つの構成要素を要求しません。[Cockburn](https://alistair.cockburn.us/hexagonal-architecture)

## 実例

1. 架空の単一プロセス。R1、A17は未保存。HTTP・CLIアダプターが入力ポートからSaveArticleを呼び出す。
2. SaveArticleはIDを検証し、SaveRepository経由でメモリ・組み込みデータベースのアダプターを呼び出す。両保存アダプターはアプリケーション所有のポートに依存し、アプリケーションは実装を直接参照しない。
3. 保存完了：0 → 1件、繰り返しても1件。空のIDや書き込み前の失敗は0件のまま。修正後に再試行。

## 選ぶ条件

外部との接点のテスト・交換に有用ですが、ポートで間接処理が増えます。内部の方針にはクリーンアーキテクチャの依存ルールを適用できます。
