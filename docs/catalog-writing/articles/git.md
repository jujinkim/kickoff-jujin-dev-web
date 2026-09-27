# Git: writing brief

Stable ID: `git`. Leaf: [version-control-systems](../groups/version-control-systems.md). Initial revision: 1. Evidence checked 2026-09-27.

## Scope and comparison

Distributed local history and branches, commit versus push, and a separate hosting choice. Compare existing hg/SVN workflows and binary locking needs without prescribing migration.

Peers: [Apache Subversion](subversion.md), [Mercurial](mercurial.md), [Perforce P4](perforce-p4.md). Related guide: tools.

## English editorial review

Why introduces the service, users and ordinary task before the deciding priority: A travel website lets friends arrange daily stops. Its developers need separate experiments while offline. They want local history and Git-compatible hosting; keeping existing SVN tooling would favor Subversion instead.

How carries that same case to an observable result: Commit a new stop on a local branch. The remote still lacks it. Push that branch when connected, then a teammate fetches it. Check both histories; a rejected push needs reconciliation.

What and limits: Git is a distributed version control system. Commit records locally; push shares with another repository. GitHub and other hosts add collaboration around Git. Conflicts still need judgment.

Card summary describes the concept, not its fictional fixture. KO/JA preserve the same scope, conditions and caveats; overview plus visual allowance stays within 60 seconds.

Independent visualization, full localized scenario, comparison fields and evidence: [design brief](../../design-briefs/git.md). Source ledger: [verified official sources](../version-control-sources.md).
