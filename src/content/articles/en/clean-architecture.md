---
kind: concept
articleId: clean-architecture
lang: en
title: Clean architecture
summary: Point source dependencies inward to protect application policy.
category: boundaries
aliases:
  - Clean architecture
related:
  - architecture
  - layered-architecture
  - hexagonal-architecture
status: published
revision: 7
sourceRevision: 7
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Source dependencies point inward
  advantages: Policy stays independent of framework data
  limitations: Boundary mapping adds maintenance
  suitable: Policy must outlive UI and database choices
  combinations: Can use hexagonal ports at the edges
---

## Why: the goal or problem

Readers save budget guides from web and CLI. Screen or database changes must spare the saving rule; use cases cannot import either.

## How: work toward a solution

1. Fictional single process: Hana, Budget Guide unsaved. HTTP/CLI controller maps IDs into SaveArticle; SavedArticle validates them.
2. SaveArticle calls SaveRepository, implemented by memory/embedded-database adapters. Imports point inward: adapters → use-case contracts → domain; calls reach outward to storage. Only plain data crosses; ORM rows stay outside.
3. Saved: 0 → 1 entries; repeat → 1. Empty IDs or failure before writing → 0; retry after correction.

## What: the concept

Clean architecture directs source dependencies toward policy. Runtime calls can travel outward through inward-owned interfaces. [Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

Mapping costs maintenance. Combine with hexagonal ports. Four folders are not mandatory.
