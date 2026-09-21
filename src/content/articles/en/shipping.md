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
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "For our agreed target devices, separate runtime, distribution channel, and hosting. Identify build artifacts, signing, review, update delivery, and backend needs. Ask about unresolved target platforms. Link current official rules and flag access requirements instead of assuming approval."
checked: "2026-09-21"
---

## Concept

Runtime is where software executes. Distribution is how users obtain it. Hosting is where network services or files live. A store is not automatically your backend, and a web host does not turn an executable into a browser app.

## When you need it

Separate these choices before estimating release work for web, mobile, PC, or console. Account enrollment, signing, review, updates, and operating costs differ. Platform rules change; verify them before committing a launch date.

## Example

A browser catalog can ship HTML to GitHub Pages and need no application server. A desktop game may ship through a store while multiplayer uses a separate server. A mobile companion app could share that API. Console release requires platform-specific access and approval rather than an arbitrary file upload.

```text
Web: browser | URL | static host + optional API
Mobile: iOS / Android | store or allowed channel | optional backend
PC: OS binary | download / store | optional backend
Console: platform runtime | approved channel | optional backend
```

## Options and tradeoffs

Web distribution makes link sharing easy but browser capabilities constrain features. Native packaging gives platform APIs but adds signing and release work. A store can provide discovery and updates while imposing its policies. Direct distribution gives control but makes you own delivery and update trust.

## When to choose it

Make a table for each target: runtime, channel, artifact, backend, signing, review, update path, and owner. Start with the audience’s actual devices. Do not promise console export merely because a menu says export.

## AI instructions

For our agreed target devices, separate runtime, distribution channel, and hosting. Identify build artifacts, signing, review, update delivery, and backend needs. Ask about unresolved target platforms. Link current official rules and flag access requirements instead of assuming approval.

## Related reading and sources

- [Astro, Hugo, Jekyll: three ways to ship HTML](/en/guides/static-sites/)
- [Payment channels, PG, and merchant of record](/en/guides/payments/)

- [GitHub — Pages overview](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Apple — Distributing your app](https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases)
- [Steamworks — Getting started](https://partner.steamgames.com/doc/gettingstarted)
- [Nintendo — Developer portal](https://developer.nintendo.com/)

Service documentation reviewed: 2026-09-21. Availability, policies, and contracts can change; confirm them before launch.
