---
kind: concept
articleId: serverless-functions
lang: en
title: Serverless functions
summary: Invocations use external durable state.
category: hosting-models
aliases:
  - Serverless functions
related:
  - shipping
  - static-hosting
  - always-on-server
status: published
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: Event-triggered managed handlers
  advantages: Platform handles server provisioning
  limitations: Retries and lifecycle need design
  suitable: Event-oriented APIs
  combinations: Static frontend plus external storage
---

## Why: the goal or problem

A festival schedule gets occasional save requests, and a constantly running app would sit idle most of the day.

## How: work toward a solution

Read article invokes a handler. Save Festival Schedule invokes another handler and writes an external store. Repeat Save keeps one record under the example’s reader/article key. Fail next save returns failure without changing storage. Restart handler discards execution state but retains that record. Reset or reload clears this page-memory simulation, including its illustrated store.

## What: the concept

Serverless functions run managed handlers in response to events or requests. The platform manages servers; application correctness still belongs to the developer.

Design duplicate handling and persistence explicitly; never assume a warm instance.

[Source](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
