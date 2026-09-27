# Mercurial: writing brief

Stable ID: `mercurial`. Leaf: [version-control-systems](../groups/version-control-systems.md). Initial revision: 1. Evidence checked 2026-09-27.

## Scope and comparison

Retain established hg tooling; distributed commits and draft/public phases with a publishing remote. Public phase is not repository visibility; non-publishing remotes may retain draft.

Peers: [Git](git.md), [Apache Subversion](subversion.md), [Perforce P4](perforce-p4.md). Related guide: tools.

## English editorial review

Why introduces the service, users and ordinary task before the deciding priority: A translation tool helps volunteers revise interface strings. Its maintainers already use hg scripts. They need to distinguish revisable work from shared history without migrating that workflow to Git.

How carries that same case to an observable result: Commit a wording fix locally as draft. Push to the team’s publishing repository: that change becomes public on both sides. Check its phase before rewriting history.

What and limits: Mercurial is distributed version control. Phases track sharing, not access permissions: public does not mean an internet-visible repository. Non-publishing remotes can exchange drafts. Git may fit better when required integrations expect Git.

Card summary describes the concept, not its fictional fixture. KO/JA preserve the same scope, conditions and caveats; overview plus visual allowance stays within 60 seconds.

Independent visualization, full localized scenario, comparison fields and evidence: [design brief](../../design-briefs/mercurial.md). Source ledger: [verified official sources](../version-control-sources.md).
