---
kind: guide
articleId: "shipping"
lang: "en"
title: "Runtime, distribution, hosting: three questions"
summary: "‘Deploy it’ is not a complete address."
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
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "For our agreed target devices, separate runtime, distribution channel, and hosting. Identify build artifacts, signing, review, update delivery, and backend needs. Ask about unresolved target platforms. Link current official rules and flag access requirements instead of assuming approval."
checked: "2026-09-21"
---

## Concept

Runtime is where software executes; distribution is how users obtain it; hosting holds network services or files.

## Example

A browser catalog uses a URL and static host. A store-distributed game can still require a separate multiplayer server.

## When to choose it

Web links simplify sharing. Native apps add platform capabilities and signing work. Stores impose distribution rules. Choose from actual target devices. Identify artifacts, backend, signing, review, updates, and owners; verify current platform requirements. [GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) · [Apple](https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases) · [Steamworks](https://partner.steamgames.com/doc/gettingstarted) · [Nintendo](https://developer.nintendo.com/)

Sources checked 2026-09-21; terms may change.
