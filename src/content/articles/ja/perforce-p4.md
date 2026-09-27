---
kind: concept
articleId: perforce-p4
lang: ja
title: Perforce P4
summary: 排他的なファイル編集の設定が必要な素材制作に適したバージョン管理。
category: version-control-systems
aliases:
  - Perforce P4
  - P4
  - Helix Core
  - Perforce
  - 퍼포스
  - ヘリックスコア
related:
  - git
  - subversion
  - mercurial
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: サーバー・作業領域・変更リスト
  advantages: マージ困難な素材を調整
  limitations: ロック待ちとサーバー運用
  suitable: バイナリモデルを共有するチーム
  combinations: 素材ツールとファイル型の設定
---

## なぜ必要なのか

レースゲームのチームが3D車両モデルを制作します。同じバイナリモデルを二人が変更すると、有用なマージが困難です。テキストの並行ブランチより排他的編集の調整を優先します。

## どう解決するのか

モデルのファイル型をbinary+lに設定します。一人が編集用に開くと、別の制作者によるオープンは拒否されます。完成した変更リストをsubmitし、次の人がsyncして編集します。

## どんな考え方なのか

Perforce P4は旧称Helix Coreで、サーバーと作業領域でファイルを管理します。排他的オープンには+l設定が必要です。p4 lockだけでは別のオープンを防ぎません。ロック待ち、運用、ライセンスの検討が必要です。

[出典](https://help.perforce.com/helix-core/server-apps/cmdref/current/Content/P4Guide/resolve.lock.exclusive.html)
