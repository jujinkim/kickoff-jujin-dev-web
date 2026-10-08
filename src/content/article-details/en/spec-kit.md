---
articleId: "spec-kit"
lang: "en"
sourceRevision: 1
sources:
  [
    {
      "title": "Spec Kit SDD quickstart",
      "url": "https://github.github.io/spec-kit/quickstart.html",
      "claim": "Specifications, plans, tasks, implementation, and convergence form the SDD workflow; optional quality gates are available.",
      "checked": "2026-10-08",
    },
    {
      "title": "Spec Kit installation",
      "url": "https://github.github.io/spec-kit/installation.html",
      "claim": "Installation and project initialization have runtime and integration requirements and are separate from agent invocation.",
      "checked": "2026-10-08",
    },
    {
      "title": "Spec Kit integrations",
      "url": "https://github.github.io/spec-kit/reference/integrations.html",
      "claim": "Invocation syntax and installed locations depend on the selected agent integration.",
      "checked": "2026-10-08",
    },
    {
      "title": "Spec Kit existing projects",
      "url": "https://github.github.io/spec-kit/guides/existing-projects.html",
      "claim": "Initialization in an existing project may replace conflicting managed paths and should start from a reviewable baseline.",
      "checked": "2026-10-08",
    },
    {
      "title": "Spec Kit README",
      "url": "https://github.com/github/spec-kit",
      "claim": "SDD, bug repair, and idea assessment are separate entry points; the latter two are opt-in extensions.",
      "checked": "2026-10-08",
    },
  ]
---

## Selection & comparison

This example prioritizes a shared rule that affects booking and notification work. Spec Kit carries requirements through planning, tasks, implementation, and convergence. Starting without extra skills may fit adequate existing practices. Superpowers emphasizes repeatable development skills; OpenSpec records current requirements and change deltas. These tools can overlap or combine, but one artifact set should own each plan, task list, and requirement. No package guarantees assistant compliance.

## Applications

The example rule is: after a cancellation, notify the next eligible fan before offering the seat publicly. Record eligibility and timeout decisions rather than inventing them. Review the specification, technical plan, and tasks; map checks to the agreed rule. Convergence inspects implementation against those artifacts and may add remaining tasks. A small access-control change can merit this discipline even with few files.

## Implementation & cautions

In the external agent, inspect the current runtime, installed Spec Kit, project files, and official installation guide. Select the supported integration for that agent; reuse an existing installation. With installation authority, install the reviewed release and initialize the intended project scope, then inspect generated files and invocation support. Terminal setup and agent skill invocation are separate. In Codex the skills use names such as `$speckit-specify`; confirm the installed form. Existing-project initialization can replace conflicting managed files, so preserve local work and review the diff. Begin implementation only within approved scope. Reuse its specification, plan, and tasks for kickoff’s records rather than maintaining duplicate plans.
