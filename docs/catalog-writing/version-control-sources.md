# Version-control sources — 2026-09-27

Official documentation was opened and claim passages inspected during authoring. The examples, suitability judgments, recovery checks and migration questions are editorial, not vendor guarantees. No fixed price table, free-tier threshold or performance comparison is published. Current terms must be checked for the actual workload.

## Git

- [Pro Git: About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) — checked 2026-09-27. Local and distributed history models.
- [Pro Git: Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) — checked 2026-09-27. Fetching and pushing exchange repository data; pushing requires access and compatible history.

## Apache Subversion

- [Apache Subversion](https://subversion.apache.org/) — checked 2026-09-27. Subversion is a centralized version control system.
- [Apache Subversion: Quick Start](https://subversion.apache.org/quick-start) — checked 2026-09-27. Working copies, update, commit, conflicts and optional locking.

## Mercurial

- [Mercurial: Working with Phases](https://www.mercurial-scm.org/help/topics/phases) — checked 2026-09-27. Draft changes become public on a publishing remote; non-publishing repositories can exchange drafts.
- [Mercurial Guide](https://www.mercurial-scm.org/guide) — checked 2026-09-27. Local commits and exchange through push and pull.

## Perforce P4

- [P4: Preventing multiple checkouts](https://help.perforce.com/helix-core/server-apps/cmdref/current/Content/P4Guide/resolve.lock.exclusive.html) — checked 2026-09-27. The +l file type prevents concurrent opens; p4 lock only restricts submission.
- [P4: p4 submit](https://help.perforce.com/helix-core/server-apps/cmdref/current/Content/CmdRef/p4_submit.html) — checked 2026-09-27. Changelist submission and failure behavior.

## GitHub

- [GitHub: What is GitHub?](https://docs.github.com/en/get-started/start-your-journey/what-is-github) — checked 2026-09-27. Git hosting and collaboration around repositories.
- [GitHub: Pull requests](https://docs.github.com/en/pull-requests/reference/pull-requests) — checked 2026-09-27. Proposed branch changes can be discussed, reviewed and merged.

## GitLab

- [GitLab: Merge request pipelines](https://docs.gitlab.com/ci/pipelines/merge_request_pipelines/) — checked 2026-09-27. MR pipelines require matching CI rules and test source-branch content.
- [GitLab plans](https://docs.gitlab.com/subscriptions/choosing_subscription/) — checked 2026-09-27. GitLab.com and Self-Managed have different hosting responsibilities and plan choices.

## Bitbucket

- [Atlassian: Integrate Bitbucket and Jira](https://support.atlassian.com/bitbucket-cloud/docs/use-bitbucket-cloud-and-jira-together/) — checked 2026-09-27. Jira integration connects work items with Bitbucket Cloud development work.

## Azure Repos

- [Microsoft: What is Azure Repos?](https://learn.microsoft.com/en-us/azure/devops/repos/get-started/what-is-repos?view=azure-devops) — checked 2026-09-27. Azure Repos supports Git and TFVC; Git repositories support PRs.
- [Microsoft: Branch policies](https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops) — checked 2026-09-27. Configured branch policies can require reviewers and build validation; bypass permissions matter.

## Gitea

- [Gitea: What is Gitea?](https://docs.gitea.com/) — checked 2026-09-27. Self-hostable Git service with code review and collaboration.
- [Gitea: Backup and Restore](https://docs.gitea.com/administration/backup-and-restore/) — checked 2026-09-27. Restoration involves repositories, database and configuration, with consistent backups.

## Codeberg

- [Codeberg: What is Codeberg?](https://docs.codeberg.org/getting-started/what-is-codeberg/) — checked 2026-09-27. Nonprofit community-operated service, free-software mission and Forgejo distinction.
- [Codeberg FAQ](https://docs.codeberg.org/getting-started/faq/) — checked 2026-09-27. Project suitability and service-use constraints.
- [Codeberg: Pull requests and Git flow](https://docs.codeberg.org/collaborating/pull-requests-and-git-flow/) — checked 2026-09-27. Branch, fork and pull-request collaboration.

Source corrections: GitHub’s older about-pull-requests URL redirects to the current reference page, used here. The attempted Atlassian reference-issues page did not load; the successfully inspected integration page explicitly covers keys in branch names, commit messages and PR titles. Codeberg FAQ was checked for private content and resource policies; numeric limits are deliberately not copied into this introduction.
