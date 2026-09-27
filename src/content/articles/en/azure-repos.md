---
kind: concept
articleId: azure-repos
lang: en
title: Azure Repos
summary: >-
  Repository collaboration with branch policies inside an existing Azure DevOps
  workflow.
category: repository-hosting
aliases:
  - Azure Repos
  - Azure DevOps
  - 애저 리포스
  - アジュールリポジトリ
related:
  - git
  - github
  - gitlab
  - bitbucket
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Git PRs and configured branch policies
  advantages: Keep Azure DevOps collaboration together
  limitations: Policies and bypass permissions need review
  suitable: Existing Azure DevOps teams
  combinations: Git plus review and build validation
---

## Why: the goal or problem

A facilities app lets employees reserve meeting rooms. Its team already uses Azure DevOps and wants room-conflict fixes reviewed before entering main. Keeping that project’s permissions and checks together favors its repository service.

## How: work toward a solution

Push a Git branch and open a pull request. In this example, main requires reviewer approval and build validation. A failed booking test holds up completion; after a fix, required checks and review permit merging.

## What: the concept

Azure Repos provides repositories in Azure DevOps. These are configured Git branch policies, not automatic guarantees. Bypass permissions matter. Azure Repos also supports TFVC; hosting code here does not require running the app on Azure.

[Source](https://learn.microsoft.com/en-us/azure/devops/repos/get-started/what-is-repos?view=azure-devops)
