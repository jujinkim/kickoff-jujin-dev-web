---
kind: concept
articleId: subversion
lang: en
title: Apache Subversion
summary: >-
  Centralized version control for teams retaining an established SVN repository
  and workflow.
category: version-control-systems
aliases:
  - Apache Subversion
  - Subversion
  - SVN
  - svn
  - 서브버전
  - サブバージョン
related:
  - git
  - mercurial
  - perforce-p4
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Working copies and central history
  advantages: Retain established SVN tooling
  limitations: Central commit needs repository access
  suitable: Existing centralized collaboration
  combinations: SVN clients plus an SVN server
---

## Why: the goal or problem

An internal manual tells staff how to request equipment. Editors revise its pages through an existing SVN repository. Preserving that central workflow matters more than making local commits while disconnected.

## How: work toward a solution

Update a working copy, edit the request page, and inspect the difference. Commit sends it to the central repository; another editor updates to receive it. Resolve conflicting edits before retrying.

## What: the concept

Apache Subversion, or SVN, is centralized version control. Files can be edited offline, but committing history needs repository access. Git or Mercurial fits local commits; changing systems also means migrating tools and history.

[Source](https://subversion.apache.org/)
