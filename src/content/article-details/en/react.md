---
articleId: react
lang: en
sourceRevision: 7
sources:
  - title: "React: State as a Snapshot"
    url: "https://react.dev/learn/state-as-a-snapshot"
    claim: State setters request rendering; each render sees a snapshot of state.
    checked: "2026-09-26"
  - title: "React: Sharing State Between Components"
    url: "https://react.dev/learn/sharing-state-between-components"
    claim: >-
      Move coordinated state to a shared owner and pass data and event handlers
      to children.
    checked: "2026-09-26"
---

## Selection & comparison

React fits a team that wants to express reusable UI as JavaScript components and make state ownership explicit. Vue’s template-oriented approach or Svelte’s compiler-oriented approach may better match a team’s preferences and existing code. A mostly static page may need only a small interactive region. Framework choice does not decide storage, authentication or hosting for you.

## Applications

The home planner has shopping and menu cards. Saving one updates its label and the shared total while preserving the other card. A real React implementation can place the selected IDs in their nearest common parent and pass values and handlers down. The example here is a browser simulation of that state flow, not a running React bundle. Reloading intentionally clears it.

## Implementation & cautions

Use a state setter to request a render. When deriving a new value from previous state, use an updater such as `setSaved(previous => previous.includes(id) ? previous : [...previous, id])`. Derive the count from the same array rather than storing a second count that can drift. Keep rendering free of side effects. Saving across devices needs a separate persistence contract, including pending, failure and retry behavior.
