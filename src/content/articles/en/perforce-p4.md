---
kind: concept
articleId: perforce-p4
lang: en
title: Perforce P4
summary: >-
  Version control suited to asset workflows that need configured exclusive file
  editing.
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
  features: "Server, workspaces and changelists"
  advantages: Coordinate hard-to-merge assets
  limitations: Lock waits and server operations
  suitable: Teams sharing binary models
  combinations: Asset tools plus configured file types
---

## Why: the goal or problem

A racing game team edits 3D vehicle models. Two artists’ changes to one binary model cannot be usefully merged. Coordinating exclusive edits matters more here than parallel text branches.

## How: work toward a solution

Set the model’s file type to binary+l. One artist opens it for editing; another open is refused. Submit the finished changelist, then the next artist syncs and edits.

## What: the concept

Perforce P4, formerly Helix Core, manages versioned files through a server and workspaces. Exclusive opening requires +l configuration; p4 lock alone does not prevent another open. Locks can cause waits, and server operation and licensing need planning.

[Source](https://help.perforce.com/helix-core/server-apps/cmdref/current/Content/P4Guide/resolve.lock.exclusive.html)
