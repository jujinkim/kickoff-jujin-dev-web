---
articleId: bitbucket
lang: en
sourceRevision: 1
sources:
  - title: "Atlassian: Integrate Bitbucket and Jira"
    url: >-
      https://support.atlassian.com/bitbucket-cloud/docs/use-bitbucket-cloud-and-jira-together/
    claim: >-
      Jira integration connects work items with Bitbucket Cloud development
      work.
    checked: "2026-09-27"
---

## Selection & comparison

This entry covers Bitbucket Cloud. Compare service operation, PR workflow, Jira integration, plan constraints and export needs. Jira is not exclusive to Bitbucket, so compare integration depth with the team’s actual tasks. GitHub may fit contributors already there; Azure Repos may fit an existing Azure DevOps project.

## Applications

The order app’s Jira work item describes an address correction. A branch and PR reference its key so a reviewer can recover the requirement without searching chat. The example key ORDER-12 is a readable link identifier, not a real ticket. Linking work does not prove that the implementation satisfies it.

## Implementation & cautions

Connect the right workspace and Jira site, verify access, and test that branch and PR links appear for intended readers. Agree on key usage in branches, commits and PR titles. Recheck current plan, storage and pipeline limits before choosing. Moving Git history does not by itself move Jira links, review discussions or automation.
