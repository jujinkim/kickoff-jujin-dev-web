---
kind: concept
articleId: gitea
lang: en
title: Gitea
summary: Self-hostable Git collaboration for teams willing to own service operations.
category: repository-hosting
aliases:
  - Gitea
  - 기티아
  - ギティア
  - self-hosted Git
related:
  - git
  - gitlab
  - github
  - codeberg
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Self-hostable Git and review
  advantages: Control the service instance
  limitations: "Updates, recovery and server costs"
  suitable: Teams with a named operator
  combinations: Git plus your server and backup process
---

## Why: the goal or problem

A club’s equipment-loan app records who borrowed cameras. Its developers want the code repository on their own server and have an operator. Control of that service matters more than avoiding maintenance work.

## How: work toward a solution

Members push to the club’s Gitea server and review changes there. The operator manages access, updates and backups. A restore exercise checks repositories, database and configuration together.

## What: the concept

Gitea is self-hostable Git collaboration software. The club operates this instance; hosting software does not remove server costs or recovery work. GitLab can also be self-operated. A managed host fits when nobody can own maintenance.

[Source](https://docs.gitea.com/)
