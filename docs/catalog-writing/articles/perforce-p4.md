# Perforce P4: writing brief

Stable ID: `perforce-p4`. Leaf: [version-control-systems](../groups/version-control-systems.md). Initial revision: 1. Evidence checked 2026-09-27.

## Scope and comparison

P4 server/depot and changelist submission for a non-mergeable vehicle model; configured binary+l exclusive-open versus p4 lock. No blanket binary auto-lock claim.

Peers: [Git](git.md), [Apache Subversion](subversion.md), [Mercurial](mercurial.md). Related guide: tools.

## English editorial review

Why introduces the service, users and ordinary task before the deciding priority: A racing game team edits 3D vehicle models. Two artists’ changes to one binary model cannot be usefully merged. Coordinating exclusive edits matters more here than parallel text branches.

How carries that same case to an observable result: Set the model’s file type to binary+l. One artist opens it for editing; another open is refused. Submit the finished changelist, then the next artist syncs and edits.

What and limits: Perforce P4, formerly Helix Core, manages versioned files through a server and workspaces. Exclusive opening requires +l configuration; p4 lock alone does not prevent another open. Locks can cause waits, and server operation and licensing need planning.

Card summary describes the concept, not its fictional fixture. KO/JA preserve the same scope, conditions and caveats; overview plus visual allowance stays within 60 seconds.

Independent visualization, full localized scenario, comparison fields and evidence: [design brief](../../design-briefs/perforce-p4.md). Source ledger: [verified official sources](../version-control-sources.md).
