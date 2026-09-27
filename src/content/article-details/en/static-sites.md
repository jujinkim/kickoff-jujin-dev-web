---
articleId: static-sites
lang: en
sourceRevision: 7
sources:
  - title: "Astro: islands architecture"
    url: "https://docs.astro.build/en/concepts/islands/"
    claim: Prebuilt content can coexist with browser interaction; authenticated server data needs a separate design.
    checked: "2026-09-27"
  - title: Hugo introduction
    url: "https://gohugo.io/about/introduction/"
    claim: Hugo generates sites from content and templates; the release policy is separate.
    checked: "2026-09-27"
  - title: Jekyll documentation
    url: "https://jekyllrb.com/docs/"
    claim: Jekyll builds static output from text and layouts; hosting support depends on the environment.
    checked: "2026-09-27"
---

## Selection & comparison

Static generation suits public articles whose updates can wait for publishing. Request rendering suits data that must vary at request time; the two may coexist. Compare Astro, Hugo and Jekyll through the same multilingual publishing task, including editor workflow and host build support.

## Applications

An editor changes source, the build prepares a candidate, and the host serves approved files. A failed build leaves the prior artifact live under this release policy. Browser filters can work on those files; private saved lists need authenticated persistence beyond them.

## Implementation & cautions

Validate the built output, nested routes, asset paths and language links. Publish only complete artifacts and retain a recoverable version. A generator does not automatically guarantee atomic release or freshness; document cache and rebuild behavior for the actual host.
