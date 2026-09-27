---
articleId: perforce-p4
lang: en
sourceRevision: 1
sources:
  - title: "P4: Preventing multiple checkouts"
    url: >-
      https://help.perforce.com/helix-core/server-apps/cmdref/current/Content/P4Guide/resolve.lock.exclusive.html
    claim: >-
      The +l file type prevents concurrent opens; p4 lock only restricts
      submission.
    checked: "2026-09-27"
  - title: "P4: p4 submit"
    url: >-
      https://help.perforce.com/helix-core/server-apps/cmdref/current/Content/CmdRef/p4_submit.html
    claim: Changelist submission and failure behavior.
    checked: "2026-09-27"
---

## Selection & comparison

Compare asset characteristics before choosing a system. The example uses a binary model for which merging competing edits is impractical; configured exclusive access serializes work. Git and Mercurial favor distributed local history, while SVN can also use locks. P4 is not the only locking option: existing asset tools and team workflow decide the fit.

## Applications

The vehicle model is explicitly assigned binary+l. An artist opens it, edits and submits a changelist to the depot; the next artist syncs the submitted version. This models a central P4 workflow, not every available topology. A failed submission does not prove the next artist can proceed.

## Implementation & cautions

Review the typemap for selected asset types. Distinguish +l, which restricts opening, from p4 lock, which restricts submission. Name an owner for abandoned-lock recovery and repository backups. Recheck current licensing, user limits and hosting terms for the team’s actual workload; this article makes no free-tier or price promise.
