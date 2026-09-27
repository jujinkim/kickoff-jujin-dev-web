---
articleId: static-hosting
lang: en
sourceRevision: 6
sources:
  - title: "GitHub: About Pages"
    url: "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages"
    claim: "Describes a static file hosting example; separate APIs and private storage are application decisions, not file-host features."
    checked: "2026-09-27"
---

## Selection & comparison

Choose file delivery for public content that can be generated ahead of requests. An always-on server or function is useful when each request needs trusted computation. Browser interaction can still coexist with static files; write operations need a separate trusted path.

## Applications

The newsletter reads HTML from a public host and saves a reader/article pair through an API. Restarting the modeled handler retains the illustrated external record. Reloading this demo clears it because the entire model lives in page memory.

## Implementation & cautions

The publisher owns build freshness, artifact deployment and file-cache policy. The API owner handles authentication, deduplication and durable data recovery. Do not infer private persistence from a working Save button or treat a code rollback as a database restore.
