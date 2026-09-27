---
articleId: gitea
lang: en
sourceRevision: 1
sources:
  - title: "Gitea: What is Gitea?"
    url: "https://docs.gitea.com/"
    claim: Self-hostable Git service with code review and collaboration.
    checked: "2026-09-27"
  - title: "Gitea: Backup and Restore"
    url: "https://docs.gitea.com/administration/backup-and-restore/"
    claim: >-
      Restoration involves repositories, database and configuration, with
      consistent backups.
    checked: "2026-09-27"
---

## Selection & comparison

Compare who operates the service before comparing review screens. The club chooses Gitea because it wants its own instance and can maintain it. GitLab is another self-managed option when its broader workflow fits. GitHub or an eligible Codeberg project can reduce instance operations; pull-request review exists across these choices.

## Applications

Members develop the equipment-loan app using local Git and review proposed changes on the club server. The operating boundary includes repositories, database and configuration. A separate backup copy and a restore rehearsal make recovery ownership visible. These are proposed responsibilities, not proof of a configured production service.

## Implementation & cautions

Assign access management, updates, monitoring and incident recovery. Keep backup data consistent and test restoration away from the live service. A repository clone alone misses review records and settings. Budget for hosting and operator time; before migration, verify import/export coverage for issues, pull requests, users and automation.
