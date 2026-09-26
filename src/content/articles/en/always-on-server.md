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
revision: 6
sourceRevision: 6
updated: "2026-09-26"
checked: "2026-09-22"
comparison:
  features: Long-running request listener
  advantages: Direct runtime control
  limitations: Supervision and recovery need owners
  suitable: Custom runtime behavior
  combinations: External durable store and static frontend
---

## Why: the goal or problem

Imagine a library app where readers save articles. The team needs process and restart control, beyond individual invocations, while preserving records. Storage alone would not justify this choice.

## How: work toward a solution

Read article and Save Library Reading List enter the listening process. Save writes an external store; repeated saves keep one reader/article record. Fail next save leaves storage unchanged. Restart handler replaces the process, retaining records. Reset or reload clears this page-memory simulation and its illustrated store.

## What: the concept

An always-on server intends to keep a process listening for requests. It can restart; its name does not guarantee continuous availability.

Keep durable data external; assign supervision, capacity and recovery to an owner.

[Source](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
