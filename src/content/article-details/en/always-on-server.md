---
articleId: always-on-server
lang: en
sourceRevision: 8
sources:
  - title: "Node.js: Introduction"
    url: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"
    claim: >-
      Shows an HTTP server listening for requests; operational ownership and
      cost comparisons here are planning considerations, not Node.js guarantees.
    checked: "2026-09-26"
---

## Selection & comparison

Use a listening process when direct runtime control, persistent connections or process-level work matters. Static hosting serves prebuilt files and needs another service for writes. Managed functions shift invocation scheduling to a provider and may impose different lifetime limits. A database is needed by many hosting models; persistence alone is not a reason to choose a long-running process.

## Applications

The library demo separates a listening process from an external record store. Read and save requests pass through the process. Restart changes its generation and request count while the saved record remains. Reset clears the entire simulation. A real deployment also needs health checks, durable storage, backups and recovery practice; restarting a process is not evidence that data can be restored.

## Implementation & cautions

Assign owners for patches, monitoring, capacity and recovery. Provisioned capacity can incur cost during idle time; compare the workload and provider’s current terms before estimating a bill. Request retries can arrive after a response is lost, so define deduplication in application logic. Managed platforms can take over some server duties but do not remove responsibility for application behavior and data. This demo connects to no server or store.
