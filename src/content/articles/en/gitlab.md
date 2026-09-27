---
kind: concept
articleId: gitlab
lang: en
title: GitLab
summary: Git collaboration connecting merge requests and configured CI in one workflow.
category: repository-hosting
aliases:
  - GitLab
  - 깃랩
  - ギットラボ
related:
  - git
  - github
  - gitea
  - azure-repos
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Merge requests linked to configured CI
  advantages: Discuss changes beside test results
  limitations: Runner capacity and rules need setup
  suitable: Teams keeping GitLab review and CI
  combinations: Git plus hosted or self-managed GitLab
---

## Why: the goal or problem

An internal leave app lets staff request days off. Its developers must review a balance-rule change alongside automated checks. Keeping discussion and CI in an existing GitLab workflow matters more than adopting another host.

## How: work toward a solution

Open a merge request. Configured CI rules run the balance test on a runner. A failure prompts a fix and another run; a reviewer then considers merging.

## What: the concept

GitLab combines Git hosting, merge requests and CI. Checks need configuration and runner capacity. A merge-request pipeline tests the source branch, not automatically the merged result. Hosted use and self-operation carry different responsibilities.

[Source](https://docs.gitlab.com/ci/pipelines/merge_request_pipelines/)
