---
articleId: svelte
lang: en
sourceRevision: 7
sources:
  - title: "Svelte: Overview"
    url: "https://svelte.dev/docs/svelte/overview"
    claim: Describes compilation of declarative components; runtime interaction remains necessary after compilation.
    checked: "2026-09-27"
---

## Selection & comparison

Choose Svelte when compiler-assisted component authoring fits the build and maintenance workflow. Vue emphasizes reactive templates and React JavaScript composition. Avoid claiming that compilation removes all runtime work or makes every application faster.

## Applications

The trip planner saves a bus timetable and a hiking route. Compilation prepares update code; clicking later changes the record set and displayed labels at runtime. The browser diagram illustrates those stages without loading Svelte itself.

## Implementation & cautions

Keep the compile step separate from runtime state ownership. Deduplicate by a stable record key and derive the total. Routing, server rendering and durable storage require project-level choices; SvelteKit’s application scope is broader than Svelte alone.
