---
kind: concept
articleId: mercurial
lang: en
title: Mercurial
summary: >-
  Distributed version control with sharing phases, suited to an established hg
  workflow.
category: version-control-systems
aliases:
  - Mercurial
  - hg
  - 머큐리얼
  - マーキュリアル
related:
  - git
  - subversion
  - perforce-p4
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Distributed history with phases
  advantages: Keep existing hg automation
  limitations: Host and extension compatibility need checking
  suitable: Teams already using Mercurial
  combinations: hg clients plus compatible repositories
---

## Why: the goal or problem

A translation tool helps volunteers revise interface strings. Its maintainers already use hg scripts. They need to distinguish revisable work from shared history without migrating that workflow to Git.

## How: work toward a solution

Commit a wording fix locally as draft. Push to the team’s publishing repository: that change becomes public on both sides. Check its phase before rewriting history.

## What: the concept

Mercurial is distributed version control. Phases track sharing, not access permissions: public does not mean an internet-visible repository. Non-publishing remotes can exchange drafts. Git may fit better when required integrations expect Git.

[Source](https://www.mercurial-scm.org/help/topics/phases)
