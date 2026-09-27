# Apache Subversion: writing brief

Stable ID: `subversion`. Leaf: [version-control-systems](../groups/version-control-systems.md). Initial revision: 1. Evidence checked 2026-09-27.

## Scope and comparison

Existing centralized SVN repository, working copy, update and central commit. Avoid implying no local editing or universal locking.

Peers: [Git](git.md), [Mercurial](mercurial.md), [Perforce P4](perforce-p4.md). Related guide: tools.

## English editorial review

Why introduces the service, users and ordinary task before the deciding priority: An internal manual tells staff how to request equipment. Editors revise its pages through an existing SVN repository. Preserving that central workflow matters more than making local commits while disconnected.

How carries that same case to an observable result: Update a working copy, edit the request page, and inspect the difference. Commit sends it to the central repository; another editor updates to receive it. Resolve conflicting edits before retrying.

What and limits: Apache Subversion, or SVN, is centralized version control. Files can be edited offline, but committing history needs repository access. Git or Mercurial fits local commits; changing systems also means migrating tools and history.

Card summary describes the concept, not its fictional fixture. KO/JA preserve the same scope, conditions and caveats; overview plus visual allowance stays within 60 seconds.

Independent visualization, full localized scenario, comparison fields and evidence: [design brief](../../design-briefs/subversion.md). Source ledger: [verified official sources](../version-control-sources.md).
