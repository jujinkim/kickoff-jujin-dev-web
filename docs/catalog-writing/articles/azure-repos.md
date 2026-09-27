# Azure Repos: writing brief

Stable ID: `azure-repos`. Leaf: [repository-hosting](../groups/repository-hosting.md). Initial revision: 1. Evidence checked 2026-09-27.

## Scope and comparison

Azure DevOps Git repository PR and configured branch policies, distinct from TFVC support. No implied Azure runtime requirement or universal policy defaults.

Peers: [GitHub](github.md), [GitLab](gitlab.md), [Bitbucket](bitbucket.md), [Gitea](gitea.md), [Codeberg](codeberg.md). Related guide: tools.

## English editorial review

Why introduces the service, users and ordinary task before the deciding priority: A facilities app lets employees reserve meeting rooms. Its team already uses Azure DevOps and wants room-conflict fixes reviewed before entering main. Keeping that project’s permissions and checks together favors its repository service.

How carries that same case to an observable result: Push a Git branch and open a pull request. In this example, main requires reviewer approval and build validation. A failed booking test holds up completion; after a fix, required checks and review permit merging.

What and limits: Azure Repos provides repositories in Azure DevOps. These are configured Git branch policies, not automatic guarantees. Bypass permissions matter. Azure Repos also supports TFVC; hosting code here does not require running the app on Azure.

Card summary describes the concept, not its fictional fixture. KO/JA preserve the same scope, conditions and caveats; overview plus visual allowance stays within 60 seconds.

Independent visualization, full localized scenario, comparison fields and evidence: [design brief](../../design-briefs/azure-repos.md). Source ledger: [verified official sources](../version-control-sources.md).
