---
kind: concept
articleId: always-on-server
lang: en
title: Always-on server
summary: Process lifetime differs from data lifetime.
category: hosting-models
aliases:
  - Always-on server
related:
  - shipping
  - static-hosting
  - serverless-functions
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  features: Long-running request listener
  advantages: Direct runtime control
  limitations: Supervision and recovery need owners
  suitable: Custom runtime behavior
  combinations: External durable store and static frontend
---

## Concept

An always-on server intends to keep a process listening for requests. It can restart; its name does not guarantee continuous availability.

## Example

Read article and Save A17 enter the listening process. Save writes an external store. Repeat Save keeps one record under the example’s reader/article key. Fail next save returns failure without changing storage. Restart handler replaces the process while retaining the stored record. Reset or reload clears this page-memory simulation, including its illustrated store.

## When to choose it

Choose it when runtime control matters and someone owns supervision, capacity, and recovery. Keep durable data external.

[Source](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
