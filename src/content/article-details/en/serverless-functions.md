---
articleId: serverless-functions
lang: en
sourceRevision: 6
sources:
  - title: "AWS: What is Lambda?"
    url: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
    claim: Documents managed event-driven compute; it does not guarantee application correctness or durable instance memory.
    checked: "2026-09-27"
---

## Selection & comparison

Choose functions when event-triggered work fits execution limits and platform ownership is useful. Static hosting avoids application execution for file reads; an always-on process may fit persistent connections or long-running work. Managed infrastructure does not remove application operations.

## Applications

The festival schedule invokes a handler for a read and a separate save. A stable reader/article key prevents duplicate records in the example. Restart removes modeled execution state but preserves the illustrated external store; page reload clears the whole simulation.

## Implementation & cautions

Treat instance reuse as an optimization, never a durability contract. Bound execution time, make retries safe and own authentication, schema changes, monitoring and recovery. Verify the selected platform’s current limits and billing separately; this example includes no cost benchmark.
