# Gitea: writing brief

Stable ID: `gitea`. Leaf: [repository-hosting](../groups/repository-hosting.md). Initial revision: 1. Evidence checked 2026-09-27.

## Scope and comparison

Self-operated club Git service: repositories, database/configuration, permissions, updates and tested backups. Do not imply software license removes operating costs.

Peers: [GitHub](github.md), [GitLab](gitlab.md), [Bitbucket](bitbucket.md), [Azure Repos](azure-repos.md), [Codeberg](codeberg.md). Related guide: tools.

## English editorial review

Why introduces the service, users and ordinary task before the deciding priority: A club’s equipment-loan app records who borrowed cameras. Its developers want the code repository on their own server and have an operator. Control of that service matters more than avoiding maintenance work.

How carries that same case to an observable result: Members push to the club’s Gitea server and review changes there. The operator manages access, updates and backups. A restore exercise checks repositories, database and configuration together.

What and limits: Gitea is self-hostable Git collaboration software. The club operates this instance; hosting software does not remove server costs or recovery work. GitLab can also be self-operated. A managed host fits when nobody can own maintenance.

Card summary describes the concept, not its fictional fixture. KO/JA preserve the same scope, conditions and caveats; overview plus visual allowance stays within 60 seconds.

Independent visualization, full localized scenario, comparison fields and evidence: [design brief](../../design-briefs/gitea.md). Source ledger: [verified official sources](../version-control-sources.md).
