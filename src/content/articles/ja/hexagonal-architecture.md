---
kind: concept
articleId: hexagonal-architecture
lang: ja
title: ヘキサゴナルアーキテクチャ
summary: ポートと交換可能なアダプターで、アプリケーションの規則を入力・保存技術から分離します。
category: boundaries
aliases:
  - ヘキサゴナルアーキテクチャ
related:
  - architecture
  - layered-architecture
  - clean-architecture
status: published
revision: 6
sourceRevision: 6
updated: "2026-09-27"
checked: "2026-09-26"
comparison:
  features: アプリケーションのポートと外部アダプター
  advantages: メモリアダプターで保存をテスト
  limitations: ポートとアダプターで間接処理が増加
  suitable: 入口や保存実装が複数ある場合
  combinations: 内部の方針にクリーンアーキテクチャを適用可能
---

## なぜ必要なのか

教師が授業予定の記事を保存するガイドを作るとします。保存規則を試すたびにWebサーバーとDBを起動するのは手間です。層分けより接続技術の交換を重視します。

## どう解決するのか

1. 単一プロセスで授業予定は未保存。HTTP・CLIアダプターが入力ポートからSaveArticleを呼ぶ。
2. IDを検証し、SaveRepository経由でメモリ・組み込みDBへ保存。保存アダプターはアプリ所有のポートに依存し、アプリは保存実装を直接参照しない。
3. 成功は0 → 1件、反復も1件。空ID・書き込み前の失敗は0件。

## どんな考え方なのか

ヘキサゴナルアーキテクチャはポートと技術別アダプターでアプリケーションを接続します。六角形は六つの構成要素を要求しません。[Cockburn](https://alistair.cockburn.us/hexagonal-architecture)

内部にはクリーンアーキテクチャの規則も適用できます。

ポートは間接処理を増やします。
