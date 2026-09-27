---
articleId: shipping
lang: en
sourceRevision: 7
sources:
  - title: "Google SRE: canarying releases"
    url: "https://sre.google/workbook/canarying-releases/"
    claim: Release evaluation needs representative signals and a rollback decision; staged exposure is not required for every site.
    checked: "2026-09-27"
---

## Selection & comparison

Choose a release procedure from artifact type, tolerated interruption, data loss and operator capacity. A small static catalog can use preview and reversible publication. Gradual exposure helps only when traffic and measurements support a meaningful comparison; it can add cost without evidence.

## Applications

The runbook follows catalog-r17 from versioned files to the public host, checks actual routes, and assigns recovery to a maintainer with catalog-r16 available. A separate data owner handles any service records; swapping application files does not reverse writes.

## Implementation & cautions

Keep secrets out of public files, record configuration and rehearse applicable recovery. Distinguish program rollback, schema compatibility and backup restoration. Missing telemetry means unknown health. A plan and a passing local build do not establish authorization or successful live deployment.
