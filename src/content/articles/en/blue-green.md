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
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  features: Two prepared environments exchange traffic
  advantages: Old environment remains available
  limitations: Extra capacity and data compatibility
  suitable: Controlled traffic switching
  combinations: Canary evaluation before full switch
---

## Concept

Blue-green deployment prepares two environments and changes which receives live traffic. Reversing that route does not undo database writes.

## Example

Blue v1 starts with all traffic; green v2 waits. Next verifies green before switching traffic. Fail verification prevents the switch. After switching, Save A17 writes shared compatible data. Simulate failure and switch back routes traffic to blue; A17 remains. Previous revisits routing stages without erasing writes. Reset or reload clears the entire page-memory simulation.

## When to choose it

Choose it for controlled routing with capacity for both environments. Plan data compatibility and recovery separately.

[Source](https://martinfowler.com/bliki/BlueGreenDeployment.html)
