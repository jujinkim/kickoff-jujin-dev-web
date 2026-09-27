# Bitbucket: writing brief

Stable ID: `bitbucket`. Leaf: [repository-hosting](../groups/repository-hosting.md). Initial revision: 1. Evidence checked 2026-09-27.

## Scope and comparison

Bitbucket Cloud Git workflow with configured Jira connection and work-item key across branch, commits and pull request. Do not generalize to Data Center or unique Jira support.

Peers: [GitHub](github.md), [GitLab](gitlab.md), [Azure Repos](azure-repos.md), [Gitea](gitea.md), [Codeberg](codeberg.md). Related guide: tools.

## English editorial review

Why introduces the service, users and ordinary task before the deciding priority: An order app lets shop staff correct delivery addresses. Its team already tracks changes in Jira but loses the connection between a request and code review. Preserving that work trail matters more than switching task systems.

How carries that same case to an observable result: Connect Jira and Bitbucket Cloud. Use the address-fix work item’s key in the branch and pull request. Reviewers follow that link from the request to the proposed change, then check the merged result.

What and limits: Bitbucket Cloud hosts Git repositories with pull-request review and Jira integration. Linking needs setup and consistent keys. Other hosts also integrate with Jira; existing workflow, plan limits and migration effort decide the fit.

Card summary describes the concept, not its fictional fixture. KO/JA preserve the same scope, conditions and caveats; overview plus visual allowance stays within 60 seconds.

Independent visualization, full localized scenario, comparison fields and evidence: [design brief](../../design-briefs/bitbucket.md). Source ledger: [verified official sources](../version-control-sources.md).
