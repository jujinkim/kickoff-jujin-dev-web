---
kind: concept
articleId: rolling
lang: en
title: Rolling
summary: Replace ready replicas in sequence.
category: release-replacement
aliases:
  - Rolling
related:
  - shipping
  - blue-green
  - canary
status: published
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: Progressive replica replacement
  advantages: Ready old replicas keep serving
  limitations: Mixed versions need compatibility
  suitable: Replicated services
  combinations: Canary gate before rolling replacement
---

## Why: the goal or problem

Weather alerts need continuous availability while four replicas update. Mixed old and new versions must remain compatible.

## How: work toward a solution

Start with four ready v1 replicas and one spare slot. Next adds v2, checks readiness, then removes one v1. Repeat until four v2 remain. Fail readiness stops replacement before removing an old replica. Previous revisits the prior step; Reset or reload restores four v1. This authored policy uses zero unavailable replicas; readiness is not proof of correctness.

## What: the concept

Rolling releases replace replicas progressively. Old and new versions coexist, so their contracts and shared data must remain compatible.

A canary gate can precede replacement.

[Source](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
