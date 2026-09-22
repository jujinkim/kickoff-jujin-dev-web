---
kind: guide
articleId: "shipping"
lang: "en"
title: "Delivery and operations: where it runs, how it recovers"
summary: "Choose target devices and operating constraints; AI plans the release procedure."
category: "deployment"
aliases:
  [
    "runtime",
    "hosting",
    "distribution",
    "web",
    "console",
    "호스팅",
    "배포",
    "콘솔",
    "ホスティング",
    "配布",
    "コンソール",
  ]
related: ["static-sites", "payments"]
example: "shipping"
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
aiPrompt: "Separate runtime, distribution and hosting for our agreed target devices. Ask about unresolved channels, acceptable downtime, recovery expectations, operating responsibility and budget. Identify artifacts, access needs and current platform rules. Choose a release procedure and validation gates that fit the approved constraints; explain capacity costs and recovery limits. Ask before increasing cost, exposure or downtime. Do not require me to choose rolling, blue-green or canary terminology. Plan execution is not deployment permission."
checked: "2026-09-23"
---

## Concept

Runtime is where software executes; distribution is how users obtain it; hosting serves files or network services.

## Example

A browser catalog uses a URL and static host. A store game may also need a multiplayer server. Users specify acceptable downtime, recovery expectations, operating ownership and budget.

## When to choose it

Set these constraints before choosing delivery infrastructure. AI plans release steps and verification within them. Gradual exposure can reduce release risk but needs meaningful evaluation. [Google SRE](https://sre.google/workbook/canarying-releases/) Extra capacity or changed availability requires agreement. Planning a rollout does not authorize deploying it.
