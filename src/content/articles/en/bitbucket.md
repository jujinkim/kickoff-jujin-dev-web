---
kind: concept
articleId: bitbucket
lang: en
title: Bitbucket
summary: Git hosting with Jira-linked development work for teams using Bitbucket Cloud.
category: repository-hosting
aliases:
  - Bitbucket
  - Bitbucket Cloud
  - 빗버킷
  - ビットバケット
related:
  - git
  - github
  - gitlab
  - azure-repos
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Git review linked with Jira work
  advantages: Trace a request to proposed code
  limitations: Connection and work-item keys need setup
  suitable: Teams already using Jira and Bitbucket Cloud
  combinations: Git plus Jira integration
---

## Why: the goal or problem

An order app lets shop staff correct delivery addresses. Its team already tracks changes in Jira but loses the connection between a request and code review. Preserving that work trail matters more than switching task systems.

## How: work toward a solution

Connect Jira and Bitbucket Cloud. Use the address-fix work item’s key in the branch and pull request. Reviewers follow that link from the request to the proposed change, then check the merged result.

## What: the concept

Bitbucket Cloud hosts Git repositories with pull-request review and Jira integration. Linking needs setup and consistent keys. Other hosts also integrate with Jira; existing workflow, plan limits and migration effort decide the fit.

[Source](https://support.atlassian.com/bitbucket-cloud/docs/use-bitbucket-cloud-and-jira-together/)
