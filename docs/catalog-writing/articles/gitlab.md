# GitLab: writing brief

Stable ID: `gitlab`. Leaf: [repository-hosting](../groups/repository-hosting.md). Initial revision: 1. Evidence checked 2026-09-27.

## Scope and comparison

Leave-request app merge request connected to explicitly configured CI; source-branch versus merged-result testing; GitLab.com versus Self-Managed responsibility.

Peers: [GitHub](github.md), [Bitbucket](bitbucket.md), [Azure Repos](azure-repos.md), [Gitea](gitea.md), [Codeberg](codeberg.md). Related guide: tools.

## English editorial review

Why introduces the service, users and ordinary task before the deciding priority: An internal leave app lets staff request days off. Its developers must review a balance-rule change alongside automated checks. Keeping discussion and CI in an existing GitLab workflow matters more than adopting another host.

How carries that same case to an observable result: Open a merge request. Configured CI rules run the balance test on a runner. A failure prompts a fix and another run; a reviewer then considers merging.

What and limits: GitLab combines Git hosting, merge requests and CI. Checks need configuration and runner capacity. A merge-request pipeline tests the source branch, not automatically the merged result. Hosted use and self-operation carry different responsibilities.

Card summary describes the concept, not its fictional fixture. KO/JA preserve the same scope, conditions and caveats; overview plus visual allowance stays within 60 seconds.

Independent visualization, full localized scenario, comparison fields and evidence: [design brief](../../design-briefs/gitlab.md). Source ledger: [verified official sources](../version-control-sources.md).
