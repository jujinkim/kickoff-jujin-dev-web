---
articleId: azure-repos
lang: en
sourceRevision: 1
sources:
  - title: "Microsoft: What is Azure Repos?"
    url: >-
      https://learn.microsoft.com/en-us/azure/devops/repos/get-started/what-is-repos?view=azure-devops
    claim: Azure Repos supports Git and TFVC; Git repositories support PRs.
    checked: "2026-09-27"
  - title: "Microsoft: Branch policies"
    url: >-
      https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops
    claim: >-
      Configured branch policies can require reviewers and build validation;
      bypass permissions matter.
    checked: "2026-09-27"
---

## Selection & comparison

Choose Azure Repos when existing Azure DevOps projects, permissions and review practices reduce coordination work. Bitbucket may fit an established Jira workflow; other hosts also offer protected-branch checks. Compare operator, integrations, plan constraints and migration needs rather than assuming repository hosting determines runtime hosting.

## Applications

The facilities team configures a minimum reviewer count and required build validation for main. The example PR waits while a room-conflict test fails. After a fix, the reviewer checks the new result before completing the PR. This walkthrough uses Git, not the separate TFVC model.

## Implementation & cautions

Inspect which policies are required, how approvals reset after changes and who can bypass checks. A passing build does not prove every booking rule. Azure Repos also offers centralized TFVC for existing workflows; do not apply the Git diagram to it. Recheck current access and service limits, and rehearse migration of reviews and policies separately from Git history.
