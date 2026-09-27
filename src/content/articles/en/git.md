---
kind: concept
articleId: git
lang: en
title: Git
summary: >-
  Distributed history and branches for local work with a separate choice of
  hosting.
category: version-control-systems
aliases:
  - Git
  - git
  - 깃
  - ギット
related:
  - github
  - mercurial
  - subversion
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Local commits and branches
  advantages: Work before sharing
  limitations: Conflicts require review
  suitable: Local history with Git-compatible tools
  combinations: Git plus repository hosting
---

## Why: the goal or problem

A travel website lets friends arrange daily stops. Its developers need separate experiments while offline. They want local history and Git-compatible hosting; keeping existing SVN tooling would favor Subversion instead.

## How: work toward a solution

Commit a new stop on a local branch. The remote still lacks it. Push that branch when connected, then a teammate fetches it. Check both histories; a rejected push needs reconciliation.

## What: the concept

Git is a distributed version control system. Commit records locally; push shares with another repository. GitHub and other hosts add collaboration around Git. Conflicts still need judgment.

[Source](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
