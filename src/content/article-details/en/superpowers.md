---
articleId: "superpowers"
lang: "en"
sourceRevision: 1
sources:
  [
    {
      "title": "Superpowers README",
      "url": "https://github.com/obra/superpowers",
      "claim": "Superpowers combines composable development skills and documents harness-specific plugin and extension setup.",
      "checked": "2026-10-08",
    },
    {
      "title": "Superpowers test-driven development skill",
      "url": "https://github.com/obra/superpowers/blob/main/skills/test-driven-development/SKILL.md",
      "claim": "The test-first workflow checks failure before a minimal implementation and then checks passing behavior.",
      "checked": "2026-10-08",
    },
    {
      "title": "Superpowers brainstorming skill",
      "url": "https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md",
      "claim": "Design clarification reuses supplied context and requires the selected path’s design prerequisites before implementation.",
      "checked": "2026-10-08",
    },
  ]
---

## Selection & comparison

The priority here is a repeatable development procedure: clarify design, plan work, verify a regression, and review the result. Superpowers includes skills for those activities. Spec Kit or OpenSpec can hold durable requirements if needed; identify which records and approvals govern execution before combining them. Existing project instructions and an ordinary agent may already provide enough discipline. These selection criteria are editorial judgments, not measured quality rankings.

## Applications

The fictional recipe uses 200 g of flour for four servings. Two servings require 100 g; an illustrated failing result of 200 g exposes the bug. A meaningful test exercises the scaling behavior, then the developer observes it fail before changing code and pass afterward. Review includes other agreed quantities and rounding rules where relevant. The diagram illustrates this process and does not execute tests or demonstrate an actual model result.

## Implementation & cautions

Read the current official installation instructions for the external agent in use. The project documents plugin or extension installation by harness; Codex CLI currently exposes a plugin selection flow. If the assistant cannot operate that flow, provide the exact user step and retain the setup status as pending. Inspect the installed skills, hooks, scope, and active version before use. Invoke or load the needed skill and confirm its output; installation alone does not establish activation. Reuse approved requirements and preserve project-specific test and delegation limits. Do not treat subagent, worktree, merge, or publish instructions as extra authorization. A full workflow can impose more ceremony than a small correction needs.
