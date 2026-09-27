---
articleId: subversion
lang: en
sourceRevision: 1
sources:
  - title: Apache Subversion
    url: "https://subversion.apache.org/"
    claim: Subversion is a centralized version control system.
    checked: "2026-09-27"
  - title: "Apache Subversion: Quick Start"
    url: "https://subversion.apache.org/quick-start"
    claim: "Working copies, update, commit, conflicts and optional locking."
    checked: "2026-09-27"
---

## Selection & comparison

History lives in the central repository; a working copy is not a complete history clone. Local edits and some comparisons work offline, but recording a repository revision needs access. Compare Git or Mercurial when independent local commits matter. Retaining existing SVN scripts and permissions is this example’s reason to stay.

## Applications

An editor updates the equipment manual, changes the request instructions and commits. The second editor must update their working copy to see that revision. A conflict means reviewing competing changes, not silently replacing a colleague’s page. SVN also supports branching and optional file locks; centralization does not mean every file is locked.

## Implementation & cautions

Back up and test restoration of the repository, not only working copies. Verify server access and compatibility of existing clients and hooks. Compare text merge needs with binary-file coordination; P4 is another option when asset workflows justify it. The Git-hosting choices in the other group are not drop-in SVN servers.
