---
articleId: git
lang: en
sourceRevision: 1
sources:
  - title: "Pro Git: About Version Control"
    url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
    claim: Local and distributed history models.
    checked: "2026-09-27"
  - title: "Pro Git: Working with Remotes"
    url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes"
    claim: >-
      Fetching and pushing exchange repository data; pushing requires access and
      compatible history.
    checked: "2026-09-27"
---

## Selection & comparison

Compare history location, offline work, collaboration, file types and existing tools. Git keeps a local repository for commits and branches. Mercurial also supports distributed work; preserving an established hg workflow can outweigh migration. SVN retains central commits; P4 may fit a team already managing exclusive edits of binary assets.

## Applications

The travel site tries a museum stop on its own branch. A local commit survives closing the editor but is absent from the shared repository until a successful push. A teammate fetches it before reviewing or integrating it. Git hosting is a separate choice: these catalog hosts work with Git, not as interchangeable servers for every version control system.

## Implementation & cautions

Inspect git status and the intended branch before committing. Confirm the remote and access before pushing; reconcile diverged history rather than forcing over teammates. A Git clone does not automatically preserve hosting issues, reviews or settings. Test their export separately when changing hosts.
