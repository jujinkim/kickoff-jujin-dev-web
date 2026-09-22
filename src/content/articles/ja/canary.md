---
kind: concept
articleId: canary
lang: ja
title: カナリア
summary: 限定公開を対照群と比較して評価します。
category: release-replacement
aliases:
  - カナリア
related:
  - shipping
  - rolling
  - blue-green
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  features: 限定公開と対照群の比較
  advantages: 全面公開前に停止できる
  limitations: 偏りや標本不足は誤判断を招く
  suitable: 結果の測定と経路制御
  combinations: ローリング・ブルーグリーン完了前の評価
---

## 概念

カナリアリリースは一部の利用者に候補版を公開し、対照群と結果を比較してから拡大を決めます。有効な指標には代表性のある標本が必要です。

## 実例

仮の集計は各群1,000件で、v1のエラーは2件、v2は30件です。次へで0.2%と3%を計算し、この練習の1%超で停止する規則を適用します。候補への経路はv1に戻ります。標本なしでは0件を成功とせず判断不能とします。前へは前の計算、リセット・再読み込みは初期集計に戻ります。

## 選ぶ条件

配信先と結果を測定できる場合に適しています。例の基準を一般化せず、ローリングやブルーグリーンと組み合わせます。

[出典](https://sre.google/workbook/canarying-releases/)
