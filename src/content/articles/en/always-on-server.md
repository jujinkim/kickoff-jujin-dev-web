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
revision: 5
sourceRevision: 5
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: Long-running request listener
  advantages: Direct runtime control
  limitations: Supervision and recovery need owners
  suitable: Custom runtime behavior
  combinations: External durable store and static frontend
---

## Why: the goal or problem

Imagine a library app where readers save lists daily. Records must survive visits, so its team accepts managing a listening process.

## How: work toward a solution

Read article and Save Library Reading List enter the listening process. Save writes an external store. Repeat Save keeps one record under the example’s reader/article key. Fail next save returns failure without changing storage. Restart handler replaces the process while retaining the stored record. Reset or reload clears this page-memory simulation, including its illustrated store.

## What: the concept

An always-on server intends to keep a process listening for requests. It can restart; its name does not guarantee continuous availability.

Keep durable data external; assign supervision, capacity and recovery to an owner.

[Source](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
