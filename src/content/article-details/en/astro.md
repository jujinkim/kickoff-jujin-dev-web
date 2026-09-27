---
articleId: astro
lang: en
sourceRevision: 7
sources:
  - title: "Astro: Why Astro?"
    url: "https://docs.astro.build/en/concepts/why-astro/"
    claim: Documents content-first rendering and islands; this demo models a static build rather than running another Astro build in the browser.
    checked: "2026-09-27"
---

## Selection & comparison

Choose Astro when content pages benefit from reusable components and selected interactive islands. Hugo may fit Go-template publishing; Jekyll may fit an existing Ruby/Liquid workflow. Astro can also render on demand, so static output is a project choice rather than its only mode.

## Applications

The neighborhood journal builds three articles and an index. The diagram separates source, build, artifact, hosting and browser. Its optional Save island leaves article HTML readable; personal records still require a separately designed storage path.

## Implementation & cautions

Assign hydration only to controls that need it. Publish a verified artifact after a successful build; a failed new build must not replace the last good site. Browser memory is not durable storage. Test real output and client behavior separately from this explanatory model.
