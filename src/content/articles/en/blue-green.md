---
kind: concept
articleId: blue-green
lang: en
title: Blue-green
summary: Switch traffic; preserve data history.
category: release-replacement
aliases:
  - Blue-green
related:
  - shipping
  - rolling
  - canary
status: published
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: Two prepared environments exchange traffic
  advantages: Old environment remains available
  limitations: Extra capacity and data compatibility
  suitable: Controlled traffic switching
  combinations: Canary evaluation before full switch
---

## Why: the goal or problem

Imagine a shop where customers check out all day. A replacement order flow needs testing before shoppers use it.

## How: work toward a solution

Blue v1 starts with all traffic; green v2 waits. Next verifies green before switching traffic. Fail verification prevents the switch. After switching, Save Order Receipt writes shared compatible data. Simulate failure and switch back routes traffic to blue; Order Receipt remains. Previous revisits routing stages without erasing writes. Reset or reload clears the entire page-memory simulation.

## What: the concept

Blue-green deployment prepares two environments and changes which receives live traffic. Reversing that route does not undo database writes.

Plan data compatibility and recovery separately.

[Source](https://martinfowler.com/bliki/BlueGreenDeployment.html)
