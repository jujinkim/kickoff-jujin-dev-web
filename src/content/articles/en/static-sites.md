---
kind: guide
articleId: "static-sites"
lang: "en"
title: "Astro, Hugo, Jekyll: three ways to ship HTML"
summary: "Pick for authoring and maintenance, not a benchmark trophy."
category: "development"
aliases: ["Astro", "Hugo", "Jekyll", "SSG", "정적 사이트", "静的サイト"]
related: ["tools", "shipping", "adr"]
example: "generators"
status: "published"
revision: 4
sourceRevision: 4
updated: "2026-09-23"
aiPrompt: "Compare Astro, Hugo, and Jekyll for our agreed content workflow. Show how each handles multilingual pages, previews, search, and deployment. Include maintenance costs and official references. Ask me to accept your recommendation, reject it, or choose another candidate before changing the stack."
checked: "2026-09-23"
---

## Why: the goal or problem

Imagine publishing a public guide with dozens of articles. Each article needs a stable address, language links, and the same navigation, while editors keep adding new pages.

A public site needs many consistent articles, but copying complete HTML pages makes shared changes slow and error-prone. Running a server for every read may add operating work even though most visitors receive identical content. You need a repeatable publishing process that prepares those pages and keeps necessary interaction separate.

## How: work toward a solution

1. Start with three articles and one shared layout. Store title, summary, language and stable identifier alongside each body. Build an index and individual URLs from that data. Change the shared header once and confirm that every generated page receives the change.
2. Test the actual publishing loop: edit a paragraph, build, preview the output and follow a nested link after a reload. Check images, language links and missing-page behavior. Reading files in a development server is not evidence that the final hosted paths are correct.
3. List what must happen after publication. A menu or local filter can run in browser JavaScript. A private saved list needs a separate authenticated storage path or an appropriate server-rendered feature. Prebuilt public files alone cannot hold each reader's private account state.
4. Compare authoring costs using the same sample. Astro can combine static content with selected interactive islands; Hugo generates pages from content and templates; Jekyll uses Markdown, layouts and its Ruby-based workflow. Check the editors' skills, multilingual requirements and build environment before choosing. Verify the actual host's supported build path and extensions rather than assuming a theme works everywhere.
5. Define freshness and recovery. Content changes normally require a new build for affected static output. Keep source history and a known-good artifact or reversible release path. Build failure should stop publication rather than replace the working site with incomplete files.

A useful completion check is a new article added through the documented workflow, reviewed locally, then reachable at its expected path in a preview of the production output. Also test with JavaScript disabled: core public text should remain readable in this content-first design. Interactive behavior needs its own checks.

## What: the concept

A static site generator produces files before the visitor requests them. Static does not mean noninteractive. [Astro](https://docs.astro.build/en/concepts/islands/), [Hugo](https://gohugo.io/about/introduction/) and [Jekyll](https://jekyllrb.com/docs/github-pages/) offer different authoring and build workflows. This approach suits public content whose publishing cadence permits rebuilding; request-specific data requires additional design. Sources checked 2026-09-23; verify service conditions when deploying.
