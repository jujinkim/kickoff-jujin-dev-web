---
kind: concept
articleId: github
lang: en
title: GitHub
summary: >-
  Git hosting and pull-request collaboration where contributors already work on
  GitHub.
category: repository-hosting
aliases:
  - GitHub
  - 깃허브
  - 깃헙
  - ギットハブ
related:
  - git
  - gitlab
  - codeberg
  - gitea
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Git hosting and pull requests
  advantages: Review outside contributions
  limitations: Plans and permissions need checking
  suitable: Contributors already on GitHub
  combinations: Local Git plus hosted review
---

## Why: the goal or problem

A public weather widget shows rain forecasts on community websites. Volunteers propose display fixes. Its contributors already use GitHub; accepting their work without giving everyone write access matters more than operating a server.

## How: work toward a solution

A volunteer pushes a branch to their fork and opens a pull request. A maintainer reviews the difference, requests a correction, then merges. The contribution does not enter the main branch merely by being proposed.

## What: the concept

GitHub hosts Git repositories and collaboration. Git records history; GitHub adds review and access tools. Other hosts also offer pull requests. Codeberg may fit nonprofit community priorities; Gitea may fit self-operation.

[Source](https://docs.github.com/en/get-started/start-your-journey/what-is-github)
